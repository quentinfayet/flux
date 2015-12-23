var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'Kq7u1UXvRGdmYHManfRFcaQSt',
    consumer_secret: 'rWhhCvKYJfNadKQ52NUPsqQdLQEhbo9dXsJsyCKBctCsO4ayai',
    access_token_key: '353250319-WwuwHGyWEJPpfySRNT0yv4QvZLmGwxhTEIiBWGns',
    access_token_secret: 'R2mGsNZV8bQvJ2EIzchLlrFAGmANss0woyet5AqquZgIQ',
});

/**
 * Stream statuses filtered by keyword
 * number of tweets per second depends on topic popularity
 **/
client.stream('statuses/filter', {track: 'docker'},  function(stream){
    stream.on('data', function(tweet) {
        console.log(tweet);
    });

    stream.on('error', function(error) {
        console.log(error);
    });
});