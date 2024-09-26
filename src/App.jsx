import React, { useState,useContext } from 'react'
import ContactList from './ContactList.jsx'
import Detail from './Detail.jsx'
import Add from './Add.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import data from './data.js'

import { ContactContext } from './Context/ContactContext.jsx'

const App = () => {

  const [contact,setContact]=useState(data);
  const [current,setCurrent] = useState({});

  return (
    <>
    <ContactContext.Provider value={{ contact, setContact, current, setCurrent }}>
      <Router>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </Router>
    </ContactContext.Provider>
    </>
  );
}

export default App;