require('dotenv').config();

const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

const duration = ''
const company = ''
const position = ''

const params = {
    status: `After ${duration}, I have finally received my first job offer in tech! ` +
            `I'm so excited to be starting at ${company} as a ${position}!`
}

client.post('statuses/update', params, function(err, tweets, res) {
    if(err) throw err;
    console.log(tweets);
    console.log(res);
})