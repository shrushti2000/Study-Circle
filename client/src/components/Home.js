import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../App';

export const Home = () => {
    const [data,setData]=useState([]);
    const {state,dispatch}=useContext(UserContext);
    useEffect(()=>{
        fetch('/allpost',{ method:"GET",headers:{
            Authorization:"Bearer "+localStorage.getItem("jwt")
        }}).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
        })
    },[])



    return (
        <div className="home">
           
          {
              data.map(item=>{
                  return (
                    <div className="card home-card">
                    <h5 style={{padding:"5px"}}>{item.postedBy.name}</h5>
                    <div className="card-content">
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                        <p><a href={`${item.document}`} target="_blank">{item.document}</a></p>
                        
    
    
                    </div>
                </div>
                  )
              })
          }
           
        </div>
    )
}
