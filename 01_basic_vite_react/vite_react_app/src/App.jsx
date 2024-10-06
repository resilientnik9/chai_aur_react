// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// in basic "create react app", by convention, it's good to name the files which return some html as .jsx extension, whereas the files with only javascript as .js extension
import Chai from "./Chai.jsx"; // this is same for both create react app and vite, it has to be capital case

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div>
    // these are called fragments <></>, since we are only allowed to return 1 html element, hence instead of using <div> everytime, react said you can use <></>
    <>
      <Chai /> 
      <h1>"hey!!"</h1>
    </>
    // </div>
  )
}

export default App
