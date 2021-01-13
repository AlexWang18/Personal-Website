import React from "react";
import Proton from "proton-engine";
import RAFManager from "raf-manager";
import Canvas from "./Canvas";

export default class Particles extends React.Component {
  constructor(props) {
    super(props);
    this.renderProton = this.renderProton.bind(this);
  }

  handleCanvasInited(canvas) {
    this.createProton(canvas);
    RAFManager.add(this.renderProton);
  }

  componentWillUnmount() {
    try {
      RAFManager.remove(this.renderProton);
      this.proton.destroy();
    } catch (e) {}
  }

  createProton(canvas) {
    const num = Math.min(parseInt(window.innerWidth / (1000 / 145)), 500);
    const proton = new Proton();

    const emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(
      new Proton.Span(num),
      new Proton.Span(0.5, 0.2)
    );
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(1, 4));
    emitter.addInitialize(new Proton.Life(Infinity));

    const pointZone = new Proton.Position(
      new Proton.RectZone(0, 0, canvas.width, canvas.height)
    );
    emitter.addInitialize(pointZone);
    emitter.addInitialize(
      new Proton.Velocity(
        new Proton.Span(0.3, 0.6),
        new Proton.Span(0, 360),
        "polar"
      )
    );

    emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.2, 0.9)));
    emitter.addBehaviour(new Proton.Color("#ffffff"));
    emitter.addBehaviour(
      new Proton.CrossZone(
        new Proton.RectZone(0, 0, canvas.width, canvas.height),
        "cross"
      )
    );

    emitter.emit("once");
    emitter.damping = 0;
    proton.addEmitter(emitter);

    const renderer = this.createRenderer(canvas);
    proton.addRenderer(renderer);

    setTimeout(() => {
      emitter.rate = new Proton.Rate(new Proton.Span(10), .5);
      emitter.removeInitialize(pointZone);
    }, 0);

    this.proton = proton;
    this.emitter = emitter;
    this.renderer = renderer;
  }

  createRenderer(canvas) {
    const R = 140;
    const context = canvas.getContext("2d");
    const renderer = new Proton.CanvasRenderer(canvas);

    renderer.onProtonUpdateAfter = () => {
      const particles = this.emitter.particles;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pA = particles[i];
          const pB = particles[j];
          const dis = pA.p.distanceTo(pB.p);

          if (dis < R) {
            const alpha = (1 - dis / R) * 0.5;
            context.strokeStyle = "rgba(255,255,255," + alpha + ")";
            context.beginPath();
            context.moveTo(pA.p.x, pA.p.y);
            context.lineTo(pB.p.x, pB.p.y);
            context.closePath();
            context.stroke();
          }
        }
      }
    };

    return renderer;
  }

  handleResize(width, height) {
    this.renderer.resize(width, height);
  }

  handleMouseDown(e) {
    for (var i = 0; i < 3; i++) this.emitter.particles[i].dead = true;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setTimeout(() => {
      this.emitter.p.x = x;
      this.emitter.p.y = y;
      this.emitter.emit("once");
    }, 80);
  }

  handleMouseMove(e) {
    const ease = 0.3;
    const p0 = this.emitter.particles[0];
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    p0.p.x += (x - p0.p.x) * ease;
    p0.p.y += (y - p0.p.y) * ease;
    p0.radius = 0;
  }

  handleMouseUp(e) {
    this.emitter.stop();
  }

  renderProton() {
    this.proton.update();
    //this.proton.stats.update(2);
  }

  render() {
    return (
      <Canvas
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        onCanvasInited={this.handleCanvasInited.bind(this)}
        onResize={this.handleResize.bind(this)}
      />
    );
  }
}
