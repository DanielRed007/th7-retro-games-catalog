import axios from "axios";

const apiInstance = axios.create();

const options = {
	withCredentials: false,
	headers: {
		"Content-Type": "application/json"
	},
	cache: "default"
};

export const getApi = async (url:string) => {
    return await apiInstance.get(url,options);
};