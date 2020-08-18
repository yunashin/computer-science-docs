# React

React is a JavaScript framework for building apps with HTML and CSS.

## React-Router

[🔗 React-Router Documentation](https://reactrouter.com/web/api/history)

### Ways to Redirect

#### `useHistory`

You can use `history` from `react-router-dom`'s `useHistory()` to make changes to and retrieve data from a user's history stack.

```jsx
import React from "react";
import { useHistory } from "react-router-dom";

const MyButton = () => {
  const history = useHistory();

  // Redirect to `/home` onClick
  return <button onClick={history.push("/home")}>Go Home</button>;
};

export default MyComponent;
```

Note that `history` is **mutable**, so it's recommended to access `location` using `withRouter` (see below) instead of `useHistory` in order to ensure your lifecycle hooks can handle routing the way you expect them to.

<details> <summary> `history` Properties </summary>

| Property                         | Type       | Description                                                                    |
| -------------------------------- | ---------- | ------------------------------------------------------------------------------ |
| `history.length`                 | `Number`   | Number of entries in the history stack                                         |
| `history.action`                 | `String`   | Current action (`PUSH`, `REPLACE`, or `POP`)                                   |
| `history.location`               | `Object`   | Current location (includes `pathname`, `search`, `hash`, and `state`)          |
| `history.push(path, [state])`    | `function` | Pushes a new entry onto the history stack                                      |
| `history.replace(path, [state])` | `function` | Replaces the current entry on the history stack                                |
| `history.go(n)`                  | `function` | Moves the pointer in the history stack by `n` entries                          |
| `history.goBack()`               | `function` | Moves the pointer in the history stack back 1 (equal to `history.go(-1)`)      |
| `history.goForward()`            | `function` | Moves the pointer in the history stack forward by 1 (equal to `history.go(1)`) |
| `history.block(prompt)`          | `function` | Prevents navigation                                                            |

</details>

<details> <summary>`history.location` Property Examples </summary>

```jsx
{
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```

</details>

#### `withRouter`

You can also wrap a component with `react-router`'s `withRouter` to inject `history`, `location`, and `match` props into it:

```jsx
import React from "react";
import { withRouter } from "react-router";

const MyButton = ({ history, location, match }) => {
  // Redirect to `/home` onClick
  return <button onClick={history.push("/home")}>Go Home</button>;
};

export default withRouter(MyComponent);
```

# DIY Tutorial: Build a Website with React!

Here's a simple tutorial on how to build your own React app and serve it on a public website!

## Step 1: Create and Clone a GitHub Repository

### Creating Your Repository

If you don't have a GitHub account, **[make one](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)**! It's free! 🤑

If you do, let's get started by **[creating a new repository](https://github.com/new)**! Make sure to click the checkbox that says **"Initialize this repository with a README"**.

### Cloning Your Repository

At the home page of your GitHub project, click the green **"Code"** dropdown button, which should open up a tooltip entitled **"Clone with HTTPS"**.

Click the button next to the URL to copy it to your clipboard and then in the root path of your project, run:

```bash
git clone <paste-project-url-here>
```

## Step 2: Install Node.js and npm

**Node.js** is a run-time environment which helps render your JavaScript program's contents on a server before delivering it to a web browser.

**npm** (Node Package Manager) is an app and library that helps you manage your packages with simple terminal commands.

npm is installed with Node.js, meaning that **you need Node.js installed before installing npm**.

To check if you have Node or npm installed, you can run the following commands respectively:

```bash
node -v
npm -v
```

If installed, each command will return the version number that's installed (i.e. `v0.10.31`).

**Download Node.js**: Click the download link at **[Node.js](https://nodejs.org/en/)**

**Download npm**: In the root path of your project, run `npm install`

## Step 3: Set Up `webpack.config.js`

Copy and paste the following code into a new file in the root path of your project:

<details> <summary> webpack.config.js </summary>

```js
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  /* where your app's logic starts */
  entry: "./src/index.js",
  /* related to how webpack emits results */
  output: {
    /* target directory for all output files */
    path: path.resolve(__dirname, "dist"),
    /* the URL that all paths start at (needed to access Routes.js!) */
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".json", ".jsx", ".js"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
```

</details>

## Convert Markdown to HTML with Showdown

Install [Showdown](https://github.com/showdownjs/showdown) by running the following in the root path of your project:

```bash
npm install showdown
```

Then, you can use `showdown` to convert a Markdown file into HTML:

```jsx
import showdown from "showdown";

const converter = new showdown.Converter();
const text = "# hello, markdown!";
const html = converter.makeHtml(text);
```

## 💡 Pro Tip: Styling Code Snippets with Highlight.js

If you want to include _beautiful_ code snippets in your website, you can style your Markdown ͢ HTML file code snippets with Highlight's quick and easy syntax highlighting!

### 1. Install Highlight.js

Inf the root path of your project, run:

```bash
npm i highlight.js
```

### 2. Use Highlight's `highlightBlock`

Copy and paste `highlightCode`, shown below, into the component that renders the HTML files generated by your Markdown files:

```jsx
const highlightCode = () => {
  var pres = document.querySelectorAll("pre>code");
  for (var i = 0; i < pres.length; i++) {
    hljs.highlightBlock(pres[i]);
  }
};
```

Then, in the line right after where you set your file content element's `innerHTML` to your Highlighted HTML file, call `highlightCode`:

```jsx
pageContentElement.innerHtml = markdownToHTMLFile;
highlightCode();
```

### 3. Insert (Custom) Sass

Insert the following code into a new `.sass` file:

<details> <summary> highlight.sass </summary>

```sass
$DEFAULT_FONT_COLOR: #4d4d4d
$ORANGE: #B87E60
$BLUE: #606EB8
$GREEN: #7AA293
$RED: #B8606E
$DARK_PURPLE: #684366
$MAGENTA: #AA60B8
$PURPLE: #7E60B8

.hljs
  display: block
  overflow-x: auto
  padding: 0.5em
  color: $DEFAULT_FONT_COLOR

.hljs-comment,
.hljs-quote
  color: $ORANGE
  font-style: italic

.hljs-keyword,
.hljs-selector-tag,
.hljs-subst
  color: $BLUE

.hljs-number,
.hljs-literal,
.hljs-variable,
.hljs-template-variable,
.hljs-tag .hljs-attr
  color: $GREEN

.hljs-string,
.hljs-doctag
  color: $RED

.hljs-title,
.hljs-section,
.hljs-selector-id
  color: $DARK_PURPLE
  font-weight: bold

.hljs-subst
  font-weight: normal

.hljs-type,
.hljs-function,
.hljs-class .hljs-title
  color: $MAGENTA
  font-weight: bold

.hljs-tag,
.hljs-name,
.hljs-attribute
  color: $RED
  font-weight: normal

.hljs-regexp,
.hljs-link
  color: $GREEN

.hljs-symbol,
.hljs-bullet
  color: $RED

.hljs-built_in,
.hljs-builtin-name
  color: $BLUE

.hljs-meta
  color: $ORANGE
  font-weight: bold

.hljs-deletion
  background: $MAGENTA

.hljs-addition
  background: $PURPLE

.hljs-emphasis
  font-style: italic

.hljs-strong
  font-weight: bold
```

</details>

If you'd like to customize your colors, play around with the color constants at the top of the file. VS Code also has a great feature in which you can hover over an HTML color code value and play around with the color picker tool.
