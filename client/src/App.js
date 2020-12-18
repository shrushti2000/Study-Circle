import React, { useEffect, createContext, useReducer ,useContext} from 'react';
import logo from './logo.svg';
import { Navbar } from './components/Navbar.js';
import { Signup } from './components/Signup.js';
import { Home } from './components/Home.js';
import { Uploadpost } from './components/Uploadpost.js';
import Signin from './components/Signin.js';
import Profile from './components/Profile.js';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom'
import './App.css';
import { reducer, initialState } from './reducers/userReducer';

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      history.push('/signin')
    }
  },[])
  return (
    <Switch>
      <Route exact path='/' ><Home /></Route>
      <Route path='/signin' ><Signin /></Route>
      <Route path='/signup' ><Signup /></Route>
      <Route path='/uploadpost' ><Uploadpost /></Route>
     
    </Switch>
  )

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
