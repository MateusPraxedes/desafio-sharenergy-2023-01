import axios from "axios";

const ApiRandomUser = axios.create({
   baseURL: "https://randomuser.me",
  })


 const apiRandomCats =  "https://http.cat";

 const apiRandomDogs = axios.create({ baseURL: "https://random.dog"})


 const Apicustomers = axios.create({
  baseURL: "http://localhost:3001/",
  
  })





export default {
  ApiRandomUser: ApiRandomUser,
  apiRandomCats: apiRandomCats,
  apiRandomDogs: apiRandomDogs,
  Apicustomers: Apicustomers
}




// export default  apiRandomCats,ApiRandomUser;
