import React, { Fragment } from 'react';

const FormOpen = props => {
  return (
    <form id="webForm" className="webForm" onSubmit={props.handleSubmit}>
      {props.questions.map(
        question =>
          question.hidden === false ? (
            <Fragment key={question.id}>
              <h3 className="qText">{question.text}</h3>
              {props.renderSwitch(question)}
            </Fragment>
          ) : null
      )}
      <button
        type="submit"
        className="button--large--cta submitBtn"
        style={{ marginTop: '25px' }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormOpen;
