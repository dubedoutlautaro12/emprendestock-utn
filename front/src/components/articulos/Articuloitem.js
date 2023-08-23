




import React from "react";

const ArticuloItem = (props) => {
    const { name, description, emprendimiento, imagen, valor} =props

    return(
        <div className="articulos">
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>{emprendimiento}</h3>
            <img src="{imagen}"/>
            <p>{valor}</p>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr />
        </div>
    )
}

export default ArticuloItem;