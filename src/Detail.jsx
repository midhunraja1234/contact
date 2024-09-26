import React, { useContext } from "react";
import './styles/detail.css';
import { useNavigate } from "react-router-dom";
import { ContactContext } from './Context/ContactContext.jsx';

function Detail() {

    const { current } = useContext(ContactContext);
    const navigate = useNavigate();

    const contactDetails = current?.[0] || {};

    return (
        <div className="page2">
            <div className="page2-container">

                <div className="container-1">
                    <div className="detail-name">{contactDetails.name || "Name not available"}</div>
                    <div className="detail-email">{contactDetails.email || "Email not available"}</div>
                </div>

                <div className="container-2">
                    <div className="phone">
                        <div className="phone-1">Phone</div>
                        <div className="phone-2">{contactDetails.phone || "Phone not available"}</div>
                    </div>

                    <div className="address">
                        <div className="address-1">Address</div>
                        <div className="address-2">{contactDetails.address || "Address not available"}</div>
                    </div>

                    <div className="back-contact" onClick={() => navigate('/')}>
                       Go Back to contacts
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Detail;
