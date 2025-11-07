import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

import './styles/global.css';
import './styles/theme.css';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export function App() {
  //Sempre que usar useStates, não usar atribuição diretamente
  const [number, setNumber] = useState(() => {
    console.log('Lazy initialization');
    return 0;
  });
  function handleClick() {
    setNumber((prevState) => prevState + 1);
  }
  return (
    <>
      <Heading>
        Número = <span id="number">{number}</span>
      </Heading>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              id="myInput"
              type="text"
              labelText={number.toString()}
              placeholder="Type Something"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles></Cycles>
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>
      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}
