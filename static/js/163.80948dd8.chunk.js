(this["webpackJsonpmap-sample"]=this["webpackJsonpmap-sample"]||[]).push([[163],{887:function(e,t,r){"use strict";r.r(t);var a=r(2),i=r(3),n=r(5),o=r(4),c=r(0),s=(r(12),r(10),r(14),r(1)),u=r(6),l=(r(9),r(15),r(16),r(340)),p=r(7),b=r.n(p),f=r(13),O=r(17),j=r(55),y=r(328),d=r(106),m=r(641),v=r(677),B=r(8),h=r(25),g=r(20),k=r(37),P=r(43),R=r(92),A=r(90),N=(r(69),r(75)),S=r(122),C=r(642),F=r(688);function J(e){return S.default.fromJSON(e).features.map((function(e){return e.geometry}))}var w=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).directions=null,i.facilities=null,i.incidents=null,i.messages=null,i.pointBarriers=null,i.polylineBarriers=null,i.polygonBarriers=null,i.routes=null,i}return Object(i.a)(r,[{key:"readFacilities",value:function(e){return J(e)}},{key:"readIncidents",value:function(e){return J(e)}},{key:"readPointBarriers",value:function(e,t){return J(t.barriers)}},{key:"readPolylineBarriers",value:function(e){return J(e)}},{key:"readPolygonBarriers",value:function(e){return J(e)}},{key:"readRoutes",value:function(e){return function(e){return e.features.map((function(t){var r=k.a.fromJSON(e.spatialReference),a=N.a.fromJSON(t);return Object(B.i)(a.geometry)&&(a.geometry.spatialReference=r),a}))}(e)}}]),r}(g.a);Object(c.a)([Object(s.b)({type:[F.a]})],w.prototype,"directions",void 0),Object(c.a)([Object(s.b)({type:[P.a]})],w.prototype,"facilities",void 0),Object(c.a)([Object(h.a)("facilities")],w.prototype,"readFacilities",null),Object(c.a)([Object(s.b)({type:[P.a]})],w.prototype,"incidents",void 0),Object(c.a)([Object(h.a)("incidents")],w.prototype,"readIncidents",null),Object(c.a)([Object(s.b)({type:[C.a]})],w.prototype,"messages",void 0),Object(c.a)([Object(s.b)({type:[P.a]})],w.prototype,"pointBarriers",void 0),Object(c.a)([Object(h.a)("pointBarriers",["barriers"])],w.prototype,"readPointBarriers",null),Object(c.a)([Object(s.b)({type:[A.a]})],w.prototype,"polylineBarriers",void 0),Object(c.a)([Object(h.a)("polylineBarriers")],w.prototype,"readPolylineBarriers",null),Object(c.a)([Object(s.b)({type:[R.a]})],w.prototype,"polygonBarriers",void 0),Object(c.a)([Object(h.a)("polygonBarriers")],w.prototype,"readPolygonBarriers",null),Object(c.a)([Object(s.b)({type:[N.a]})],w.prototype,"routes",void 0),Object(c.a)([Object(h.a)("routes")],w.prototype,"readRoutes",null);var T=w=Object(c.a)([Object(u.a)("esri.tasks.support.ClosestFacilitySolveResult")],w),q=Object(m.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});function I(){return(I=Object(O.a)(b.a.mark((function e(t,r,a){var i,n,o,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=[],o={},c={},s=Object(d.c)(t),e.abrupt("return",(r.incidents&&r.incidents.features&&Object(v.a)(r.incidents.features,n,"incidents.features",o),r.facilities&&r.facilities.features&&Object(v.a)(r.facilities.features,n,"facilities.features",o),r.pointBarriers&&r.pointBarriers.features&&Object(v.a)(r.pointBarriers.features,n,"pointBarriers.features",o),r.polylineBarriers&&r.polylineBarriers.features&&Object(v.a)(r.polylineBarriers.features,n,"polylineBarriers.features",o),r.polygonBarriers&&r.polygonBarriers.features&&Object(v.a)(r.polygonBarriers.features,n,"polygonBarriers.features",o),Object(y.a)(n).then((function(e){for(var t in o){var r=o[t];i.push(t),c[t]=e.slice(r[0],r[1])}return Object(v.e)(c,i)?Object(v.c)(s.path):Promise.resolve({dontCheck:!0})})).then((function(e){("dontCheck"in e?e.dontCheck:e.hasZ)||Object(v.b)(c,i);var t=function(e){c[e].forEach((function(t,a){r.get(e)[a].geometry=t}))};for(var n in c)t(n);var o={query:Object(f.a)(Object(f.a)({},s.query),{},{f:"json"},q.toQueryParams(r))};return a&&(o=Object(f.a)(Object(f.a)({},a),o)),Object(j.default)("".concat(s.path,"/solveClosestFacility"),o)})).then((function(e){return T.fromJSON(e.data)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=r(643),E=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).url=null,i}return Object(i.a)(r,[{key:"solve",value:function(e,t){return function(e,t,r){return I.apply(this,arguments)}(this.url,e,t)}}]),r}(Object(x.a)(l.a));Object(c.a)([Object(s.b)()],E.prototype,"url",void 0);var M=E=Object(c.a)([Object(u.a)("esri.tasks.ClosestFacilityTask")],E);t.default=M}}]);
//# sourceMappingURL=163.80948dd8.chunk.js.map