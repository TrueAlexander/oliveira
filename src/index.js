import './styles/index.scss'
import 'animate.css'


import './components/obras/obras'
import './components/opinions/opinions'



// import scrollTo from './scrollTo'
import antiFouc from './antiFouc'
import headerWithScroll from './components/header/headerWithScroll'

import AOS from 'aos'
import 'aos/dist/aos.css'



AOS.init();

antiFouc()
headerWithScroll()
