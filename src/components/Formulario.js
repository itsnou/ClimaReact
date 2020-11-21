import React, {useState} from 'react';

const Formulario = () =>{

    // state del formulario
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    // extraer ciudad y pais
    const {ciudad, pais} = busqueda;

    // función que coloca los elementos en el state
    const handleChange = event=> {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [event.target.name] : event.target.value
        })
    }

    return(
        <form>
            <div className="input-field col 12">
                <input 
                    type="text"
                    name="ciudad"
                    id={ciudad}
                    onChange={handleChange}
                />

                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
        </form>
    );
}

export default Formulario;