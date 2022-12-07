import React from 'react';

function Card(props) {
    //console.log(props);
        return (
            <>
            <div className="cards">
            
            <div className="card">
            <img src={props.imgsrc}  height={200} width={317} alt="myPic" className="card_img" />
            
            <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
                <button> watch Now </button>
            </a>
            
            </div>
            </div>
            </div>
             
            </>

        );
}

export default Card;