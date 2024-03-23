import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';

function DashCard(){
    return (
        <>
    <div className="card-container">
        <div className="cards">
        <div className="cardx">
        <div className="text">
        <h3>230</h3>
        <p>PRODUCTS</p>
        </div>
        <div className="icons">
        <SearchIcon className="icon"/>
       
        </div>

        </div>
        <div className="cardx">
        <div className="text">
        <h3>100</h3>
        <p>ORDERS</p>
        </div>
        <div className="icons">
        <BarChartIcon className="icon"/>
       
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