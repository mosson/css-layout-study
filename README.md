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
また、sassのコンパイルが行われcssファイルが生成されます。

`localhost:9001`の後に閲覧したいレッスン名を入力するとそのレッスンを閲覧することができます。
閲覧可能なレッスンは`localhost:9001`にアクセスすると一覧が表示されます。

```
http://localhost:9001/[レッスン名]

ex)
http://localhost:9001/lesson1/
```

#### 開発用
`grunt` をデフォルトで実行すると、livereload,connect,regardeタスクが走ります。



rebase!!!!!!!!!!!