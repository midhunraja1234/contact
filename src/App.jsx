import React, { useState } from 'react'
import ContactList from './ContactList.jsx'
import Detail from './Detail.jsx'
import Add from './Add.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import data from './data.js'


const App = () => {
  const [contact,setContact]=useState(data);
  const [current,setCurrent] = useState({});
  return (
    <>
    <Router>
      <Routes>
              <Route path='/' element={<ContactList  contact={contact} setContact={setContact} current={current} setCurrent={setCurrent}/>}/>
              <Route path='/detail' element={<Detail  contact={contact} setContact={setContact} current={current} setCurrent={setCurrent}/>}/>    
              <Route path='/Add' element={<Add  contact={contact} setContact={setContact} current={current} setCurrent={setCurrent}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;