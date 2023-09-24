import style from './BtnAppNav.module.scss';
const BtnAppNav = ({ children }) => {
  return <button className={style.btnAppNav}>{children}</button>;
};

export default BtnAppNav;
