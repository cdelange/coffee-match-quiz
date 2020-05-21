import React from 'react';
import Answer from './Answer';
import PropTypes from 'prop-types';


// filters questions down to the right question object via id and count, maps questions into the single object, then maps the answers array in that single object into its own array to be printed each one in a <Answer /> tag.

function AnswerList(props) {

    const id = props.count + 1
    const x = props.questions.filter( question => question.id === id)
            .map((question) => (
                question.answers.map((answer) => (
                        <Answer answer = {answer} submitAnswer={props.submitAnswer} isMulti={ question.isMulti }  />
        ))));

    return (
        <div > {x} </div>
        )

}


//prop types  Still need to understand if i actually need it in this case and what they really do
AnswerList.propTypes = {
    questions: PropTypes.array.isRequired
}

export default AnswerList;


