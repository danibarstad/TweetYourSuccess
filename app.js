require('dotenv').config();

const Twitter = require('twitter-v2');

const client = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_SECRET,
});

// const { data } = await client.get('tweets', { ids: '1228393702244134912' });
// console.log(data);

const params = {
    status: 'This is a test tweet using the Twitter API.'
}

client.post('statuses/update', params, function(err, tweet, res) {
    if(err) throw err;    
})