---
sidebarDepth: 2
---
# ol​/Collection~Collection

```import Collection from 'ol/Collection';```
标准JS数组的扩展版本，增加了方便的操作方法。添加和删除对集合的更改会触发集合事件。请注意，这不包括对集合中的对象所做的更改；它们会触发相应对象上的事件，而不是整个集合上的事件。   
::: tip 英文
An expanded version of standard JS Array, adding convenience methods for manipulation. Add and remove changes to the Collection trigger a Collection event. Note that this does not cover changes to the objects within the Collection; they trigger events on the appropriate object, not on the Collection as a whole.
:::

---
** new Collection(opt_array, opt_options) **
| 参数名  | 类型 |  说明 |
|:---------------|:-------------|:------:|
| array | Array.<T> | Array |
| options | Object | 集合选项 |

options说明
| 参数名  | 类型 |  说明 |
|:---------------|:-------------|:------:|
| unique | boolean (默认为false) | 不允许将同一项添加到集合中两次。 |

集合操作触发事件：
- add (module:ol/Collection.CollectionEvent) - 将项添加到集合时触发。
- change (module:ol/events/Event~BaseEvent) - 一般变更事件。当修订计数器增加时触发。
- change:length (module:ol/Object.ObjectEvent)
- error (module:ol/events/Event~BaseEvent) - 一般错误事件。发生错误时触发。
- propertychange (module:ol/Object.ObjectEvent) - 属性更改时触发。
- remove (module:ol/Collection.CollectionEvent) - 从集合中移除时。

## Extends
- module:ol/Object~BaseObject

## 可观测属性
| Name	| Type	| Settable	| ol/Object.ObjectEvent type	| Description
|:---------------|:-------------|:------|:------|:------|
| length	| number	| no	| change:length	| 数组长度。|

## Methods
---


::: tip 英文
:::

::: tip 英文
:::

::: tip 英文
:::

::: tip 英文
:::