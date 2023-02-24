import { useState } from 'react';

import Counter from '@/components/Counter';
import { useParams } from '@/hooks/useParams';

export const Game = () => {
  const [count, setCount] = useState(0);
  const { name, email } = useParams();

  return (
    <div>
      <h1>Пользователь {name}</h1>
      <Counter count={count}>Количество действий:</Counter>
    </div>
  );
};
