import style from './Header.module.scss';
import logo from '../../assets/img/Logo Full.svg';

const Header = () => {
  return (
    <div className={style.flexContainerCenter}>
      <header className={style.containerHeader}>
        <div>
          <nav className={style.containerNavigation}>
            <div className={style.flexContainer}>
              <div>
                <button className={style.logoBtnNavigation}>
                  <img className={style.imgLogo} src={logo} alt="logo" />
                  <h4 className={style.logoTextH4}>Superdao</h4>
                </button>
              </div>
              <div className={style.containerBtnSmall}>
                <button className={style.btnNavigation}>Product</button>
                <button className={style.btnNavigation}>Use cases</button>
                <button className={style.btnNavigation}>Learn</button>
                <button className={style.btnNavigation}>About</button>
                <button className={style.btnNavigation}>Jobs</button>
              </div>
            </div>
            <div>
              <button className={style.btnLogin}>Login</button>
            </div>
            <div className={style.containerBtnSmallBurger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0.25C1.30964 0.25 0.75 0.809644 0.75 1.5C0.75 2.19036 1.30964 2.75 2 2.75H16C16.6904 2.75 17.25 2.19036 17.25 1.5C17.25 0.809644 16.6904 0.25 16 0.25H2ZM0.75 8C0.75 7.30964 1.30964 6.75 2 6.75H16C16.6904 6.75 17.25 7.30964 17.25 8C17.25 8.69036 16.6904 9.25 16 9.25H2C1.30964 9.25 0.75 8.69036 0.75 8ZM0.75 14.5C0.75 13.8096 1.30964 13.25 2 13.25H16C16.6904 13.25 17.25 13.8096 17.25 14.5C17.25 15.1904 16.6904 15.75 16 15.75H2C1.30964 15.75 0.75 15.1904 0.75 14.5Z"
                  fill="#FFCF01"
                />
              </svg>
            </div>
          </nav>
          <div className={style.bannerContainer}>
            <div>
              <h1 className={style.bannerH1Text}>The easiest way to start a DAO</h1>
              <h6 className={style.bannerH6Text}>
                An all-in-one platform to start, manage and grow a decentralized autonomous
                organization
              </h6>
              <button className={style.btnStart}>Get started</button>
              <div className={style.btnScrollContainer}>
                <button className={style.btnScroll}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none">
                    <path
                      opacity="0.6"
                      d="M2 1.5L12 10L22.5 1.5"
                      stroke="#425870"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 14L12 22.5L22.5 14"
                      stroke="#425870"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
