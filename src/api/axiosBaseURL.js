import axios from 'axios';
const axiosBaseURL = new axios({
    baseURL : '',
    withCredentials : true
})

export default axiosBaseURL;