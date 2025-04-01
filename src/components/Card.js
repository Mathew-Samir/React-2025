import React from 'react'

const Card = ({nameList, color}) => {
    const catde = nameList.map(({name,age,adress,phone},idx)=>(
        <div className='cardWrap' key={idx} style={{backgroundColor: color , color:"white"}}>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Adress: {adress}</div>
          <div>Phone: {phone}</div>
        </div>
    ));
  return (
    <>
    {catde}
    </>
  )
}

export default Card