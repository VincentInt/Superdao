import style from './Works.module.scss';
import imgTitleStar from '../../../assets/img/Group5601.svg';
import imgTools1 from '../../../assets/img/Frame2091.svg';
import imgTools2 from '../../../assets/img/Frame5608.svg';
import imgTools3 from '../../../assets/img/Avatar.svg';
import imgTools4 from '../../../assets/img/icon_opensea.svg';
import { useState } from 'react';

const Works = () => {
  const [tools, setTools] = useState([
    { id: 1, img: imgTools3, name: 'Ethereum' },
    { id: 2, img: imgTools2, name: 'Polygon' },
    { id: 3, img: imgTools4, name: 'Gnosis Safe' },
    { id: 4, img: imgTools1, name: 'Snapshot' },
    { id: 5, img: imgTools3, name: 'ENS' },
    { id: 6, img: imgTools4, name: 'OpenSea' },
  ]);
  return (
    <div className={style.containerFlexWorksTools}>
      <div className={style.containerWorksTools}>
        <div className={style.containerTextTitle}>
          <h2 className={style.h2TextTitle}>Works with</h2>
          <img className={style.imgTitleStar} src={imgTitleStar} alt="star" />
        </div>
        <div className={style.containerFlexTools}>
          {tools.map((item) => {
            return (
              <div key={item.id} className={style.containerToolsTotal}>
                <div className={style.tools}>
                  <img className={style.imgToolsIcon} src={item.img} alt="icon_tools" />
                </div>
                <h3 className={style.h3TextTools}>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Works;
