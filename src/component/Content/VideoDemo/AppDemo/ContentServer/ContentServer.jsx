import style from './ContentServer.module.scss';
import InfoServer from './InfoServer/InfoServer';
import NFTShop from './NFTShop/NFTShop';

const ContentServer = () => {
  return (
    <div className={style.containerContentServerBack}>
      <div className={style.containerContentServer}>
        <InfoServer />
        <NFTShop/>
      </div>
    </div>
  );
};

export default ContentServer;
