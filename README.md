# WD-40

## 前言

很遗憾没能在4月1号当天体验到这个彩蛋，只是偶然 B 站刷视频给我刷到了。本来只是图一乐，看评论区大神讨论感觉好像可行性挺高的（好像要长脑子了>_<），然后就上 google 搜了搜，您猜怎么着：

碰巧，看到了这样一个问答 [Using Matter.js to render to the DOM or React](https://stackoverflow.com/questions/63906218/using-matter-js-to-render-to-the-dom-or-react) 。

碰巧，这个回答是两年半前（为什么碰巧呢？）

碰巧，Matter.js 官网有类似效果的展示 [gyro](https://brm.io/matter-js/demo/#gyro)

大概就确定了技术栈：Matter.js + JQuery.js，但是怎么作用在清华源上呢？我又偷不到清华的服务器，也不好意思直接去抢，所以最后想来想去，只能用油猴脚本的方式来骗、来偷袭了。

## 使用 / Usage

> 目前仅用于油猴脚本使用

安装油猴脚本：https://greasyfork.org/zh-CN/scripts/463273-wd-40

测试靶场：https://mirrors.tuna.tsinghua.edu.cn/

## 开发 / Development

1. 运行 `git clone` 和 `npm install` 安装依赖

2. RTFSC

3. 测试 `npm run dev`

如需测试油猴脚本，请选择“添加新脚本”，并填入以下内容：

```js
// ==UserScript==
// @name         WD-40-Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.4.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js
// @require      file:// YOUR-GIT-REPOSITERY-PATH \dist\index.iife.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```