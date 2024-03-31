import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import DeleteIcon from '@mui/icons-material/Delete';

function Email() {
    const [email, setEmail] = useState(null);
    

    const handleDeleted = async (itemsId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://masterkraft-bn.onrender.com/API/contact/delete/${itemsId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
    
            if (!response.ok) {
                throw new Error(`Failed to delete item with ID ${itemsId}`);
            }
    
            const data = await response.json();
            const message = data?.message || 'Item deleted successfully!';
            localStorage.setItem('deletedMessage', message);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting item:', error);
            alert(error.message);
        }
    }
    

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://masterkraft-bn.onrender.com/API/contact/get', {
                    headers: {
                        'auth-token':token,
                    'Content-Type': 'application/json',
                    }
                });
                setEmail(response.data.datas.reverse());
            } catch (error) {
                alert(error.response.data.message)
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessage();
    }, []);

    return (
        <div className="message-container">
            <div className="message-cont">
                <div className="messagex">
                    <div className="messax">
                        {email ? (
                            email.map((message, index) => (
                                <>
                                    <h4>{index + 1}</h4> 
                                    <h3>fullname:<span>{message.fullname}</span></h3>
                                    <h3>email:<b>{message.email}</b></h3>
                                    <h3>phone:<b>{message.phonenumber}</b></h3>
                                    <h3>province:<b>{message.province}</b></h3>
                                    <p>message: <b>{message.message}</b></p>
                                    <h3>course:<b>{message.course}</b></h3>
                                    <h3>schoolName:{message.schoolname}</h3>
                                    <DeleteIcon className='iconx delete' onClick={() => handleDeleted(message._id)} />
                                </>
                            ))
                        ) : (
                            <Spin />
                        )}
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Email;
