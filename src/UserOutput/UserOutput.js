import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    const style = {
        color : 'blue',
        font : 'inherit',
    }
    return(
        <div className="UserOutput">
            <p style ={style}>Hello World!!</p>
            <p>We are learning React.</p>
            <p>{props.username}</p>
           
        </div>
    )
}

export default userOutput;