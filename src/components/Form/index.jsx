import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import styles from './style.module.scss';

export const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: '/game',
      search: '?' + createSearchParams(data),
    });
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Введите данные</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.group}>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Введите имя"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Введите имя"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className={styles.btn}>Войти</button>
        </div>
      </form>
    </div>
  );
};
