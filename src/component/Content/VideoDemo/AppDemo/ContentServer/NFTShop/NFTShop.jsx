import NFTCard from '../../../../../UI/NFTCard/NFTCard';
import style from './NFTShop.module.scss';
import imgIconCard1 from '../../../../../../assets/img/Rectangle 301.svg';
import imgIconCard2 from '../../../../../../assets/img/Rectangle 301-1.svg';
import imgIconCard3 from '../../../../../../assets/img/Rectangle 301-2.svg';
import { useState } from 'react';

const NFTShop = () => {
  const [NFTCardState, setNFTCardState] = useState([
    { id: 1, img: imgIconCard1, price: 5000, name: `Core team`, number: 8 },
    { id: 2, img: imgIconCard2, price: 1000, name: `Contributor`, number: 4 },
    { id: 3, img: imgIconCard3, price: 100, name: `Member`, number: 112 },
  ]);
  return (
    <div className={style.containerNFTShop}>
      <div className={style.containerFlexTitleNFTShop}>
        <div className={style.titleText}>
          <h3 className={style.h3Text}>Membership NFTs</h3>
          <h4 className={style.membersNFTCard}>{NFTCardState.length}</h4>
        </div>
      </div>
      <div className={style.NFTCardContainer}>
        {NFTCardState.map((item)=>{
          return <NFTCard key={item.id} img={item.img} price={item.price} name={item.name} number={item.number} />
        })}
      </div>
    </div>
  );
};

export default NFTShop;
