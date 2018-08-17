module.exports = {
    apiPath: {
        local: {
            host: 'http://localhost:3000' + (process.env.BASE_URL || ''),
            getNews: {
                method: 'post',
                url: '/news/getnews'
            }
        }
    }
}
