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
