




import React from "react";


const ArticuloItem = (props) => {
    const { name, description, emprendimiento, imagen, valor, body } = props


    const linkemprendimiento = emprendimiento.replace('@', ''); 
    return (
        <div>
            <div className="contenedor-tarjetas">
                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src={imagen} alt="tarjeta" />
                            <div className="info-frontal">
                                <p className="valor">${valor}</p>
                                <p className="tono-dis">{emprendimiento}</p>
                            </div>
                            
                        </div>
                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>{name}</h2>
                                <p className="tono-dis">{description}</p>
                                <a href={`https://www.instagram.com/${linkemprendimiento}`} className="btn"> Lo quiero!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticuloItem;