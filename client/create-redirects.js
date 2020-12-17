const fs = require("fs");

fs.writeFile("./public/_redirects", "/*    /index.html  200", function (error) {
    if(error) {
        console.log(error);
    }
});