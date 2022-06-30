const mongoose = require('mongoose');

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const valid = function (value) {

    if (typeof (value) === 'undefined' || value === null) return false
    // if(typeof (value) !== "string") return false 
    if (typeof (value) === "string" && value.trim().length == 0) return false

    return true
}

let isREgexName = function (attribute) {
    return (/^[a-zA-Z]{2,20}$/.test(attribute.trim()))
}

let regexFullname = function (attribute) {
    return (/^[A-Za-z\s]{1,}[\,]{0,1}[A-Za-z\s]{0,}$/.test(attribute.trim()))
}


const regexIntern = function (name) {
    let regex = /^[A-z]*$|^[A-z]+\s[A-z]*$/

    return regex.test(name)
}

const isvalidEmail = function (gmail) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   //.test(gmail);
    return regex.test(gmail)
}


const moblieRegex = function (mobile) {
    let regex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    return regex.test(mobile)
}

module.exports = { valid, isValidRequestBody, isREgexName, regexFullname, isvalidEmail, moblieRegex, regexIntern }