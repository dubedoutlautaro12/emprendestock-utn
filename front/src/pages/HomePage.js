import '../styles/HomePage.css'
<head>
    <link rel='stylesheet' href='/stylesheets/style.css' />
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap" value='s' rel="stylesheet" />

</head>

const HomePage = (props) => {

    return (
        <main className="holder">

            <h1>BIENVENIDOS!</h1>

            <div className="columnas">
                <div className="bienvenidos">
                    <h2>SOMOS EMPRENDE STOCK</h2>
                    <p>
                        Tenes un emprendimiento?
                        Comparti tus productos con el mundo.
                    </p>
                    <p>
                        Necesitas comprar algo?
                        Descubri aqui los productos más originales.
                    </p>
                    <p className='cursive'> DESCUBRI COMPRA/VENDE DISFRUTA </p>
                </div>
            </div>

            <h2>Podria Interesarte</h2>
            <div className='recomendado'>

                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src="images/tazas.PNG" alt="tarjeta" />
                        </div>

                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>TAZA DE CERAMICA</h2>
                                <p className="tono-dis">tacitas para ponerle onda a tus meriendas/desayunos😎🌼</p>
                                <a href="/articulos" class="btn">Ver Mas!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tarjeta">
                    <div class="tarjeta-interna">
                        <div class="tarjeta-frente">
                            <img src="images/mate.PNG" alt="tarjeta" />
                        </div>

                        <div class="tarjeta-atras">
                            <div class="tarjeta-contenido">
                                <h2>Mate con fundita!</h2>
                                <p className="tono-dis">🌸🄼🄰🅃🄴 🄵🄻🄾🅁🌸
                                    El fiel compañero, ese que es bienvenido siempre🤗, haga frío🥶 , calor🥵, llueva 🌧o truene🌩.
                                    🏷Mate de Algarrobo 🧉➕funda tejida a mano en algodón 100% 🧶 y alfombrita💕 posa mate.
                                    Incluye Bombilla pintada 🎨 de 🎁❗️</p>
                                <a href="/articulos" class="btn">Ver mas!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;