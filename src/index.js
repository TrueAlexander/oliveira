import './styles/index.scss'
import 'animate.css'

import home from './components/home/home'
import obras from './components/obras/obras'
import opinions from './components/opinions/opinions'

import antiFouc from './antiFouc'
import headerWithScroll from './components/header/headerWithScroll'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

if (window.location.href.includes('index.html') 
    || window.location.href === "http://localhost:8080/"
    || window.location.href === "https://truealexander.github.io/oliveira/"
    ) {

  home()
  headerWithScroll()
  obras()
  opinions()
  
}

antiFouc()

