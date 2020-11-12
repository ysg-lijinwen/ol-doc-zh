# 介绍

## API基本组成及分类描述

- Map

A map is made of layers, a view to visualize them, interactions to modify map content and controls with UI components.

- View

The view manages the visual parameters of the map view, like resolution or rotation.
View with center, projection, resolution and rotation

- Layers

Layers are lightweight containers that get their data from sources.

- Controls

Map default controls
All controls

- Interactions

Map default interactions
Interactions for vector features
  - ol/interaction/Select
  - ol/interaction/Draw
  - ol/interaction/Modify
All interactions

- Sources and formats

Tile sources for ol/layer/Tile
Image sources for ol/layer/Image
Vector sources for ol/layer/Vector
Vector tile sources for ol/layer/VectorTile
Formats for reading/writing vector data
ol/format/WMSCapabilities

- Projections

All coordinates and extents need to be provided in view projection (default: EPSG:3857). To transform, use ol/proj#transform() and ol/proj#transformExtent().

ol/proj

- Observable objects

Changes to all ol/Objects can be observed by calling the object.on('propertychange') method. Listeners receive an ol/Object.ObjectEvent with information on the changed property and old value.

- Other components

  - ol/Geolocation
  - ol/Overlay

## API change policy
The OpenLayers API consists of
- names and signatures of constructors
- names and signatures of instance methods and properties
- names and signatures of functions
- names of constants
Within a major release series, the API will not be changed. Any changes to the API will be accompanied by a new major release.

Note: The API change policy does not cover CSS class names that are used to style the OpenLayers UI. It also does not cover any typedefs and enums.