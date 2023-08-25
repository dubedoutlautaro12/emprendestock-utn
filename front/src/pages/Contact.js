import "../styles/Contact.css";
import React, { useState } from 'react';
import axios from "axios";

const Contact = (props) => {

    const initialForm = {
        nomrbre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false)
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState(initialForm)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('')
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message)
        if (response.data.error === false) {
            setFormData(initialForm);
        }
        
    }

    // const alertDiv = document.createElement('div');
    // alertDiv.classList.add('alerta')
    // alertDiv.textContent = response.data.message
    // document.body.appendChild(alertDiv);
    
    // if (response.data.error === false) {
    //     setFormData(initialForm);
    // }
      
    return (
        <main className="mainform">
            <form className="formulario" action="/contact" method="post" onSubmit={handleSubmit}>
                <h2>CONTACTO</h2>
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>

                <p>
                    <label for="mail">Mail</label>
                    <input type="text" name="mail" value={formData.mail} onChange={handleChange} />
                </p>

                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Escriba aqui su respuesta..."></textarea>
                </p>

                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>

                <p className="acciones">
                    <input type="submit" value="Enviar" />
                </p>

            </form>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}

            <div className="nosotros">
                <h2>TE VAS A COMUNICAR CON:</h2>
                <div className="personas">
                    <div className="persona-1">

                        <img src="images/persona-1.jpg" alt="logo"></img>
                        <h2>Dubedout Lautaro</h2>
                        <p>Soy Lautaro, un apasionado de la tecnología y la creatividad. Mi camino me ha llevado a sumergirme en el mundo de la programación,
                            donde cada línea de código es un desafío emocionante y una oportunidad para crear soluciones innovadoras. Actualmente, estoy persiguiendo mi formación en programación en la UTN, donde estoy adquiriendo habilidades sólidas para dar vida a ideas y proyectos digitales. Mi determinación y sed de conocimiento son mis motores mientras trabajo hacia un futuro donde la tecnología y la creatividad convergen en nuevas y emocionantes formas.</p>
                    </div>
                    <div className="persona-2">
                        <img src="images/persona-2.PNG" alt=""></img>
                        <h2>Juan Ramirez</h2>
                        <p>
                            Soy Juan, un profesional versátil con una pasión por la estrategia y la comunicación. Como licenciado en marketing, he explorado las dinámicas de cómo las marcas se conectan con sus audiencias y cómo se forjan relaciones significativas en un mundo en constante cambio. Mi trayectoria no solo me ha brindado conocimientos sólidos en marketing, sino también la habilidad de adaptarme y prosperar en entornos diversos. Cada desafío es una oportunidad para innovar y crear conexiones significativas entre las marcas y las personas.
                            Con esta mentalidad, sigo explorando nuevas formas de impactar y cautivar en el mundo del marketing.
                        </p>
                    </div>
                </div>



            </div>



        </main>

    )
}

export default Contact;