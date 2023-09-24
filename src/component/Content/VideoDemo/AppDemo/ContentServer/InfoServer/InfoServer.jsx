import style from './InfoServer.module.scss';
import imgBanner from '../../../../../../assets/img/banner.svg';
import imgAvatar from '../../../../../../assets/img/ImgAvatar.svg';
import imgTwiter from '../../../../../../assets/img/twitter2-24.svg';
import imgDiscord from '../../../../../../assets/img/discord-24.svg';
import imgTelegram from '../../../../../../assets/img/telegram-24.svg';
import imgInstagram from '../../../../../../assets/img/instagram-24.svg';
import imgShare from '../../../../../../assets/img/link-24.svg';
import imgCopy from '../../../../../../assets/img/copy.svg';

const InfoServer = () => {
  return (
    <div className={style.containerContentInfoServer}>
      <div>
        <div className={style.windowBanner}>
          <img className={style.banner} src={imgBanner} alt="banner" />
        </div>
        <div className={style.containerInfoServer}>
          <div className={style.containerFlexAvatarSection}>
            <img className={style.imgAvatar} src={imgAvatar} alt="avatar" />
            <div className={style.ContainerbtnSocialNetwork}>
              <div>
                <button className={style.btnSocialNetwork}>
                  <img className={style.iconImgSocial} src={imgTwiter} alt="icon" />
                </button>
              </div>
              <button className={style.btnSocialNetwork}>
                <img className={style.iconImgSocial} src={imgDiscord} alt="icon" />
              </button>
              <div>
                <button className={style.btnSocialNetwork}>
                  <img className={style.iconImgSocial} src={imgTelegram} alt="icon" />
                </button>
              </div>
              <div>
                <button className={style.btnSocialNetwork}>
                  <img className={style.iconImgSocial} src={imgInstagram} alt="icon" />
                </button>
              </div>
              <div>
                <button className={style.btnSocialNetwork}>
                  <img className={style.iconImgSocial} src={imgShare} alt="icon" />
                </button>
              </div>
            </div>
          </div>
          <div className={style.containerTextInfo}>
            <h2 className={style.h2NameText}>Demo DAO</h2>
            <button className={style.btnCopyName}>
              superdao.co/demodao <img className={style.imgCopy} src={imgCopy} alt="copy" />
            </button>
            <p className={style.pTextDescription}>
              Welcome to the Demo DAO 👋 Enjoy your experience of being a part of your first DAO
            </p>
            <div className={style.containerBtnOptional}>
              <button className={style.btnOptional}>Smart contract</button>
              <button className={style.btnOptional}>Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoServer;
