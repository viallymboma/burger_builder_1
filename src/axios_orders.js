import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burgerbuilder-74d46-default-rtdb.firebaseio.com/'
})

export default instance;