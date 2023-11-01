import './App.css'
import Card from './Card'
import Style from './style.module.css'
import { useState } from 'react'



function App() {
  const [persona, setPersona] = useState({
    nombre: '',
    autor: '',
    libro: ''})
  const [error, setError] = useState(false);
  const [bueno, setBueno] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault()
    if ((persona.nombre.length > 3 && persona.nombre[0] !==" ") && (persona.libro.length > 5)) {
      setError(false)
      setBueno(true)
    } else {
      setError(true)
      setBueno(false)
    }

  }

  return (
    <>
      <div>
        <h1 className={Style.h1}>Libro Favorito</h1>
        {!bueno &&
          <form className={Style.form} onSubmit={handleSumbit}>
            <input type="text" value={persona.nombre} placeholder='Ingrese su Nombre' onChange={(e) => setPersona({ ...persona, nombre: e.target.value })} />
            <br />
            <input type="text" value={persona.libro} placeholder='Ingrese su libro Favorito' onChange={(e) => setPersona({ ...persona, libro: e.target.value })} />
            <br />
            <input type="text" value={persona.anios} placeholder='Ingresa el autor' onChange={(e) => setPersona({ ...persona, autor: e.target.value })} />
            <br />

            <button className={Style.button}> Enviar </button>
          </form>}


        {bueno && <Card nombre={persona.nombre} libro={persona.libro} autor={persona.autor} />}
        {error && <h4>Por favor chequea que la información sea correcta</h4>}
      </div>

    </>
  )
}

export default App
