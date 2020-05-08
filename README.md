# React Canvas Txt

<div>
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width=100 alt="canvas txt" style="display:inline-block">
<img src="https://i.imgur.com/Te6TkKz.png" width=400 alt="canvas txt" style="display:inline-block">
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width=100 alt="canvas txt" style="display:inline-block">
</div>

## A react typescript wrapper of [geongeorge/Canvas-Txt](https://github.com/geongeorge/Canvas-Txt)

### Install

```
yarn add react-canvas-txt
```
or
```
npm i react-canvas-txt
```

### Usage

```jsx
import ReactCanvasTxt from 'react-canvas-txt'

<ReactCanvasTxt text="Hello World" />
```

### Props

| Prop              | Type        | Note  |
| ----------------- |:-----------:| -----:|
| text              | string      | The text that will be drawn on the canvas |
| drawTxtProps      | object      | This object contain a properties for Canvas-Txt library |

### Library props

| Prop             | Type                       | Note  |
| ---------------- |:--------------------------:| -----:|
| debug            | boolean                    | Shows the border and align gravity for debugging |
| align            | "center", "left", "right"  | Text align |
| vAlign           | "middle", "top", "bottom"  | Text vertical align |
| fontSize         | number                     | Font size of the text in px. *This value cannot be 0* |
| font             | string                     | Font family of the text |
| fontStyle        | string                     | Font style, same as css font-style. Examples: `italic`, `oblique 40deg` |
| fontVariant      | string                     | Font variant, same as css font-variant. Examples: `small-caps`, `slashed-zero` |
| fontWeight       | string                     | Font weight, same as css font-weight. Examples: `bold`, `100`  |
| lineHeight       | string *or* null           | Line height of the text, if set to null it tries to auto-detect the value  |
| x                | number                     | Position of x for text in the canvas  |
| y                | number                     | Position of y for text in the canvas  |
| width            | number                     | Width area for text in the canvas. *This value cannot be 0*  |
| height           | number                     | Height area for text in the canvas. *This value cannot be 0*  |
