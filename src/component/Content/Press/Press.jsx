import style from './Press.module.scss';
import imgBlockWorks from '../../../assets/img/image93.svg';
import imgDecrypt from '../../../assets/img/Vector.svg';
import imgTechCrunch from '../../../assets/img/TechCrunch-logo.svg';
import { useState } from 'react';

const Press = () => {
  const [cardPress, setCardPress] = useState([
    {
      id: 1,
      img: imgDecrypt,
      h5Text: `Superdao Raises $10.5 Million to Build an 'All-in-One' DAO Platform`,
      pText: `Superdao aims to make it easier for online communities to build and launch DAOs`,
      color: `#77E6FF`,
    },
    {
      id: 2,
      img: imgBlockWorks,
      h5Text: `The Y Combinator of Web3 Attracts Record Number of DAO Startups`,
      pText: `DAOs and related startups made up an “overwhelming number of applicants” for a Web3 accelerator’s cohort this year`,
      color: `#E2C1F9`,
    },
    {
      id: 3,
      img: imgTechCrunch,
      h5Text: `VC-backed DAO startups are racing to define what DAOs actually are`,
      pText: `Not all 'decentralized autonomous organizations' are autonomous... or decentralized`,
      color: `#DBE268`,
    },
  ]);
  return (
    <div className={style.containerCenterPress}>
      <div className={style.containerPress}>
        <div className={style.containerTitle}>
          <div className={style.containerFlexTitleText}>
            <h2 className={style.h2Text}>Press</h2>
            <svg
              className={style.svgStar}
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="59"
              viewBox="0 0 58 59"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.9611 44.4157C50.9365 44.1795 50.7375 44 50.5 44C50.2625 44 50.0635 44.1795 50.0389 44.4157L49.6725 47.9454C49.5231 49.3851 48.3851 50.5231 46.9454 50.6725L43.4157 51.0389C43.1795 51.0635 43 51.2625 43 51.5C43 51.7375 43.1795 51.9365 43.4157 51.9611L46.9454 52.3275C48.3851 52.4769 49.5231 53.6149 49.6725 55.0546L50.0389 58.5843C50.0635 58.8205 50.2625 59 50.5 59C50.7375 59 50.9365 58.8205 50.9611 58.5843L51.3275 55.0546C51.4769 53.6149 52.6149 52.4769 54.0546 52.3275L57.5843 51.9611C57.8205 51.9365 58 51.7375 58 51.5C58 51.2625 57.8205 51.0635 57.5843 51.0389L54.0546 50.6725C52.6149 50.5231 51.4769 49.3851 51.3275 47.9454L50.9611 44.4157Z"
                fill="#A36FFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9221 0.831367C15.8731 0.358948 15.475 0 15 0C14.525 0 14.1269 0.358948 14.0779 0.831367L13.345 7.89073C13.0461 10.7702 10.7702 13.0461 7.89073 13.345L0.831367 14.0779C0.358948 14.1269 0 14.525 0 15C0 15.475 0.358948 15.8731 0.831367 15.9221L7.89073 16.655C10.7702 16.9539 13.0461 19.2298 13.345 22.1093L14.0779 29.1686C14.1269 29.6411 14.525 30 15 30C15.475 30 15.8731 29.641 15.9221 29.1686L16.655 22.1093C16.9539 19.2298 19.2298 16.9539 22.1093 16.655L29.1686 15.9221C29.641 15.8731 30 15.475 30 15C30 14.525 29.6411 14.1269 29.1686 14.0779L22.1093 13.345C19.2298 13.0461 16.9539 10.7702 16.655 7.89073L15.9221 0.831367Z"
                fill="#C8D316"
              />
            </svg>
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
        <div className={style.containerCardPress}>
          {cardPress.map((item) => {
            return (
              <div key={item.id} style={{ background: `${item.color}` }} className={style.cardPress}>
                <div className={style.containerImgCardPress}>
                  <img className={style.imgCardPress} src={item.img} alt="icon" />
                </div>
                <div className={style.containerTextCard}>
                  <h5 className={style.h5Text}>{item.h5Text}</h5>
                  <p className={style.pText}>{item.pText}</p>
                </div>
                <button className={style.btnArrowRead}>
                  Read
                  <svg
                    className={style.svgArrow}
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.10915 1.30396L13 6.30396L8.10915 11.304L6.71548 9.96422L9.35459 7.26621H0V5.3417H9.35459L6.71548 2.64369L8.10915 1.30396Z"
                      fill="#10151A"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Press;
