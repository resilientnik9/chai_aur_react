// import logo from './logo.svg';
// import './App.css';

import Chai from "./Chai"; // here the reference variable where we import should be same as the tag name we use inside the return statement. Also, the tag name should start with captial letter in order to distinguish it with html tags
function App() {
  return (
    <>
      <Chai />
        <h1>
          Hello Nik, let's complete this react series!!
        </h1>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>
    //       "hey nik, this is your first react app edit in 2024!!"
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
