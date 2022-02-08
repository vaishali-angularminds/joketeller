import axios from "axios";

const authAxios= axios.create({
  baseURL:'https://v2.jokeapi.dev/joke/Any',
  
})
export default authAxios;