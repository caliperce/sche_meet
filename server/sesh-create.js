const axios = require("axios");
const squadcastfm = require("@api/squadcastfm");
const { format } = require('date-fns');
require('dotenv').config();

// Make sure the auth token is loaded
if (!process.env.SQUADCAST) {
    console.error('SQUADCAST environment variable is not set!');
    process.exit(1);
}

squadcastfm.auth(process.env.SQUAD_CAST_AUTH);

const refine_properties = (emails, time, timezone, date, name) => {
   return data={
    date: format(new Date(date), 'yyyy-MM-dd'),
    sessionTitle: name,
    startTime: time.length === 4 ? `0${time.replace(/ [ap]m/i, ":00 " + time.slice(-2).toUpperCase())}` : time.replace(/ [ap]m/i, ":00 " + time.slice(-2).toUpperCase()),
    endTime: time.length === 4 ? `0${time.replace(/ [ap]m/i, ":25 " + time.slice(-2).toUpperCase())}` : time.replace(/ [ap]m/i, ":25 " + time.slice(-2).toUpperCase()),
    stage: emails.split(',').length >= 2 ? [emails] : emails.split(',')[0].trim(),
    videoEnabled: true,
    timeZone: timezone
   }
}
// Handle the Promise properly to get the shortLink
async function getShortLink(refinedData) {
  try {
    const { data } = await squadcastfm.postV2Sessions(refinedData);
    return data.stage[0].inviteLinks.shortLink;
  } catch (err) {
    console.error('Error getting short link:', err);
    throw err;
  }
} 

// Example usage:
// getShortLink(a).then(shortLink => console.log(shortLink));

module.exports = {
    refine_properties,
    getShortLink
}

