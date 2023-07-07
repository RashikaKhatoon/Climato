import React from 'react';
import ReactDom from 'react-dom';

function Weather()  {
    return (
        <div className="domi">
        <h1  style={{color:"black", textAlign:"center",fontSize:"bolder"}}>CLIMATO<i class="fas fa-cloud-sun" style={{color:"aqua"}}></i></h1>
        <p  style={{color:"black", textAlign:"center",fontSize:"bolder"}}>(Ur personal weather forecast)</p>
        </div>
    );
}
export default Weather;
