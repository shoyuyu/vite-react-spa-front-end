# Vite + React 環境のSPAサイト

## 概要

ViteとReact、TypeScriptを使用したSPAサイトです。
ルーティング `react-router-dom`、Sass、Linter/Formatterの関連パッケージをインストール、各種設定しました。

## 目的

Viteの環境構築と、`react-router-dom` バージョン6 の学習を目的にしてます。

* Viteの理解、環境構築
* `react-router-dom` バージョン6のルーティング設定
* SPAサイトのフロントエンドを構築

## 備考

* フロントエンド部分のみ静的に構築
* 今回の目的から逸れるため、バックエンドの構築は除外
* 今回の目的から逸れるため、デザイン性は考慮無し
* レイアウトはモバイルファースト

---

## 環境

* Node.js: 20.10.0

### 依存関係

以下の主要な依存関係を使用しています。

* Vite "^5.2.0"
* React "^18.2.0"
* TypeScript "^5.2.2"
* Scss "^1.74.1"

## 実行手順

### 依存関係のインストール

``` Shell
npm ci
```

### 開発サーバ起動

``` Shell
npm run dev
```