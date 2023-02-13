import style from "./CardProduct.module.css";
import { pumaArlequin } from "../Carousel/data.js";
import cart from '../../assets/cart.svg';

export default function CardProductPumaArlequin() {
  return (<>
    <h1 className={style.encabezado}>Puma Arlequin</h1>
    {pumaArlequin.map(item => (
      <div key={item.id} className={style.target}>
        <div className={style.background}>
          <img className={style.CardProduct} src={item.src} alt={item.name} />
          <div className={style.name}>
            <h1 className={style.nameL}>{item.name}</h1>
          </div>
          <div className={style.cod}>
            <h2 className={style.codL}>{item.category}</h2>
          </div>
          <div className={style.cost}>
            <h3 className={style.costL}>{item.price}</h3>
          </div>
          <div className={style.shopping}>
            <img className={style.cards} src={cart} alt="Shopping cart"></img>
          </div>
        </div>
      </div>
    ))}
  </>)
}