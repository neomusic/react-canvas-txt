import * as React from 'react';
import canvasTxt from 'canvas-txt'

export namespace CanvasTxt {
    export type CanvasTxtProps = {
        text: string
    }
}
export default class CanvasTxt extends React.Component<CanvasTxt.CanvasTxtProps, {}> {
    canvasEl: any;
    constructor(props) {
        super(props)
        this.canvasEl
    }

    componentDidMount() {
        const ctx = this.canvasEl.getContext('2d')

        canvasTxt.fontSize = 24

        canvasTxt.drawText(ctx, this.props.text, 100, 200, 200, 200)
    }

    render() {
        return (
            <>
                <canvas id="myCanvas" width="500" height="500" ref={(el) => this.canvasEl = el}></canvas>
            </>
        )
    }
}