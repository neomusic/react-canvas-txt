declare module "canvas-txt" {
  let debug: boolean;
  let align: "center" | "left";
  let vAlign: "middle" | "top" | "bottom";
  let fontSize: number;
  let font: string;
  let lineHeight: number | null;
  let fontStyle: string | null;
  let fontVariant: string | null;
  let fontWeight: string | null;
  let justify: boolean;
  function drawText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  // Calculate Height of the font
  function getTextHeight(txt: string, font: string, size: number): number;
}
