# JavaScript

## String Methods

### `slice`

**Arguments**: `(startIndex, endIndex)`

**Returns**: Characters from string's `startIndex` (inclusive) to `endIndex` (exclusive)

```jsx
const name = "0-1/email";
name.slice(name.indexOf("/") + 1, name.length + 1); // 'email'
```
