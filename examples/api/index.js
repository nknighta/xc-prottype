const axios = require("axios");

const apiInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    timeout: 1000,
    headers: { "content-Type": "application/json" }
})

    apiInstance.get('/api')
        .then(function (response) {
            console.log(response.data);
        })
