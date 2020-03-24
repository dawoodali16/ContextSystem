import React, { Component } from 'react';

const Context = React.createContext('english');
export class LanguageStore extends Component {
  state = { language: 'english' };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div>
        <Context.Provider
          value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
        >
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export default Context;
