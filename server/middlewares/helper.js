const path = require('path');
const fs = require('fs');


const metaData = path.join(__dirname + '../../../client/build/meta.json');

//Getting meta.json (buildDate)
function getData() {
    const metaInfo = fs.readFileSync(metaData, 'utf8',(error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        return data;
    });

    return metaInfo;
}

//Adding builddate stored on server to the req headers
exports.getBuildTime = async (req, res, next) => {
    try {
        const metaData = await JSON.parse(getData());
        // console.log(metaData)
        req.headers.buildDate = metaData.buildDate;
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: error.errors
        });
    }
}


//Check for buildDate on Every Request
exports.checkBuildDate = (req, res, next) => {
    const { clientbuilddate , buildDate } = req.headers;

    if(Number(clientbuilddate) !== buildDate) {
        return res.status(403).json({
            message: 'you are using old version, please update to continue'
        });
    }
    else{
        next();
    }
}