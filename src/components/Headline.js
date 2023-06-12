import { Component } from '../core/kato';

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline');
    this.el.innerHTML = /*html*/`
    <h1>
      <span>KATO</span><br>
      MOVIE WORLD
      </h1>
      <p>
      The OMDb API is a RESTful web service to obtain movie information, 
      all content and images on the site are contributed and maintained by our users.
      </p>
      `
  }
}