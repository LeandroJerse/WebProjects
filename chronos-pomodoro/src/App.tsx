import { Timer, TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';
export function App() {
  return (
    <div>
      <Heading>
        Pomodoro Timer
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Este é um cronômetro de pomodoro.</p>
    </div>
  );
}
