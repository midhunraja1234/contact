import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import './styles/Add.css'; 

const Add = ({ contact, setContact, current, setCurrent }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const add = () => {
        const newContact = {
            id: contact.length + 1,
            name: name,
            email: email,
            phone: phone,
            address: address
        };
        
        console.log("New Contact Added:", newContact);
        const newArr = [newContact, ...contact];
        setContact(newArr);

        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        alert('Contact Added Successfully');
        navigate('/');
    };

    return (
       <div className='flex-container'>
        <div className='add-container'>
                <div className='add-heading'>
                       <RxCross1 className='exit' onClick={()=>navigate('/')}/>
                    <p>Add New Contact</p>
                </div>
                <div className='fields'>
                    <div className="input-fields">
                        <label>Name</label>
                        <input
                            type="text"
                            className="name"
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-fields">
                        <label>Email</label>
                        <input
                            type='text'
                            className="email"
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-fields">
                        <label>Phone</label>
                        <input
                            type="text"
                            className="phone"
                            placeholder='Enter phone number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="input-fields">
                        <label>Address</label>
                        <input
                            type="text"
                            className="address"
                            placeholder='Enter address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className='button'>
                        <button onClick={add}>Add Contact</button>
                        <button onClick={() => { setName(''); setEmail(''); setPhone(''); setAddress(''); }}>Cancel</button>
                    </div>
            </div>
      </div>
    </div>
    );
}

export default Add;
