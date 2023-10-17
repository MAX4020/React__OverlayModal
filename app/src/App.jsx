import { useState } from 'react';
import './App.css';
import {Btn,ModalInfo,Modal} from "./Modal"


function App() {
const [open,setOpen] = useState(false)

  const showModalInfo = () => {setOpen(true) }
  const hideModalInfo = () => {setOpen(false)
  console.log(open)}

  return (
    <>
      <button onClick={showModalInfo} className="ml-10 mt-10 text-white bg-emerald-700 w-64 h-10 rounded hover:bg-emerald-900 transition">Open</button>
      <Modal open={open} onClose={hideModalInfo}></Modal>
    </>
  );
}

export default App;