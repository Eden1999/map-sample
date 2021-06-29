(this["webpackJsonpmap-sample"]=this["webpackJsonpmap-sample"]||[]).push([[156],{620:function(e,t,r){"use strict";r.r(t);var i,n=r(7),a=r.n(n),o=r(17),c=r(13),l=r(2),s=r(3),p=r(5),b=r(4),d=r(0),u=r(40),y=(r(12),r(8)),j=r(10),O=r(14),f=r(1),m=r(33),v=r(25),h=r(135),g=r(6),w=r(24),S=r(19),I=(r(9),r(15),r(16),r(37)),k=r(47),R=(r(69),r(54)),x=r(175),F=r(55),T=r(53),D=r(174),P=r(253),E=r(354),N=r(99),G=r(256),L=(r(101),r(259),r(232)),_=(r(307),r(308),r(309),r(233)),J=r(237),A=r(261),U=r(209),W=r(328),C=r(266),q=r(260),z=r(254),V=r(333),M=r(257),Q=r(343),B=r(217),H=r(299),K=r(317),X=r(344),Y=r(341),Z=r(77),$=r(20),ee=i=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.apply(this,arguments)).age=null,e.ageReceived=null,e.displayCount=null,e.maxObservations=1,e}return Object(s.a)(r,[{key:"clone",value:function(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}}]),r}($.a);Object(d.a)([Object(f.b)({type:Number,json:{write:!0}})],ee.prototype,"age",void 0),Object(d.a)([Object(f.b)({type:Number,json:{write:!0}})],ee.prototype,"ageReceived",void 0),Object(d.a)([Object(f.b)({type:Number,json:{write:!0}})],ee.prototype,"displayCount",void 0),Object(d.a)([Object(f.b)({type:Number,json:{write:!0}})],ee.prototype,"maxObservations",void 0);var te=ee=i=Object(d.a)([Object(g.a)("esri.layers.support.PurgeOptions")],ee),re=j.a.getLogger("esri.layers.StreamLayer"),ie=new m.a({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),ne=function(e){Object(p.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(l.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).copyright=null,e.definitionExpression=null,e.displayField=null,e.elevationInfo=null,e.featureReduction=null,e.fields=null,e.geometryDefinition=null,e.geometryType=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.maxReconnectionAttempts=0,e.maxReconnectionInterval=20,e.maxScale=0,e.minScale=0,e.objectIdField=null,e.operationalLayerType="ArcGISStreamLayer",e.popupEnabled=!0,e.popupTemplate=null,e.purgeOptions=new te,e.screenSizePerspectiveEnabled=!0,e.sourceJSON=null,e.spatialReference=I.a.WGS84,e.type="stream",e.url=null,e.updateInterval=300,e.webSocketUrl=null,e}return Object(s.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(c.a)({url:e},t):e}},{key:"load",value:function(e){var t=this;if(!("WebSocket"in u.a))return this.addResolvingPromise(Promise.reject(new S.a("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);var r=Object(y.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((function(e){return e})).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"readFeatureReduction",value:function(e,t){return Object(H.a)(e,t)}},{key:"writeWebSceneFeatureReduction",value:function(e,t,r,i){Object(H.c)(e,t,"layerDefinition.featureReduction",i)}},{key:"fieldsIndex",get:function(){return new W.a(this.fields)}},{key:"renderer",set:function(e){Object(R.j)(e,this.fields),this._set("renderer",e)}},{key:"readRenderer",value:function(e,t,r){var i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){var n=Object(A.b)(i,t,r)||void 0;return n||re.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),n}if(t.defaultSymbol)return t.types&&t.types.length?new L.a({defaultSymbol:ae(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((function(e){return{id:e.id,symbol:ae(e.symbol,e,r)}}))}):new _.a({symbol:ae(t.defaultSymbol,t,r)})}},{key:"writeRenderer",value:function(e,t,r,i){Object(A.c)(e,t,r,i)}},{key:"writeWebSceneRenderer",value:function(e,t,r,i){Object(A.c)(e,t,"layerDefinition.drawingInfo.renderer",i)}},{key:"createPopupTemplate",value:function(e){return Object(Y.a)(this,e)}},{key:"createQuery",value:function(){var e=new Z.a;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}},{key:"getFieldDomain",value:function(e,t){if(!this.fields)return null;var r=null;return this.fields.some((function(t){return t.name===e&&(r=t.domain),!!r})),r}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"_fetchService",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r,i,n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.webSocketUrl){e.next=12;break}if(null!=(i=this.timeInfo)&&i.trackIdField){e.next=3;break}throw new S.a("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");case 3:if(this.objectIdField){e.next=5;break}throw new S.a("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");case 5:if(this.fields){e.next=7;break}throw new S.a("stream-layer:missing-metadata","The stream layer fields must be specified.");case 7:if(this.geometryType){e.next=9;break}throw new S.a("stream-layer:missing-metadata","The stream layer geometryType must be specified.");case 9:this.url=this.webSocketUrl,e.next=18;break;case 12:if(this.sourceJSON){e.next=18;break}return e.next=15,Object(F.default)(this.parsedUrl.path,{query:Object(c.a)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t});case 15:n=e.sent,o=n.data,this.sourceJSON=o;case 18:return e.abrupt("return",(this.sourceJSON=Object(c.a)(Object(c.a)({},null!=(r=this.sourceJSON)?r:{}),{},{objectIdField:"__esri_stream_id__"}),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(R.j)(this.renderer,this.fields),Object(R.k)(this.timeInfo,this.fields),Object(X.a)(this,{origin:"service"})));case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(q.a)(Object(Q.a)(Object(M.a)(Object(V.a)(Object(C.a)(Object(G.a)(Object(z.a)(Object(P.a)(D.a)))))))));Object(d.a)([Object(f.b)({type:String})],ne.prototype,"copyright",void 0),Object(d.a)([Object(f.b)({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),Object(d.a)([Object(f.b)({type:String,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],ne.prototype,"definitionExpression",void 0),Object(d.a)([Object(f.b)({type:String})],ne.prototype,"displayField",void 0),Object(d.a)([Object(f.b)({type:E.a})],ne.prototype,"elevationInfo",void 0),Object(d.a)([Object(v.a)("featureReduction",["layerDefinition.featureReduction"])],ne.prototype,"readFeatureReduction",null),Object(d.a)([Object(w.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:H.b}})],ne.prototype,"writeWebSceneFeatureReduction",null),Object(d.a)([Object(f.b)({type:[U.a]})],ne.prototype,"fields",void 0),Object(d.a)([Object(f.b)({readOnly:!0})],ne.prototype,"fieldsIndex",null),Object(d.a)([Object(f.b)({type:k.a})],ne.prototype,"geometryDefinition",void 0),Object(d.a)([Object(f.b)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:ie.read}}})],ne.prototype,"geometryType",void 0),Object(d.a)([Object(f.b)(N.d)],ne.prototype,"labelsVisible",void 0),Object(d.a)([Object(f.b)({type:[B.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:K.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],ne.prototype,"labelingInfo",void 0),Object(d.a)([Object(f.b)(N.e)],ne.prototype,"legendEnabled",void 0),Object(d.a)([Object(f.b)({type:["show","hide"]})],ne.prototype,"listMode",void 0),Object(d.a)([Object(f.b)({type:O.a})],ne.prototype,"maxReconnectionAttempts",void 0),Object(d.a)([Object(f.b)({type:O.a})],ne.prototype,"maxReconnectionInterval",void 0),Object(d.a)([Object(f.b)(N.f)],ne.prototype,"maxScale",void 0),Object(d.a)([Object(f.b)(N.g)],ne.prototype,"minScale",void 0),Object(d.a)([Object(f.b)({type:String})],ne.prototype,"objectIdField",void 0),Object(d.a)([Object(f.b)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ne.prototype,"operationalLayerType",void 0),Object(d.a)([Object(f.b)(N.j)],ne.prototype,"popupEnabled",void 0),Object(d.a)([Object(f.b)({type:x.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ne.prototype,"popupTemplate",void 0),Object(d.a)([Object(f.b)({type:te})],ne.prototype,"purgeOptions",void 0),Object(d.a)([Object(f.b)({types:J.a,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ne.prototype,"renderer",null),Object(d.a)([Object(v.a)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(v.a)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ne.prototype,"readRenderer",null),Object(d.a)([Object(w.a)("renderer")],ne.prototype,"writeRenderer",null),Object(d.a)([Object(w.a)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:J.b}})],ne.prototype,"writeWebSceneRenderer",null),Object(d.a)([Object(f.b)(N.m)],ne.prototype,"screenSizePerspectiveEnabled",void 0),Object(d.a)([Object(f.b)({type:I.a,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ne.prototype,"spatialReference",void 0),Object(d.a)([Object(f.b)({json:{read:!1}})],ne.prototype,"type",void 0),Object(d.a)([Object(f.b)(N.n)],ne.prototype,"url",void 0),Object(d.a)([Object(f.b)({type:Number})],ne.prototype,"updateInterval",void 0),Object(d.a)([Object(f.b)({type:String})],ne.prototype,"webSocketUrl",void 0),ne=Object(d.a)([Object(g.a)("esri.layers.StreamLayer")],ne);var ae=Object(h.b)({types:T.i}),oe=ne;t.default=oe}}]);
//# sourceMappingURL=156.349c5b96.chunk.js.map