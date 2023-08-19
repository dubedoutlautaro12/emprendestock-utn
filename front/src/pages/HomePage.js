
import '../styles/HomePage.css'

const HomePage = (props) => {

    return (
        <main className="holder">
            <h2>BIENVENIDOS</h2>

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>COMPRADORES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex iure tenetur dolorem, quas
                        exercitationem eveniet repudiandae enim fuga dicta molestias qui, ducimus nostrum officiis ea aut,
                        dignissimos hic culpa?
                    </p>
                    <a href="iniciarsession.html" className="iniciosession">INICIAR SESSION</a>
                    <a href="registrar.html" className="iniciosession">REGISTRAR</a>

                </div>
                <div className="bienvenidos">
                    <h2>EMPRENDEDORES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex iure tenetur dolorem, quas
                        exercitationem eveniet repudiandae enim fuga dicta molestias qui, ducimus nostrum officiis ea aut,
                        dignissimos hic culpa?
                    </p>
                    <a href="iniciarsession.html" className="iniciosession">INICIAR SESSION</a>
                    <a href="registrar.html" className="iniciosession">REGISTRAR</a>

                </div>
            </div>

            <h2>Podria Interesarte</h2>
            <div className='recomendado'>
                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src="images/aaa.PNG" alt="tarjeta" />
                        </div>

                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>Card Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src="images/aaa.PNG" alt="tarjeta" />
                        </div>

                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>Card Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src="images/aaa.PNG" alt="tarjeta" />
                        </div>

                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>Card Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src="images/aaa.PNG" alt="tarjeta" />
                        </div>

                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>Card Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, eros at posuere fringilla, turpis tortor efficitur velit, at fringilla tortor magna id quam.</p>
                                <a href="#" class="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;