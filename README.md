### Introduction

This small library is used to create SVG icons based on a set of parameters.

### Files

##### Minified

Minified is a ready-to-use version. Denoted by the `.min` in the file name. It's basically the same thing but just no unnecessary characters, to improve the performance. 

You can use it in your userscript or project directly through [Github](https://raw.githubusercontent.com/lightningmcqueen80/createSVG/main/createSVG.min.js).

##### Unminified

Unminified is a version to edit, modify, or just simple clean code. It's the one with no `.min` in the file name.

You can use it in your userscript or project directly through [Github](https://raw.githubusercontent.com/lightningmcqueen80/createSVG/main/createSVG.js).

### Usage

Call the function, then pass the following parameters:

 1. `xmlns`: It's `http://www.w3.org/2000/svg` all the time.

 2. `width`: Icon's width, in plain numbers, no `px` like `18`.

 3. `height`: Icon's heights, in plain numbers, no `px` like `18`.

 4. `viewbox`: It consists of 4 numbers, in plain numbers, no `px`, usually like `0 0 18 18`.

 5. `ariaHidden`: Either `true` or `false`.

 6. `classes`: Any custom classes, like `myNiceIcon` to target using JavaScript or so.

 7. `styles`: Any custom styles, like `color: #FFF;`.

 8. `path`: It's in plain HTML, like `<path d="M5 6c0-1.09.91-2 2-2h4.5L15 7.5V15c0 1.09-.91 2-2 2H7c-1.09 0-2-.91-2-2V6Zm6-1.25V8h3.25L11 4.75Z"></path>`.

#### Example

```javascript
const icon = createSVG("http://www.w3.org/2000/svg", "18", "18", "0 0 18 18", "true", "myIcon", "color: #FFF", `<path d="M5 6c0-1.09.91-2 2-2h4.5L15 7.5V15c0 1.09-.91 2-2 2H7c-1.09 0-2-.91-2-2V6Zm6-1.25V8h3.25L11 4.75Z"></path><path d="M10 1a2 2 0 0 1 2 2H6a2 2 0 0 0-2 2v9a2 2 0 0 1-2-2V4a3 3 0 0 1 3-3h5Z" opacity="0.4"></path>`);

console.log(icon);
```

### Issues

You can report any issues or any unexpected behavior in the [issues](https://github.com/lightningmcqueen80/createSVG/issues) tab.

### Contributing

Contributing is always welcome, you can create a pull request to modify or extend the library, then submit it in the [Pull requests](https://github.com/lightningmcqueen80/createSVG/pulls) tab.

### License

This library is licensed under the [MIT license](https://github.com/lightningmcqueen80/createSVG/blob/main/LICENSE).