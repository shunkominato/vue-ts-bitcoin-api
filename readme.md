# vue-ts-bitcoin-api

## Overview

---

SPA でビットコインの価格を取得するアプリです

decorator を使用せず、Vue TypeScript を使用しベストプラクティスを目指したもの

-   vuecomponent を Atomic Design で分割
-   flux 設計で vuex を構築
-   テストコードは jest を使用

やはり decorator を使用しないとインテリセンスが効かずしんどい...

## Description

---

Atomic Design で分割しているが、tmplates と pages は使用していない  
view フォルダが pages に当たる  
基本的には view で vuex を呼ぶ

vuex の流れ  
1.components or views で dispach し、 stores/actions.ts の Actions を呼ぶ  
2.Actions で Api を実行(Axios)  
3.実行後、Actions から Mutation を呼び出し、state を更新  
4.components or views で computed にて getters を呼び、価格を取得する

## install

---

1.install

```bash
$ yarn install
```

2.起動

```bash
$ yarn dev
```

## test

---

```bash
$ yarn test
```
