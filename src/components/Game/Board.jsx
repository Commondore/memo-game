import { Item } from './Item';
import styles from './style.module.scss';

export const Board = ({ data, open, opened, matched }) => {
  return (
    <div className={styles.board}>
      {data.map((item, index) => {
        return (
          <Item
            key={index}
            isActive={opened.includes(index) || matched.includes(item)}
            name={item}
            open={() => open(index)}
          />
        );
      })}
    </div>
  );
};
