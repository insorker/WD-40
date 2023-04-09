import { WDBody, WDElem, WDComponent } from './component'

export class WDBox extends WDComponent {
  body: WDBody
  elem: WDElem

  constructor(elem: WDElem) {
    super();

    const offset = elem.offset()!;
    const width  = elem.width()!;
    const height = elem.height()!;

    this.body = Matter.Bodies.rectangle(
      offset.left + width / 2, offset?.top + height / 2, width, height
    );
    this.elem = elem;

    // restyle element with absolute position
    this.elem.css({
      'position': 'absolute',
      'top': offset.top,
      'left': offset.left,
      'width': width,
      'height': height,
      'background': 'hsl(0, 0%, 96%)',
      'border-radius': '4px',
      'box-shadow': '0px 0px 10px rgba(0, 0, 0, 25%)'
    });

    // replace the original element with empty div
    // move the original element to body
    let replaceElem = 
      $('<div></div>').css({
        'width': width,
        'height': height,
      }).attr(
        "WD-40-disable", "true"
      );
    let parentElem = $('body');
    this.reposition(replaceElem, parentElem);
  }

  render() {
    const { x, y } = this.body.position;
    const angle = this.body.angle;
  
    this.elem.css({
      'top': `${y - this.elem.height()! / 2}px`,
      'left': `${x - this.elem.width()! / 2}px`,
      'transform': `rotate(${angle}rad)`
    })
  }
}