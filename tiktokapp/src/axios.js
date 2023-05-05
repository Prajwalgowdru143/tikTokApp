import axios from "axios";

const instance = axios.create({
    baseURL:"https://tiktok-app-red.vercel.app/"
});

export default instance;
