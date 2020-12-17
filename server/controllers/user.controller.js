const path = require('path');
const fs = require('fs');


async function writeData(userdata) {
   //Serialize JSON 
   const data = JSON.stringify(userdata, null, 2);  
   try {
    const result = fs.writeFileSync(path.join(__dirname + '../../userdata.json'), data, 'utf8', (err, data) => {
       if(err) return res.status(400).json({
           error: 'failed to write data'
       });

       return data;
    });

    return result;
   } catch (error) {
       return res.status(400).json({
           error
       });
   }
}


exports.getUserDetails = (req, res) => {
    const { buildDate } = req.headers;

    return res.send({
        "username": "John Doe",
        "email": "john@gmail.com",
        "buildTime": buildDate
    });
}


exports.addUserDetails = async(req, res) => {
    try {
        const { email , password } = req.body;
        const userData = {
            email,
            password
        };

        await writeData(userData);
        return res.json({
            message: 'data saved successfully.'
        });

    } catch (error) {
        return res.status(400).json(error);
    }
}