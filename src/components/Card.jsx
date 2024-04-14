import React from "react";
// import katieZaferes from "katie-zaferes.png"
// import starImage from "star.png"

export default function Card(props) {
    console.log(props);
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    }
    else if (props.location == 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../assets/images/${props.coverImg}`} alt="img" className="card--image" />
            <div className="card--stats">
                <img src="../assets/images/star.png" alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--price"><span className="bold">From ${props.price} </span>/ person</p>
        </div>
    )
}