import React, {Comment, useEffect, useMemo} from "react"
import { ReactDOM } from "react"

const modalRootElement = document.querySelector('#overlay')

const Overlay = ({text},props) => {
  const el = useMemo(()=>document.createElement("div"),[])

  useEffect(()=>{
    modalRootElement.appendChild(el)

    return () => {
      modalRootElement.removeChild(el)
    }
  })

  return ( 
    <>
    <div className="container mx-auto">
        <div className="flex justify-center">
          <Btn text={"ModalInfo"}/>
          <Btn text={"Modal"}/>
          <Btn text={"ModalConfirm"}/>
        </div>
    </div>
    </>
   );
}

const Btn = ({children,text}) => {
  return ( 
    <>
    <button className="mr-10 mt-10 text-white bg-emerald-700 w-64 h-10 rounded hover:bg-emerald-900 transition">{text}</button>
    </>
   );
}
 
export default Overlay;