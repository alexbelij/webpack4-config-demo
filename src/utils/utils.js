import css from '../css/utils.scss'
import kenan from '../images/kenan.jpg'

const img = document.createElement('img')
img.src= kenan
document.body.appendChild(img)

let a = 40

console.log(a)

var obj = {
  foo: 2,
  text: function () {
    var foo =3
    var self = this

    console.log(this.foo)
    console.log(self.foo)
    (function () {
      foo= 4
      console.log(this.foo)
      console.log(self.foo)
    }())
  }
}
obj.text()