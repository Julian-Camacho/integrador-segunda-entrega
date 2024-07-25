import { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../context/Context";

const URL = "https://6622ed3e3e17a3ac846e404e.mockapi.io/api";

export default function ProductDetail() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { addProductToOrder } = useOrder();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return (
      <div className="loader-container">
        <div>
          <FontAwesomeIcon
            className="loader"
            size="2xl"
            icon={faSpinner}
            spin
          />
        </div>
      </div>
    );
  }

  async function getProductById(id) {
    try {
      const response = await axios.get(`${URL}/products/${id}`);

      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Algo salió mal!",
        text: "No se pudo cargar el producto.",
        confirmButtonColor: "#2b285b",
      });
    }
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-picture">
          <img src={product?.picture} alt={product?.name} />
        </div>
        <div className="about-course">
          <h2>{product?.name}</h2>
          <div className="product-price">
            <h2> ${product?.price}</h2>
          </div>
          <p>{product?.description}</p>
          <div className="product-actions">
            <button onClick={() => addProductToOrder(product)}>
              <FontAwesomeIcon icon={faCartShopping} /> Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
