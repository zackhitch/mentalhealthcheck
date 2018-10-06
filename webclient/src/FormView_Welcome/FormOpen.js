import React, { Fragment } from 'react';
import { Button } from 'react-onsenui';

const FormOpen = props => {
  return (
    <div>
      <form className="webForm" onSubmit={props.handleSubmit}>
        {props.questions.map(
          question =>
            question.hidden === false ? (
              <Fragment key={question.id}>
                <h3 className="qText">{question.text}</h3>
                {props.renderSwitch(question)}
              </Fragment>
            ) : null
        )}
      </form>
      <Button
        modifier="large--cta"
        className="submitBtn"
        onClick={props.handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default FormOpen;
