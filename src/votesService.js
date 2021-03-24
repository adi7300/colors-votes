import axios from 'axios'
export const votesService = {
    query,
    incVote
}

async function query() {
    try {
        const votes = await axios.get('http://localhost:3030/api/vote')
        return votes.data
    }
    catch (err) {
        console.log("Error from server", err)
    }
}

function incVote(updatedColor) {
    return axios.put('http://localhost:3030/api/vote', updatedColor)
}