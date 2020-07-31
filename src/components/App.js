import React from 'react';
import '../css/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '0',
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ buttonName }) {
    this.setState(state => Calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <div className="calculatorWrapper">
          <Display result={String(total) || String(next)} />
          <ButtonPanel clickhandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
