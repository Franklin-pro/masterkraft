import React from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupIcon from '@mui/icons-material/Group';
import GradingIcon from '@mui/icons-material/Grading';

function DashCard(){
    return (
        <>
    <div className="card-container">
        <div className="cards">
        <div className="cardx">
        <div className="text">
        <h3>230</h3>
        <p>VIDEO UPLOADED</p>
        </div>
        <div className="icons">
        <CloudUploadIcon className="icon"/>
       
        </div>

        </div>
        <div className="cardx">
        <div className="text">
        <h3>100</h3>
        <p>ORDERS</p>
        </div>
        <div className="icons">
        <GradingIcon className="icon"/>
       
        </div>

        </div>
        <div className="cardx">
        <div className="text">
        <h3>230</h3>
        <p>USERS</p>
        </div>
        <div className="icons">
        <GroupIcon  className="icon"/>
       
        </div>

        </div>
        </div>
    </div>
        </>
    )
}

export default DashCard