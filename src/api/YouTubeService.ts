import axios from "axios";

const API_BASE_URL = 'http://localhost:8080' ;

export const fetchComments = async() =>{
    try{
        const response =await axios.get(`${API_BASE_URL}/api/comments`);
        return response.data;
    }catch(error){
        console.error(error);
        return [];
    }
}; 