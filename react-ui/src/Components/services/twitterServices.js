const Twitter = require('twitter')
const needle = require('needle')

const client = new Twitter({ //still not working
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_KEY,
    access_token_secret: process.env.ACCESS_SECRET,
    request_options: {
        proxy: 'https://cors-anywhere.herokuapp.com'
    }
})
const bearer = 'AAAAAAAAAAAAAAAAAAAAAEOSKwEAAAAAeR6bimq0lwh0eKjtFbiCLagAtiw%3DOQ2zKb903TXNWeAWM4IgXzGY9e8G78FX8Ke572YBzKOlthAjsy'
const endpointUserURL = "https://api.twitter.com/2/users/by?usernames="
const endpointTweetURL = "https://api.twitter.com/2/tweets?ids="

const getUserId = async (userName) => {
    const params = {
        username: userName,
        //"user.fields": "created_at, description"
    }

    const res = await needle('get', endpointUserURL, params, {
        headers: {
            "authorization": `Bearer ${bearer}`
        }
    })
    if(res.body) return res.body
}


async function getLatest() {

    const params = {
        "ids": getUserId('notPaff'), // Edit Tweet IDs to look up
        "tweet.fields": "lang,author_id", // Edit optional query parameters here
        "user.fields": "created_at" // Edit optional query parameters here
    }

    const res = await needle('get', endpointTweetURL, params, {
        headers: {
            "authorization": `Bearer ${bearer}`
        }
    })

    if (res.body) {
        return res.body;
    } else {
        throw new Error('Unsuccessful request')
    }
}

/*const getLatestTweets = async (userName) => {

    const params = {
        screen_name: userName
    }
    try {
        const tweets = await client.get(`statuses/usertimeline`, params)
        console.log(tweets)
    }
    catch (err) {
        console.log(err)
    }
} */

//export { getLatest,}