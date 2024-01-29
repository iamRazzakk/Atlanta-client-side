import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://atlanta-ten.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;