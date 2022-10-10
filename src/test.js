/*
({ ({values,errors,handleSubmit,handleChange,handleBlur,touched})=> (
      
      
  <form className='formulario' onSubmit{handleSubmit}>
        <div>
        <label htmlFor='nombre'>Nombre</label>
      <input 
      type='text' 
      id='nombre'
      name='nombre'
      placeholder='Andrés Francois'
      value={values.nombre}
      onChange={handleChange}
      onBlur={handleBlur}
      ></input>
      {touched.nombre && errors.nombre && <div className='error'>{errors.nombre} </div>}
        </div>
       <div>
       <label htmlFor='nombre'>Correo</label>
       <input 
      type='correo' 
      id='correo'
      name='correo'
      placeholder='andresfrancois@vand.com'
      value={values.correo}
      onChange={handleChange}
      onBlur={handleBlur}
      ></input>
         {touched.correo && errors.correo && <div className='error'>{errors.correo} </div>}
       </div>
       <button type='submit'>Enviar</button>
      {enviado && <p className='exito'>Formulario enviado</p>}
  </form>)
*/