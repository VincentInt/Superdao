import style from './NFTCard.module.scss';

const NFTCard = ({ img, price, name, number }) => {
  return (
    <div className={style.NFTCardContainer}>
      <div className={style.imgContainer}>
        <img className={style.img} src={img} alt="icon_card" />
      </div>
      <div className={style.textContainer}>
        <p className={style.numberCards}>Demo DAO {number} of 1000</p>
        <h3 className={style.nameCard}>{name}</h3>
        <div className={style.containerFlexText}>
          <h3 className={style.priceMatic}>{price} MATIC</h3>
          <p className={style.priceUSD}>({`${price * 1.599} USD`})</p>
        </div>
        <button className={style.btnCardShoping}>Purchase</button>
      </div>
    </div>
  );
};
export default NFTCard;
