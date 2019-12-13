const axios = require('axios');

const fetchData = () => {
    return axios
        .get('https://api.eosnewyork.io/v1/chain/get_info')
        .then(response => {
            return response.data
        }
    )
}

exports.fetchData = fetchData;