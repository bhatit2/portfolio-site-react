import React from 'react';

const Portfolio = (props) => {
    
    return (
        <div>
            <h3>This is my Portfolio</h3>
            <label>Name : Tanvi Bhatia</label>
            <label>Years of experience : 6</label>
            <p>id from url :  {props.match.params.id}</p>
        </div>
        )
    }

export default Portfolio;