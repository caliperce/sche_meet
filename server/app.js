const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const { refine_properties, getShortLink } = require("./sesh-create.js");

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create-session", async (req, res) => {
  try {
    // Get the first object from the array
    const [sessionData] = req.body;
    
    // Destructure the properties from the object
    const { emails, time, timezone, date, name } = sessionData;
    
    // Split the emails string into an array of individual emails
    const emailList = emails.split(',').map(email => email.trim());
    
    // First, get the refined properties
    const refinedData = refine_properties(emails, time, timezone, date, name);
    
    // Then, get the short link using the refined data
    const shortLink = await getShortLink(refinedData);
    
    // Send back the response with all the information
    res.send({
      "Session created": true,
      "details": {
        emails: emailList,
        time,
        timezone,
        date,
        name
      },
      "shortLink": shortLink
    });
  } catch (error) {
    // If anything goes wrong, send an error response
    res.status(500).send({
      "error": "Failed to create session",
      "message": error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
