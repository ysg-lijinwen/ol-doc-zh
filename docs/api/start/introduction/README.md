# 介绍

## API基本组成及分类描述

- 地图（Map）
地图由[图层]()(layers)、可视化图层的[视图]()(view)、修改地图内容的[交互]()(interactions)以及带有UI组件的[控件](../../ol/control/Control/)(controls)组成。   
[Overview](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)  
[Creation](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#Map)  
[Events](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)   

::: tip 英文
A [map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html) is made of [layers](https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html), a [view](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) to visualize them, [interactions](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html) to modify map content and [controls](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html) with UI components.   
[Overview](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html)  
[Creation](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#Map)   
[Events](https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html)
:::

- 视图（View）

视图是用于管理地图视图的视觉参数，如分辨率或旋转。   
一个[视图](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html)一般带有中心、投影、分辨率和旋转等属性。

::: tip 英文
The view manages the visual parameters of the map view, like resolution or rotation.   
[View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) with center, projection, resolution and rotation
:::

- 层（Layers）

层是从[源](https://openlayers.org/en/latest/apidoc/module-ol_source_Source-Source.html)获取数据的轻量级容器。

[ol/layer/Tile](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html)   
[ol/layer/Image](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html)   
[ol/layer/Vector](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)   
[ol/layer/VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html)

::: tip 英文
Layers are lightweight containers that get their data from [sources](https://openlayers.org/en/latest/apidoc/module-ol_source_Source-Source.html).

[ol/layer/Tile](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html)   
[ol/layer/Image](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html)   
[ol/layer/Vector](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)   
[ol/layer/VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html)
:::

- 控件（Controls）

[地图默认控件](https://openlayers.org/en/latest/apidoc/module-ol_control.html#.defaults)   
[所有控件](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)

::: tip 英文
[Map default controls](https://openlayers.org/en/latest/apidoc/module-ol_control.html#.defaults)   
[All controls](https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html)
:::

- 交互（Interactions）

[地图默认交互](https://openlayers.org/en/latest/apidoc/module-ol_interaction.html#~defaults)   
[矢量特征](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)的交互   
> [ol/interaction/Select](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html)   
> [ol/interaction/Draw](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html)   
> [ol/interaction/Modify](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-Modify.html)

[所有交互](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)

::: tip 英文
Map default interactions[](https://openlayers.org/en/latest/apidoc/module-ol_interaction.html#~defaults)
Interactions for [vector features](https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html)
  - [ol/interaction/Select](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html)
  - [ol/interaction/Draw](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html)
  - [ol/interaction/Modify](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-Modify.html)

[All interactions](https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html)
:::

- 源和格式（Sources and formats）

[ol/layer/Tile](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html) - [瓦片源](https://openlayers.org/en/latest/apidoc/module-ol_source_Tile-TileSource.html)   
[ol/layer/Image](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html) - [图像源](https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html)   
[ol/layer/Vector](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html) - [矢量源](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html)   
[ol/layer/VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html) - [矢量瓦片源](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html)   
[ol/format/WMSCapabilities](https://openlayers.org/en/latest/apidoc/module-ol_format_WMSCapabilities-WMSCapabilities.html) - 读/写矢量数据的[格式](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature-FeatureFormat.html)   

::: tip 英文
[Tile sources](https://openlayers.org/en/latest/apidoc/module-ol_source_Tile-TileSource.html) for [ol/layer/Tile](https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html)   
[Image sources](https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html) for [ol/layer/Image](https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html)   
[Vector sources](https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html) for [ol/layer/Vector](https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html)   
[Vector tile sources](https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html) for [ol/layer/VectorTile](https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html)   
[Formats](https://openlayers.org/en/latest/apidoc/module-ol_format_Feature-FeatureFormat.html) for reading/writing vector data
[ol/format/WMSCapabilities](https://openlayers.org/en/latest/apidoc/module-ol_format_WMSCapabilities-WMSCapabilities.html)
:::

- 投影（Projections）

需要在视图投影中提供所有坐标和范围（默认值：EPSG：3857). 若要转换，请使用[ol/proj#transform()](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform)和[ol/proj#transformExtent()](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent)。

[ol/proj](https://openlayers.org/en/latest/apidoc/module-ol_proj.html)

::: tip 英文
All coordinates and extents need to be provided in view projection (default: EPSG:3857). To transform, use [ol/proj#transform()](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transform) and [ol/proj#transformExtent()](https://openlayers.org/en/latest/apidoc/module-ol_proj.html#.transformExtent).

[ol/proj](https://openlayers.org/en/latest/apidoc/module-ol_proj.html)
:::

- 对象观察（Observable objects）

所有对象的变化可以通过调用.on('propertychange')方法来监听，监听器能够接收到ol/Object.ObjectEvent包含更改的属性和旧值的信息。

::: tip 英文
Changes to all [ol/Objects](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html) can be observed by calling the [object.on('propertychange')](https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html#on) method. Listeners receive an [ol/Object.ObjectEvent](https://openlayers.org/en/latest/apidoc/module-ol_Object.ObjectEvent.html) with information on the changed property and old value.
:::

- 其他部件（Other components）

地理位置 - [ol/Geolocation](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation.html)   
覆盖物 - [ol/Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)

::: tip 英文
 - [ol/Geolocation](https://openlayers.org/en/latest/apidoc/module-ol_Geolocation.html)
 - [ol/Overlay](https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html)
:::

## API更改策略（API change policy）

OpenLayers API包括
-施工人员姓名及签名
-实例方法和属性的名称和签名
-功能名称和签名
-常量名称
在一个主要的发布系列中，API不会被更改。对API的任何更改都将伴随着一个新的主要版本。 

<font color="red">注意：API更改策略不包括用于设置OpenLayers UI样式的CSS类名。它也不包括任何typedef和enum。</font>

::: tip 英文
The OpenLayers API consists of
- names and signatures of constructors
- names and signatures of instance methods and properties
- names and signatures of functions
- names of constants
Within a major release series, the API will not be changed. Any changes to the API will be accompanied by a new major release.

<font color="red">Note: The API change policy does not cover CSS class names that are used to style the OpenLayers UI. It also does not cover any typedefs and enums.</font>

:::