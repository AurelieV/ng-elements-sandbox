import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.disabled = true;
  }
  render() {
    return (
      <form>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Mot de passe</label>
          <input id="password" name="password" type="password" required />
        </div>
        <button className="primary" type="submit" disabled={this.disabled}>Login</button>
      </form>
    );
  }
}

export default App;
