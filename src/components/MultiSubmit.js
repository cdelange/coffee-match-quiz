import React from 'react';


function MultiSubmit(props) {
    let button;
    if (props.questions[props.count].isMulti) {
        button = <button className='btn-block multi-button' onClick={props.nextQuestion} disabled={!props.multiCompleted}> Continue </button>
    }
    return (
        <div className='col-xs-12' >
        {button}
        </div>
    );
}

export default MultiSubmit;
