import './Home.css'
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';
import ProductList from '../../components/product-list/ProductList';

export default function Home(){
    
    const coursesSection = useRef(null);

    return (
        <>
            <section className="main-banner">
                        <h1 className="main-title">GALERIA GLAMOUR</h1>
                        <div className="slider">
                            <ul>
                                <li><img src="src\assets\Fondos\banner1.jpg" alt="Perchero" /></li>
                                <li><img src="src\assets\Fondos\banner3.jpg" alt="Perchero-2" /></li>
                                <li><img src="src\assets\Fondos\banner4.jpg" alt="Tienda" /></li>
                            </ul>
                        </div>
            </section>
            <div className="products-display" id="products-display" ref={coursesSection}>
                <ProductList/>
            </div>
            <section className="our-services">
                <div className="payment">
                    <FontAwesomeIcon icon={faCreditCardAlt} />
                    <h2>Todos los medios de pago</h2>
                </div>
                <div className="support">
                <FontAwesomeIcon icon={faHeadset} />
                    <h2>Soporte 24/7</h2>
                </div>
                <div className="locations">
                    <FontAwesomeIcon icon={faEarthAmericas} />
                    <h2>De Buenos Aires al  Mundo </h2>
                </div>
            </section>
        </>
    )
}