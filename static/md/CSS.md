# CSS

## The Basics

**[CSS](https://www.w3.org/Style/CSS/Overview.en.html)** (Cascading Style Sheets) is a language. CSS files use the `.css` extension and are used to style HTML elements in an app.

<details> <summary> Usage in an HTML File </summary>

```html
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

</details>

[🔗 W3Schools](https://www.w3schools.com/css/css_howto.asp)

### Importing a Style Sheet

To import another style sheet into your CSS file, use `@import`:

```css
/* Relative path */
@import "colors.css";
@import url("colors.css");

/* Absolute path */
@import url("http://cdnjs.com/libraries/highlight.js/");
```

[🔗 W3Schools](https://www.w3schools.com/cssref/pr_import_rule.asp)

## Aligning Elements in a Layout

### Aligning Horizontally

To **center** an item **horizontally** (i.e. same spacing on the left and right), you can style the element wrapping it with `text-align: center`:

```css
/* CSS file */

.center {
  text-align: center;
}
```

```html
<!-- HTML file -->

<div style="text-align: center">I've been `text-align: center`ed</div>
```

**Output:**

<div class="output-container">
  <div style="text-align: center">I've been `text-align: center`ed</div>
</div>

[🔗 W3Schools](https://www.w3schools.com/css/css_align.asp)

### CSS Properties Used to Align

#### `display`

- **Block-Level Elements** always start on a **new line** and take up the **full width** available like a long `block`.
- **Inline Elements** stay `inline` with their previous elements and only **take up as much width needed to fit its content**.

<div style="border: 2px solid #7AA293; box-shadow: 2px 2px 5px grey;">This is a <b>Block-Level Element</b>.</div>

And this is an <span style="border: 2px solid #7AA293; box-shadow: 2px 2px 5px grey;"><b>Inline Element</b></span>.

<details> <summary> Block-Level & Inline Element Examples </summary>

| Block-Level Elements                                                                               | Inline Elements                  |
| -------------------------------------------------------------------------------------------------- | -------------------------------- |
| `<div>` <br> `<h1>-<h6>` <br> `<p>` <br> `<form>` <br> `<header>` <br> `<footer>` <br> `<section>` | `<span>` <br> `<a>` <br> `<img>` |

</details>

**`display` Property Values**

| Value    | Description               | Example                                                           |
| -------- | ------------------------- | ----------------------------------------------------------------- |
| `none`   | Displays nothing          | To show/hide elements, `<script>` uses `display: none` by default |
| `inline` | Makes element inline      | To make horizontal menus with inline `<li>` elements              |
| `block`  | Makes element block-level | To display `<a>` elements as block elements                       |

[🔗 W3Schools](https://www.w3schools.com/css/css_display_visibility.asp)

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

**Output:**

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
