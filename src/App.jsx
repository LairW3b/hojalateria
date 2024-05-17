//import img from '../public/img/banio_pintura.webp'
//import Test from './components/Test'
import './styles/App.scss'
import { db } from "./data/db"
import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Servicio from './components/Servicio'
import Footer from './components/Footer'
import Promociones from './components/Promociones'

function App() {

 const [data, setData] = useState(db)

  //una vez que el componente este listo seteo la información
  //Recomendado para trabajar con API
  /* useEffect(() => {
    setData(db)
  }, []) */

  return (
    <>
      <Header />
      <Banner />
      <Promociones />

      {data.map((prestaciones) => (

        <Servicio 
          key={prestaciones.id}
          prestaciones={prestaciones}
        />

      ))}
      <Footer />
    </>
  )
}

export default App
