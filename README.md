# style-resets

> reset for inline-styles

## install

```console
$ npm install --save style-resets
```

## import

```javascript
import { button, list, input } from "style-resets"
```

## usage

```javascript
import { button } from "style-resets"

const styles = createStyleSheet({
  button: {
    ...button, // adds reset
    background: "#999",
    color: "#fff",
  },
})
```
