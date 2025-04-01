import React from 'react'

const Card = ({nameList}) => {
    const catde = nameList.map(({name,age,adress,phone},idx)=>(
        <div className='cardWrap' key={idx}>
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