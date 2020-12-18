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

async function readData() { 
    try {
     const result = fs.readFileSync(path.join(__dirname + '../../userdata.json'), 'utf8', (err, data) => {
        if(err) return res.status(400).json({
            error: 'failed to write data'
        });
 
        return data;
     });
 
     return JSON.parse(result);
    } catch (error) {
        return res.status(400).json({
            error
        });
    }
}


//GET USER DETAILS
exports.getUserDetails = async (req, res) => {
    // const { buildDate } = req.headers;
    try {
        const userDetails = await readData();
        return res.json(userDetails);
    } catch (error) {
        return res.status(400).json(error);
    }
}

//ADD USER DETAILS
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


//GET METADATA FROM SERVER (BUILD FOLDER)
exports.getMetaData = (req, res) => {
    const metaDataPath = path.join(__dirname + '../../../client/build/meta.json');
    const metaData = fs.readFileSync(metaDataPath, 'utf8',(error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        return data;
    });
    console.log(JSON.parse(metaData))
    return res.json(JSON.parse(metaData));
}