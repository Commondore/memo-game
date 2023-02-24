import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchScores, postScoresApi } from '@/api';
import Counter from '@/components/Counter';
import { useParams } from '@/hooks/useParams';

import shuffleData from '../../data/data';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import { Board } from './Board';
import styles from './style.module.scss';

export const Game = () => {
  const [shuffle, setShuffle] = useState(shuffleData);
  const [count, setCount] = useState(0);
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [visible, setVisible] = useState(false);

  const { name, email } = useParams();
  const navigate = useNavigate();

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
      setVisible(true);
      (async () => {
        const scores = await fetchScores();
        console.log(scores);
        if (!scores) {
          const record = { name, email, count };
          postScoresApi(record);
        } else {
        }
      })();
    }
  }, [matched]);

  const onOpen = (index) => {
    if (opened.includes(index)) return;
    if (opened.length === 2) setOpened([]);
    setOpened((data) => [...data, index]);

    setCount((v) => v + 1);
  };

  const resetGame = () => {
    setVisible(false);
    setOpened([]);
    setMatched([]);
    setShuffle((data) => data.sort(() => Math.random() - 0.5));
  };

  return (
    <div className={styles.game}>
      <h1>Пользователь {name}</h1>
      <Counter count={count}>Количество действий:</Counter>
      <Board data={shuffle} open={onOpen} opened={opened} matched={matched} />

      <Modal isVisible={visible} close={() => setVisible(false)}>
        <div>
          <h2>Игра окончена!</h2>
          <div>
            <Button type="danger" click={resetGame}>
              Сыграть еще
            </Button>
            <Button type="success" click={() => navigate('/scores')}>
              Таблица рекордов
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
