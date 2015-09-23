"use strict";

var crypto = require('crypto')

// Returns a 4-byte integer generated by hashing the mac address with the date and a salt
module.exports = function hashMacAddress (macAddress, date) {
    return new Buffer(crypto.createHash('sha256')
                        .update(macAddress + date.toISOString().slice(0, 10) + 'ants')
                        .digest())
                .readUInt32LE(0)
}
