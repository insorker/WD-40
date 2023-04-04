import WDComponent from './component'

export class WDBox implements WDComponent {
  body: Matter.Body
  elem: JQuery<HTMLElement>

  constructor(elem: JQuery<HTMLElement>) {
    const offset = elem.offset()!;
    const width = elem.width()!;
    const height = elem.height()!;

    this.body = Matter.Bodies.rectangle(
      offset.left + width / 2, offset?.top + height / 2, width, height
    );
    this.elem = elem;

    // replace the original element with empty div
    elem.replaceWith(
      $('<div></div>').css({
        'width': width,
        'height': height,
      })
    )

    // restyle element with absolute position
    elem.css({
      'position': 'absolute',
      'top': offset.top,
      'left': offset.left,
      'width': width,
      'height': height,
      'background': 'hsl(0, 0%, 96%)',
      'border-radius': '4px',
      'box-shadow': '0px 0px 10px rgba(0, 0, 0, 25%)'
    });

    // move the original element to body
    $('body').append(elem);
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