import React, { useState } from 'react';
import Meta from './Meta';
import '../styles/MisMetas.css';

function MisMetas() {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');

    const agregarNota = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminar = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    const MetaCompleta = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id ));
    };

    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
            <div className='contenedor-Agregar'>
                <button className='boton' onClick={agregarNota}>Agregar</button>
                {notas.map((nota) => (
                    <Meta
                        key={nota.id}
                        nota={nota}
                        onDelete={eliminar}
                        onDelete1={MetaCompleta}
                    />
            ))}</div>
                
        </div>
    );
}

export default MisMetas;