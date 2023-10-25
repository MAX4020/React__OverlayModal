import { useState } from 'react';
import './App.css';
import {Btn,ModalInfo,ModalConfirm,ModalForm} from "./Modal"


function App() {
const [modalConfirm,setModalConfirm] = useState(false)
const [modalInfo, setModalInfo] = useState(false)
const [modalForm, setModalForm] = useState(false)

  const showModalForm = () => {setModalForm(true) }
  const hideModalForm = () => {setModalForm(false)}
  const showModalInfo = () => {setModalInfo(true) }
  const hideModalInfo = () => {setModalInfo(false)}
  const showModalConfirm = () => {setModalConfirm(true) }
  const hideModalConfirm = () => {setModalConfirm(false)}

  const parseResult = async (state, controlResult, hideModalConfirm, loader) => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json => controlResult(json[10].completed ? 1:3))
    setTimeout(hideModalConfirm,3000)
  }

  return (
    <>
      <button onClick={showModalInfo} className="ml-10 mt-10 text-white bg-emerald-700 w-64 h-10 rounded hover:bg-emerald-900 transition">Окно информации</button>
      <button onClick={showModalConfirm} className="ml-10 mt-10 text-white bg-emerald-700 w-64 h-10 rounded hover:bg-emerald-900 transition">Окно подтверждения</button>
      <button onClick={showModalForm} className="ml-10 mt-10 text-white bg-emerald-700 w-64 h-10 rounded hover:bg-emerald-900 transition">Окно формы</button>
      {modalConfirm && <ModalConfirm cancel={hideModalConfirm} apply={parseResult} title={"Подтвердите действие"} control={true}/>}
      {modalInfo && <ModalInfo title={"Информация"} onClose={hideModalInfo}></ModalInfo>}
      {modalForm && <ModalForm title={"Форма"} cancel={hideModalForm} control={true} ></ModalForm>}
    </>
  );
}

export default App;