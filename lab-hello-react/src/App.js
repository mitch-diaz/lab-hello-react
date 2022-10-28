import './App.css';
import logo from './logo.svg';
import ironHackLogo from './images/index.png';
import menuLines from './images/menu-top-xs.png';
// import ReactFeatures from './components/ReactFeatures';

import iconImage1 from "./images/icon1.png";
import iconImage2 from "./images/icon2.png";
import iconImage3 from "./images/icon3.png";
import iconImage4 from "./images/icon4.png";



function App() {
  return (

    <div className="App">
      
        <div className="App-header">
            <nav>
                <div>
                    <img src={ironHackLogo} alt="Ironhack logo" />
                </div>
                <div>
                    <img src={menuLines} alt="menu icon" />
                </div>
            </nav>
            
            <h1>Say hello to ReactJS</h1>

            <img className="logo" src={logo} alt="React logo" />

            <p className="youWillLearn">You will learn how to use,<br/> 
            the most popular frontend library, <br/>
            and become a super Ninja deveolper.</p>

            <button>Awesome!</button>
        </div>

        {/* <ReactFeatures /> */}

        <div className="reactFeaturesContainer">
                <div className="rFbox">
                <img src={iconImage1} alt="Declarative"/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
                </div>
                
                <div className="rFbox">
                    <img src={iconImage2} alt="Declarative"/>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                </div>

                <div className="rFbox">
                    <img src={iconImage3} alt="Declarative"/>
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed on to the components.</p>
                </div>

                <div className="rFbox">
                    <img src={iconImage4} alt="Declarative"/>
                    <h2>JSX</h2>
                    <p>Staically-typed, designed to run oon modern browsers.</p>
                </div>

            </div>

    </div>
  );
}

export default App;
