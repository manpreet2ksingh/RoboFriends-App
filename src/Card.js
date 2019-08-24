import React from 'react';

const Card = (props)=>{
    return(
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img src={`https://robohash.org/${props.id}?`} alt="robots"></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;