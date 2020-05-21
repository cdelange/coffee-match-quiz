import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Answer(props) {

    const [clicked, setClicked] = useState(false); // hook

    function handleClick(e) {
        props.submitAnswer(e);
        if (props.isMulti){
            setClicked(!clicked);
        }
    }

    useEffect(() => {
        setClicked(false);
    }, [props.answer])


    useEffect(() => {
        if (clicked) {
            document.getElementById(props.answer).className = 'btn-block answer-button-clicked';
        } else {
            document.getElementById(props.answer).className = 'btn-block answer-button';
        }
    }, [clicked, props.answer])


    return (
        <div className='col-md-6 col-xs-12' >
           <button id={ props.answer } className='btn-block answer-button' onClick={ handleClick.bind(this, props.answer) }> { props.answer } </button>

        </div>
    );
}

// prop types
Answer.propTypes = {
    answer: PropTypes.string.isRequired
}

export default Answer;
