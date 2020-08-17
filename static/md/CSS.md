# CSS

## The Basics

**[CSS](https://www.w3.org/Style/CSS/Overview.en.html)** (Cascading Style Sheets) is a language. CSS files use the `.css` extension and are used to style HTML elements in an app.

[W3Schools](https://www.w3schools.com/css/) has the best documentation out there for CSS, and my docs essentially sum up the most important things! 🤓

### Usage in an HTML File

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

Check out [W3Schools](https://www.w3schools.com/css/css_howto.asp) for more details.

### Importing Another Style Sheet

To import another style sheet into your CSS file, use `@import`:

```css
/* Using a string (relative path) */
@import "colors.css";

/* Using a URL (absolute or relative) */
@import url("colors.css"); /* relative URL path */
@import url("http://cdnjs.com/libraries/highlight.js/"); /* absolute URL path */
```

Check out [W3Schools](https://www.w3schools.com/cssref/pr_import_rule.asp) for more details.

## Aligning

To center an item **horizontally** (i.e. same spacing on the left and right), you can style the element wrapping it with `text-align: center`:

```css
.center {
  text-align: center;
}
```

Check out [W3Schools](https://www.w3schools.com/css/css_align.asp) for more details.

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

Check out [W3Schools](https://www.w3schools.com/css/css_margin.asp) for more details.

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

Check out [W3Schools](https://www.w3schools.com/css/css3_shadows.asp) for more details.
