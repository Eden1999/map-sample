(this["webpackJsonpmap-sample"]=this["webpackJsonpmap-sample"]||[]).push([[172],{891:function(e,t,n){"use strict";n.r(t),n.d(t,"destroyContext",(function(){return A})),n.d(t,"dracoDecompressPointCloudData",(function(){return y})),n.d(t,"filterObbsForModifications",(function(){return h})),n.d(t,"filterObbsForModificationsSync",(function(){return j})),n.d(t,"initialize",(function(){return I})),n.d(t,"interpretObbModificationResults",(function(){return x})),n.d(t,"process",(function(){return p})),n.d(t,"setLegacySchema",(function(){return O})),n.d(t,"setModifications",(function(){return w})),n.d(t,"setModificationsSync",(function(){return L})),n.d(t,"test",(function(){return F}));var r,o,i,a=n(7),u=n.n(a),s=n(17),f=n(132),c=n(8),l=n(56);function b(e){return Object(l.a)("esri/libs/i3s/".concat(e))}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return n=[t.geometryBuffer],e.abrupt("return",{result:_(t,n),transferList:n});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(u.a.mark((function e(t){var n,r,o,a,s,c,l,b,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:if(r=[t.geometryBuffer],o=t.geometryBuffer,a=o.byteLength,s=i._malloc(a),(c=new Uint8Array(i.HEAPU8.buffer,s,a)).set(new Uint8Array(o)),l=i.dracoDecompressPointCloudData(s,c.byteLength),i._free(s),!(l.error.length>0)){e.next=7;break}throw"i3s.wasm: ".concat(l.error);case 7:return b=(null==(n=l.featureIds)?void 0:n.length)>0?Object(f.m)(l.featureIds):null,p=Object(f.m)(l.positions),b&&r.push(b.buffer),r.push(p.buffer),e.abrupt("return",{result:{positions:p,featureIds:b},transferList:r});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return j(t),n={buffer:t.buffer},e.abrupt("return",{result:n,transferList:[n.buffer]});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:L(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:i.setLegacySchema(t.context,t.jsonSchema);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){P(e)}function L(e){for(var t=e.modifications,n=i._malloc(8*t.length),r=new Float64Array(i.HEAPU8.buffer,n,t.length),o=0;o<t.length;++o)r[o]=t[o];i.setModifications(e.context,n,t.length,e.isGeodetic),i._free(n)}function _(e,t){if(!i)return null;var n=e.context,r=e.localOrigin,o=e.globalTrafo,a=e.mbs,u=e.obb,s=e.elevationOffset,l=e.geometryBuffer,b=e.geometryDescriptor,p=e.indexToVertexProjector,d=e.vertexToRenderProjector,y=i._malloc(l.byteLength),m=i._malloc(33*Float64Array.BYTES_PER_ELEMENT),h=new Uint8Array(i.HEAPU8.buffer,y,l.byteLength);h.set(new Uint8Array(l));var E=new Float64Array(i.HEAPU8.buffer,m,33);T(E,r);var w=E.byteOffset+3*E.BYTES_PER_ELEMENT,g=new Float64Array(E.buffer,w);T(g,o),w+=16*E.BYTES_PER_ELEMENT,T(g=new Float64Array(E.buffer,w),a),w+=4*E.BYTES_PER_ELEMENT,Object(c.i)(u)&&(T(g=new Float64Array(E.buffer,w),u.center),w+=3*E.BYTES_PER_ELEMENT,T(g=new Float64Array(E.buffer,w),u.halfSize),w+=3*E.BYTES_PER_ELEMENT,T(g=new Float64Array(E.buffer,w),u.quaternion));var O=b,v={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:O.featureIndex},A=i.process(n,!!e.obb,y,h.byteLength,O,v,m,s,p,d,e.normalReferenceFrame);if(i._free(m),i._free(y),A.error.length>0)throw"i3s.wasm: ".concat(A.error);if(A.discarded)return null;var L=A.componentOffsets.length>0?Object(f.m)(A.componentOffsets):null,_=A.featureIds.length>0?Object(f.m)(A.featureIds):null,x=Object(f.m)(A.interleavedVertedData).buffer,j=1===A.indicesType?Object(f.m)(new Uint16Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/2)):Object(f.m)(new Uint32Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/4)),P=Object(f.m)(A.positions),I=1===A.positionIndicesType?Object(f.m)(new Uint16Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/2)):Object(f.m)(new Uint32Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/4)),F={layout:e.layouts[0],interleavedVertexData:x,indices:j,hasColors:A.hasColors,hasModifications:A.hasModifications,positionData:{data:P,indices:I}};return _&&t.push(_.buffer),L&&t.push(L.buffer),t.push(x),t.push(j.buffer),t.push(P.buffer),t.push(I.buffer),{componentOffsets:L,featureIds:_,transformedGeometry:F,obb:A.obb}}function x(e){return 0===e?0:1===e?1:2===e?2:3}function j(e){var t=e.context,n=e.buffer,r=i._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,a=new Float64Array(i.HEAPU8.buffer,r,o),u=new Float64Array(n);a.set(u),i.filterOBBs(t,r,o),u.set(a),i._free(r)}function P(e){i&&i.destroy(e)}function T(e,t){for(var n=0;n<t.length;++n)e[n]=t[n]}function I(){return i?Promise.resolve():(o||(o=(r||(r=new Promise((function(e){return n.e(72).then(n.bind(null,866)).then((function(e){return e.i})).then((function(t){var n=(0,t.default)({locateFile:b,onRuntimeInitialized:function(){return e(n)}});delete n.then}))})).catch((function(e){return Promise.reject(e)}))),r).then((function(e){i=e,o=null}))),o)}var F={transform:_,destroy:P}}}]);
//# sourceMappingURL=172.2e4e9e73.chunk.js.map