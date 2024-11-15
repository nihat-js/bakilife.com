"use client";
import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

async function run() {
  const app = new PIXI.Application();

  await app.init();
  document.body.appendChild(app.canvas);
  const texture = await PIXI.Assets.load("bunny.jpeg");
  const bunny = new PIXI.Sprite(texture);
  bunny.x = app.renderer.width / 2;
  bunny.y = app.renderer.height / 2;
  bunny.anchor.x = 0.5;
  bunny.anchor.y = 0.5;
  app.stage.addChild(bunny);
  app.ticker.add(() => {
    // bunny.rotation += 0.01;
  });
}

const PixiPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    run(canvasRef);
  });

  return (
    <div>
      <h1>Pixi.js</h1>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default PixiPage;
