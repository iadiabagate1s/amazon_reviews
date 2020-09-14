import React,{useState, useEffect} from 'react'
import firebase from './services/firebase'
import Card from 'react-bootstrap/Card'
import uuid from 'react-uuid'
import { BsFillStarFill } from 'react-icons/bs'

import moment from 'moment'

export default function Reviews({count}) {
    const db = firebase.firestore();
   
    const [data, setData] = useState([])
// get data from database
    useEffect(() => {
        async function getRev(){
            let res = await db.collection("reviews").orderBy('timestamp','desc').get()
            console.log( res)
            setData(res.docs)
           
        }
        getRev()
      }, [count]);
   
    //if data received append element to dom
    if (data){
        console.log(data)
    return (
        <div className='reviews'>
           {/* slice data array and take top 3 and make card element   */}
           {data.slice(0,3).map(dtt => (
               <Card className='card' key={uuid()} border="primary" >
               <Card.Header style={{fontWeight:'800'}}>Rating: { Array.from(Array(parseInt(dtt.data().rating)),x => <BsFillStarFill/> )  }
               </Card.Header>
               <Card.Body>
                 <Card.Title> Device Variation: <b>{dtt.data().variation}</b></Card.Title>
                 <Card.Text>
                 Review: <b>{dtt.data().review} </b>
                 </Card.Text>
               </Card.Body>
           <Card.Footer className="text-muted" style={{border: 'none', backgroundColor :'white'}}>Date : {moment(dtt.data().timestamp).format('MMMM Do YYYY, h:mm:ss a')}</Card.Footer>
             </Card>

               
    )) }
        
           
             </div>
    )
    }
    else{
    return(
    <div className='reviews'>
        <h1>loading...</h1>
       


    </div>
    
    )
    }
}
