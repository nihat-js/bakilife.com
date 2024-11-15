// components/TiledBackground.tsx
import { useEffect } from 'react';
import * as PIXI from 'pixi.js';

interface TiledBackgroundProps {
  app: PIXI.Application;
}

const TiledBackground: React.FC<TiledBackgroundProps> = ({ app }) => {
  useEffect(() => {
    // Create a simple green texture for the tiles
    const greenTile = new PIXI.Graphics();
    greenTile.beginFill(0x00FF00); // Green color
    greenTile.drawRect(0, 0, 50, 50); // 50x50 square tile
    greenTile.endFill();

    // Convert the Graphics object to a texture
    const greenTexture = app.renderer.generateTexture(greenTile);

    // Create the TilingSprite for the background
    const tilingSprite = new PIXI.TilingSprite(greenTexture, app.renderer.width, app.renderer.height);

    // Add the TilingSprite to the stage (this will fill the background with green tiles)
    app.stage.addChild(tilingSprite);

    // Cleanup when component unmounts
    return () => {
      app.stage.removeChild(tilingSprite);
    };
  }, [app]);

  return null; // No JSX, just modifying the Pixi app
};

export default TiledBackground;
