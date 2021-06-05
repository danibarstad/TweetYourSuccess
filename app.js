require('dotenv').config();

const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

const params = {
    status: 'This is a test tweet using the Twitter API.'
}

client.post('statuses/update', params, function(err, tweets, res) {
    if(!err) {
        console.log('success!)')
    }   
})

// var params = { screen_name: 'danibarstad' };
// client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });