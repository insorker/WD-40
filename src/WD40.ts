import { WDBox } from "./component/box";
import { WDComponent } from "./component/component"

export interface WDConfig {
  engine: Matter.Engine
  selector: string
}

export class WD40 implements WDConfig {
  engine: Matter.Engine
  selector: string
  boxes: WDComponent[]

  constructor(config: WDConfig) {
    this.engine = config.engine
    this.selector = config.selector
    this.boxes = [];
    
    this.setup();
  }

  setup() {
    let engine = this.engine;
    let boxes = this.boxes;

    $('body').on('click', this.selector, function(event) {
      event.stopPropagation();

      // prevent multiple click on same element
      for (let box of boxes) {
        if (box.elem[0] == this) {
          return;
        }
      }
      if ($(this).attr("WD-40-disable")) {
        return;
      }

      let box = new WDBox($(this));

      Matter.Body.applyForce(
        box.body,
        { x: event.pageX, y: event.pageY },
        { x: Math.random() / 20, y: Math.random() / 20 }
      );
      boxes.push(box);
      Matter.Composite.add(engine.world, [box.body]);
    });
  }

  render() {
    for (let box of this.boxes) {
      box.render();
    }
  }
}
