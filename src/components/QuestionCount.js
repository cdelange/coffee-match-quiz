import React from 'react';


function QuestionCount(props) {
    return (
        <div className="questionCount col-xs-12 text-left">
           <h3 className='count'> { props.count + 1} of { props.questions.length }</h3>
        </div>
    );
}

export default QuestionCount;
