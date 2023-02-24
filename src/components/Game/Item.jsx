import {
  FaBasketballBall,
  FaDrupal,
  FaFirefox,
  FaFreebsd,
  FaGooglePlay,
  FaHotjar,
  FaQuestion,
} from 'react-icons/fa';

import styles from './style.module.scss';

export const Item = ({ name }) => {
  let icon = null;
  switch (name) {
    case 'ball':
      icon = <FaBasketballBall />;
      break;
    case 'google':
      icon = <FaGooglePlay />;
      break;
    case 'hot':
      icon = <FaHotjar />;
      break;
    case 'freebsd':
      icon = <FaFreebsd />;
      break;
    case 'firefox':
      icon = <FaFirefox />;
      break;
    case 'drupal':
      icon = <FaDrupal />;
      break;

    default:
      icon = <FaQuestion />;
  }
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <FaQuestion />
      </div>
      <div className={styles.back}>{icon}</div>
    </div>
  );
};
