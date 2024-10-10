import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/forms.css'
import data from '../src/app/data/citiesandstates.json'
import Loading from '../components/loading'


const FormsPage = () => {
    const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm({mode: "onSubmit"})
    const [states, setStates] = useState([])
    const [cities, setCities] = useState("")
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setStates(data)
        setTimeout(() => {
            setLoading(true)
        }, 5000);
    }, [states])

    

    const onSubmit = (res, e) => {
        e.target.reset()
    }

    const generateCode = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      };

    const mystates = states.length > 0 && states.map(items => (
        <option key={items.id} value={items.departamento}>{items.departamento}</option>
    ))

    const handlerOnChange = (e) => {
        const stateSelected = e.target.value;
        const citiesSet = states.filter(item => item.departamento === stateSelected);
        setCities(citiesSet)
    }


    const mycities = cities.length > 0 && cities.map(items => (
        <option key={items.id} value={items.ciudad}>{items.ciudad}</option>
    ))


    

    
    


    return (
<>
    {!loading ?
    <Loading/> : 
    <div className='form-container'>
          <form onSubmit={handleSubmit(onSubmit)} className='form-content'>
            <h1>Inscripción</h1>
              <section className='form-section-data_basic'>   
                  <div className='form-section-info'>
                      <input id="name" type="text" placeholder=' ' {...register('name', {required: true, pattern: {value: /^[A-Za-z\s]+$/i}})}/>
                      <label htmlFor="name "className='form-label-placeholder'>Nombre</label>
                  </div>
                  <div className='form-section-info'>
                      <input type="text" placeholder=' ' {...register('lastname', {required: true, pattern: {value: /^[A-Za-z\s]+$/i}})}/>
                      <label className='form-label-placeholder'>Apellido</label>
                  </div>
                  <div className='form-section-info'>
                      <select {...register('type', {required: true})}>
                          <option value="" disabled>Tipo de documento</option>
                          <option value="cedula de ciudadania">Cedula de ciudadania</option>
                          <option value="cedula de extranjeria">Cedula de extranjeria</option>
                          <option value="pasaporte">Pasaporte</option>
                      </select>
                  </div>
                  <div className='form-section-info'>
                      <input type='number' placeholder=' ' {...register('id', {required: true, pattern: {value: /^[0-9]+$/i}})}/>
                      <label className='form-label-placeholder'>No. Cedula</label>
                  </div>
                  
                  <div className='form-section-info'>
                      <input type='number' placeholder=' ' {...register('phone', {required: true, pattern: {value: /^[0-9]+$/i}})}/>
                      <label className='form-label-placeholder'>Celular</label>
                  </div>
                  <div className='form-section-info'>
                      <input type='email' placeholder=' ' {...register('email', {required: true, pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}})}/>
                      <label className='form-label-placeholder'>Correo Electronico</label>
                  </div>
                  <div className='form-section-info-select'>
                      <label>Departamento</label>
                      <select {...register("state", {required: true, onChange: handlerOnChange})}>
                          <option value="" disabled>Elige un Departamento</option>
                          {mystates}
                      </select>
                      
                  </div>
                  <div className='form-section-info-select'>
                      <label>Ciudad</label>
                      <select {...register("city", {required: true})}>
                          <option value="" disabled>Elige una Ciudad</option>
                          {mycities}
                      </select>
                      
                  </div>
              </section>
              <section className='form-section-data_basic_second'>
                  <div className='form-section-info-check'>
                      <input type='checkbox' {...register("confirm", {required: true})}/>
                      <label>Acepta los términos y condiciones</label>
                  </div>
              </section>
              <input type="submit" value="Enviar datos" onClick={() => {
                if(isValid){
                    const generatedCode = generateCode(10);
                    setCode(generatedCode); 
                }
              }}/>
          </form>
          
          {code && (
            <div className='form-close-code-content'>
                <h3>Este es tu código para participar en el concurso</h3>
                <div className='form-close-code-code'><p>Generated Code: </p><p>{code}</p></div>
            </div>
            )}
      </div>
}    
    
    
</>
     
    )
  }

export default FormsPage