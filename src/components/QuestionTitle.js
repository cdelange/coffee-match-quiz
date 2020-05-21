import React from 'react';


function QuestionTitle(props) {
    return (
        <div className='col-xs-12'>
            <h1 className='question-title'>
                { props.questions[ props.count ].title }
            </h1>
        </div>
    );
}

export default QuestionTitle;
