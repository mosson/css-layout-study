css-layout-study
================

## gruntのインストール
gruntをグローバルインストールします。

```
$ npm install -g grunt-cli
```
エラーが出る場合は権限がない可能性があるので、
その際はsudoで実行してください。

## 必要パッケージのインストール

```
$ npm install
```

## サーバーの起動
#### 閲覧用
`grunt production` を実行すると閲覧用のサーバーが立ち上がります。
また、sassのコンパイルが行われます。

#### 開発用
`grunt` をデフォルトで実行すると、livereload,connect,regardeタスクが走ります。


```
http://localhost:9001/
```



