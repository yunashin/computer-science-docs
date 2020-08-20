# CSS

**[CSS](https://www.w3.org/Style/CSS/Overview.en.html)** (Cascading Style Sheets) is a **stylesheet language**. CSS files use the `.css` extension and are used to style HTML elements.

You can also edit CSS properties in HTML and JavaScript files. Note that in JavaScript, we use `className` instead of `class`.

<div class="flex">

```html
<!-- HTML -->

<div class="title" style="color: blue">
  <p>Hello World</p>
</div>
```

```jsx
// JavaScript

return (
  <div className="title" style="color: blue">
    <p>Hello World</p>
  </div>
);
```

</div>

## Height & Width

You can use the `height` and `width` properties to adjust the respective dimensions of

## Linking a CSS File To an HTML Page

```html
<!-- HTML -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Cool Website</title>
    <link rel="stylesheet" type="text/css" href="/src/css/index.css" />
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

[🔗 W3Schools](https://www.w3schools.com/css/css_howto.asp)

## Importing a Style Sheet

To import another style sheet into your CSS file, use `@import`:

```css
/* Relative path */
@import "../css/colors.css";
@import url("../css/colors.css");

/* Absolute path */
@import url("http://cdnjs.com/libraries/highlight.js/");
```

[🔗 W3Schools](https://www.w3schools.com/cssref/pr_import_rule.asp)

## <span class="color-div">Block-Level</span> & <span class="color-span">Inline</span> Elements

| <span class="color-div">Block-Level Elements</span>                                                                               | <span class="color-span">Inline Elements</span>                 |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <span class="color-div">`<div>` <br> `<h1>-<h6>` <br> `<p>` <br> `<form>` <br> `<header>` <br> `<footer>` <br> `<section>`</span> | <span class="color-span">`<span>` <br> `<a>` <br> `<img>`</span |

### <span class="color-div">`block`: Block-Level Elements</span>

Think of <span class="color-div">**block-level elements**</span> as

- Wrap elements in <span class="color-div">**`<div>` (denoted in green)**</span> to put them in their own `block`.
- You can also style <span class="color-span">**inline elements**</span> with `display: block;` to display them as <span class="color-div">**block-level elements**</span>.

```html
<div>This is a <b>Block-Level Element</b>.</div>
```

**🖨 Output:** Starts on a <span class="color-div">**new line**</span> and takes up <span class="color-div">**full width**</span>

<div class="output-container">
  <div class="focused-div">
    This is a <b>Block-Level Element</b>.
  </div>
</div>

### <span class="color-span">`inline`: Inline Elements</span>

- Wrap elements in <span class="color-span">**`<span>` (denoted in blue)**</span> to display them `inline`.
- You can also `style` <span class="color-div">**block-level elements**</span> with `display: inline;` to display them as <span class="color-span">**inline elements**</span>.

<!-- prettier-ignore -->
```html
That is an ➡ <span><b>Inline Element</b></span>.
```

**🖨 Output:** Stays <span class="color-span">**inline**</span> with adjacent elements and only <span class="color-span">**takes up as much width needed to fit**</span>

<div class="output-container">
  That is an ➡ <span class="focused-span"><b>Inline Element</b></span>.
</div>

### `display`

| Value                                    | Description                                                  | Example                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `none`                                   | Displays nothing                                             | To show/hide elements, `<script>` uses `display: none` by default                        |
| <span class="color-div">`block`</span>   | Makes element <span class="color-div">**block-level**</span> | To display `<a>` elements as <span class="color-div">**block**</span> elements           |
| <span class="color-span">`inline`</span> | Makes element <span class="color-span">**inline**</span>     | To make horizontal menus with <span class="color-span">**inline**</span> `<li>` elements |
| `flex`                                   | Displays **children** inline                                 | To align elements horizontally for a header                                              |

[🔗 W3Schools](https://www.w3schools.com/css/css_display_visibility.asp)

### `flex`: CSS Flexbox Layout Module

Setting `display: flex;` allows you to utilize the [CSS Flexbox Layout Module](https://www.w3schools.com/css/css3_flexbox.asp) by specifying the `style`d element as the **flex container**.

You're basically making the `<div>` a **flexible box**, in which its children can be laid out in various different ways.

In this example, we want to create a header component for a webpage and display 4 links side by side horizontally. So, we `style` the `<div>`, our **flex container**, with `display: flex;`, which by default displays its children, the **flex items**, **inline horizontally from left to right**.

```html
<!-- Flex container -->
<div display="flex">
  <!-- Flex items -->
  <a href="./">Website Title</a>
  <a href="./">About Us</a>
  <a href="./">Blog</a>
  <a href="./">Contact Us</a>
</div>
```

**🖨 Output:** Children are displayed inline **horizontally** from **left to right** by default.

<div class="output-container">
  <div display="flex">
    <a href="./">Website Title</a>
    <a href="./">About Us</a>
    <a href="./">Blog</a>
    <a href="./">Contact Us</a>
  </div>
</div>

#### Flex Container Properties

Flex

##### `flex-direction`: Modifying Direction of Flex Item Stack

`flex-direction` determines whether to stack **flex items** horizontally or vertically. How nifty! 🤩

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

| Value            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `column`         | ⬇️ Stacks flex items from **top to bottom**             |
| `column-reverse` | ⬆️ Stacks flex items from **bottom to top**             |
| `row`            | _(Default)_ ➡️ Stacks flex items from **left to right** |
| `row-reverse`    | ⬅️ Stacks flex items from **right to left**             |

##### `flex-wrap`: Wrapping Flex Items

**Wrapping** means that if all of a flex container's children don't fit within its boundaries as they continue to go in their specified `flex-direction`, the flex container `wrap`s any extra flex items onto the following line.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

| Value          | Description                                        |
| -------------- | -------------------------------------------------- |
| `wrap`         | Flex items will wrap if necessary                  |
| `nowrap`       | _(Default)_ Flex items will not wrap               |
| `wrap-reverse` | Flex items will wrap if necessary in reverse order |

```html
<!-- HTML -->
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
```

**🖨 Output:** **Wraps flex items onto the next line** if they don't fit in the same row as previous flex items (within the boundaries of the flex container).

<div class="output-container" style="display: flex; flex-wrap: wrap;">
  <div class="output-box-div">1</div>
  <div class="output-box-div">2</div>
  <div class="output-box-div">3</div>
  <div class="output-box-div">4</div>
  <div class="output-box-div">5</div>
  <div class="output-box-div">6</div>
  <div class="output-box-div">7</div>
  <div class="output-box-div">8</div>
  <div class="output-box-div">9</div>
  <div class="output-box-div">10</div>
  <div class="output-box-div">11</div>
  <div class="output-box-div">12</div>
</div>

##### `flex-flow`: `flex-direction` + `flex-wrap`

`flex-flow` lets you set values for both `flex-direction` and `flex-wrap` in that order:

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

##### `justify-content`: Aligning Flex Items Horizontally ↔️

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

| Value           | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `center`        | Aligns **flex items** at the **center** 🍎 of the container             |
| `flex-start`    | 🍎 _(Default)_ Aligns **flex items** at the **start** of the container  |
| `flex-end`      | Aligns **flex items** at the **end** of the container 🍎                |
| `space-around`  | Displays **flex items** with space before, between, and after the lines |
| `space-between` | Displays flex itmes with space between the lines                        |

##### `align-items`: Aligning Flex Items Vertically ↕️

```css
.flex-container {
  display: flex;
  align-items: center;
  height: 200px;
}
```

| Value        | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| `center`     | Aligns **flex items** in the **middle** of the container                |
| `flex-start` | Aligns **flex items** at the **top** of the container                   |
| `flex-end`   | Aligns **flex items** at the **bottom** of the container                |
| `stretch`    | _(Default)_ Stretches **flex items** to fill the container              |
| `baseline`   | Aligns **flex items** such as their vertically central baselines aligns |

##### `align-content`: Aligning Flex Lines

```css
.flex-container {
  display: flex;
  align-content: space-between;
  height: 600px;
  flex-wrap: wrap;
}
```

| Value           | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `space-between` | Displays **flex lines** with equal space between them               |
| `space-around`  | Displays **flex lines** with space before, between, and after them  |
| `stretch`       | _(Default)_ Stretches **flex lines** to take up the remaining space |
| `center`        | Displays **flex lines** in the middle of the container              |
| `flex-start`    | Displays **flex lines** at the start of the container               |
| `flex-end`      | Displays **flex lines** at the end of the container                 |

#### Flex Item Properties

Child elements of a **flex container** automatically become flex items.

##### `order`: Sorting Order of Flex Items

`order` lets you manage the display order of **flex items**, overriding their actual order in the layout. Its value must be a number and it's 0 by default.

```html
<!-- HTML -->
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
```

```css
/* CSS */
.box {
  color: white;
  background-color: #7e60b8;
  line-height: 75px;
  margin: 10px;
  text-align: center;
  width: 100px;
}

.flex-container {
  display: flex;
  align-items: stretch;
}
```

**🖨 Output:** Prints elements in specified `order`

<div class="output-container" style="display: flex; align-items: stretch;">
  <div class="output-box-div" style="order: 3">1</div>
  <div class="output-box-div" style="order: 2">2</div>
  <div class="output-box-div" style="order: 4">3</div>
  <div class="output-box-div" style="order: 1">4</div>
</div>

##### `flex-grow`: Making Flex Items Wider/Longer

`flex-grow` specifies how much a flex item can grow in a given direction relative to the other flex items. Its value must be a number and it's 0 by default.

```html
<!-- HTML -->
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 8">8</div>
</div>
```

```css
.flex-container {
  display: flex;
  align-items: stretch;
}
```

**🖨 Output:** Makes the third flex item grow 8x faster than the others

<div class="output-container" style="display: flex; align-items: stretch;">
  <div class="output-box-div" style="flex-grow: 1">1</div>
  <div class="output-box-div" style="flex-grow: 1">1</div>
  <div class="output-box-div" style="flex-grow: 8">8</div>
</div>

## Aligning and Positioning Elements on a Page

[🔗 W3Schools](https://www.w3schools.com/css/css_align.asp)

#### Perfect Centering

Perfect centering (both horizontally and vertically) requires both `justify-content` and `align-items` to be set to `center`.

#### `text-align`: Aligning Horizontally (Left ↔ Right)

```html
<div style="text-align: center">text-align: <b>center</b></div>
```

<div class="output-container">
  <div class="m-v-25 center focused-div">text-align: <b>center</b></div>
  <div class="m-v-25 align-start focused-div">text-align: <b>start</b></div>
  <div class="m-v-25 align-end focused-div">text-align: <b>end</b></div>
</div>

### `position`

```html
<div style="position: static">position: <b>static</b></div>
```

#### `position: static`: Restore default positioning

`position: static` elements are not affected by `top`, `right`, `bottom`, or `left` properties and basically restore defaults.

<div class="output-container">
  <div class="focused-div" style="position: static">position: <b>static</b></div>
</div>

#### `position: relative`

`position: relative` elements are positioned according to their defaults, relative to their adjacent elements.

<div class="output-container">
  <span class="focused-span" style="left: 20px">left: <b>20px</b></span>
  <span class="focused-span" style="position: relative">position: <b>relative</b></span>
</div>

#### `position: fixed`

`position: fixed` elements are positioned relative to the viewport, meaning they'll always stay in the same place even when scrolling.

#### `position: absolute`

#### `position: sticky`

[🔗 W3Schools](https://www.w3schools.com/css/css_positioning.asp)

## Margins

To add a margin to an element, you can either use:

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

Or you can use `margin`, combining them all:

```css
/* Order: <top> <right> <bottom> <left> */

.box {
  margin: 10px 5px 5px 20px;
}
```

[🔗 W3Schools](https://www.w3schools.com/css/css_margin.asp)

## Shadows

Shadows are a great way of making images on your website stand out a bit more with a sleek and simple effect.

To add a shadow to text, use [`text-shadow`](https://www.w3schools.com/css/css3_shadows.asp):

```css
/* Order: <horizontal-shadow> <vertical-shadow> <blur> <color> */

h1 {
  text-shadow: 2px 2px 5px red;
}
```

To add a shadow to an element, use [`box-shadow`](https://www.w3schools.com/css/css3_shadows_box.asp):

```css
div {
  box-shadow: 10px 10px 5px grey;
}
```

[🔗 W3Schools](https://www.w3schools.com/css/css3_shadows.asp)

## Tables

### Borders

To style table borders, you'll need to use the **`border`** property.

| **`<table>`**                                                                                                                                                            | **`<th>`**                                                                                                                                                                                        | **`<td>`**                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Table element**                                                                                                                                                        | **Table header** cell                                                                                                                                                                             | **Table data cell**                                                                                                                                                                               |
| <div class="center"><img width="53" alt="table-border" src="https://user-images.githubusercontent.com/30121322/90462945-d38c5000-e0d7-11ea-8f3a-3e37affa92c7.png"></div> | <div class="center"><img width="53" alt="Screen Shot 2020-08-17 at 10 21 29 PM" src="https://user-images.githubusercontent.com/30121322/90463101-1fd79000-e0d8-11ea-902e-e24ebf189051.png"></div> | <div class="center"><img width="48" alt="Screen Shot 2020-08-17 at 10 23 42 PM" src="https://user-images.githubusercontent.com/30121322/90463226-65945880-e0d8-11ea-999d-e9231d12afe0.png"></div> |

Note that `<tr>` is the **table row element**, and you can set a `border` property on it but it won't have any effect on most browsers. 🙅‍♀️

To add borders to your table, add this to your code:

```css
/* CSS file */

/* Sets whether each element's borders should be collapsed with adjacent ones */
table {
  border-collapse: collapse;
}

/* To add a background color for the table header row */
th {
  background-color: lightgrey;
}

/* Adds a border around the table and each  */
table,
th,
td {
  border: 1px solid black;
  padding: 10px;
}
```

<details> <summary> HTML file </summary>

```html
<!-- HTML file -->

<table>
  <tr>
    <th>A</th>
    <th>B</th>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
  </tr>
  <tr>
    <td>c</td>
    <td>d</td>
  </tr>
</table>
```

</details>

**🖨 Output:**

<div class="output-container">
  <table style="border-collapse: collapse; border: 1px solid black; padding: 10px;">
    <tr>
      <th style="background-color: lightgrey; border: 1px solid black; padding: 10px;">A</th>
      <th style="background-color: lightgrey; border: 1px solid black; padding: 10px;">B</th>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 10px;">a</td>
      <td style="border: 1px solid black; padding: 10px;">b</td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 10px;">c</td>
      <td style="border: 1px solid black; padding: 10px;">d</td>
    </tr>
  </table>
</div>

[🔗 W3Schools](https://www.w3schools.com/css/css_table.asp)

<div class="output-container">
  <div class="focused-div" style="position: fixed">position: <b>fixed</b></div>
</div>
