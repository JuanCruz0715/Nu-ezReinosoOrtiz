import axios from "axios";
const instance = axios.create({
  baseURL: "https://valorant-api.com/v1",
});
export  const getAgentes = async() => {
    const url = "/agents"
    const response = await instance.get(url);
    return response.data.data;

} 

export const getGuns = async () => {
    const url = "/weapons" 
    const response = await instance.get(url);
    return response.data.data;
   

}






