css-layout-study
================

これはCSSのトリックレイアウトを学ぶサンプルです。
ベーシックなものではありません。

## dependencies

事前に以下をインストールしておくこと

- node
- grunt-cli

## usage 
```
$ npm install # install dependencies
$ grunt # run server
```

## 問題

JavaScriptを使わないで以下のレイアウトを組む

#### LESSON1

![](https://raw.github.com/mosson/css-layout-study/master/src/lesson1/lesson1.gif)

- 左側固定幅・右側可変幅
- ウィンドウサイズに依存
- 左側の高さと右側の高さは見た目上一致すること

#### LESSON2

![](https://raw.github.com/mosson/css-layout-study/master/src/lesson2/lesson2.gif)

- クラス名は全体で２個しかつかってはいけません(擬似クラスはいくらでも)

#### LESSON3

![](https://raw.github.com/mosson/css-layout-study/master/src/lesson3/lesson3.gif)

- 2レイヤー構成
- 窓の部分は右下固定位置固定幅 r: 100px b: 100px w: 200px h: 200px
- それ以外の黒い部分はウィンドウサイズに応じて可変幅
- 窓の部分のみマウスイベントを貫通できること

#### LESSON4

![](https://raw.github.com/mosson/css-layout-study/master/src/lesson4/lesson4.gif)

- モーダル部分は可変幅( ウィンドウサイズ - マージン50px )

### ポイント

#### LESSON1

- CSSでの高さの仕組みを理解する
- 見た目上の高さと要素の高さのトリックを理解する
- 引き算で考える

#### LESSON2

- CSSだけで条件分岐ができることを知る
- 余白をmarginでとるかpaddingでとるか

#### LESSON3

- overflow:hiddenとposition:absoluteとheight:autoのトリックを理解する

#### LESSON4

- LESSON2とLESSON3の応用
- 擬似クラスを使いこなすことがCSSプログラミングの扉を開くことに気づく

## LICENSE

The MIT License (MIT)

Copyright (c) 2013 mosson
http://mosson.github.io/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.