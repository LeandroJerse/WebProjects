import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplates({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu></Menu>
      </Container>

      {children}

      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}
