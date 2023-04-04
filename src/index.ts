import { WD40 } from './WD40';

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composite = Matter.Composite;

// create an engine
var engine = Engine.create();
engine.gravity.y = -0.04

// create a renderer
let render = Render.create({
  // element: document.body,
  engine: engine,
  options: {
    width: $(window).width()!,
    height: $(window).height()!,
  }
});

// create WDBox
let wd40 = new WD40({
  engine: engine,
  selector: 'div, li, td'
});

let ground = Matter.Bodies.rectangle(
  $(window).width()! / 2, -50, $(window).width()!, 100, { isStatic: true }
);
// add all of the bodies to the world
Composite.add(engine.world, [ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

function step() {
  wd40.render();
  requestAnimationFrame(step);
}
requestAnimationFrame(step);