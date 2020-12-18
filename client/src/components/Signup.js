import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css";

export const Signup = () => {
    const history=useHistory()
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"invalid email",classes:"#388e3c green darken-2"})
           //alert("invalid email") 
           return
        }
        fetch("/signup",{method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name,
            email,
            password
        })}).then(res=>res.json())
        .then(data=>{
            if(data.error){
               M.toast({html:data.error,classes:"#388e3c green darken-2"})
               // alert(data.error)
            }else{
                M.toast({html:data.message,classes:"#388e3c green darken-2"})
               // alert(data.message)
               history.push('/signin')
            }
        }).catch(err=>{
            console.log(err)
        })

    }




    return (
        <div className="mycard">
        <div className="card auth-card ">
          <h2 className="title">Student Share</h2>
          <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
         
          <button className="btn #4e342e brown darken-3" onClick={()=>PostData()}
         
          >
              SignUP
          </button>
          <h5>
              <Link to="/signin">Already have an account ?</Link>
          </h5>
           
             
       
          
  
      </div>
    </div>
    )
}
