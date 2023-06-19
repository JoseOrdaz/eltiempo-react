const Formulario = () => {
  return (

    <div className="contenedor">
        <form action="">
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id="ciudad" 
                    name="ciudad"    
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">País</label>
                <select  
                    id="pais" 
                    name="pais"    
                >
                    <option value="">Selecione un país</option>
                    <option value="ES">España</option>
                    <option value="FR">Francia</option>
                    <option value="DE">Alemania</option>
                    <option value="PT">Portugal</option>
                    <option value="IT">Italia</option>
                    <option value="SE">Suecia</option>
                    <option value="RO">Rumanía</option>
                    <option value="DK">Dinamarca</option>
                    <option value="BE">Bélgica</option>


                </select>
            </div>
            <input 
                type="submit"
                value="Consultar clima"
            />
        </form>
    </div>

    )
}

export default Formulario