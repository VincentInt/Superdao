import imgAvatarIcon1 from '../../../../assets/img/Img.svg';
import imgAvatarIcon2 from '../../../../assets/img/Img-1.svg';
import imgAvatarIcon3 from '../../../../assets/img/Img-2.svg';
import imgAvatarIcon4 from '../../../../assets/img/Img-3.svg';
import imgAvatarIcon5 from '../../../../assets/img/Img-4.svg';
import imgAvatarIcon6 from '../../../../assets/img/Img-5.svg';
import imgUserIcon from '../../../../assets/img/MyImg.svg';
import style from './AppDemo.module.scss';
import { useState } from 'react';
import Servers from './Servers/Servers';
import NavServer from './NavServer/NavServer';
import ContentServer from './ContentServer/ContentServer';

const AppDemo = () => {
  const [avatarChannel, setAvatarChannel] = useState([
    imgAvatarIcon1,
    imgAvatarIcon2,
    imgAvatarIcon3,
    imgAvatarIcon4,
    imgAvatarIcon5,
    imgAvatarIcon6,
  ]);
  
  const [myAvatar, setMyAvatar] = useState(imgUserIcon);
  return (
    <div className={style.containerWindowApp}>
      <Servers avatarChannel={avatarChannel} myAvatar={myAvatar}/>
      <NavServer avatarChannel={avatarChannel}/>
      <ContentServer/>
    </div>
  );
};

export default AppDemo;
