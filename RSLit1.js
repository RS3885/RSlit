import {html, css, LitElement} from 'https://cdn.skypack.dev/pin/lit@v2.1.2-WTOYAiqbzXK0QOZjUNoy/mode=imports/optimized/lit.js';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello richy, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);
