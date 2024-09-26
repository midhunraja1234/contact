import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import './styles/ContactList.css';
import { AiOutlinePlus } from "react-icons/ai";
import { ContactContext } from './Context/ContactContext.jsx'

function ContactList() {
    const { contact, setContact, current, setCurrent } = useContext(ContactContext);
    const navigate = useNavigate();

    function handleChange(item) 
    {
        setCurrent([item]);
        navigate('/detail');
    }

    return (
        <div className='main-page'>
                <h2 className='contacts'>My contacts</h2>
            <div className="border">
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
                    <AiOutlinePlus className='add-icon' style={{ color: 'white' }} /> Add another contact
                </button>
            </div>
        </div>
    );
}

export default ContactList;
