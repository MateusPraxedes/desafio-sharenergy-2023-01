import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/auth";


// foto do usuário, nome completo, email, username e idade

const Radomusers = () => {
  const { users, getUsers }: any = useContext(AuthContext);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    getUsers();
  }, [])
  
  const filteredUsers = users.filter((user : any) => user.name.first.concat(" ", user.name.last).toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.login.username.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
    <form className="flex items-center justify-center my-6 ">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-96">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>  
        <input type="text" id="simple-search" value={search} onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"   required />
    </div>
    
</form> 
 
<div className="flex flex-wrap gap-1 my-6">
  {
    filteredUsers.map((user: any, index : any) => (
      <div key={index} className="w-full md:w-1/4  md:bg-zinc-400 flex flex-col items-center justify-center mx-auto overflow-hidden rounded-xl my-4">
        <img
          className="rounded-full mx-auto md:rounded-none md:w-full md:h-auto  overflow-hidden"
          src={user.picture.large}
          alt=""
        />
        <div className="  text-white  w-full   space-y-4   overflow-hidden ">
          <div className="font-medium w-full text-xs text-center sm:text-sm">
            <span className="block ">{`${user.name.first} ${user.name.last} `}</span>
            <span className="block">{user.email}</span>
            <span className="block">{user.login.username}</span>
            <span className="block">{`${user.dob.age} years`}</span>
          </div>
        </div>
      </div>
    ))
   }
</div>





    </>
  );
};

export default Radomusers;
