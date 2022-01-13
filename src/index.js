import hello from './hello'
import pngSrc from './assets/1.png'
import svgSrc from './assets/iconmonstr-bed-1.svg'
import txt from './assets/example.txt'

const img = document.createElement('img')
img.src = pngSrc
document.body.append(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 600px'
img2.src = svgSrc
document.body.append(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.textContent = txt
document.body.append(block)

hello()
