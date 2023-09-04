import Matter from 'matter-js';
import { gsap } from 'gsap';

const COLOR = {
  HEADER: '#868e96',
  IMAGE: '#22b8cf',
};

let elements;
let engine=null;
let runner=null;
// let boxList=[];

const init = (width, height) => {
  
  // boxList=boxes;

  engine = Matter.Engine.create();
  engine.gravity.y = .5;
  



  const render = Matter.Render.create({
    element: document.getElementById('matter-container'),
    engine: engine,
    options: {
      width: width,
      height: height,
      wireframes: false,
      background: false,
    },
  });
  Matter.Render.run(render);

  runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  Matter.World.add(engine.world, [
    // wall(width / 2, -10, width, 20), // Top wall
    wall(width / 2, height + 10, width, 20), // Bottom wall
    wall(-10, height / 2, 20, height), // Left wall
    wall(width + 10, height / 2, 20, height), // Right wall
  ]);
  elements = createBoxes(width,height)
  Matter.Composite.add(engine.world, elements);

  startAnimation();
  return { engine, render, runner }; // Return the engine instance
};


const startAnimation = () => {
  elements.forEach((body) => {
    Matter.Body.setStatic(body, false);
    Matter.Body.setVelocity(body, {
      x: rand(-2, 2),
      y: rand(-2, -2),
    });
    Matter.Body.setAngularVelocity(body, rand(-0.01, 0.01));
  });
};
// Listen for the scroll event and call startAnimation when it occurs
window.addEventListener('scroll', function () {
  let slamThreshold=100;
  let st = document.documentElement.scrollTop;
  if (st > slamThreshold) {
    startAnimation();
  }
}, false);

const rand = (min, max) => {
  return Math.random() * (max - min) + min;
};

const wall = (x, y, width, height) => {
  return Matter.Bodies.rectangle(x, y, width, height, {
    isStatic: true,
    render: { visible: false },
  });
};


const createBoxes = (width,height) => {
  const boxElements = document.querySelectorAll(".matter-objects");
  const bodies = [];

  boxElements.forEach((boxElement) => {
    const w = boxElement.getBoundingClientRect().width;
    const h = boxElement.getBoundingClientRect().height;
    const n = gsap.quickSetter(boxElement, "x", "px")
    const a = gsap.utils.random(.2 * -Math.PI, .2 * Math.PI)
    const o = gsap.quickSetter(boxElement, "y", "px")
    const body = Matter.Bodies.rectangle(rand(100,width-100), -300, w, h, {
      chamfer: {
        radius: Math.min(w, h) / 2,
    },
      isStatic: !0,
      restitution: 0.3,
      angle:a,
      render: {
        fillStyle: `rgba(0, 0, 0, 0)`, // Set the fillStyle to a transparent color
        zIndex: -1,
      },
    });

    bodies.push(body);

    Matter.Events.on(runner, "tick", (() => {
      const xOffset = w / 2;
      const yOffset = h / 2;
      gsap.set(boxElement, {
        transformOrigin: "center", // Set the transform origin to the center
        rotation:  ((body.angle * 180) / Math.PI).toFixed(1), // Set the rotation angle
        x: (body.position.x - xOffset).toFixed(1), // Set the x position
        y: (body.position.y - yOffset).toFixed(1),// Set the y position
      });
    })
    );
  });

  return bodies;
};

function cleanupMatterSetup(engine, runner) {

  // Remove bodies from the world
  Matter.Composite.clear(engine.world, false);

  // Stop the runner
  Matter.Runner.stop(runner);

  // Remove the render canvas
  document.getElementById('matter-container').innerHTML = '';
}

const createBoxElements = (boxList) => {
  const matterContainer = document.getElementById('matter-container');
  const colors = ['#f8c1ca', '#f5e495', '#f0e2d1', '#d2e5cb'];

  for (const item of boxList) {
    const boxDiv = document.createElement('div');
    boxDiv.className = 'matter-objects';
    const spn = document.createElement('span');
    spn.className = 'matter-object-title';
    spn.textContent = item;
    boxDiv.appendChild(spn);

    // Set a random background color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    boxDiv.style.backgroundColor = randomColor;

    matterContainer.appendChild(boxDiv);
  }
};


export { createBoxElements,init, cleanupMatterSetup };
