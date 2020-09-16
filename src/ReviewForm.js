
import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import uuid from 'react-uuid'
import Button from 'react-bootstrap/Button'
import firebase from './services/firebase'

export default function ReviewForm({setState, state}) {
    const db = firebase.firestore();
    let confirmation =[]
    
    
    let ini = {
        rating:0,
        variation:'',
        review: '',
        timestamp: +new Date()
    }

    const [form, setForm] = useState(ini)
    const [msg , setMsg]= useState([])
    const [complete, setComp] = useState('nothing')
 

    let handleChange = (e) =>{
        const {name, value} =e.target

       

        setForm(form => ({
            ...form,
            [name]:value
        }))
        
    }


  

async function sendData(e){
    e.preventDefault()
   confirmation =[]
   setMsg([...confirmation])
   setComp('nothing')
// if all parts of formed filled out 
    if (form.rating && form.variation && form.review){
        setState(state + 1)
        setForm(ini)
        setComp('nothing')
        
        try{
            db.collection("reviews").doc(`${state}-${uuid()}`).set({
                 ...form
                 
             })
             return
         }
         catch(err){
             console.log(err)
         }     
    }
    // if see which ones haven't been filled out 
    setComp('missing')
    if (!form.rating) {
        confirmation.push('Rating required');
      }
      if (!form.variation) {
        confirmation.push('Variation required');
      }
      if (!form.reviews) {
        confirmation.push('Review required');
      }
      
   
      setMsg([...confirmation])
}


    return (
        <div className='form'>

            {complete == 'missing' ? 
             
             
             
             <p>
                
            <ul style={{listStyleType:'none'}}>
            {msg.map((ms, idx) =>
            <li className='msg'>{ms}</li>
            )}
            </ul>
            </p> 
            :
            <h1 style={{display : 'none'}}> Thank you</h1>
}

            <Form onSubmit={sendData}>

        <Form.Group controlId="formBasicRange">
    <Form.Label>Rating :{form.rating}</Form.Label>
            <Form.Control required onChange={handleChange} max={5} name='rating' value={form.rating}type="range" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Variation</Form.Label>
            <Form.Control required onChange={handleChange} name='variation' as="select">
            <option value="null">Choose...</option>
            <option value="Charcoal Fabric">Charcoal Fabric</option>
            <option value="Sandstone Fabric">Sandstone Fabric</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Walnut Finish">Walnut Finish</option>
            <option value="Heather Gray Fabric">Heather Gray Fabric</option>
            <option value="Oak Finish">Oak Finish</option>
            </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review</Form.Label>
            <Form.Control maxLength={500} onChange={handleChange} name='review' value={form.review} as="textarea" rows="5" />
            </Form.Group>

            <Button variant="outline-primary" size="md" type='submit' block> Submit</Button>
            </Form>


        </div>
    )
}
