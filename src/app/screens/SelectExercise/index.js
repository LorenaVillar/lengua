import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';


import actions from '../../../redux/Auth/actions';
import Routes from '@/constants/routes';
import styles from './styles.module.scss';

function SelectExercise() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSelection = (event) => {
    history.push(event.target.id);
  }

  const handleLogout = (event) => {
    dispatch(actions.logoutUser());
    history.push(Routes.HOME);
  }

  const handleViewScore = () => {
    history.push(Routes.SCORES);
  }

  return (
    <div className='item-1 full-height column space-around center p-left-10 p-right-10'>
      <h1 className={`title row center full-width m-top-6 ${styles.title}`}>Selecciona un ejercicio</h1>
      <div className='column middle center'>
        <button className={`button full-width title-medium-b primary m-bottom-5 p-left-5 p-right-5 ${styles.button}`} id={Routes.SYLLABLES} onClick={handleSelection}>SÍLABAS</button>
        <button className={`button full-width title-medium-b primary m-bottom-5 p-left-5 p-right-5 ${styles.button}`} id={Routes.WORDS} onClick={handleSelection}>PALABRAS INCORRECTAS</button>
        <button className={`button full-width title-medium-b primary m-bottom-5 p-left-5 p-right-5 ${styles.button}`} id={Routes.READING} onClick={handleSelection}>COMPRENSIÓN LECTORA</button>
        <button className={`button secondary full-width title-medium-b p-left-5 p-right-5 ${styles.button}`} onClick={handleViewScore}>VER PUNTAJES</button>
      </div>
      <button className={`button half-width title-medium-b secondary m-bottom-5 p-left-5 p-right-5 ${styles.button}`} id={Routes.HOME} onClick={handleLogout}>SALIR</button>
    </div>
  );
}

export default SelectExercise;
