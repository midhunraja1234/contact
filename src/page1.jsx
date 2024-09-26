import React from 'react'
import './page1.css'
function App() {
  const number = [
    {name:'John Doe',email:'john123@gmail.com'},
    {name:'Adhav',email:'adhav123@gmail.com'},
    {name:'Dinesh',email:'Dinesh123@gmail.com'},
    {name:'Jeeva',email:'jeeva123@gmail.com'},
    {name:'Kathir',email:'Kathir123@gmail.com'},
  ]
  return (
    <div className='main-page'>
      <div className='contacts'>
        My Contacts
      </div>
      <div className='items'>
  {number.map((item, index) => (
    <div key={index} className='name-email'>
      <div style={{fontWeight:'500'}}> {item.name}</div>
      <div style={{fontWeight:'200'}}>{item.email}</div>
    </div>
  ))}
</div>

    </div>
  )
}
export default App