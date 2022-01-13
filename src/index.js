import hello from './hello'
import pngSrc from './assets/1.png'
import svgSrc from './assets/iconmonstr-bed-1.svg'
import txt from './assets/example.txt'
import jpgSrc from './assets/2.jpg'
import './style.css'
import './style.less'

const img = document.createElement('img')
img.src = pngSrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 600px'
img2.src = svgSrc
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.textContent = txt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width: 500px; height: 500px; display: block;'
img3.src = jpgSrc
document.body.appendChild(img3)

document.body.classList.add('hello')

hello()
