import './App.css';
import Card from './components/Card';

function App() {
  const names =[
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
  }]

 
  return (
    <>
      <div className='container'>
        <Card nameList = {names}/>
      </div>
    </>
    
  );
}

export default App;
