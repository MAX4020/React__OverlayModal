import React, {Comment, useEffect, useMemo, useState} from "react"
import {AiFillCloseSquare} from "react-icons/ai"
import { ReactDOM } from "react"
import {createPortal} from "react-dom"
import CircularProgress from '@mui/material/CircularProgress';

export const Overlay = ({children, onClose}) => {
  return ( 
    <div onClick={onClose} className="bg-slate-800/[.50] w-full h-full m-auto absolute left-0 right-0 top-0">{children}</div>
   );
}

export const Header = (props) => {
  const {title, onClose} = props

  return ( 
    <header className="flex justify-between h-10 text-3xl w-full text-white">
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
  const {children, onClose, title} = props
  return createPortal( 
    <>
    <Overlay onClose={onClose}>
      <div onClick={(e)=>e.stopPropagation()} className="w-[500px] m-auto  bg-emerald-800">
        <div className="flex mt-40">
          <Header title={title}/>
          <button className="w-10 flex justify-center items-center" onClick={onClose}><AiFillCloseSquare color="white"  className="text-3xl cursor-pointer"/></button>
        </div>
        <div className="h-96 flex flex-wrap justify-center m-auto  overflow-y-scroll overflow-x-hidden bg-emerald-700">{children}</div>
        </div>
    </Overlay>
    </>,
    document.body
   );
}

export const ModalConfirm = (props) => {
  const {cancel, apply, title, control = false} = props

  const [result, setResult] = useState(0)

  const applyHandler = () => {
    apply(true,control?setResult:2)
  }

  return createPortal(
    <>
      <Overlay onClose={cancel}>
        <div onClick={(e)=>e.stopPropagation()} className="w-1/3 m-auto  bg-emerald-800">
        <div className="flex mt-40">
          <Header title={title}/>
          <button className="w-10 flex justify-center items-center" onClick={cancel}><AiFillCloseSquare color="white"  className="text-3xl cursor-pointer"/></button>
        </div>
        {result === 0 && 
          <div className="h-32 flex justify-center m-auto bg-emerald-700">
            <button className="mr-20 mt-10 bg-red-700 h-10 text-white text-2xl w-40 rounded-sm hover:bg-red-800 transition" onClick={cancel}>Отмена</button>
            <button className="mt-10 bg-green-500 h-10 text-white text-2xl w-40 rounded-sm hover:bg-green-600 transition" onClick={applyHandler}>Подтвердить</button>
          </div>}
        {result === 1 && 
          <div className="flex justify-center flex-col">
            <span className="flex justify-center h-32 text-white text-3xl items-center">Выполнено</span>
            <button className="m-auto mb-5 bg-red-700 h-10 text-white text-2xl w-40 rounded-sm hover:bg-red-800 transition" onClick={cancel}>Закрыть</button>
          </div>}
        {result === 2 && 
          <div className="flex flex-col justify-center">
            <span className="flex justify-center h-32 text-white text-3xl items-center">Загрузка</span>
            <CircularProgress color="inherit" className="m-auto mb-5"/>
          </div>}
        {result === 3 && <span className="text-red-700 text-3xl flex justify-center h-24 mt-12">Ошибка</span>}
        
        </div>
      </Overlay>
    </>,
    document.body
  )
}
export const ModalForm = (props) => {
  const {cancel, title, children, control, apply} = props

  return createPortal(
    <>
    <Overlay onClose={cancel}>
      <div onClick={(e)=>e.stopPropagation()} className="w-[500px] m-auto  bg-emerald-800">
      <div className="flex mt-40">
          <Header title={title}/>
          <button className="w-10 flex justify-center items-center" onClick={cancel}><AiFillCloseSquare color="white"  className="text-3xl cursor-pointer"/></button>
        </div>
        <div className="h-96 flex flex-wrap justify-center m-auto  overflow-y-scroll overflow-x-hidden bg-emerald-700">{children}</div>
        </div>
    </Overlay>
    </>,
    document.body
  )
}