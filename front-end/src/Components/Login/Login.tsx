import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/auth";


const Login = () => {

  useEffect(() => {
    localStorageLogin()
  }, [])


  const navigate = useNavigate();


  const { login, setLogin }: any = useContext(AuthContext);

  const localStorageLogin = () => {
    localStorage.getItem('login') ? setLogin(JSON.parse(localStorage.getItem('login') || '{}')) : localStorage.setItem('login', JSON.stringify(login));
  }



  const handleChage = (event: any) => {
    const { name, value } = event.target;

    if (name === 'remember') {
      setLogin({ ...login, [name]: event.target.checked ? 'on' : 'off' });

    } else {
      setLogin({ ...login, [name]: value });
    }

  }


  const handleCheckBox = (event: any) => {
    if (event.target.checked) {
      localStorage.setItem('login', JSON.stringify(login));
    } else {
      localStorage.removeItem('login');
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (login.username === 'desafiosharenergy' && login.password === 'sh@r3n3rg') {
      navigate('/randomUsers');

    } else {
      alert('Email ou senha incorretos');
    }
    setLogin({ ...login, username: '', password: '' });
  }

  return (
    <>
      <div className="text-white flex flex-col items-center justify-center w-full h-screen">
        <form >


          <div className="">
            <label htmlFor="username">Username</label>
            <input className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="username" id="username" value={login.username} onChange={handleChage} />
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="password" name="password" id="password" value={login.password} onChange={handleChage} />
          </div>

          <span className="flex justify items-center mb-6 my-2">
            <input onClick={handleCheckBox} type="checkbox" name="remember" id="remember" className=" h-4 w-4 border border-gray-300 rounded-sm bg-white mt-1 align-top bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer" onChange={handleChage} />
            <label htmlFor="remember">Remember me</label>
          </span>

          <button onClick={handleSubmit} className="block w-full px-4 py-2 my-3 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>


        </form>

      </div>

    </>
  )
}

export default Login