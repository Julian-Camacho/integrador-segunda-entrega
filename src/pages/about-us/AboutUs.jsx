import './AboutUs.css'

export default function AboutUs(){
    return(
        
        <div className="about-us-container">
            <div className='about-us'>
                <div className='empresa'></div>
                <h2>¿Quiénes somos?</h2>
                <p>
                    Somos una tienda de ropa en línea que se especializa en ofrecer las últimas tendencias de moda para hombres y mujeres. Nuestro objetivo es brindar a nuestros clientes una experiencia de compra única y conveniente desde la comodidad de sus hogares.

                    En nuestra tienda, encontrarás una amplia selección de prendas de vestir de alta calidad, desde elegantes trajes y vestidos hasta ropa casual y accesorios de moda. Trabajamos con las mejores marcas y diseñadores para asegurarnos de que nuestros clientes siempre encuentren productos de moda actualizados y de excelente calidad.

                    Además de ofrecer una amplia variedad de productos, nos enorgullece brindar un excelente servicio al cliente. Nuestro equipo de atención al cliente está disponible para ayudarte en todo momento, ya sea que necesites asesoramiento sobre tallas, recomendaciones de estilo o ayuda con tu pedido. Estamos comprometidos a garantizar tu satisfacción y hacer que tu experiencia de compra sea lo más placentera posible. ¡Bienvenido a nuestra tienda de ropa en línea!
                </p>
                <h2>¿Dónde estamos?</h2>
                <p>
                    Nos encontramos en la ciudad de Buenos Aires.
                </p>
                <div className='detras'>
                    <h2>¿Quien está detras?</h2>
                    <img src="src\assets\Fondos\perfil.jpg" alt="Julián Camacho" />
                    <p>Hola! Yo soy Julián Camacho, estudiante del Bootcamp de Fullstack Developer de Educacion IT.</p>
                </div>
            </div>
        </div>
    )
}