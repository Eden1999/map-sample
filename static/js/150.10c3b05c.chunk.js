(this["webpackJsonpmap-sample"]=this["webpackJsonpmap-sample"]||[]).push([[150],{696:function(e,n,a){"use strict";a.r(n),a.d(n,"hydratedAdapter",(function(){return c}));var t=a(42),r=a(47),i=a(158),o=a(92),s=a(90),c={convertToGEGeometry:function(e,n){if(null==n)return null;var a="cache"in n?n.cache._geVersion:void 0;return null==a&&(a=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=a)),a},exportPoint:function(e,n,a){var r=e.hasZ(n),i=e.hasM(n),o=new t.a({x:e.getPointX(n),y:e.getPointY(n),spatialReference:a});return r&&(o.z=e.getPointZ(n)),i&&(o.m=e.getPointM(n)),o.cache._geVersion=n,o},exportPolygon:function(e,n,a){var t=new o.a({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:a});return t.cache._geVersion=n,t},exportPolyline:function(e,n,a){var t=new s.a({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:a});return t.cache._geVersion=n,t},exportMultipoint:function(e,n,a){var t=new i.a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:a});return t.cache._geVersion=n,t},exportExtent:function(e,n,a){var t=e.hasZ(n),i=e.hasM(n),o=new r.a({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:a});if(t){var s=e.getZExtent(n);o.zmin=s.vmin,o.zmax=s.vmax}if(i){var c=e.getMExtent(n);o.mmin=c.vmin,o.mmax=c.vmax}return o.cache._geVersion=n,o}}}}]);
//# sourceMappingURL=150.10c3b05c.chunk.js.map