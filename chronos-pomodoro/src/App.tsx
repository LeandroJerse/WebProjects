import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';
export function App() {
  console.log('App');
  return (
    <div>
      <Heading />
      <p>Este é um cronômetro de pomodoro.</p>
    </div>
  );
}
