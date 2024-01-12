import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b6570117f8544f7c9d69cba538d28486'
    }
})