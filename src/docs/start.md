# 快速开始 o(*￣︶￣*)o

----

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import FrUI from 'hai-ui' // 引入组件库

Vue.use(FrUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { HButton } from 'hai-ui'

export default {
  components: {
    HButton
  }
}
```

在模板中，用 `<h-button></h-button>` 自定义标签的方式使用组件

```html
<template>
  <h-button>这是一个按钮</h-button>
</template>
