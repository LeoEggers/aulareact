import HeaderClient from "../../components/HeaderClient";
import ProductCard from "../../components/ProductCard";
import BtnAzul from '../../components/btnAzul';
import BtnBranco from '../../components/btnBranco';
import { ProductDTO } from "../../models/product";
import './styles.css'

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "TV Irada!",
  imgUrl: "https://as2.ftcdn.net/v2/jpg/05/62/89/49/1000_F_562894938_QSc1V1soZOVP1zAK7QhAPtns5KyAapOq.jpg",
  price: 3000.90,
  categories: [
    {
      id: 2,
      name: "Computadores"
    },
    {
      id: 3,
      name: "Eletrônicos"
    }
  ]

}

export default function ProductDetails() {

    return (
      <>
        <body>
          <HeaderClient/>
          <main>
            <section id="product-details-section" className="dsc-container">
              <ProductCard product = {product}/>
              
              <div className="dsc-btn-page-container">
                
                <BtnAzul/>
                <BtnBranco/>
              </div>
            </section>
          </main>
        </body>
      </>
    );
  
  }