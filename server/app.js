const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create-session", (req, res) => {
  // Get the first object from the array
  const [sessionData] = req.body;
  
  // Destructure the properties from the object
  const { emails, time, timezone, date, name } = sessionData;
  
  // Split the emails string into an array of individual emails
  const emailList = emails.split(',').map(email => email.trim());
  
  console.log('Session Details:');
  console.log('Emails:', emailList);
  console.log('Time:', time);
  console.log('Timezone:', timezone);
  console.log('Date:', date);
  console.log('Name:', name);
  
  res.send({
    "Session created": true,
    "details": {
      emails: emailList,
      time,
      timezone,
      date,
      name
    }
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
