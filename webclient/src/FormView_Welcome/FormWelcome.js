import React, { Component, Fragment } from 'react';
import { Select } from 'react-onsenui';

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
    ],
    username: '',
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

  render() {
    return (
      <div>
        <img src={logo} className="companyLogo" alt="logo" />
        <hr />
        <form>
          {this.state.questions.map(question => (
            <Fragment>
              <h3>{question.text}</h3>
              <Select
                modifier="material"
                value={this.state.value}
                onChange={event =>
                  this.setState({ [event.target.name]: event.target.value })
                }
              >
                {question.answers.map(answer => (
                  <option name={answer.text} value={answer.score}>
                    {answer.text}
                  </option>
                ))}
              </Select>
            </Fragment>
          ))}
        </form>
      </div>
    );
  }
}

export default FormWelcome;
