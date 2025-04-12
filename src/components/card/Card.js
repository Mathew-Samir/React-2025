import React from 'react'
import style from './Card.module.css';

const Card = ({nameList, color, deleteFunc}) => {
    const carde = nameList.map(({name,age,adress,phone},idx)=>(
        <div className={style.cardWrap} key={idx} style={{backgroundColor: color , color:"white"}}>
          <div>Name: {name}</div>
          <div>Age: {age}</div>
          <div>Adress: {adress}</div>
          <div>Phone: {phone}</div>
          <div className={style.deleteBtn} onClick={(e)=> deleteFunc(e,idx)}>x</div>
        </div>
    ));
  return (
    <>
    {carde}
    </>
  )
}

export default Card