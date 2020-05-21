import React from 'react';
import AnswerList from './AnswerList';
import QuestionTitle from './QuestionTitle';
import QuestionCount from './QuestionCount';
import MultiSubmit from './MultiSubmit';




function Questions(props) {

    return (
        <div className='row'>
            <QuestionCount questions={ props.questions } count= { props.count } />
            <QuestionTitle questions={ props.questions } count= { props.count } />
            <AnswerList questions={ props.questions } count= { props.count } submitAnswer={props.submitAnswer} />
            <MultiSubmit questions={ props.questions } count= { props.count } nextQuestion={props.nextQuestion} multiCompleted={props.multiCompleted}/>
        </div>
    );
}



export default Questions;
