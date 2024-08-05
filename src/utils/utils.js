const { to: awaitTo } = require('await-to-js'); // Rename to avoid conflict with existing declaration
const MomentRange = require('moment-range');
const mongoose = require('mongoose');
const Moment = require('moment');
const moment = MomentRange.extendMoment(Moment);
const CONFIG = require('../../config/config');

const sendResponse = (res, status, message = '', data = null, errors = []) => {
    let errList = [];
    if (typeof errors === 'object' && errors.message) {
        errList.push({ message: errors.message, key: null });
    }
    if (typeof errors === 'string') {
        errList.push({ message: errors, key: null });
    }
    return res.status(status).json({
        success: !(status > 300),
        message,
        data,
        errors: errList.length ? errList : errors,
    });
};


// Removed redundant 'to' function declaration

const TE = function (err_message) { // TE stands for Throw Error
    throw new Error(err_message);
};

const randomString = (length, chars = 'aA#') => {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (let i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
};


const validateIsExpired = (inputDate, hours) => {
    let diffHours = moment().diff(moment(inputDate), 'hours', true);
    return !(diffHours <= hours);
};

const currentDate = () => moment().toDate();

const paginationWrapper = (page, size) => {
    const limit = size ? +size : CONFIG.PAGINATION_SIZE;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};

const removeJSONKey = (obj, keys) => {
    keys.forEach(key => delete obj[key]);
};

module.exports = {
    sendResponse,
    to: awaitTo, // Rename back to 'to' if necessary
    TE,
    randomString,
    validateIsExpired,
    currentDate,
    paginationWrapper,
    removeJSONKey
};
