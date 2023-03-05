import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";
import "logo-card/src/logo-card.js";
import "team-card/src/logo-card2.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <logo-card
      image="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png">
      hi</logo-card>
    <logo-card title="hi">hi</logo-card>
    <logo-card topText="hi">hi</logo-card>
    <logo-card subtitle="hi">hi</logo-card>
    <logo-card bottomText="hello">hi</logo-card>
    <logo-card2
      memeImage="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png">
      hi</logo-card2>
    <logo-card2 title="hi">hi</logo-card2>
    <logo-card2 memeTopText="hi">hi</logo-card2>
    <logo-card2 subTitle="hi">hi</logo-card2>
    <logo-card2 memeBottomText="hello">hi</logo-card2>
    `;
  }
}

customElements.define('card-list', CardList);