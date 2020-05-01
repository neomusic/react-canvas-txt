import * as React from 'react'
import canvasTxt from 'canvas-txt'

export namespace CanvasTxt {
    export type DrawTxtProps = {
        debug?: boolean
        align?: string
        vAlign?: string
        fontSize?: number
        font?: string
        lineHeight?: number
        x: number
        y: number
        width: number
        height: number
    }
    export type Props = {
        text: string
        drawTxtProps?: DrawTxtProps
        width: number
        height: number
        externalCanvasRef?: React.RefObject<JSX.Element | Element | HTMLElement | HTMLCanvasElement>
    }
}
export default class CanvasTxt extends React.Component<CanvasTxt.Props, {}> {
    ref: React.RefObject<HTMLCanvasElement>
    constructor(props) {
        super(props)
        this.ref = React.createRef<HTMLCanvasElement>() || props.externalCanvasRef
    }

    componentDidMount() {
        const ctx = this.ref.current.getContext('2d')
        const { debug, align, vAlign, fontSize, font, lineHeight, x, y, width, height } = this.props.drawTxtProps || {}
        canvasTxt.debug = debug
        canvasTxt.align = align
        canvasTxt.vAlign = vAlign
        canvasTxt.fontSize = fontSize
        canvasTxt.font = font
        canvasTxt.lineHeight = lineHeight
        canvasTxt.drawText(ctx, this.props.text, x, y, width, height)
    }

    render() {
        const { externalCanvasRef, height, width } = this.props
        if (externalCanvasRef) {
            return null
        }
        return (<canvas ref={this.ref} height={height} width={width}></canvas>)
    }
}