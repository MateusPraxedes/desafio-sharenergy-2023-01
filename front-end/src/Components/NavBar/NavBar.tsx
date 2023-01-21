import { useRef, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  
  
  return (
    <div className='m-auto' >
      <nav className="bg-gray-800 ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 ">
            <img
              className="h-8 w-8"
              src="https://media.licdn.com/dms/image/C4E0BAQF7ZTVfAKGA2w/company-logo_200_200/0/1602075568390?e=2147483647&v=beta&t=ohGAAZ8bPtyiwYsPFjlUwHbNurhGhOSTZj69-Jc1hZg"
              alt="Workflow"
            />
            <div className={`container flex flex-wrap justify-center ` }>
              <div className="flex-shrink-0">
              </div>
              <div ref={mobileMenuRef} className={`justify-between hidden md:block`}>
                <ul className="ml-10 flex items-baseline  space-x-4">
                  <div></div>
                  <li

                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >< Link to="randomUsers">Random User</Link>

                  </li>

                  <li

                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  > <Link to="randomCats">HTTP Cat</Link>

                  </li>

                  <li

                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link to="randomDogs">Random Dog</Link>
                  </li>

                  <li

                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link to="/customers">Customers</Link>
                  </li>
             
                  <li

                    className="text-gray-300  hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <Link to="/">Logout</Link>
                  </li>
               
                </ul>
                
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)    }
                
                type="button"
                className=  "bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          
  <div className="md:hidden" id="mobile-menu">
    <div  className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <li

                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="randomUsers">Random User</Link>
                </li>

                <li

                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="randomCats">HTTP Cat</Link>
                </li>

                <li

                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="randomDogs">Random Dog</Link>
                </li>

                <li

                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="/customers">Customers</Link>
                </li>

                <li

                  className="text-gray-300 hover:bg-gray-700  hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="/">Logout</Link>
                </li>
              </div>
            </div>
       
        </Transition>
      </nav>
    
        
          <Outlet />
        
    </div>
  );
}

export default NavBar