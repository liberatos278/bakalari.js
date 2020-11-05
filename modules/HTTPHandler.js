'use strict';

const fetch = require('node-fetch');

class HTTPHandler {
    async getData(url, access_token, moduleName) {
        let res = await fetch(`${url}/api/3/${moduleName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${access_token}`
            }
        })
        let data = await res.json()
        return data
    }
};

module.exports = HTTPHandler;