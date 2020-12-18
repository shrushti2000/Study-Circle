import React, {useState,useEffect}from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css";


export const Uploadpost=()=>{
    const history=useHistory();
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[link,setLink]=useState("")


    const PostDetails=()=>{
        fetch("/createpost",{method:"post",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},
      body:JSON.stringify({
            title,
            body,
            document:link    
          
      })}).then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.error){
              M.toast({html:data.error})
          }
          else{
              M.toast({html:"Created Post Successfully",classes:"#388e3c green darken-2"})
              history.push('/')
          }
      }).catch(err=>{
          console.log(err)
      })
      }
    


    return(
        <div className="card input-filed"  style={{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"}}>
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
       
         <input type="text" placeholder="description"  value={body} onChange={(e)=>setBody(e.target.value)}/>
         <input type="text" placeholder="resource link"  value={link} onChange={(e)=>setLink(e.target.value)}/>
        
         <button className="btn #4e342e brown darken-3" onClick={()=>PostDetails()} >Share</button>
   
      </div>
    )
}
