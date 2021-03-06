const express = require("express");
const bodyParser = require("body-parser");
const { use } = require("express/lib/application");



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    console.log(today.month);
    res.render("list", { day: day });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
})

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
