import { useState } from 'react';

import Counter from '@/components/Counter';
import { useParams } from '@/hooks/useParams';

import shuffleData from '../../data/data';
import { Board } from './Board';
import styles from './style.module.scss';

export const Game = () => {
  const [count, setCount] = useState(0);
  const { name, email } = useParams();

  return (
    <div className={styles.game}>
      <h1>Пользователь {name}</h1>
      <Counter count={count}>Количество действий:</Counter>
      <Board data={shuffleData} />
    </div>
  );
};
