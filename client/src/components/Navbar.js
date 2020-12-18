import React,{useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../App'

export const Navbar = () => {
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  const renderList=()=>{
    if(state){
      return [
        <li><Link to="/uploadpost">Upload Content</Link></li>,
        //<li><Link to="/profile">Profile</Link></li>,
       <li> <button className="btn #4e342e brown darken-3" 
       onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push('/signin')
       }} >Logout
    
        </button></li>
      ]
    }else{
      return[
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }

  return (
    <div>
      <nav>
    <div class="nav-wrapper #4e342e brown darken-3">
      <Link to={state ? "/":"/signin"} class="brand-logo">Home</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       {renderList()}
       
      </ul>
    </div>
  </nav>
    </div>
  )
}
