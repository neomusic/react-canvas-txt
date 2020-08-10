# React Canvas Txt

[![BCH compliance](https://bettercodehub.com/edge/badge/neomusic/react-canvas-txt?branch=master)](https://bettercodehub.com/)

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
### DEMO
https://codesandbox.io/s/cocky-benz-e4osd

### Props

| Prop              | Required    | Type        | Note                                                    |
| ----------------- |:-----------:|:-----------:| -------------------------------------------------------:|
| text              | yes         | string      | The text that will be drawn on the canvas               |
| drawTxtProps      | yes         | object      | This object contain a properties for Canvas-Txt library |
| width             | yes         | number      | canvas width                                            |
| height            | yes         | number      | canvas height                                           |

### Library props

| Prop             |  Required |  Type                      |  Note                                                                           |
| ---------------- | ---------:|:--------------------------:| -------------------------------------------------------------------------------:|
| fontSize         |  yes      |  number                    |  Font size of the text in px. *This value cannot be 0*                          |
| x                |  yes      |  number                    |  Position of x for text in the canvas                                           |
| y                |  yes      |  number                    |  Position of y for text in the canvas                                           |
| width            |  yes      |  number                    |  Width area for text in the canvas. *This value cannot be 0*                    |
| height           |  yes      |  number                    |  Height area for text in the canvas. *This value cannot be 0*                   |
| debug            |  no       |  boolean                   |  Shows the border and align gravity for debugging                               |
| align            |  no       |  "center", "left", "right" |  Text align                                                                     |
| vAlign           |  no       |  "middle", "top", "bottom" |  Text vertical align                                                            |
| font             |  no       |  string                    |  Font family of the text                                                        |
| fontStyle        |  no       |  string                    |  Font style, same as css font-style. Examples: `italic`, `oblique 40deg`        |
| fontVariant      |  no       |  string                    |  Font variant, same as css font-variant. Examples: `small-caps`, `slashed-zero` |
| fontWeight       |  no       |  string                    |  Font weight, same as css font-weight. Examples: `bold`, `100`                  |
| lineHeight       |  no       |  string *or* null          |  Line height of the text, if set to null it tries to auto-detect the value      |
