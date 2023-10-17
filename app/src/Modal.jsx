import React, {Comment, useEffect, useMemo} from "react"
import { ReactDOM } from "react"
import {createPortal} from "react-dom"
export const Modal = (props) => {
  const{open, onClose} = props;

  if(open){
      return createPortal(
      <ModalInfo onClose={onClose}>{props.children}</ModalInfo>,
    document.body
   );}


}

export const Overlay = ({children, onClose}) => {
  return ( 
    <div onClick={onClose} className="bg-slate-800/[.50] w-full h-full m-auto absolute left-0 right-0 top-0">{children}</div>
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
  const {children, onClose} = props
  return ( 
    <>
    <Overlay onClose={onClose}>
      <div onClick={(e)=>e.stopPropagation()} className="w-1/3 m-auto  bg-emerald-800">
        <Header title={"ModalInfo"}/>
        <div className="h-96 flex justify-center m-auto overflow-y-scroll bg-emerald-700">{children}</div>
        </div>
    </Overlay>
    </>
   );
}