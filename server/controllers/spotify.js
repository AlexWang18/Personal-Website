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

const initSongs = async () => {
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

  await spotify.getPlaylistTracks('17ikjm0CJRR1vTFXovJ1BS').then(data => { //first 100 songs of playlist
    Song.deleteMany({})
    data.body.items.forEach(s => {
      Song.create(
        {
          name: s.track.name,
          artist: s.track.artists.map(a => a.name),
          url: s.track.external_urls.spotify,
          preview: s.track.preview_url,
          image: s.track.album.images[1].url
        }
      )
    })
  })
}

const starterDate = '2021-01-13T18:34:13.472043' // hard code in for now

router.get('/sotd', async (req, res) => {
  const date = new Date().toISOString()
  const day = parseInt(date.substring(8, 10)) - parseInt(starterDate.substring(8, 10))

  const songs = await Song.find({})
  res.json(songs[day])
})

router.get('/', async (req, res) => {
  const songs = await Song.find({})
  res.json(songs)
})


router.get('/:id', async (req, res) => {
  const id = req.params.id
  const songs = await Song.find({})
  res.json(songs[id])
})


module.exports = router
