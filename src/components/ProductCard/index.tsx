import { ProductDTO } from '../../models/product';
import BtnEletronico from '../BtnEletronico';
import './style.css'

type Props = {
  product: ProductDTO;
}

export default function ProductCard({product}: Props){
    return(

        <div className="dsc-card dsc-mb20">
              <div className="dsc-product-details-top dsc-line-bottom">
                <img src={product.imgUrl} alt={product.description} />
              </div>
              <div className="dsc-product-details-bottom">
                <h3>{product.price.toFixed(2)}</h3>
                <h4>{product.name}</h4>
                <p>
                    {product.description}
                </p>
                <div className="dsc-category-container">
                  
                  <BtnEletronico name = "Eletrônicos"/>
                  <BtnEletronico name = "Computadores"/>
                </div>
              </div>
            </div>
        );
}
