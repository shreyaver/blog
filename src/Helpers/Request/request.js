import Axios from "axios";

const getRequest = (url) => Axios.get(url);

export default getRequest;