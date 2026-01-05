import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainTemplates } from '../../_templates/MainTemplates';
import { MainForm } from '../../components/MainForm';
export function Home() {
  return (
    <MainTemplates>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplates>
  );
}
