import style from './ChatContant.module.scss';

const ChatContant = () => {
  return (
    <div className={style.containerCenterChatContant}>
      <div className={style.containerChatContant}>
        <h2 className={style.h2Text}>What's your DAO idea?</h2>
        <h3 className={style.h3Text}>Let’s chat and see how we can help</h3>
        <div className={style.containerBtnContact}>
          <button className={style.btnContact}>
            <div className={style.containerFlex}>
              <div>
                <svg
                  className={style.svgIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none">
                  <path
                    d="M23.2363 4.33678L2.55131 12.3133C1.13965 12.8803 1.14781 13.6678 2.29231 14.0189L7.60298 15.6756L19.8903 7.92311C20.4713 7.56961 21.0021 7.75978 20.5658 8.14711L10.6106 17.1316H10.6083L10.6106 17.1328L10.2443 22.6068C10.781 22.6068 11.0178 22.3606 11.3188 22.0701L13.8983 19.5618L19.2638 23.5249C20.2531 24.0698 20.9636 23.7898 21.2098 22.6091L24.732 6.00978C25.0925 4.56428 24.1801 3.90978 23.2363 4.33678Z"
                    fill="#4D3705"
                  />
                </svg>
              </div>
              <div className={style.btnText}>
                <h4 className={style.h4Text}>Telegram</h4>
                <p className={style.pText}>@superdao_team</p>
              </div>
            </div>
          </button>
          <button className={style.btnContact}>
            <div className={style.containerFlex}>
              <div>
                <svg
                  className={style.svgIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0031 3.10645C7.98967 3.10645 3.10938 7.98674 3.10938 14.0002C3.10938 20.0137 7.98967 24.894 14.0031 24.894H18.2031C19.0005 24.894 19.6469 24.2476 19.6469 23.4502C19.6469 22.6529 19.0005 22.0065 18.2031 22.0065H14.0031C9.6636 22.0065 5.99688 18.3398 5.99688 14.0002C5.99688 9.66067 9.6636 5.99395 14.0031 5.99395C18.3427 5.99395 22.0094 9.66067 22.0094 14.0002V15.5017C22.0094 15.8013 21.8722 16.1202 21.6399 16.3673C21.4077 16.6142 21.1123 16.7565 20.8282 16.7565C20.544 16.7565 20.2486 16.6142 20.0164 16.3673C19.7841 16.1202 19.6469 15.8013 19.6469 15.5017V14.0002C19.6469 10.8847 17.1186 8.35645 14.0031 8.35645C10.8877 8.35645 8.35938 10.8847 8.35938 14.0002C8.35938 17.1157 10.8877 19.644 14.0031 19.644C15.4041 19.644 16.6968 19.1322 17.6828 18.2802C18.4577 19.1209 19.6126 19.644 20.8282 19.644C23.1242 19.644 24.8969 17.7774 24.8969 15.5017V14.0002C24.8969 7.98674 20.0166 3.10645 14.0031 3.10645ZM11.2469 14.0002C11.2469 12.4747 12.4776 11.244 14.0031 11.244C15.5287 11.244 16.7594 12.4747 16.7594 14.0002C16.7594 15.5258 15.5287 16.7565 14.0031 16.7565C12.4776 16.7565 11.2469 15.5258 11.2469 14.0002Z"
                    fill="#40354B"
                  />
                </svg>
              </div>
              <div className={style.btnText}>
                <h4 className={style.h4Text}>Email</h4>
                <p className={style.pText}>hello@superdao.co</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContant;
