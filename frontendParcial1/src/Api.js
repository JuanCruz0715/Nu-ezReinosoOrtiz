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
<<<<<<< HEAD
export const getMaps = async () => {
  const url = "/Maps";
  const response = await instance.get(url);
  return response.data.data;
};

=======

export const getMaps = async () => {
  const url = "/maps";
  const response = await instance.get(url);
  return response.data.data;
};
>>>>>>> 8a89deb6e8b39f48cff3b0b9826532f376fed8bc




