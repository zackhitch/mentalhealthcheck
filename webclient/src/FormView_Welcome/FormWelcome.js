import React, { Component, Fragment } from 'react';
import { Select, Radio, Segment } from 'react-onsenui';

import './FormWelcome.css';
import logo from '../assets/align_logo.png';

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
        text: 'How are you feeling?',
        hidden: false,
        replyModel: 'dropdown',
        answers: [
          {
            text: 'Happy',
            score: 1,
            followup: 2,
          },
          {
            text: 'Depressed',
            score: 2,
          },
          {
            text: 'Suicidal',
            score: 3,
            flag: true,
          },
        ],
      },
      {
        id: 2,
        text: 'Have you used alcohol today?',
        hidden: true,
        replyModel: 'yesno',
        answers: [
          {
            text: 'No',
            score: 1,
          },
          {
            text: 'Yes',
            score: 2,
          },
        ],
      },
      {
        id: 3,
        text: 'Are you on any prescription medication?',
        hidden: false,
        replyModel: 'yesno',
        answers: [
          {
            text: 'No',
            score: 1,
          },
          {
            text: 'Yes',
            score: 2,
          },
        ],
      },
      {
        id: 4,
        text:
          'I sometimes have trouble distinguishing whether something I experience or perceive may be real or may only be part of my imagination or my dreams',
        hidden: false,
        replyModel: 'scale',
        answers: [
          {
            text: 'No',
            score: 1,
          },
          {
            text: 'Yes, slightly',
            score: 2,
          },
          {
            text: 'Yes, definitely',
            score: 3,
          },
        ],
      },
    ],
    answerValues: {
      1: {
        value: '',
        score: null,
      },
      2: {
        value: '',
        score: null,
      },
      3: {
        value: '',
        score: null,
      },
      4: {
        value: '',
        score: null,
      },
      5: {
        value: '',
        score: null,
      },
      6: {
        value: '',
        score: null,
      },
      7: {
        value: '',
        score: null,
      },
    },
  };

  componentDidMount() {
    console.log(this.state.questions);
  }

  startTimer() {
    this.setState({
      timer: {
        isOn: true,
        time: this.state.timer.time,
        start: Date.now() - this.state.timer.time,
      },
    });
    this.timed = setInterval(() => {
      this.setState({
        timer: {
          time: Date.now() - this.state.timer.start,
        },
      });
    });
  }

  renderSwitch(question) {
    const replyModel = question.replyModel;
    switch (replyModel) {
      case 'dropdown':
        return (
          <Select
            modifier="material"
            value="yes"
            onChange={event =>
              this.setState({
                [this.state.answerValues.question.id]: event.target.value,
              })
            }
          >
            {question.answers.map(answer => (
              <option name={answer.text} value={answer.score}>
                {answer.text}
              </option>
            ))}
          </Select>
        );
      case 'yesno':
        return (
          <Fragment>
            <Radio
              onChange={event => {
                this.setState({ value: event.target.checked });
              }}
              modifier="material"
            />
            {/* <Radio
              onChange={event => {
                this.setState({ [event.target.name]: event.target.checked });
              }}
              modifier="material"
              value="No"
            /> */}
          </Fragment>
        );
      case 'scale':
        return (
          <Segment modifier="material" className="segment">
            {question.answers.map(answer => (
              <button>{answer.text}</button>
            ))}
          </Segment>
        );
      default:
        return <h2>This is a test</h2>;
    }
  }

  render() {
    return (
      <div>
        <img src={logo} className="companyLogo" alt="logo" />
        <hr />
        <form>
          {this.state.questions.map(question => (
            <Fragment key={question.id}>
              <h3>{question.text}</h3>
              {this.renderSwitch(question)}
            </Fragment>
          ))}
        </form>
      </div>
    );
  }
}

export default FormWelcome;
