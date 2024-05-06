# Vite + React で構築したSPAフロントエンド

## 概要

ViteとReact、TypeScriptを使用したSPAサイトです。<br>
`react-router-dom`、Sass、Linter/Formatterの関連パッケージをインストールして各種設定しました。

## 目的

Viteの環境構築と、`react-router-dom` の学習を目的にしています。

* Viteの理解、環境構築
* `react-router-dom` バージョン6のルーティング設定
* SPAサイトのフロントエンド実装

## 備考

* フロントエンド部分のみ実装
  * ルーティング、Props、React hooksを使用しています。
* バックエンドは、今回の目的から逸れるため除外
* サイトデザインは、今回の目的から逸れるため除外
  * 今回はワイヤーフレーム程度のデザインレベルで作成しています。
* レイアウトはモバイルファースト採用

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