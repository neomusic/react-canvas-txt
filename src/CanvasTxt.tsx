import * as React from "react";
import canvasTxt from "canvas-txt";

export namespace CanvasTxt {
  export type DrawTxtProps = {
    debug?: boolean;
    align?: "center" | "left";
    vAlign?: "middle" | "top" | "bottom";
    fontSize?: number;
    font?: string;
    lineHeight?: number;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    justify?: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  export type Props = {
    text: string;
    drawTxtProps?: DrawTxtProps;
    canvasProps?: object;
  };
}
export default class CanvasTxt extends React.Component<CanvasTxt.Props, never> {
  ref: React.RefObject<HTMLCanvasElement>;
  constructor(props) {
    super(props);
    this.ref = React.createRef<HTMLCanvasElement>();
  }

  componentDidMount() {
    const ctx = this.ref.current.getContext("2d");
    const {
      debug,
      align,
      vAlign,
      fontSize,
      font,
      lineHeight,
      x,
      y,
      width,
      height,
      fontStyle,
      fontVariant,
      fontWeight,
      justify = false,
    } = this.props.drawTxtProps || {};
    canvasTxt.fontSize = fontSize;
    canvasTxt.debug = debug;
    canvasTxt.align = align;
    canvasTxt.vAlign = vAlign;
    canvasTxt.font = font;
    canvasTxt.fontStyle = fontStyle;
    canvasTxt.fontVariant = fontVariant;
    canvasTxt.fontWeight = fontWeight;
    canvasTxt.lineHeight = lineHeight;
    canvasTxt.justify = justify;
    canvasTxt.drawText(ctx, this.props.text, x, y, width, height);
  }

  render() {
    const { canvasProps = {} } = this.props;
    return <canvas ref={this.ref} {...canvasProps}></canvas>;
  }
}
