import React, {Comment, useEffect, useMemo} from "react"
import { ReactDOM } from "react"
import {createPortal} from "react-dom"

const modalRootElement = document.querySelector('#modal')

export const Modal = (props) => {
  const{marker, open, onClose} = props;

  const el = useMemo(()=>{
    const el = document.createElement("div")
    el.dataset.marker = marker
    return el
  },[marker])

  useEffect(()=>{
    if(open){      
      modalRootElement.appendChild(el)

    return () => {
      modalRootElement.removeChild(el)}
    }

  })

  if(open){
      return createPortal(
      <div onClick={onClose} className="w-full h-full m-auto absolute left-0 right-0 top-0"><ModalInfo>{props.children}</ModalInfo></div> ,
    el
   );}


}

export const Overlay = ({children, onClose}) => {
  return ( 
    <div className="bg-slate-800/[.50] w-full h-full m-auto absolute left-0 right-0 top-0">{children}</div>
   );
}

export const Header = ({title}) => {
  return ( 
    <header className="flex justify-center mt-20 text-3xl w-full text-white">
      {title}
    </header>
   );
}

export const Btn = ({text}) => {
  return ( 
    <>
    <button className="ml-10 mt-10 text-white bg-emerald-700 w-64 h-10 rounded hover:bg-emerald-900 transition">{text}</button>
    </>
   );
}

export const ModalInfo = (props) => {
  const {children, open, onClose} = props
  return ( 
    <>
    <Overlay open={open} onClick={onClose}>
      <div className="w-1/3 m-auto  bg-emerald-800"><Header title={"ModalInfo"}/></div>
      <div className="w-1/3 h-96 flex justify-center m-auto overflow-y-scroll bg-emerald-700">{children}</div>
    </Overlay>
    </>
   );
}