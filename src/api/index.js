import axios from "axios"

export const api = axios.create({
    baseURL:"http://localhost:5000/api"
})

const callApi = (endpoint) => {
    return{
        //GET
        //baseURL (http://localhost:5000/api) + endpoint (/stations)
        getItems() {
            return api.get(endpoint)
                .then(res => Promise.resolve(res.data))
                .catch(err => Promise.reject(err))
        }
    }

            
}

export default callApi