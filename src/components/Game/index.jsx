import { useEffect, useState } from 'react';

import Counter from '@/components/Counter';
import { useParams } from '@/hooks/useParams';

import shuffleData from '../../data/data';
import { Board } from './Board';
import styles from './style.module.scss';

export const Game = () => {
  const [count, setCount] = useState(0);
  const { name, email } = useParams();
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (opened.length && opened.length === 2) {
      const first = shuffleData[opened[0]]; // ['ball', 'hot']
      const second = shuffleData[opened[1]];
      if (first === second) {
        setMatched((data) => [...data, first]);
      }
    }
  }, [opened]);

  useEffect(() => {
    if (matched.length === shuffleData.length / 2) {
      alert('game over');
    }
  }, [matched]);

  const onOpen = (index) => {
    if (opened.includes(index)) return;
    if (opened.length === 2) setOpened([]);
    setOpened((data) => [...data, index]);

    setCount((v) => v + 1);
  };

  return (
    <div className={styles.game}>
      <h1>Пользователь {name}</h1>
      <Counter count={count}>Количество действий:</Counter>
      <Board
        data={shuffleData}
        open={onOpen}
        opened={opened}
        matched={matched}
      />
    </div>
  );
};
