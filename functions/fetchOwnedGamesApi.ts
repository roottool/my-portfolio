import axios from 'axios'

exports.handler = (_event, _context, callback) => {
  const apiKey = process.env.REACT_APP_STEAM_API_KEY
  const steamId = process.env.REACT_APP_STEAM_USER_ID
  const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&include_appinfo=1`

  axios
    .get(url)
    .then((response) => {
      callback(null, {
        body: JSON.stringify(response.data),
        statusCode: 200,
      })
    })
    .catch((error) => callback(null, { body: String(error), statusCode: 422 }))
}
