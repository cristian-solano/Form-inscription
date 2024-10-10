import React from 'react'
import '../styles/loading.css'

const Loading = () => {
  return (
    <div className='load-container'>
        <section className='loading'>
            <div className='load-content'>
                <div className='load-first'></div>
                <div className='load-second'></div>
                <div className='load-third'></div>
                
            </div>
            <div className='load-message'>
                <div className='load-message-content'>
                    <div className='load-message-title'>
                        <h3>Compañia de carros</h3>
                        <h1>Bienvenidos</h1>
                        <h1>Al Concurso</h1>
                    </div>
                    <div className='load-message-email'>
                        <p>www.compañiadecarros.com</p>
                    </div>
                </div>
                <div className='load-message-card'>
                    <h3>Haz parte del concurso</h3>
                    <h4>Registrate y obten un codigo para participar</h4>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Loading