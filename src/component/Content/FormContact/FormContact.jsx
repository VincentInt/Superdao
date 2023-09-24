import style from './FormContact.module.scss';
import imgBack from '../../../assets/img/lights.svg';
import { useState } from 'react';
const FormContact = () => {
  return (
    <div className={style.containerCenterFormContact}>
      <div className={style.containerFormContact}>
        <div className={style.containerForm}>
          <div className={style.containerFromText}>
            <h2 className={style.h2TitleText}>Weekly digest</h2>
            <h4 className={style.h4NewsText}>Latest news in DAOs and Web3</h4>
            <form className={style.form}>
              <input placeholder="Email" className={style.formEmail} type="email" />
              <input
                className={style.formBtnSubmit}
                onClick={(e) => e.preventDefault()}
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
