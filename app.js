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
const status = `After ${duration}, I have finally received my first job offer in tech! ` +
                `I'm so excited to be starting at ${company} as a ${position}!`

const params = {
    status: status
}

if (status.length <= 240) {
    client.post('statuses/update', params, function(err, tweets, res) {
        if(err) throw err;
        console.log(tweets);
        console.log(res);
    })
} else {
    console.log(`Character Count: ${status.length}`)
}