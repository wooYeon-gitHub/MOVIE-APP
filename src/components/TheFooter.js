import { Component }  from '../core/kato'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/wooYeon-gitHub/Movie-app">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/wooYeon-gitHub">
          ${new Date().getFullYear()}
          KATO
        </a>
      </div>
    `
  }
}