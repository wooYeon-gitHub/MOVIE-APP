import { createRouter } from '../core/kato'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.{0,}', component: NotFound } // * 정규식 표현으로 모든 정보를 찾고 아닐 경우를 반환.
])