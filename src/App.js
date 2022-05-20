import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Incredecre from './components/Incredecre';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
 const [mode,setmode] =useState('light');
 const [alert,setAlert]=useState(null);

 const showAlert=(message,type)=>{
      setAlert({
                msg:message,
                type:type
              })

      setTimeout(() => {
          setAlert(null);
      }, 2000);

 }
 const toggleMode=()=>{
      if(mode==='light'){
          setmode('dark')
          document.body.style.backgroundColor='#042743';
          showAlert("Dark mode has been enabled","success");
      }
      else{
          setmode('light')
          document.body.style.backgroundColor='white'
          showAlert("ligth mode has been enabled","success");
      }
 }
  return (
    <> 
    <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}  about="About"/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter,Remove extra spaces" mode={mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
