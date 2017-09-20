#!/usr/bin/env node 
var co = require('co'); 
var prompt = require('co-prompt');
var program = require('commander');
var Kavenegar = require('Kavenegar');

console.log("welcome to kavenegar cli ")
 program
.arguments('<apikey>')
 .option('-t , --template <template>', 'The token to use ')
 .option('-m, --token <token>', 'The token to set')
 .option('-n, --number <number>', 'your phone number')	
 .action(function(api) {
	 
      console.log('Your api key is : %s &  template: %s & token: %s & number: %s', 
	 api, program.template, program.token , program.number);
	var api = Kavenegar.KavenegarApi({
    apikey: api
});
api.VerifyLookup({
       receptor: program.number,
    token: program.token ,
    template: program.template
    },
    function(response, status) {
        console.log(response);
        console.log(status);
});
})
  .parse(process.argv);
