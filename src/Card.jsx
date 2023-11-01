import React from 'react'
import Style from './style.module.css'

const Card = ({nombre, libro, autor}) => {
  return (
    <div className={Style.divCard}>
      <h3>Hola {nombre}</h3>
      <h4>Tu libro Favorito es</h4>
      <h3>{libro}</h3>
      <h4>El autor del libro {libro} es {autor} </h4>
    </div>
  )
}

export default Card