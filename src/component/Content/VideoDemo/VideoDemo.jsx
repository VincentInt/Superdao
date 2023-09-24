import style from './VideoDemo.module.scss';
import AppDemo from './AppDemo/AppDemo';

const VideoDemo = () => {
  return (
    <div className={style.ContainerVideoDemoCenter}>
      <div className={style.ContainerVideoDemo}>
        <div className={style.titleContainer}>
          <svg
            className={style.svgTitle}
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="56"
            viewBox="0 0 69 56"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.02254 38.642C8.99475 38.3743 8.76914 38.1709 8.5 38.1709C8.23086 38.1709 8.00525 38.3743 7.97746 38.642L7.56219 42.6423C7.39281 44.274 6.10311 45.5637 4.47141 45.7331L0.471108 46.1484C0.203404 46.1761 0 46.4018 0 46.6709C0 46.94 0.203404 47.1657 0.471108 47.1934L4.47141 47.6087C6.10311 47.7781 7.39281 49.0678 7.56219 50.6995L7.97746 54.6998C8.00525 54.9675 8.23086 55.1709 8.5 55.1709C8.76914 55.1709 8.99475 54.9675 9.02254 54.6998L9.43781 50.6995C9.60719 49.0678 10.8969 47.7781 12.5286 47.6087L16.5289 47.1934C16.7966 47.1657 17 46.94 17 46.6709C17 46.4018 16.7966 46.1761 16.5289 46.1484L12.5286 45.7331C10.8969 45.5637 9.60719 44.274 9.43781 42.6423L9.02254 38.642Z"
              fill="#FFC803"
            />
            <path
              d="M50.9609 2L50.1333 9.97318C49.7387 13.7738 46.7347 16.7778 42.9341 17.1723L34.9609 18L42.9341 18.8277C46.7347 19.2222 49.7387 22.2262 50.1333 26.0268L50.9609 34L51.7886 26.0268C52.1831 22.2262 55.1872 19.2222 58.9878 18.8277L66.9609 18L58.9878 17.1723C55.1872 16.7778 52.1831 13.7738 51.7886 9.97317L50.9609 2Z"
              fill="#77E6FF"
              stroke="#77E6FF"
              strokeWidth="2.12532"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className={style.titleH1Text}>All the tools in one app</h1>
        </div>
        <div className={style.btnVideoDemoContainer}>
          <button className={style.btnVideoDemo}>NFT membership</button>
          <button className={style.btnVideoDemo}>Member directory</button>
          <button className={style.btnVideoDemo}>Treasury</button>
          <button className={style.btnVideoDemo}>Feed</button>
          <button className={style.btnVideoDemo}>Governance</button>
          <button className={style.btnVideoDemo}>App store</button>
        </div>
        <div className={style.containerAppDemo}>
          <AppDemo />
        </div>
        <div className={style.containerBtnWatch}>
          <button className={style.btnWatch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none">
              <g clipPath="url(#clip0_8758_23221)">
                <path
                  d="M22.6667 6.66669H9.33333C6.38781 6.66669 4 9.0545 4 12V20C4 22.9455 6.38781 25.3334 9.33333 25.3334H22.6667C25.6122 25.3334 28 22.9455 28 20V12C28 9.0545 25.6122 6.66669 22.6667 6.66669Z"
                  stroke="#FFCF01"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3359 12L20.0026 16L13.3359 20V12Z"
                  stroke="#FFCF01"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8758_23221">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Watch video
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDemo;
