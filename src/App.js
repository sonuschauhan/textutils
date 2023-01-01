
// import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light";

    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Text-Utils - Word counter, Remove extra spaces" mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
        {/* <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <About/>
        <TextForm heading="Enter your text below to analyze" mode={mode} showAlert={showAlert} /> 
        </div> */}
    </>
  );
}

export default App;
