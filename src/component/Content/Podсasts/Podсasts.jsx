import style from './Podсasts.module.scss';
import imgPomp from '../../../assets/img/Rectangle39403.svg';
import imgUnStopPable from '../../../assets/img/Rectangle39403(1).svg';
import imgZimaRed from '../../../assets/img/Rectangle39403(2).svg';
import { useState } from 'react';
const Podсasts = () => {
  const [cardPodсasts, setCardPodсasts] = useState([
    {
      id: 1,
      img: imgPomp,
      h5Text: `Understanding DAOs with Yury Lifshits`,
      pText: `The Pomp Podcast by Anthony Pompliano`,
      button: `Listen`
    },
    {
      id: 2,
      img: imgUnStopPable,
      h5Text: `Everything You Need to Know About DAOs with Yury Lifshits from Superdao`,
      pText: `The Unstoppable Podcast by Josh Gordon`,
      button: `Watch`
    },
    {
      id: 3,
      img: imgZimaRed,
      h5Text: `VC-backed DAO startups are racing to define what DAOs actually are`,
      pText: `Not all 'decentralized autonomous organizations' are autonomous... or decentralized`,
      button: `Listen`
    },
  ]);
  return (
    <div className={style.containerCenterPodcasts}>
      <div className={style.containerPodcasts}>
        <div className={style.containerTitle}>
          <div className={style.containerFlexTitleText}>
            <svg
              className={style.svgStar}
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="55"
              viewBox="0 0 61 55"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5758 0.969928C18.5186 0.418772 18.0541 0 17.5 0C16.9459 0 16.4814 0.418772 16.4242 0.969928L15.5692 9.20585C15.2205 12.5652 12.5652 15.2205 9.20585 15.5692L0.969928 16.4242C0.418772 16.4814 0 16.9459 0 17.5C0 18.0541 0.418772 18.5186 0.969928 18.5758L9.20585 19.4308C12.5652 19.7795 15.2205 22.4348 15.5692 25.7941L16.4242 34.0301C16.4814 34.5812 16.9459 35 17.5 35C18.0541 35 18.5186 34.5812 18.5758 34.0301L19.4308 25.7942C19.7795 22.4348 22.4348 19.7795 25.7941 19.4308L34.0301 18.5758C34.5812 18.5186 35 18.0541 35 17.5C35 16.9459 34.5812 16.4814 34.0301 16.4242L25.7942 15.5692C22.4348 15.2205 19.7795 12.5652 19.4308 9.20585L18.5758 0.969928Z"
                fill="#4BE1F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.0225 37.642C52.9948 37.3743 52.7691 37.1709 52.5 37.1709C52.2309 37.1709 52.0052 37.3743 51.9775 37.642L51.5622 41.6423C51.3928 43.274 50.1031 44.5637 48.4714 44.7331L44.4711 45.1484C44.2034 45.1761 44 45.4018 44 45.6709C44 45.94 44.2034 46.1657 44.4711 46.1934L48.4714 46.6087C50.1031 46.7781 51.3928 48.0678 51.5622 49.6995L51.9775 53.6998C52.0052 53.9675 52.2309 54.1709 52.5 54.1709C52.7691 54.1709 52.9948 53.9675 53.0225 53.6998L53.4378 49.6995C53.6072 48.0678 54.8969 46.7781 56.5286 46.6087L60.5289 46.1934C60.7966 46.1657 61 45.94 61 45.6709C61 45.4018 60.7966 45.1761 60.5289 45.1484L56.5286 44.7331C54.8969 44.5637 53.6072 43.274 53.4378 41.6423L53.0225 37.642Z"
                fill="#FFC803"
              />
            </svg>
            <h2 className={style.h2Text}>Podcasts</h2>
          </div>
          <button className={style.btnArrowSell}>
            Sell All
            <svg
              className={style.svgArrow}
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.35671 1.52124L15 7.35457L9.35671 13.1879L7.74862 11.6249L10.7938 8.4772H0V6.23195H10.7938L7.74862 3.08426L9.35671 1.52124Z"
                fill="#8395A7"
              />
            </svg>
          </button>
        </div>
        <div className={style.containerCardPodcasts}>
        {cardPodсasts.map((item)=>{
          return(
            
            <div key={item.id}  className={style.cardPodcasts}>
              <div className={style.containerImgCardPodcasts}>
                <img className={style.imgCardPodcasts} src={item.img} alt="icon" />
              </div>
              <div className={style.containerTextCard}>
                <h5 className={style.h5Text}>{item.h5Text}</h5>
                <p className={style.pText}>
                  {item.pText}
                </p>
              </div>
              <button className={style.btnArrowRead}>
                {item.button}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.10915 1.30396L13 6.30396L8.10915 11.304L6.71548 9.96422L9.35459 7.26621H0V5.3417H9.35459L6.71548 2.64369L8.10915 1.30396Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
     
          )
        })}
       </div>
      </div>
    </div>
  );
};

export default Podсasts;
