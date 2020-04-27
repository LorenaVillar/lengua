import React from 'react';
import { useHistory } from "react-router-dom";

import styles from './styles.module.scss';
import logo from './assets/cat-looking.gif'
import Spacer from '@/app/components/Spacer';
import Routes from '@/constants/routes';

function Home() {
  const history = useHistory();

  const hanldeSubmit = () => {
    history.push("/sarasa");
  }

  const handleViewScore = () => {
    history.push(Routes.SCORES);
  }

  return (
    <div className={`item-1 full-height row p-left-10 p-right-10 ${styles.mainContainer}`}>
      <div className='item-1 column bottom'>
        <img className='full-width' src={logo} alt="loading..." />
      </div>
      <div className='item-1 column middle'>
        <h1 className='title'>Hola ! Como te llamas ?</h1>
        <Spacer height={70}/>
        <form className='column' onSubmit={hanldeSubmit}>
          <input className={`title half-width ${styles.input}`} type="text" name="name" placeholder='Nombre'/>
          <Spacer height={35}/>
          <input className={`title half-width ${styles.input}`} type="text" name="lastname" placeholder='Apellido'/>
          <Spacer height={70}/>
          <input className={`button primary ${styles.button}`} type="submit" value="INGRESAR" />
        </form>
        <Spacer height={35}/>
        <button className={`button secondary ${styles.button}`} onClick={handleViewScore}>VER PUNTAJES</button>
      </div>
    </div>
  );
}

export default Home;