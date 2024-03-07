import Input from './Input';
import Editor from './Editor';

interface FormInterface {
  Input: typeof Input;
  Editor: typeof Editor;
  // ... more form components like select, datepicker, etc..
}

const Form = {} as FormInterface;
Form.Input = Input;
Form.Editor = Editor;

export default Form;
