import style from './Servers.module.scss';
import imgPrivateMessege from '../../../../../assets/img/Logo.svg';
import imgShapeIcon from '../../../../../assets/img/Shape.svg';
import imgInfoIcon from '../../../../../assets/img/info.svg';

const Servers = ({ avatarChannel, myAvatar }) => {
  return (
    <div className={style.containerChannel}>
      <div className={style.containerBtn}>
        <button className={style.btnUsersChannel}>
          <img className={style.imgBtnUserChannel} src={imgPrivateMessege} alt="Private_Messege" />
        </button>
        {avatarChannel.map((item, index) => {
          return (
            <div key={index} className={style.linkContainer}>
              <button key={index} className={style.btnUsersChannel}>
                <img className={style.imgBtnUserChannel} src={item} alt="icon_channel" />
              </button>
            </div>
          );
        })}
        <button className={style.btnUI}>
          <img className={style.totalIconUi} src={imgShapeIcon} alt="Shape_icon" />
        </button>
        <div className={style.userBtnContainer}>
          <button className={style.btnUI}>
            <img  className={style.totalIconUi} src={imgInfoIcon} alt="Info_icon" />
          </button>
          <button className={style.btnUsersChannel}>
            <img className={style.imgBtnUserChannel} src={myAvatar} alt="My_avatar" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servers;
