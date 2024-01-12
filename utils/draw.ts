import { DetectedObject } from "@tensorflow-models/coco-ssd";

export function drawOnCanvas(
  mirrored: boolean,
  predictions: DetectedObject[],
  ctx: CanvasRenderingContext2D | null | undefined
) {
  predictions.forEach((detectedObject) => {
    const { class: name, bbox, score } = detectedObject;

    const [x, y, width, height] = bbox; //comes as an array

    if (ctx) {
      ctx.beginPath();

      //styling

      ctx.fillStyle = name === "cell phone" ? "#FF0F0F" : "#00B612";
      ctx.globalAlpha = 0.4;

      mirrored
        ? ctx.rect(ctx.canvas.width - x, y, -width, height)
        : ctx.rect(x, y, width, height);

      ctx.fill();

      ctx.font = "12px Courier New";
      ctx.globalAlpha = 1;

      mirrored
        ? ctx.fillText(name, ctx.canvas.width - x - width, y)
        : ctx.fillText(name, x, y);

      //draw stroke or fill
    }
  });
}
