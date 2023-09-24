import style from './Assistants.module.scss';
import imgAssis1 from '../../../assets/img/SergeyZanozin.svg';
import imgAssis2 from '../../../assets/img/IMG_4390-Edit.svg';
import imgAssis3 from '../../../assets/img/image121.svg';
import imgAssis4 from '../../../assets/img/image124.svg';
import imgAssis5 from '../../../assets/img/image125.svg';
import { useState } from 'react';

const Assistants = () => {
  const [assis, setAssis] = useState([
    { id: 1, img: imgAssis1 },
    { id: 2, img: imgAssis2 },
    { id: 3, img: imgAssis3 },
    { id: 4, img: imgAssis4 },
    { id: 5, img: imgAssis5 },
  ]);
  return (
    <div className={style.containerCenterAssistants}>
      <div className={style.containerAssistants}>
        <h2 className={style.h2TitleText}>Help at every step</h2>
        <div className={style.containerFlexAssistantsPerson}>
          {assis.map((item) => {
            return (
              <div key={item.id} className={style.cardWindowAssisPerson}>
                <img className={style.imgCard} src={item.img} alt="icon_assis" />
              </div>
            );
          })}
        </div>
        <div className={style.containerFlexTag}>
          <h2 className={style.h2TextTag}>Success managers</h2>
          <svg
            className={style.svgIconAssis}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none">
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              fill="#4BE1F4"
            />
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              stroke="#4BE1F4"
              strokeWidth="2.3097"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className={style.h2TextTag}>Knowledge base</h2>
          <h2 className={style.h2TextTag}>Chat support</h2>
          <svg
            className={style.svgIconAssis}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none">
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              fill="#A36FFE"
            />
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              stroke="#A36FFE"
              strokeWidth="2.3097"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className={style.h2TextTag}>Tutorials</h2>
          <svg
            className={style.svgIconAssis}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none">
            <path
              d="M17 2L17.78 9.51397C18.1475 13.0542 20.9458 15.8525 24.486 16.22L32 17L24.486 17.78C20.9458 18.1475 18.1475 20.9458 17.78 24.486L17 32L16.22 24.486C15.8525 20.9458 13.0542 18.1475 9.51397 17.78L2 17L9.51397 16.22C13.0542 15.8525 15.8525 13.0542 16.22 9.51397L17 2Z"
              fill="#C8D316"
              stroke="#C8D316"
              strokeWidth="2.3097"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className={style.h2TextTag}>Templates</h2>
          <h2 className={style.h2TextTag}>Smart Contract development</h2>
          <svg
            className={style.svgIconAssis}
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="34"
            viewBox="0 0 33 34"
            fill="none">
            <path
              d="M16.125 1.875L16.9115 9.45159C17.2821 13.0214 20.1036 15.8429 23.6734 16.2135L31.25 17L23.6734 17.7865C20.1036 18.1571 17.2821 20.9786 16.9115 24.5484L16.125 32.125L15.3385 24.5484C14.9679 20.9786 12.1464 18.1571 8.57658 17.7865L1 17L8.57659 16.2135C12.1464 15.8429 14.9679 13.0214 15.3385 9.45158L16.125 1.875Z"
              fill="#FF8135"
            />
            <path
              d="M16.125 1.875L16.9115 9.45159C17.2821 13.0214 20.1036 15.8429 23.6734 16.2135L31.25 17L23.6734 17.7865C20.1036 18.1571 17.2821 20.9786 16.9115 24.5484L16.125 32.125L15.3385 24.5484C14.9679 20.9786 12.1464 18.1571 8.57658 17.7865L1 17L8.57659 16.2135C12.1464 15.8429 14.9679 13.0214 15.3385 9.45158L16.125 1.875Z"
              stroke="#FF8135"
              strokeWidth="1.99624"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className={style.h2TextTag}>Events</h2>
          <h2 className={style.h2TextTag}>Education</h2>
          <svg
            className={style.svgIconAssis}
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="34"
            viewBox="0 0 33 34"
            fill="none">
            <path
              d="M16.125 1.875L16.9115 9.45159C17.2821 13.0214 20.1036 15.8429 23.6734 16.2135L31.25 17L23.6734 17.7865C20.1036 18.1571 17.2821 20.9786 16.9115 24.5484L16.125 32.125L15.3385 24.5484C14.9679 20.9786 12.1464 18.1571 8.57658 17.7865L1 17L8.57659 16.2135C12.1464 15.8429 14.9679 13.0214 15.3385 9.45158L16.125 1.875Z"
              fill="#FFFBA8"
              stroke="#FFFBA8"
              strokeWidth="1.99624"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className={style.h2TextTag}>Guides</h2>
        </div>
      </div>
    </div>
  );
};

export default Assistants;
