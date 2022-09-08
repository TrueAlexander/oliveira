import './styles/index.scss'
import 'animate.css'

import './components/header/header'
import './components/obras/obras'
import './components/opinions/opinions'



import scrollTo from './scrollTo'
import antiFouc from './antiFouc'

import AOS from 'aos'
import 'aos/dist/aos.css'



AOS.init();

antiFouc()
scrollTo()
