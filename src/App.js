import React, {Component} from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super()

      // this.state={
      //   mobileMenu: false
      // }
      // this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  // toggleMobileMenu(){
  //   this.setState({
  //     mobileMenu: !this.state.mobileMenu
  //   })
  // }

  render(){
    return(
      <div className='App'>
        <header className='header'>
          <h1>Start Bootstrap</h1>
          <nav className='nav-bar'>
            <ul className='nav-list'>
              <li className='nav-item'>SERVICES</li>
              <li className='nav-item'>PORTFOLIO</li>
              <li className='nav-item'>ABOUT</li>
              <li className='nav-item'>TEAM</li>
              <li className='nav-item'>CONTACT</li>
            </ul>
            <img  className='hamburgerIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvLYyhePefC1DbQvcpir_1p-jJkC4B1KafONvFwZCxlMiVLUwv&usqp=CAU'/>
            {/* <ul className={`mobile-nav-list ${this.state.mobileMenu ? 'mobile-nav-list-open': null}`}>
              <li className='nav-item'>SERVICES</li>
              <li className='nav-item'>PORTFOLIO</li>
              <li className='nav-item'>ABOUT</li>
              <li className='nav-item'>TEAM</li>
              <li className='nav-item'>CONTACT</li>onClick={this.toggleMobileMenu}
            </ul> */}
          </nav>
        </header>

        <main>
          <div className='body'>
            <div className='welcome-text'>Welcome To Our Studio!</div>
            <div className='meet-you'>IT'S NICE TO MEET YOU</div>
            <div className='more-button'>TELL ME MORE</div>
          </div>
        </main>

      </div>
    )
  }
}


export default App;
