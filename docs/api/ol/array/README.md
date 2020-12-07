---
sidebarDepth: 2
---
# ol/array
`import * as olArray from 'ol/array';`

## 方法
module:ol/array.stableSort(arr, compareFnc)
`import {stableSort} from 'ol/array';`

对数组进行排序，使相等元素的相对顺序被保留。点击[链接](https://en.wikipedia.¸org/wiki/Sorting_algorithm#Stability)了解详情。

::: tip 英文
Sort the passed array such that the relative order of equal elements is preverved. See https://en.wikipedia.org/wiki/Sorting_algorithm#Stability for details.
:::

| 参数名  | 类型 |  说明 |
|:---------------|:-------------|:------:|
| arr | Array.<*> | 要排序的数组（修改原始数组） |
| compareFnc | function | 数据比较函数 |