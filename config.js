const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~5MRSzDYT#wQnV7-MMqoUTeY9EXEBTFsTIROrxNQYYT1Nj3A7Z1TA'
};
