class CharArray{
  constructor(el, charCLass) {
    this.el = el;
    this.charCLass = charCLass;
  }
  getElem() {
    let element = document.querySelector(`.${this.el}`);
    return element;
  }
  getText() {
    let elText = this.getElem().textContent;
    let arr = elText.split(' ');
    this.getElem().innerHTML = '';
    return arr
  }
  getCharText() {
    let elText = this.getElem().textContent;
    let arr = elText.split('');
    this.getElem().innerHTML = '';
    return arr
  }
  elEach() {
    let el = this.getText();
    el.forEach((item) => {
      let span = document.createElement('span');
      span.innerHTML = ` ${item} `;
      span.className = `${this.charCLass}`
      this.getElem().appendChild(span);
    })
    return el;
  }
  elEachChar() {
    let el = this.getCharText();
    el.forEach((item) => {
      let span = document.createElement('span');
      span.innerHTML = ` ${item} `;
      span.className = `${this.charCLass}`
      this.getElem().appendChild(span);
    })
    return el;
  }
}

let text_1 = new CharArray('js-charArray', 'char-1');
let text_2 = new CharArray('charArray', 'char-2');
text_1.elEach();
text_2.elEachChar();


window.onload = () => {
  var tl = new TimelineMax();
  tl.staggerFromTo('.char-2', 1, {opacity: 0, bottom:-30}, {opacity: 1, bottom:0, ease: Back.easeOut.config(3)}, .18);
  tl.staggerFromTo('.char-1', 1, {opacity: 0, top:-50}, {opacity: 1, top:0, ease: Back.easeOut.config(3)}, .15);
 
};

