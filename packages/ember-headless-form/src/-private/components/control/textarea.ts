import Component from '@glimmer/component';
import { action } from '@ember/object';

export interface HeadlessFormControlTextareaComponentSignature {
  Element: HTMLTextAreaElement;
  Args: {
    // the following are private arguments curried by the component helper, so users will never have to use those

    /*
     * @internal
     */
    value: string;

    /*
     * @internal
     */
    name: string;

    /*
     * @internal
     */
    fieldId: string;

    /*
     * @internal
     */
    setValue: (value: string) => void;

    /*
     * @internal
     */
    invalid: boolean;

    /*
     * @internal
     */
    errorId: string;
  };
}

export default class HeadlessFormControlTextareaComponent extends Component<HeadlessFormControlTextareaComponentSignature> {
  @action
  handleInput(e: Event | InputEvent): void {
    this.args.setValue((e.target as HTMLTextAreaElement).value);
  }
}
