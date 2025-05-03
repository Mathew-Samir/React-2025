import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import LC from './components/card/LC';
import UeAPI from './components/card/UeAPI';

function App() {
  const[cardToggel, setCardToggel] = useState(true);
  const [state, setState]= useState([
    {
    name:'Mathew',
    age: 24,
    adress: 'Shobra', 
    phone: '01283227339'
  },
  {
    name:'Samir',
    age: 54,
    adress: 'Cairo', 
    phone: '01187256331'
  },
  {
    name:'Ragheb',
    age: 84,
    adress: 'Egypt', 
    phone: '01283503834'
  }]);

  // const girls =[
  //   {
  //   name:'nermeen',
  //   age: 24,
  //   adress: 'Shobra', 
  //   phone: '01283227339'
  // },
  // {
  //   name:'farah',
  //   age: 54,
  //   adress: 'Cairo', 
  //   phone: '01187256331'
  // },
  // {
  //   name:'abeer',
  //   age: 84,
  //   adress: 'Egypt', 
  //   phone: '01283503834'
  // }];

  const deleteHandular = (e, clickidx)=>{
    // const deleteOberation = state.filter((e,idx)=> idx !== clickidx);
    // setState(deleteOberation)
    // console.log(deleteOberation)

    setState((prev)=>{
      return prev.filter((e,idx)=> idx !== clickidx);
    })
  }

  // const toggelHandular = ()=>{
  //   console.log("Clicked");
  //   setCardToggel(!cardToggel);
  // }
 
  return (
    <>
      <div className='container1'>
        {/* <UeAPI/> */}
        <hr/>
        <h1>Boys Data</h1>
        <button style={{marginBottom:"20px"}} onClick={()=> setCardToggel(!cardToggel)}>
          {cardToggel ? "Hide Names" : "Show Names"}
        </button>
        <div className={cardToggel ? "show" : "hide"}>
          <Card nameList = {state} color="#5959f5" deleteFunc={deleteHandular}/>
        </div> 
        
        {/* <h1>Girls Data</h1>
        <Card nameList = {girls} color="#fd5f5f"/> */}
      </div>
       {/* <hr/>
      <LC/> */}
    </>
    
  );
}

export default App;
