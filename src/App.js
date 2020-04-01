import React, {Component} from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className='App'>
        <header className='header'>
          <h1>Start Bootstrap</h1>
          <nav className='nav-bar'>
            <ul className='nav-list'>
              <li className='nav-item'>SERVICES</li>
              <li className='nav-item'>PORTFOLIA</li>
              <li className='nav-item'>ABOUT</li>
              <li className='nav-item'>TEAM</li>
              <li className='nav-item'>CONTACT</li>
            </ul>

            {/* <ul className='mobile-nav-list'>
              <li className='nav-item'>SERVICES</li>
              <li className='nav-item'>PORTFOLIA</li>
              <li className='nav-item'>ABOUT</li>
              <li className='nav-item'>TEAM</li>
              <li className='nav-item'>CONTACT</li>
            </ul> */}
          </nav>
        </header>

        <main>
          <div className='body'>
            <div className='welcome-text'>Welcome To Our Studio</div>
            <div className='meet-you'>IT'S NICE TO MEET YOU</div>
            <div className='more-button'>TELL ME MORE</div>
          </div>
        </main>

      </div>
    )
  }
}


export default App;
