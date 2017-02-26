var express = require('express');
var router = express.Router();

var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var text_to_speech = new TextToSpeechV1({
    username: 'e71ff42c-7e7b-46f1-9ea5-fabb26bd44b8',
    password: 'X1KOx8KndGEb'
  });

  var params = {
    text: 'Hello from IBM Watson',
    voice: 'en-US_AllisonVoice', // Optional voice
    accept: 'audio/ogg; codec=opus'
  };

// Pipe the synthesized text to a file
  text_to_speech.synthesize(params).pipe(fs.createWriteStream('helloWorld.wav'));
});

module.exports = router;
