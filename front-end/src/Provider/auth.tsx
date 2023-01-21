import { createContext, useContext, useEffect, useState } from "react";
import Api from "../services/api";
export const AuthContext = createContext({});

const { ApiRandomUser, apiRandomCats, apiRandomDogs, Apicustomers } = Api;


export const AuthProvider = (props: any) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember: "off",
  });

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await ApiRandomUser.get("/api/?results=50");
    const data = response.data;
    setUsers(data.results);
  };

  const [cats, setCats] = useState("");
  const [status, setStatus] = useState("");
  const [test, setTest] = useState("");
  const [dogs, setDogs] = useState("");
  const [customers, setCustomers] = useState([]);

  const getCats = async (statusCode: String) => {
    setStatus(`${apiRandomCats}/${statusCode}`);
  };



  const getDogs = async () => {
    const response = await apiRandomDogs.get("woof.json");

    if (response.data.url.match(/\.mp4/) || response.data.url.match(/\.webm/)) {
      getDogs();
    } else {
      setDogs(response.data.url);
    }
  };

  const getCustomers = async () => {
    const response = await Apicustomers.get("custumer");
    setCustomers(response.data);
  }


  const addCustomers = async (nome: string, email: string, telefone: string, rua: string, bairro: string, cidade: string, cpf: string) => {
    const response = await Apicustomers.post("custumer", {
      nome,
      email,
      telefone,
      rua,
      bairro,
      cidade,
      cpf
    });
    console.log(response.data);

  }


  const updateCustomers = async (id: String, nome: string, email: string, rua: string, bairro: string, cidade: string, cpf: string) => {
    const response = await Apicustomers.put(`custumer/${id}`, {
      nome,
      email,
      rua,
      bairro,
      cidade,
      cpf
    });

    console.log(response.data);

  }

  const deleteCustomers = async (id: String) => {
    const response = await Apicustomers.delete(`custumer/${id}`);
    console.log(response.data);
  }




  return (
    <AuthContext.Provider
      value={{
        login,
        setLogin,
        users,
        setUsers,
        getUsers,
        cats,
        setCats,
        getCats,
        status,
        setStatus,
        test,
        getDogs,
        dogs,
        customers,
        setCustomers,
        getCustomers,
        updateCustomers,
        addCustomers,
        deleteCustomers

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
