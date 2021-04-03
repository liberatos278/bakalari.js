'use strict';

const HTTPHandler = require('./HTTPHandler');


class Marks extends HTTPHandler {
    constructor() {
        super();
    };
    async get({ url, access_token }) {
        return this.getData(url, access_token, 'marks')
    }
}

module.exports = Marks