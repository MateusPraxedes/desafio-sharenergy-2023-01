import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/auth";
import { BiRefresh } from "react-icons/bi";

const RandomDogs = () => {

  const { getDogs, dogs }: any = useContext(AuthContext);
  const [submitting, setsubmitting] = useState(false);

  useEffect(() => {
    getDogs();
  }, []);


  const handleClick = () => {
    setsubmitting(true);
    try {
      getDogs();
    } catch (err) {
      console.log(err);
    }
    setsubmitting(false);

  }

  return (
    <>
        
      {dogs ?
        <div className="flex m-auto ">
        <div className="flex  flex-col gap-y-5  m-auto "   >
          <img className="h-80 w-80 my-2" src={dogs} alt="" />
          <div className="flex justify-center bottom-0">
          <button className="text-white cursor-pointer md:text-lg sm:text-base text-xl mr-4" onClick={handleClick} disabled={submitting}><BiRefresh className="text-4xl" /></button>
          </div>
        </div>
      </div>
        :
        null}


    </>
  )
}

export default RandomDogs