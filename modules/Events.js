'use strict';

const HTTPHandler = require('./HTTPHandler');


class Events extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'events')
    }
}

module.exports = Events