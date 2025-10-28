import { Timer, TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import { Container } from './components/container';

import './styles/global.css';
import './styles/theme.css';
export function App() {
  return (
    <>
      <Container>
        <Heading>
          <section>Logo</section>
        </Heading>
      </Container>
      <Container>
        <Heading>
          <section>MENU</section>
        </Heading>
      </Container>
      <Container>
        <section>FORMULÁRIO</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
