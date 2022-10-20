/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
/* eslint-disable no-mixed-spaces-and-tabs */
class HeroBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero-inner">
      <h1 class="hero-title">Good Food, Good Taste</h1>
      <p class="hero-tagline">If you hungry, you don't drinking, but you must eating :)</p>
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img src='./images/hero-image_2-large.jpg' 
            alt="hero poster">
      </picture>
    </div>
  </div>`;
  }
}

customElements.define('hero-bar', HeroBar);

