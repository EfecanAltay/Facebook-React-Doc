import React from 'react';
import './styles/App.css';
import { SideBar } from './sections/sidebar';
import Topbar from './sections/topbar';
import { PageController } from './Controllers/PageController';
import WelcomePage from './pages/WelcomePage';
import GetStartedPage from './pages/GetStartedPage';

export class App extends React.Component{
  
  state = {
    pageController : PageController,
  };
  
  constructor(prop)
  {
    super(prop);
    this.state.pageController = new PageController(null);
    this.state.pageController.AddPage(new WelcomePage());
    this.state.pageController.AddPage(new GetStartedPage());
    this.state.pageController.SelectPage(0);
  }

  render(){
    return (
      <div className="App">
        <SideBar OnSelected={(i)=>{  this.state.pageController.SelectPage(i); this.setState(this.state)}}/>
        <div className="Content">
          <Topbar/>
          { this.state.pageController.render()}
        </div>
      </div>
    );
  }
}


export default App;
