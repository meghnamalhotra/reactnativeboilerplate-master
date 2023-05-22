#!/usr/bin/env node

console.log("This is post init script");

const fs = require('fs');

fs.writeFile(".npmrc", "; this is a config file for npm since some react-native libraries are outdated and causing peer dependency issue \nlegacy-peer-deps=true", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(".npmrc created!");
}); 