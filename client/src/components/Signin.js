
import React ,{useState,useContext} from 'react';
import {UserContext} from '../App';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css";




export const Signin = () => {
    const {state,dispatch}=useContext(UserContext)
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const history=useHistory();
    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"invalid email",classes:"#388e3c green darken-2"})
           //alert("invalid email") 
           return
        }
        fetch('/signin',{method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email,
            password
        })}).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
               M.toast({html:data.error,classes:"#388e3c green darken-2"})
               // alert(data.error)
            }else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"signed in successfully!",classes:"#388e3c green darken-2"})
               // alert(data.message)
               history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    
    }
    


    
    return (
        <div className="mycard">
             <div className="card auth-card">
                <h2 className="title">Student Share</h2>
                <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
               
                <button className="btn #4e342e brown darken-3" onClick={()=>PostData()} >Login
    
                </button>
                <h5>
                    <Link className="donthaveacc" to="/signup">Don't have an Account ?</Link>
                </h5>
         </div>       
        
      </div>
      )
        
}

export default Signin;
