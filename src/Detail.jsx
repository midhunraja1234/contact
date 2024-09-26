import React from "react";
import './styles/detail.css';
import { useNavigate } from "react-router-dom";

function Detail({contact,setContact,current,setCurrent}) {

    const navigate = useNavigate();

return(
    <div className="page2">
        <div className="page2-container">

            <div className="container-1">
                <div className="detail-name">{current[0].name}</div>
                <div className="detail-email">{current[0].email}</div>
            </div>

            <div className="container-2">
                <div className="phone">
                    <div className="phone-1">Phone</div>
                    <div className="phone-2">{current[0].phone}</div>
                </div>
                
                <div className="address">
                    <div className="address-1">Address</div>
                     <div className="address-2">{current[0].address}</div>
                </div>
                <div className="back-contact" onClick={()=>navigate('/')}>
                    back to contacts
                </div>
            </div>
        </div>
    </div>
)

}
export default Detail
