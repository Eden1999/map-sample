(this["webpackJsonpmap-sample"]=this["webpackJsonpmap-sample"]||[]).push([[25,147,148],{404:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t||"undefined"!=typeof self&&self;function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return a(null==e&&n.path)}},n.exports),n.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}).call(this,n(379))},518:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u}));var i=n(23),r=n(13),a=n(12),o=n(18),s=n(177);function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?s.a:"esriGeometryPolyline"===t?s.c:s.b}}}function h(t,e){if(Object(a.a)("csp-restrictions"))return function(){return Object(r.a)(Object(i.a)({},e,null),t)};try{var n="this.".concat(e," = null;");for(var o in t)n+="this".concat(o.indexOf(".")?'["'.concat(o,'"]'):".".concat(o)," = ").concat(JSON.stringify(t[o]),";");var s=new Function(n);return function(){return new s}}catch(u){return function(){return Object(r.a)(Object(i.a)({},e,null),t)}}}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(o.a)(t)}}]}},529:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(4),r=n(5),a=n(11),o=n(2),s=n(3),u=n(8),h=n(108),c=n(123),l=n(461),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;Object(o.a)(this,t),this.compareMinX=y,this.compareMinY=_,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}return Object(s.a)(t,[{key:"destroy",value:function(){this.clear(),k.prune(),O.prune(),M.prune(),w.prune()}},{key:"all",value:function(t){this._all(this.data,t)}},{key:"search",value:function(t,e){var n=this.data,i=this.toBBox;if(I(t,n))for(k.clear();n;){for(var r=0,a=n.children.length;r<a;r++){var o=n.children[r],s=n.leaf?i(o):o;I(t,s)&&(n.leaf?e(o):B(t,s)?this._all(o,e):k.push(o))}n=k.pop()}}},{key:"collides",value:function(t){var e=this.data,n=this.toBBox;if(!I(t,e))return!1;for(k.clear();e;){for(var i=0,r=e.children.length;i<r;i++){var a=e.children[i],o=e.leaf?n(a):a;if(I(t,o)){if(e.leaf||B(t,o))return!0;k.push(a)}}e=k.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new Y([]),this}},{key:"remove",value:function(t){if(!t)return this;var e,n=this.data,i=null,r=0,a=!1,o=this.toBBox(t);for(M.clear(),w.clear();n||M.length>0;){var s;if(n||(n=Object(u.c)(M.pop()),i=M.data[M.length-1],r=null!=(s=w.pop())?s:0,a=!0),n.leaf&&-1!==(e=Object(h.e)(n.children,t,n.children.length,n.indexHint)))return n.children.splice(e,1),M.push(n),this._condense(M),this;a||n.leaf||!B(n,o)?i?(r++,n=i.children[r],a=!1):n=null:(M.push(n),w.push(r),r=0,i=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(t){return this.data=t,this}},{key:"_all",value:function(t,e){var n=t;for(O.clear();n;){var i;if(!0===n.leaf){var r,o=Object(a.a)(n.children);try{for(o.s();!(r=o.n()).done;){e(r.value)}}catch(s){o.e(s)}finally{o.f()}}else O.pushArray(n.children);n=null!=(i=O.pop())?i:null}}},{key:"_build",value:function(t,e,n,i){var r=n-e+1,a=this._maxEntries;if(r<=a){var o=new Y(t.slice(e,n+1));return f(o,this.toBBox),o}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,i-1)));var s=new S([]);s.height=i;var u=Math.ceil(r/a),h=u*Math.ceil(Math.sqrt(a));j(t,e,n,h,this.compareMinX);for(var c=e;c<=n;c+=h){var l=Math.min(c+h-1,n);j(t,c,l,u,this.compareMinY);for(var d=c;d<=l;d+=u){var m=Math.min(d+u-1,l);s.children.push(this._build(t,d,m,i-1))}}return f(s,this.toBBox),s}},{key:"_chooseSubtree",value:function(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){for(var r=void 0,a=1/0,o=1/0,s=0,u=e.children.length;s<u;s++){var h=e.children[s],c=b(h),l=p(t,h)-c;l<o?(o=l,a=c<a?c:a,r=h):l===o&&c<a&&(a=c,r=h)}e=r||e.children[0]}return e}},{key:"_insert",value:function(t,e,n){var i=this.toBBox,r=n?t:i(t);M.clear();var a=this._chooseSubtree(r,this.data,e,M);for(a.children.push(t),v(a,r);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(r,M,e)}},{key:"_split",value:function(t,e){var n=t.data[e],i=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,i);var a=this._chooseSplitIndex(n,r,i);if(a){var o=n.children.splice(a,n.children.length-a),s=n.leaf?new Y(o):new S(o);s.height=n.height,f(n,this.toBBox),f(s,this.toBBox),e?t.data[e-1].children.push(s):this._splitRoot(n,s)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(t,e){this.data=new S([t,e]),this.data.height=t.height+1,f(this.data,this.toBBox)}},{key:"_chooseSplitIndex",value:function(t,e,n){var i,r,a;i=r=1/0;for(var o=e;o<=n-e;o++){var s=m(t,0,o,this.toBBox),u=m(t,o,n,this.toBBox),h=x(s,u),c=b(s)+b(u);h<i?(i=h,a=o,r=c<r?c:r):h===i&&c<r&&(r=c,a=o)}return a}},{key:"_chooseSplitAxis",value:function(t,e,n){var i=t.leaf?this.compareMinX:y,r=t.leaf?this.compareMinY:_;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,r)&&t.children.sort(i)}},{key:"_allDistMargin",value:function(t,e,n,i){t.children.sort(i);for(var r=this.toBBox,a=m(t,0,e,r),o=m(t,n-e,n,r),s=g(a)+g(o),u=e;u<n-e;u++){var h=t.children[u];v(a,t.leaf?r(h):h),s+=g(a)}for(var c=n-e-1;c>=e;c--){var l=t.children[c];v(o,t.leaf?r(l):l),s+=g(o)}return s}},{key:"_adjustParentBBoxes",value:function(t,e,n){for(var i=n;i>=0;i--)v(e.data[i],t)}},{key:"_condense",value:function(t){for(var e=t.length-1;e>=0;e--){var n=t.data[e];if(0===n.children.length)if(e>0){var i=t.data[e-1],r=i.children;r.splice(Object(h.e)(r,n,r.length,i.indexHint),1)}else this.clear();else f(n,this.toBBox)}}},{key:"_initFormat",value:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function f(t,e){m(t,0,t.children.length,e,t)}function m(t,e,n,i,r){r||(r=new Y([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,o=e;o<n;o++)a=t.children[o],v(r,t.leaf?i(a):a);return r}function v(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function y(t,e){return t.minX-e.minX}function _(t,e){return t.minY-e.minY}function b(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function g(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function x(t,e){var n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),a=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,a-i)}function B(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function I(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function j(t,e,n,i,r){for(var a=[e,n];a.length;){var o=Object(u.c)(a.pop()),s=Object(u.c)(a.pop());if(!(o-s<=i)){var h=s+Math.ceil((o-s)/i/2)*i;Object(l.a)(t,h,s,o,r),a.push(s,h,h,o)}}}var k=new c.a,O=new c.a,M=new c.a,w=new c.a({deallocator:void 0}),X=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).height=1,t.indexHint=new h.a,t}return n}((function t(){Object(o.a)(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0})),Y=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this)).children=t,i.leaf=!0,i}return n}(X),S=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this)).children=t,i.leaf=!1,i}return n}(X)},533:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(2),r=n(3),a=n(12),o=n(529),s={minX:0,minY:0,maxX:0,maxY:0};var u=function(){function t(){var e=this;Object(i.a)(this,t),this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new o.a(9,Object(a.a)("csp-restrictions")?function(t){return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}:["[0]","[1]","[2]","[3]"]),this._loadIndex=function(){if(e._indexInvalid){var t=new Array(e._idByBounds.size),n=0;e._idByBounds.forEach((function(e,i){t[n++]=i})),e._indexInvalid=!1,e._index.clear(),e._index.load(t)}else e._boundsToLoad.length&&(e._index.load(e._boundsToLoad.filter((function(t){return e._idByBounds.has(t)}))),e._boundsToLoad.length=0)}}return Object(r.a)(t,[{key:"clear",value:function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}},{key:"delete",value:function(t){var e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}},{key:"forEachInBounds",value:function(t,e){var n=this;this._loadIndex(),function(t,e,n){s.minX=e[0],s.minY=e[1],s.maxX=e[2],s.maxY=e[3],t.search(s,n)}(this._index,t,(function(t){return e(n._idByBounds.get(t))}))}},{key:"get",value:function(t){return this._boundsById.get(t)}},{key:"has",value:function(t){return this._boundsById.has(t)}},{key:"invalidateIndex",value:function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}},{key:"set",value:function(t,e){if(!this._indexInvalid){var n=this._boundsById.get(t);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}]),t}()},543:function(t,e,n){"use strict";var i=n(11),r=n(2),a=n(3),o=n(8),s=n(10),u=n(19),h=n(88),c=n(231),l=n(304),d=n(480),f=n(533),m=n(158),v=n(111),y=n(458),_={getObjectId:function(t){return t.objectId},getAttributes:function(t){return t.attributes},getAttribute:function(t,e){return t.attributes[e]},cloneWithGeometry:function(t,e){return new m.a(e,t.attributes,null,t.objectId)},getGeometry:function(t){return t.geometry},getCentroid:function(t,e){return t.centroid||(t.centroid=Object(y.a)(new v.a,t.geometry,e.hasZ,e.hasM)),t.centroid}},b=function(){function t(e){Object(r.a)(this,t),this.geometryInfo=e,this._boundsStore=new f.a,this._featuresById=new Map,this._markedIds=new Set,this.events=new h.a,this.featureAdapter=_}return Object(a.a)(t,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){var t=this;if(!this.numFeatures)return null;var e=Object(c.e)(c.a);return this._featuresById.forEach((function(n){var i=t._boundsStore.get(n.objectId);i&&(e[0]=Math.min(i[0],e[0]),e[1]=Math.min(i[1],e[1]),e[2]=Math.max(i[2],e[2]),e[3]=Math.max(i[3],e[3]))})),e}},{key:"storeStatistics",get:function(){var t=0;return this._featuresById.forEach((function(e){e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}},{key:"add",value:function(t){this._add(t),this._emitChanged()}},{key:"addMany",value:function(t){var e,n=Object(i.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this._add(r)}}catch(a){n.e(a)}finally{n.f()}this._emitChanged()}},{key:"clear",value:function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}},{key:"removeById",value:function(t){var e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}},{key:"removeManyById",value:function(t){this._boundsStore.invalidateIndex();var e,n=Object(i.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value,a=this._featuresById.get(r);a&&this._remove(a)}}catch(o){n.e(o)}finally{n.f()}this._emitChanged()}},{key:"forEachBounds",value:function(t,e,n){var r,a=Object(i.a)(t);try{for(a.s();!(r=a.n()).done;){var o=r.value,s=this._boundsStore.get(o.objectId);s&&e(Object(d.h)(n,s))}}catch(u){a.e(u)}finally{a.f()}}},{key:"getFeature",value:function(t){return this._featuresById.get(t)}},{key:"has",value:function(t){return this._featuresById.has(t)}},{key:"forEach",value:function(t){this._featuresById.forEach((function(e){return t(e)}))}},{key:"forEachInBounds",value:function(t,e){var n=this;this._boundsStore.forEachInBounds(t,(function(t){e(n._featuresById.get(t))}))}},{key:"startMarkingUsedFeatures",value:function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}},{key:"sweep",value:function(){var t=this,e=!1;this._featuresById.forEach((function(n,i){t._markedIds.has(i)||(e=!0,t._remove(n))})),this._markedIds.clear(),e&&this._emitChanged()}},{key:"_emitChanged",value:function(){this.events.emit("changed",void 0)}},{key:"_add",value:function(t){if(t){var e=t.objectId;if(null!=e){var n,i=this._featuresById.get(e);if(this._markedIds.add(e),i?(t.displayId=i.displayId,n=this._boundsStore.get(e),this._boundsStore.delete(e)):Object(o.i)(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);n=Object(l.r)(n||Object(c.e)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(e,n),this._featuresById.set(e,t)}else s.a.getLogger("esri.layers.graphics.data.FeatureStore").error(new u.a("featurestore:invalid-feature","feature id is missing",{feature:t}))}}},{key:"_remove",value:function(t){return Object(o.i)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}]),t}();e.a=b},689:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return _})),n.d(e,"e",(function(){return g}));var i=n(7),r=n.n(i),a=n(17),o=n(11),s=n(2),u=n(38),h=n(54),c=function t(){Object(s.a)(this,t),this.code=null,this.description=null},l=function t(e){Object(s.a)(this,t),this.error=new c,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e};function d(t){return new l(t)}var f=function t(e){Object(s.a)(this,t),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e};function m(t){return new f(t)}var v,y=new Set;function _(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5?arguments[5]:void 0;for(var s in y.clear(),i){var u=t.get(s);if(u){var c=i[s],l=b(u,c);if(l!==c&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:c,sanitizedValue:l}}),y.add(u.name),u&&(r||u.editable)){var f=Object(h.u)(u,l);if(f)return d(Object(h.v)(f,u,l));n[u.name]=l}}}var m,v=Object(o.a)(e);try{for(v.s();!(m=v.n()).done;){var _=m.value;if(!y.has(_.name))return d('missing required field "'.concat(_.name,'"'))}}catch(g){v.e(g)}finally{v.f()}return null}function b(t,e){var n=e;return"string"==typeof e&&Object(h.q)(t)?n=parseFloat(e):null!=e&&Object(h.r)(t)&&"string"!=typeof e&&(n=String(e)),Object(h.s)(n)}function g(t,e){if(!t||!Object(u.i)(e))return t;if("rings"in t||"paths"in t){if(!v)throw new TypeError("geometry engine not loaded");return v.simplify(e,t)}return t}function p(){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=v,t.t0){t.next=6;break}return t.next=4,Promise.all([n.e(6),n.e(17)]).then(n.bind(null,667));case 4:v=t.sent,t.t0=v;case 6:return t.abrupt("return",t.t0);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(t,e){return I.apply(this,arguments)}function I(){return(I=Object(a.a)(r.a.mark((function t(e,n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=!Object(u.i)(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,t.t0){t.next=4;break}return t.next=4,p();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=25.6d4f777f.chunk.js.map