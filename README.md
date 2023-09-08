# POC: DevTools Extension GPU Crash

POC Extension that crashes the GPU

The root cause is this:

```js
window.document.querySelector('.box').getAnimations()[0].currentTime = 1000000 * Math.random()
```

If you call that quickly after each other, the extension crashes.

Example Crash ID: [crash/d4adab2203e014bd](http://crash/d4adab2203e014bd)

Noteworthy: when running the code directly in Chrome – i.e. not in an extension – it works fine. Try it with this [CodePen](https://codepen.io/bramus/pen/mdawXjJ/200680474e48c87348dfb2a7604c72a3).

## License

This project is released under the MIT public license. See the enclosed `LICENSE` for details.
