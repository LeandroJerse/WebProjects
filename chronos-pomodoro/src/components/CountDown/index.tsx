import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function CountDown() {
  const taskContext = useTaskContext;
  console.log(taskContext);
  return (
    <nav className={styles.countdown}>
      <div className={styles.countdownLink}>00:00</div>
    </nav>
  );
}
