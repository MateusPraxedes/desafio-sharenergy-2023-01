
import { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext} from '../../Provider/auth';



const Customers = () => {

    const { getCustomers, customers, setCustomers, updateCustomers, addCustomers , deleteCustomers}: any = useContext(AuthContext);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isEditFormVisible, setIsEditFormVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [updateCustomer, setUpdateCustomer]: any = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [addCustomer, setAddCustomer] = useState({ nome: "", email: "", telefone: "" , rua: "", bairro: "", cidade: "", cpf: "" });
    
    useEffect(() => {
        getCustomers();
    });


    const handleEditClick = (e: React.MouseEvent<HTMLElement>) => {
        setIsEditFormVisible(true);
       const id = e.currentTarget.dataset.id;
        const findcustomer = customers.find((customer: any) => customer.id === id);
        setUpdateCustomer(findcustomer);

    };

    const handleUpdate = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        
        try{
            updateCustomers(updateCustomer.id, updateCustomer.nome, updateCustomer.email, updateCustomer.rua, updateCustomer.bairro, updateCustomer.cidade, updateCustomer.cpf);
            getCustomers();
            setIsEditFormVisible(false);
         
        }
            catch(error){
                console.log(error)
            }
    
        };

    
        


    const handleChange = (e: any) => {

        const { name, value } = e.target;

        if(e.target.form.name === "addCustomer"){
            setAddCustomer({ ...addCustomer, [name]: value });
        }
        
        if(e.target.form.name === "updateCustomer"){
            setUpdateCustomer({ ...updateCustomer, [name]: value });
        }

    };


    const handleAdd = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        try{
            addCustomers(addCustomer.nome, addCustomer.email, addCustomer.telefone, addCustomer.rua, addCustomer.bairro, addCustomer.cidade, addCustomer.cpf);
            getCustomers();
            setIsFormVisible(false);
        }
        catch(error){
            console.log(error)
        }
    
        setIsFormVisible(false);
        setAddCustomer({ nome: "", email: "", telefone: "" , rua: "", bairro: "", cidade: "", cpf: "" });

    };
            

    const handleCancel = (e : any) => {
        e.preventDefault();
        if(e.target.form.name === "addCustomer"){
            setIsFormVisible(false);
        }
        if(e.target.form.name === "updateCustomer"){
            setIsEditFormVisible(false);
            
        } }

        const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();

            const id = e.currentTarget.dataset.id;
            try{
                deleteCustomers(id);
                getCustomers();
            }
            catch(error){
                console.log(error)
            }
            
        }







    
    const filteredUsers = customers.filter((customer: any) => customer.nome.toLowerCase().includes(search.toLowerCase()) || customer.email.toLowerCase().includes(search.toLowerCase()))


    return (

        <>


            <div className=''>
                <form className={`flex items-center justify-center my-2 ${isEditFormVisible || isFormVisible ? "hidden" : null} `}>
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-96">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" value={search} onChange={(e) => setSearch(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </div>


                </form>

                <div className={`bg-blue-600 text-white py-2 px-4 rounded my-auto  fixed ${isEditFormVisible || isFormVisible ? "hidden" : null}  `} >
                    <button onClick={() => setIsFormVisible(!isFormVisible)} className={`${isEditFormVisible ? "hidden" : null}`}>New</button>

                </div>


            </div>

            {isEditFormVisible ?
                <div className="text-white flex flex-col items-center justify-center w-full h-screen">
                    <form name='updateCustomer' className=" p-4">
                        <div className="">
                            <label htmlFor="name">Nome</label>
                            <input value={updateCustomer.nome} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="nome" id="email" />
                        </div>

                        <div className="">
                            <label htmlFor="text">Email</label>
                            <input value={updateCustomer.email} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="email" id="email" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Rua</label>
                            <input value={updateCustomer.rua} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="rua" id="rua" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Bairro</label>
                            <input value={updateCustomer.bairro} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="bairro" id="bairro" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Cidade</label>
                            <input value={updateCustomer.cidade} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="cidade" id="cidade" />
                        </div>
                        <div className="">
                            <label htmlFor="text">CPF</label>
                            <input value={updateCustomer.cpf} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="cpf" id="cpf" />
                        </div>
                        <div className='flex justify-end gap-5 my-3'>
                            <button onClick={handleUpdate} className="bg-green-500 text-white py-2 px-4 rounded" disabled={submitting}>Update</button>
                            <button onClick={handleCancel} className="bg-red-600 text-white py-2 px-4 rounded">Cancel</button>
                        </div>
                    </form>
                </div>


                : null}



            {isFormVisible && (
                <div className="text-white flex flex-col items-center justify-center w-full ">
                    <form name='addCustomer' className=" p-4">
                    <div className="">
                            <label htmlFor="name">Nome</label>
                            <input value={addCustomer.nome} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="nome" id="email" />
                        </div>

                        <div className="">
                            <label htmlFor="text">Email</label>
                            <input value={addCustomer.email} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="email" id="email" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Telefone</label>
                            <input value={addCustomer.telefone} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="telefone" id="telefone" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Rua</label>
                            <input value={addCustomer.rua} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="rua" id="rua" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Bairro</label>
                            <input value={addCustomer.bairro} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="bairro" id="bairro" />
                        </div>
                        <div className="">
                            <label htmlFor="text">Cidade</label>
                            <input value={addCustomer.cidade} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="cidade" id="cidade" />
                        </div>
                        <div className="">
                            <label htmlFor="text">CPF</label>
                            <input value={addCustomer.cpf} onChange={handleChange} className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="text" name="cpf" id="cpf" />
                        </div>
                        <div className='flex justify-end gap-5 my-3'>
                            <button onClick={handleAdd} className="bg-blue-500 text-white py-2 px-4 rounded">Add</button>
                            <button onClick={handleCancel} type="submit" className="bg-red-600 text-white py-2 px-4 rounded">Cancel</button>
                        </div>
                    </form>
                </div>
            )}
            <div className="flex flex-wrap gap-1 ">
                {

filteredUsers.map((customer: any) => (
                        <div key={customer.id} className={`w-full md:w-1/3  md:bg-slate-800 flex flex-col items-center justify-center mx-auto overflow-hidden rounded-xl my-4  ${isEditFormVisible || isFormVisible ? "hidden" : null}`}>

                            <div className=" text-white  w-full space-y-4 overflow-hidden my-4">
                                <div className="font-medium w-full text-xs text-center sm:text-sm">
                                    <span className="block">{`Nome: ${customer.nome}`}</span>
                                    <span className="block">{`Email: ${customer.email}`}</span>
                                    <span className="block">{`Telefone: ${customer.telefone}`}</span>
                                    <span className="block">{`Rua: ${customer.rua}`}</span>
                                    <span className="block">{`Bairro: ${customer.bairro}`}</span>
                                    <span className="block">{`Cidade: ${customer.cidade}`}</span>
                                    <span className="block">{`CPF: ${customer.cpf}`}</span>
                                </div>
                                <div className='flex gap-5 justify-center p-4'>
                                    <button data-id={customer.id} onClick={handleEditClick} className='bg-green-500 text-white py-2 px-4 rounded '>Edit</button>
                                    <button  onClick={handleDelete} data-id={customer.id} className='bg-red-600 text-white py-2 px-4 rounded'>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </>
    );
};

export default Customers;
