import React, {useState} from 'react';
import './index.css';
import ReviewForm from './ReviewForm'
import Reviews from './Reviews'
import Container from 'react-bootstrap/Container'



function App() {
  const [state, setState] = useState(1)
  let count = state
  console.log('this is the state', state)
  return (
    <>
      <Container fluid>
      <h3 className='sectitle'>Thanks for using our product leave a review</h3>
      
          <div className='formcont'><ReviewForm setState={setState} state={state} /></div>
    
    

      <h3 className='sectitle'>Recent Reviews</h3>
      <div className='revcont'><Reviews count={count}/></div>
    
   


    </Container>
    </>
  );
}

export default App;
