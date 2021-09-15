import React from 'react';
import './Dino.css';
import Comment from './Comment';

function Dino(props) {
    let allComments = props.comments.map((c, i) => {
        return <Comment key={i} body={c}/>
    });
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>by {props.author}</h3>
            <h3>{props.body}</h3>
            <p>{allComments}</p>

            <h2>Comments:</h2>
            <h3>{props.comments.toString[0]}</h3>
        </div>
    );
}

export default Dino;