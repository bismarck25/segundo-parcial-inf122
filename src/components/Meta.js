import React, { useState } from 'react';
import '../styles/Meta.css';
function Meta({ nota, onDelete, onEdit }) {
    const [Eliminado, setEliminado] = useState(false);
    const [Completo, setCompletado] = useState(nota.texto);

    return (
        <div>
            (
                <div className='contenedor-nota'>
                    <p className='meta'>{nota.texto}</p>
                    <button className='boton2' onClick={() => onDelete(nota.id)}></button>
                    <button className='boton3' onClick={() => setCompletado(true)}></button>
                </div>
            )
        </div>
    );
}

export default Meta;