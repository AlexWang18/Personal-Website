const config = require('../utils/config')

const express = require('express')
const router = express.Router()

const spotifyWebApi = require('spotify-web-api-node')
const Song = require('../models/song')

const client = config.SPOTIFY_CLIENT //process env variables not working when running by itself i think
const secret = config.SPOTIFY_SECRET

const spotify = new spotifyWebApi({
  clientId: client,
  clientSecret: secret
})

//spotify.setClientId('9f43ee40f58f4ecaaddfad9dfb7d3682')
//spotify.setClientSecret('8b6b9b41820145eaa5d95d5b724bdb6b')

spotify.clientCredentialsGrant().then(
  function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotify.setAccessToken(data.body['access_token']);
  },
  function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);
spotify.setAccessToken('BQB62QuckE5YXS-zui7CZykLRIgT1_c-XQ0OLYyFW56ZY2Eyc8xSzb8y7kXzgET6UQYIaMEOuDQImoQLVBg')

const initSongs = async () => {
  await spotify.getPlaylistTracks('17ikjm0CJRR1vTFXovJ1BS').then(data => { //first 100 of bop
    Song.deleteMany({})
    data.body.items.forEach(s => {
      Song.create(
        {
          name: s.track.name,
          artist: s.track.artists.map(a => a.name),
          url: s.track.external_urls.spotify,
          preview: s.track.preview_url,
          image: s.track.album.images[0].url
        }
      )
    })
  })
}

router.get('/', async (req, res) => {
  const songs = await Song.find({})
  res.json(songs)
  //preLinks = data.body.items.map(s => s.track.preview_url)
  //console.log(preLinks)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const songs = await Song.find({})
  res.json(songs[id])
})


//spotify.getUser('5516771eusq1gh498gt0dxuel').then(res => console.log(res))



module.exports = router
