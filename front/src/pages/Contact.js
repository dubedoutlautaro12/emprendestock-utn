import "../styles/Contact.css"
const Contact = (props) => {
    return(
        <main className="mainform">
        <form className="formulario">
                <h2>CONTACTO</h2>
            <p>
                <label for="nombre">Nombre</label>
                <input type="text" name="Mail" />
            </p>

            <p>
                <label for="nombre">Mail</label>
                <input type="text" name="Mail" />
            </p>

            <p>
                <label for="Propuesta">Propuesta</label>
                <textarea name="Propuesta" placeholder="Escriba aqui su respuesta..."></textarea>
            </p>

            <p className="acciones">
                <input type="submit" value="Enviar"/>
            </p>

        </form>

        <div className="nosotros">
            <h2>TE VAS A COMUNICAR CON:</h2>
            <div className="personas">
                <div className="persona-1">
                    Dubedout Lautaro
                    <img src="images/persona-1.jpg" alt="logo"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe fugit porro. Provident
                        repellat ex
                        aut error atque esse earum obcaecati, autem hic enim reprehenderit eius consequuntur libero
                        quasiperferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rerum
                        repudiandae. Ipsam expedita dignissimos id eveniet doloremque iure illum excepturi aut
                        voluptatibus esse, quam repudiandae nihil tempora enim aspernatur dolores!</p>
                </div>
                <div className="persona-2">
                    Juan Rodriguez
                    <img src="images/persona-2.PNG" alt=""></img>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum impedit suscipit maxime quas
                        consequuntur neque eveniet laborum nostrum possimus tenetur, atque, animi fuga autem, est nobis
                        neearum optio deleniti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero possimus
                        earum ex aut nesciunt iste quis voluptatum tempora qui, itaque eligendi sed odit assumenda error
                        ipsum modi velit? Nisi, quae.</p>
                </div>
            </div>



        </div>



    </main>

    )
}

export default Contact;