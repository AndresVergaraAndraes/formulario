import React, {useState} from 'react'
import './Formulario.css'
import {ErrorMessage, Formik,Form,Field} from 'formik';

function Formulario() {
  // set state guarda estado de envio del form
const [sent, setSent] = useState(false);
  return (

    <div className='contenedor'>
    <Formik
    //valores predeterminados en string vacio
    initialValues={{
      name: '',
      mail: ''
    }}
    //valida si los valores escritos por el usuario corresponden a un nombre y correo
    validate={
      values => {
        let error={};
        if(!values.name)
        error.name ='Ingrese su nombre'
        else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
          error.name = 'Solo puede escribir letras y espacio'
        }
        if(!values.mail)
        error.mail ='Ingrese un correo'
        else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
          error.mail = 'Ingrese un correo válido'
        }
        return error
      }
    }
    onSubmit={(values,{resetForm})=>{
      resetForm();
      setSent(true);
      setTimeout(()=> setSent(false),5000)
    }}
    >
  { ({errors})=> (
      
      
  <Form className='formulario'>
      <div>
        <label htmlFor='nombre'>Nombre</label>
          <Field 
            type='text' 
             id='name'
             name='name'
             placeholder='name lastname'
          />
  <ErrorMessage name='name' component={ () => (<div className='error'>{errors.name} </div> ) }/>
      </div>

      <div>
     <label htmlFor='correo'>Correo</label>
           <Field 
                type='mail' 
                id='mail'
                name='mail'
                placeholder='email@email.com'
    />
      <ErrorMessage name='mail' component={ () => (<div className='error'>{errors.mail} </div> ) }/>
     </div>

     <button type='submit'>Enviar</button>
    {sent && <p className='exito'>Formulario enviado</p>}
</Form>
 )
}

    </Formik>
    
    </div>
  )
}
export default Formulario
