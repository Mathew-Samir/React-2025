import './App.css';
import Card from './components/Card';

function App() {
  const boys =[
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
  }];

  const girls =[
    {
    name:'nermeen',
    age: 24,
    adress: 'Shobra', 
    phone: '01283227339'
  },
  {
    name:'farah',
    age: 54,
    adress: 'Cairo', 
    phone: '01187256331'
  },
  {
    name:'abeer',
    age: 84,
    adress: 'Egypt', 
    phone: '01283503834'
  }];

 
  return (
    <>
      <div className='container1'>
        <h1>Boys Data</h1>
        <Card nameList = {boys} color="#5959f5"/>
        <h1>Girls Data</h1>
        <Card nameList = {girls} color="#fd5f5f"/>
      </div>
    </>
    
  );
}

export default App;
