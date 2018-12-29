# Action AngularJS 1.5+

## 建置開發環境

[**webpack 4**](https://webpack.js.org/guides/installation/)

```shell
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev webpack-merge copy-webpack-plugin clean-webpack-plugin
npm install --save-dev html-webpack-plugin
npm install --save-dev file-loader url-loader html-loader
npm install --save-dev style-loader css-loader
npm install --save-dev sass-loader node-sass
```

[**babel 7**](https://babeljs.io/setup#installation)

```shell
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

**.browserslistrc**

```
> 0.25%
not dead
android 4.4
chrome 49
edge 17
firefox 52
ie 11
ios_saf 9.3
ios_saf 7
safari 11.1
samsung 4
```

**AngularJS 1.7.5**

```shell
npm install --save-dev angular@1.7
npm install --save-dev babel-plugin-angularjs-annotate
```

[babel-plugin-angularjs-annotate](https://github.com/schmod/babel-plugin-angularjs-annotate)

> [Why BPAA (babel-plugin-angularjs-annotate)?](https://www.codelord.net/2017/06/18/ng-annotate-deprecated-what-that-means-for-your-projects/)

## Hello world

**main.js**

main.js 會編成 index.js

```javascript
import angular from 'angular';
angular.bootstrap(document.querySelector("#app"), [])
```

**index.html**

因為要使用 `document.querySelector('#app')` 所以必須要在 `body` 最下面引用 `index.js`

```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>AngularJS - demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js" charset="utf-8"></script>
  </body>
</html>
```

這樣的做的目的，是為了用起來像其它框架。
不然的話，有另外比較好做的做法，風格比較 angularjs

**main.js**

```javascript
import angular from 'angular';
angular.module("app"), [])
```

**index.html**

```html
<!DOCTYPE HTML>
<html>
  <head>
    <title>AngularJS - demo</title>
  </head>
  <body>
    <div ng-app="app"></div>
    <script src="./index.js" charset="utf-8"></script>
  </body>
</html>
```
