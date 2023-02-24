import { Item } from './Item';
import styles from './style.module.scss';

export const Board = ({ data }) => {
  return (
    <div className={styles.board}>
      {data.map((item, index) => {
        return <Item key={index} name={item} />;
      })}
    </div>
  );
};
