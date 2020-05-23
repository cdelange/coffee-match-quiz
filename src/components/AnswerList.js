import React from 'react';
import Answer from './Answer';
import PropTypes from 'prop-types';


// filters questions down to the right question object via id and count, maps questions into the single object, then maps the answers array in that single object into its own array to be printed each one in a <Answer /> tag.

function AnswerList(props) {

    const id = props.count;
    const x = Object.keys(props.questions[id].answers).map((answer) => (
                        <Answer answer = {answer} submitAnswer={props.submitAnswer} isMulti={ props.questions[id].isMulti }  />
                        ));
    // let coffees = questions[this.state.count].answers[customerAnswers[i]] //grabs the array of coffees mapped to an answer choice // is  count + 1 because count was already incremented for the next questions
    let coffees = props.questions[id].answers['Light']
    return (
        <div >{x}</div>
        )

}


//prop types  Still need to understand if i actually need it in this case and what they really do
AnswerList.propTypes = {
    questions: PropTypes.array.isRequired
}

export default AnswerList;


