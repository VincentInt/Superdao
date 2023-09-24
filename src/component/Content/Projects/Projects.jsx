import style from './Projects.module.scss';
import ArtWorks from '../../../assets/img/Artworks.svg';

const Projects = () => {
  return (
    <div className={style.flexContainer}>
      <div className={style.TotalContainerProjects}>
        <div className={style.titleFlexContainer}>
          <svg
            className={style.svgBack}
            xmlns="http://www.w3.org/2000/svg"
            width="88"
            height="90"
            viewBox="0 0 88 90"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.1759 1.87338C44.1137 1.27498 43.6094 0.820312 43.0078 0.820312C42.4062 0.820312 41.9019 1.27498 41.8398 1.87338L40.9115 10.8152C40.5329 14.4626 37.6501 17.3454 34.0027 17.724L25.0609 18.6523C24.4625 18.7144 24.0078 19.2187 24.0078 19.8203C24.0078 20.4219 24.4625 20.9262 25.0609 20.9884L34.0027 21.9166C37.6501 22.2952 40.5329 25.1781 40.9115 28.8254L41.8398 37.7673C41.9019 38.3657 42.4062 38.8203 43.0078 38.8203C43.6094 38.8203 44.1137 38.3656 44.1759 37.7673L45.1041 28.8254C45.4827 25.1781 48.3656 22.2952 52.0129 21.9166L60.9548 20.9884C61.5531 20.9262 62.0078 20.4219 62.0078 19.8203C62.0078 19.2187 61.5532 18.7144 60.9548 18.6523L52.0129 17.724C48.3656 17.3454 45.4827 14.4626 45.1041 10.8152L44.1759 1.87338Z"
              fill="#4BE1F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.084 71.5265C79.053 71.2273 78.8008 71 78.5 71C78.1992 71 77.947 71.2273 77.916 71.5265L77.4519 75.9975C77.2626 77.8211 75.8211 79.2626 73.9975 79.4519L69.5265 79.916C69.2273 79.947 69 80.1992 69 80.5C69 80.8008 69.2273 81.053 69.5265 81.084L73.9975 81.5481C75.8211 81.7374 77.2626 83.1789 77.4519 85.0025L77.916 89.4735C77.947 89.7727 78.1992 90 78.5 90C78.8008 90 79.053 89.7727 79.084 89.4735L79.5481 85.0025C79.7374 83.1789 81.1789 81.7374 83.0025 81.5481L87.4735 81.084C87.7727 81.053 88 80.8008 88 80.5C88 80.1992 87.7727 79.947 87.4735 79.916L83.0025 79.4519C81.1789 79.2626 79.7374 77.8211 79.5481 75.9975L79.084 71.5265Z"
              fill="#F87388"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.084 55.5265C10.053 55.2273 9.80081 55 9.5 55C9.19919 55 8.94704 55.2273 8.91598 55.5265L8.45186 59.9975C8.26255 61.8211 6.82112 63.2626 4.99746 63.4519L0.526532 63.916C0.227334 63.947 0 64.1992 0 64.5C0 64.8008 0.227334 65.053 0.526532 65.084L4.99746 65.5481C6.82112 65.7374 8.26255 67.1789 8.45186 69.0025L8.91598 73.4735C8.94704 73.7727 9.19919 74 9.5 74C9.80081 74 10.053 73.7727 10.084 73.4735L10.5481 69.0025C10.7374 67.1789 12.1789 65.7374 14.0025 65.5481L18.4735 65.084C18.7727 65.053 19 64.8008 19 64.5C19 64.1992 18.7727 63.947 18.4735 63.916L14.0025 63.4519C12.1789 63.2626 10.7374 61.8211 10.5481 59.9975L10.084 55.5265Z"
              fill="#C8D316"
            />
          </svg>
          <h1 className={style.titleH1Text}>Ready for every project</h1>
        </div>
        <div className={style.flexContainerBtn}>
          <div className={style.containerBtnProjectType}>
            <button className={style.btnProjectType}>Investment DAO</button>
            <button className={style.btnProjectType}>Startup DAO</button>
            <button className={style.btnProjectType}>Service DAO</button>
            <button className={style.btnProjectType}>Community DAO</button>
            <button className={style.btnProjectType}>Impact DAO</button>
            <button className={style.btnProjectType}>DeFi DAO</button>
            <button className={style.btnProjectType}>
              <svg
                className={style.svgBtn}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M10 2L10.7524 9.24764L18 10L10.7524 10.7524L10 18L9.24764 10.7524L2 10L9.24764 9.24764L10 2Z"
                  stroke="#505F6D"
                  strokeWidth="2.27286"
                  strokeLinejoin="round"
                />
              </svg>
              More
            </button>
          </div>
        </div>
        <div className={style.containerWindow}>
          <div className={style.windowProject}>
            <img className={style.imgInWindow} src={ArtWorks} alt="img_artWorks" />
          </div>
        </div>
        <div className={style.containerflexCenterBtn}>
          <button className={style.btnAllProjects}>1000+ projects launched on Superdao</button>
        </div>
        <div className={style.containerDesignedForH1Text}>
          <svg
            className={style.svgDesignedFor}
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="57"
            viewBox="0 0 77 57"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.605 24.9145C60.5508 24.3948 60.1105 24 59.5854 24C59.0602 24 58.62 24.3948 58.5658 24.9145L57.7555 32.6798C57.425 35.8472 54.9085 38.3507 51.7247 38.6796L43.9192 39.4856C43.3969 39.5396 43 39.9775 43 40.5C43 41.0225 43.3969 41.4604 43.9192 41.5143L51.7247 42.3204C54.9085 42.6493 57.425 45.1528 57.7555 48.3202L58.5658 56.0855C58.62 56.6052 59.0602 57 59.5854 57C60.1105 57 60.5508 56.6052 60.605 56.0855L61.4153 48.3202C61.7458 45.1528 64.2623 42.6493 67.4461 42.3204L75.2515 41.5143C75.7739 41.4604 76.1708 41.0225 76.1708 40.5C76.1708 39.9775 75.7739 39.5396 75.2515 39.4856L67.4461 38.6796C64.2623 38.3507 61.7458 35.8472 61.4153 32.6798L60.605 24.9145Z"
              fill="#F87388"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2684 0.692806C13.2276 0.299123 12.8958 0 12.5 0C12.1042 0 11.7724 0.299123 11.7316 0.692806L11.1209 6.57561C10.8718 8.97516 8.97516 10.8718 6.57561 11.1209L0.692806 11.7316C0.299123 11.7724 0 12.1042 0 12.5C0 12.8958 0.299123 13.2276 0.692806 13.2684L6.57561 13.8791C8.97516 14.1282 10.8718 16.0248 11.1209 18.4244L11.7316 24.3072C11.7724 24.7009 12.1042 25 12.5 25C12.8958 25 13.2276 24.7009 13.2684 24.3072L13.8791 18.4244C14.1282 16.0248 16.0248 14.1282 18.4244 13.8791L24.3072 13.2684C24.7009 13.2276 25 12.8958 25 12.5C25 12.1042 24.7009 11.7724 24.3072 11.7316L18.4244 11.1209C16.0248 10.8718 14.1282 8.97516 13.8791 6.57561L13.2684 0.692806Z"
              fill="#C8D316"
            />
          </svg>
          <div>
            <h1 className={style.designedForH1Text}>Designed for the full journey</h1>
            <h1 className={style.designedForH1Text}>Organisation design</h1>
            <h1 className={style.designedForH1Text}>Smart contract development</h1>
            <h1 className={style.designedForH1Text}>Fundraising</h1>
            <h1 className={style.designedForH1Text}>Launch marketing</h1>
            <h1 className={style.designedForH1Text}>Member onboarding</h1>
            <h1 className={style.designedForH1Text}>Contributor management</h1>
            <h1 className={style.designedForH1Text}>DAO operations</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
