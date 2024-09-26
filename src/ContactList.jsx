import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ContactList.css';
import { AiOutlinePlus } from "react-icons/ai";

function ContactList({ contact, setCurrent }) {
    const navigate = useNavigate();

    function handleChange(item) 
    {
        setCurrent([item]);
        navigate('/detail');
    }

    return (
        <div className='main-page'>
            <div className="border">
                <h2 className='contacts'>My Contacts</h2>
                <div className='grid-container'>
                    {
                        contact.map((item, index) => (
                            <div key={index} className='grid-item' onClick={() => handleChange(item)} >
                                <div className='name'>{item.name}</div>
                                <div className='email'>{item.email}</div>
                            </div>
                        ))
                    }
                </div>
                <button className='add-contact' onClick={() => navigate('/add')}>
                    <AiOutlinePlus className='add-icon' style={{ color: 'white' }} /> Add New contact
                </button>
            </div>
        </div>
    );
}

export default ContactList;
