import { useState, useEffect } from "react";
import axios from "axios"
import ArticuloItem from "../components/articulos/Articuloitem"

const Articulos = (props) => {
    const [loading, setLoading] = useState(false)
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
        const cargarArticulos = async () => {
            setLoading(true)
            const response = await axios.get('http://localhost:3000/api/articulos');
            setArticulos(response.data)
            setLoading(false)
        }
        cargarArticulos();
    }, []);


    return (

        <section className="holder">
            <div>
                <h2>NOVEDADES</h2>
            </div>
            <div className="holder-1">
                {loading ? (
                    <p>Cargando...</p>
            ) : (   
                    articulos.map(item => <ArticuloItem key={item.id}
                    name={item.nombre} description={item.descripcion}
                    emprendimiento={item.emprendimiento} imagen={item.imagen}
                    valor={item.valor}/>)
                )}
            </div>

        </section>



                    
    );
}

    

export default Articulos;