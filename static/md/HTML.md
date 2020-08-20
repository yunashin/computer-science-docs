# HTML

When thinking about laying elements out on a webpage, let's imagine we're **organizing a picnic**! 💭🌞🧺

We've got

- a **picnic blanket**, which represents a blank webpage,

- an endless supply of ✨🔴 **magical plates** 🔵✨ that are **rectangular** and **_invisible_** by default, which represent our elements <span class="color-div">`<div>`</span> and <span class="color-span">`<span>`</span>,

- and an endless supply of 🍏 **apples** 🍏, which belong to the magical plates and represent content on our page.

Because our apples represent any kind of content you'd put on a webpage, they're pretty funky. Some of our apples are really tall, and some really wide.

Let's imagine that we can make the picnic blanket magically float and face us so that we can call the blanket **tall** and **wide**. Now, we're going to start laying out our apples from the **top left corner**, going from left to right and top to bottom. ➡️⬇️

The plates are ✨ **magical** ✨ because even though they're invisible to the naked 👁, you know _exactly_ where they are and you can modify them with **special magical properties**... 🕵️‍♀️🔮💫

[_CSS properties_](./css) to be exact! 🧙‍♀️ There are 2 kinds of plates: 🔴<span class="color-div">`<div>`</span>s🔴 and 🔵<span class="color-span">`<span>`</span>s🔵. Remember that the plates are **rectangular**. The magical plates hug the apples, like good parent elements do, and only **take up as much height needed** to fit them.

🔴<span class="color-div">`<div>`</span>🔴 plates are greedy and automagically take up the **full width** of the picnic blanket.

🔵<span class="color-span">`<span>`</span>🔵 plates are loving of their apples and only **take up as much width needed** to fit them.

## HTML Elements

An HTML element's defined by its **start tag**, **content**, and **end tag**.

```
<tagname>How about them apples?</tagname>
```

[🔗 W3Schools](https://www.w3schools.com/html/html_elements.asp)

<div class="output-container">
  <div class="output-box-div"></div>
</div>
