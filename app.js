const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;
const app = express();
const https = require(https);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", (req,res)=>{
     const fName= req.body.fName;
     const lName = req.body.lName;
     const email = req.body.email;
     
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
     };

     const jsonData = JSON.stringify(data);
    https.request("https://maichimp.com" , options, ()=>{

    });

});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
// 1f2b835940b7b5411b2f6430feaaa0ab-us11
