import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import AlertManager from "./AlertManager";

function AppHeader() {
  const [alert, setAlert] = useState<boolean>(false)
  
  return (
    <header className="  w-full bg-[#32363b] sticky z-[11] top-0 h-[60px] flex items-center shadow-md px-5 py-[10px]">
      <div className="wrapper justify-between flex">
        <div className="">
          
        </div>
        <div className="">
          <button className="h_btns mr-[30px]" >
            <FiUpload />
          </button>
          <button className="relative h_btns" >
            <IoMdNotificationsOutline onClick={() => {
              setAlert(state => !state)
            }} />
            {
              alert ?
                <AlertManager /> 
              :
                <></>
            }
          </button>
          
        </div>
        
      </div>
    </header>
  )
}

export default AppHeader