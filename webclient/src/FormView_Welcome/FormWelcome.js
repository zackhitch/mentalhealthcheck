import React, { Component, Fragment } from 'react';
import { Select, Radio, Segment, Button } from 'react-onsenui';

import './FormWelcome.css';
import logo from '../assets/align-02.png';

class FormWelcome extends Component {
  state = {
    timer: {
      isOn: false,
      time: 0,
      start: 0,
    },
    questions: [
      {
        id: 1,
        text: 'Have you had thoughts of suicide within the past 24 hours?',
        hidden: true,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes',
            score: 1,
          },
          {
            text: 'No',
            score: 2,
          },
        ],
      },
      {
        id: 2,
        text:
          'Have you ever been diagnosed with a mental health illness or condition',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes',
            score: 1,
          },
          {
            text: 'No',
            score: 2,
          },
        ],
      },
      {
        id: 3,
        text: 'Do you currently see a mental health practictioner?',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes',
            score: 1,
          },
          {
            text: 'No',
            score: 2,
          },
        ],
      },
      {
        id: 4,
        text: 'Do you find it helpful?',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes',
            score: 1,
          },
          {
            text: 'No',
            score: 2,
          },
        ],
      },
      {
        id: 5,
        text: 'Have you had any substances or alcohol today?',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes',
            score: 1,
          },
          {
            text: 'No',
            score: 2,
          },
        ],
      },
      {
        id: 6,
        text:
          'I sometimes have trouble distinguishing whether something I experience or perceive may be real or may only be part of my imagination or my dreams',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes, definitely',
            score: 3,
          },
          {
            text: 'Yes, slightly',
            score: 2,
          },
          {
            text: 'No',
            score: 1,
          },
        ],
      },
      {
        id: 7,
        text:
          'I believe that someone may be planning to cause me harm, or may be about to cause me harm in the near future.',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'Yes, definitely',
            score: 3,
          },
          {
            text: 'Yes, slightly',
            score: 2,
          },
          {
            text: 'No',
            score: 1,
          },
        ],
      },
    ],
  };

  componentDidMount() {
    console.log(this.state.questions);
  }

  // startTimer() {
  //   this.setState({
  //     timer: {
  //       isOn: true,
  //       time: this.state.timer.time,
  //       start: Date.now() - this.state.timer.time,
  //     },
  //   });
  //   this.timed = setInterval(() => {
  //     this.setState({
  //       timer: {
  //         time: Date.now() - this.state.timer.start,
  //       },
  //     });
  //   });
  // }
  onChange = function(e){
    console.log(e)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);


    var myForm = document.getElementById('webForm');
    var formData = new FormData(myForm);
    console.log(formData)

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  renderSwitch(question) {
    const replyModel = question.replyModel;
    switch (replyModel) {
      case 'dropdown':
        return (
          <Select
            modifier="material"
            onChange={function(event) {
              console.log(question.id);
              this.setState({
                [event.target.name]: event.target.value,
              });
            }}
          >
            {question.answers.map(answer => (
              <option name={answer.text} value={answer.score}>
                {answer.text}
              </option>
            ))}
          </Select>
        );
      // case 'yesno':
      //   return (
      //     <Fragment>
      //       <Radio
      //         onChange={event => {
      //           this.setState({ value: event.target.checked });
      //         }}
      //         modifier="material"
      //       />
      //     </Fragment>
      //   );
      case 'scale':
        return (
          <Segment
            modifier="material"
            className="segment"
            name={question.id.toString()}
            onChange={this.onChange}
          >
            {question.answers.map(answer => (
              <button key={Math.random()} value={answer.score}>{answer.text}</button>
            ))}
          </Segment>
        );
      default:
        return <h2>This is a test</h2>;
    }
  }


  render() {

    return (
      <div className="webForm">
        <img src={logo} className="companyLogo" alt="logo" />
        <hr />
        <form id="webForm" className="webForm" onSubmit={this.handleSubmit}>
          {this.state.questions.map(question => (
            <Fragment key={question.id}>
              <h3 className="qText">{question.text}</h3>
              {this.renderSwitch(question)}
            </Fragment>
          ))}

          <button type="submit" class="button--large--cta" style={{ marginTop: '25px' }}>Submit</button>
        </form>


      </div>
    );
  }
}

export default FormWelcome;