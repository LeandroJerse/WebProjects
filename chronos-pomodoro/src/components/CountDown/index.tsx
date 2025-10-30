import styles from './styles.module.css';

export function CountDown() {
  return (
    <nav className={styles.countdown}>
      <div className={styles.countdownLink}>00:00</div>
    </nav>
  );
}
