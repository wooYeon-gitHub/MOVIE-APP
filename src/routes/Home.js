import { Component } from '../core/kato'

export default class Home extends Component {
  render() {
    this.el.innerHTML = '<h1>Hello wolrd</h1>'
  }
}