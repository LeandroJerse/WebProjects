import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    <form className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="myInput"
          type="text"
          labelText="Task"
          placeholder="Type Something"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min </p>
      </div>
      <div className="formRow">
        <Cycles />
      </div>
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
