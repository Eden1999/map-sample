(this["webpackJsonpmap-sample"]=this["webpackJsonpmap-sample"]||[]).push([[53],{428:function(e,t,i){"use strict";var n=i(2),a=i(3),r=i(5),s=i(4),c=i(0),u=(i(12),i(10)),o=(i(14),i(1)),l=i(6),h=(i(9),i(15),i(16),i(27)),d=i(88),p=i(251),f=i(145),b=i(144),y=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(e){var a;return Object(n.a)(this,i),(a=t.call(this,e)).layer=null,a.parent=null,a}return Object(a.a)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";throw u.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(b.b)(Object(p.a)(Object(f.b)(d.a.EventedMixin(h.a)))));Object(c.a)([Object(o.b)()],y.prototype,"fullOpacity",null),Object(c.a)([Object(o.b)()],y.prototype,"layer",void 0),Object(c.a)([Object(o.b)()],y.prototype,"parent",void 0),Object(c.a)([Object(o.b)({readOnly:!0})],y.prototype,"suspended",null),Object(c.a)([Object(o.b)({readOnly:!0})],y.prototype,"suspendInfo",null),Object(c.a)([Object(o.b)({readOnly:!0})],y.prototype,"legendEnabled",null),Object(c.a)([Object(o.b)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),Object(c.a)([Object(o.b)()],y.prototype,"visible",null);var v=y=Object(c.a)([Object(l.a)("esri.views.layers.LayerView")],y);t.a=v},429:function(e,t,i){"use strict";i.d(t,"a",(function(){return V}));var n,a=i(2),r=i(3),s=i(41),c=i(39),u=i(5),o=i(4),l=i(0),h=(i(12),i(10),i(14),i(1)),d=i(6),p=(i(9),i(15),i(16),i(32)),f=i(107),b=i(26),y=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return i}(i(20).a),v=y=Object(l.a)([Object(d.a)("esri.views.layers.support.ClipArea")],y),O=n=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(r.a)(i,[{key:"clone",value:function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(v);Object(l.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],O.prototype,"left",void 0),Object(l.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],O.prototype,"right",void 0),Object(l.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],O.prototype,"top",void 0),Object(l.a)([Object(h.b)({type:[Number,String],json:{write:!0}})],O.prototype,"bottom",void 0),Object(l.a)([Object(h.b)({readOnly:!0})],O.prototype,"version",null);var j,g=O=n=Object(l.a)([Object(d.a)("esri.views.layers.support.ClipRect")],O),k=i(462),w=i(83),m=i(47),_=i(92),x=i(60),R=(i(69),{base:w.a,key:"type",typeMap:{extent:m.a,polygon:_.a}}),I=j=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(r.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new j({geometry:this.geometry.clone()})}}]),i}(v);Object(l.a)([Object(h.b)({types:R,json:{read:x.a,write:!0}})],I.prototype,"geometry",void 0),Object(l.a)([Object(h.b)({readOnly:!0})],I.prototype,"version",null);var S=I=j=Object(l.a)([Object(d.a)("esri.views.layers.support.Geometry")],I),T=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(r.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(v);Object(l.a)([Object(h.b)({type:[[[Number]]],json:{write:!0}})],T.prototype,"path",void 0),Object(l.a)([Object(h.b)({readOnly:!0})],T.prototype,"version",null);var q=T=Object(l.a)([Object(d.a)("esri.views.layers.support.Path")],T),M=p.a.ofType({key:"type",base:v,typeMap:{rect:g,path:q,geometry:S}}),V=function(e){var t=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.apply(this,arguments)).clips=new M,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(r.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new k.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(b.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(b.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(b.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(b.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,n=i.minScale,a=i.maxScale;if(null!=n&&null!=a){var r=!n,s=!a;!r&&e<=n&&(r=!0),!s&&e>=a&&(s=!0),t=r&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(s.a)(Object(c.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(l.a)([Object(h.b)({type:M,set:function(e){var t=Object(f.b)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(l.a)([Object(h.b)()],t.prototype,"moving",void 0),Object(l.a)([Object(h.b)()],t.prototype,"attached",void 0),Object(l.a)([Object(h.b)()],t.prototype,"container",void 0),Object(l.a)([Object(h.b)()],t.prototype,"suspended",void 0),Object(l.a)([Object(h.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(l.a)([Object(h.b)()],t.prototype,"updateRequested",void 0),Object(l.a)([Object(h.b)()],t.prototype,"updating",null),Object(l.a)([Object(h.b)()],t.prototype,"view",void 0),t=Object(l.a)([Object(d.a)("esri.views.2d.layers.LayerView2D")],t)}},435:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i(28),a=i(2),r=i(3),s=i(5),c=i(4),u=(i(12),i(191)),o=i(143),l=i(252),h=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(e,n,r){var s,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;return Object(a.a)(this,i),(s=t.call(this)).triangleCountReportedInDebug=0,s.transforms={dvs:Object(l.b)(),tileMat3:Object(l.b)()},s.triangleCount=0,s.key=new o.a(e),s.bounds=n,s.size=r,s.coordRange=c,s}return Object(r.a)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"coords",get:function(){return this._coords}},{key:"bounds",get:function(){return this._bounds},set:function(e){this._coords=[e[0],e[3]],this._bounds=e}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),a=this.transforms.tileMat3,r=e.toScreenNoRotation([0,0],this.coords),s=Object(n.a)(r,2),c=s[0],o=s[1],l=this.size[0]/this.coordRange[0]*i,h=this.size[1]/this.coordRange[1]*i;Object(u.i)(a,l,0,0,0,h,0,c,o,1),Object(u.f)(this.transforms.dvs,e.displayViewMat3,a)}}]),i}(i(442).a)},441:function(e,t,i){"use strict";var n=i(11),a=i(36),r=i(13),s=i(2),c=i(3),u=i(41),o=i(39),l=i(5),h=i(4),d=i(400),p=i(496),f=i(493),b=i(468),y=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},v=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this))._tileInfoView=e,n}return Object(c.a)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(y),this.setStencilReference(),Object(u.a)(Object(o.a)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state;return Object(r.a)(Object(r.a)({},Object(u.a)(Object(o.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)})}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"stencil",brushes:[f.a],drawPhase:d.c.DEBUG|d.c.MAP|d.c.HIGHLIGHT,target:function(){return t.getStencilTarget()}}),r=e.registerRenderPass({name:"tileInfo",brushes:[p.a],drawPhase:d.c.DEBUG,target:function(){return t.children},has:"esri-tiles-debug"});return[].concat(Object(a.a)(Object(u.a)(Object(o.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n,r])}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=Object(n.a)(this.children);try{for(i.s();!(t=i.n()).done;){var a=t.value,r=this._tileInfoView.getTileResolution(a.key);a.setTransform(e,r)}}catch(s){i.e(s)}finally{i.f()}}},{key:"setStencilReference",value:function(){var e,t=1,i=Object(n.a)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.stencilRef=t++}}catch(a){i.e(a)}finally{i.f()}}}]),i}(b.a);t.a=v},490:function(e,t,i){"use strict";var n=i(2),a=i(3),r=function(){function e(t,i,a){Object(n.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=a}return Object(a.a)(e,[{key:"width",get:function(){return this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return this.pixelBlock?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(t){var i=this.filter({pixelBlock:t}),n=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(n),e.putImageData(a,0,0)}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}();t.a=r},495:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var n=i(28),a=i(2),r=i(3),s=i(29),c=i(41),u=i(39),o=i(5),l=i(4),h=(i(12),i(191)),d=i(252),p=i(305),f=(i(410),i(416),i(417)),b=(i(408),i(442)),y=i(490);function v(e,t,i){var n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(n.width=t,n.height=i),new f.a(e,n)}var O=function(e){Object(o.a)(i,e);var t=Object(l.a)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1?arguments[1]:void 0,c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(a.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=c,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.transforms={dvs:Object(d.b)()},e.blendFunction=r,e.source=n,e.requestRender=e.requestRender.bind(Object(s.a)(e)),e}return Object(r.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(c.a)(Object(u.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"setTransform",value:function(e){var t=Object(h.d)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],this.x,this.y),a=Object(n.a)(i,2),r=a[0],s=a[1],c=this.resolution/this.pixelRatio/e.resolution,u=c*this.width,o=c*this.height,l=Math.PI*this.rotation/180;Object(h.a)(t,t,Object(p.b)(r,s)),Object(h.a)(t,t,Object(p.b)(u/2,o/2)),Object(h.h)(t,t,-l),Object(h.a)(t,t,Object(p.b)(-u/2,-o/2)),Object(h.e)(t,t,Object(p.b)(u,o)),Object(h.f)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){var i=e.context;this._texture&&i.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t,i=e.context;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=v(i,this.sourceWidth,this.sourceHeight):this._texture=v(i));var n=this.source;if(n){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(n))if(n instanceof y.a){var a=n.getRenderedRasterPixels();this._texture.setData(a.renderedRasterPixels)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(n));else(function(e){return e&&!("render"in e)})(n)&&this._texture.setData(n);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(b.a)},565:function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var n=i(36),a=i(2),r=i(3),s=i(41),c=i(39),u=i(5),o=i(4),l=i(231),h=i(400),d=i(504),p=i(441),f=i(435),b=i(495),y=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(e,n,r){var s,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Object(a.a)(this,i),(s=t.call(this,e,n,r,r)).bitmap=new b.a(c,"standard",!1),s.bitmap.coordScale=r,s.bitmap.once("isReady",(function(){return s.ready()})),s}return Object(r.a)(i,[{key:"destroy",value:function(){Object(s.a)(Object(c.a)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){Object(s.a)(Object(c.a)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){Object(s.a)(Object(c.a)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"setTransform",value:function(e,t){Object(s.a)(Object(c.a)(i.prototype),"setTransform",this).call(this,e,t),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(f.a),v=function(e){Object(u.a)(i,e);var t=Object(o.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds(Object(l.e)(),e);return new y(e,t,this._tileInfoView.tileInfo.size)}},{key:"destroyTile",value:function(){}},{key:"prepareRenderPasses",value:function(e){var t=this,a=e.registerRenderPass({name:"bitmap (tile)",brushes:[d.a.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:h.c.MAP});return[].concat(Object(n.a)(Object(s.a)(Object(c.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[a])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===h.c.MAP&&Object(s.a)(Object(c.a)(i.prototype),"doRender",this).call(this,e)}}]),i}(p.a)},655:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i(2),a=i(3),r=i(5),s=i(4),c=i(0),u=(i(12),i(10),i(14),i(1),i(6)),o=(i(9),i(15),i(16),i(565)),l=function(e){var t=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new o.a(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}}]),i}(e);return t=Object(c.a)([Object(u.a)("esri.views.2d.layers.BitmapTileLayerView2D")],t)}},785:function(e,t,i){"use strict";i.r(t);var n=i(28),a=i(7),r=i.n(a),s=i(17),c=i(2),u=i(3),o=i(41),l=i(39),h=i(5),d=i(4),p=i(0),f=(i(12),i(10),i(14),i(1)),b=i(6),y=(i(9),i(15),i(16),i(21)),v=i(48),O=i(57),j=i(267),g=i(329),k=i(381),w=i(382),m=i(428),_=i(429),x=i(655),R=[102113,102100,3857,3785,900913],I=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.apply(this,arguments))._handles=new O.a,e._tileStrategy=null,e._fetchQueue=null,e._tileRequests=new Map,e.layer=null,e}return Object(u.a)(i,[{key:"tileMatrixSet",get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}},{key:"hitTest",value:function(){return null}},{key:"update",value:function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}},{key:"attach",value:function(){var e=this,t=this.layer.activeLayer,n=this.tileMatrixSet;if(n){var a=n.tileInfo.spatialReference,r=t.fullExtent&&t.fullExtent.clone();a.isWebMercator?r=Object(v.b)(r):a.isWGS84||(r=n.fullExtent),this._tileInfoView=new g.a(n.tileInfo,r),this._fetchQueue=new k.a({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new w.a({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(function(){return e._refresh()}))),Object(o.a)(Object(l.a)(i.prototype),"attach",this).call(this)}}},{key:"detach",value:function(){Object(o.a)(Object(l.a)(i.prototype),"detach",this).call(this),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"doRefresh",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateRequested||this.suspended||this._refresh();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this._fetchQueue.length>0}},{key:"acquireTile",value:function(e){var t,i,a,r,s=this,c=this._bitmapView.createTile(e),u=c.bitmap;t=this._tileInfoView.getTileCoords([0,0],c.key),i=Object(n.a)(t,2),u.x=i[0],u.y=i[1],u.resolution=this._tileInfoView.getTileResolution(c.key),a=this._tileInfoView.tileInfo.size,r=Object(n.a)(a,2),u.width=r[0],u.height=r[1],this._tileInfoView.getTileCoords(u,c.key);var o={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(c.key).then((function(e){c.bitmap.source=e,c.once("attach",(function(){return s.requestUpdate()})),s._bitmapView.addChild(c)})).catch((function(e){Object(y.m)(e)||(c.bitmap.source=null,c.once("attach",(function(){return s.requestUpdate()})),s._bitmapView.addChild(c))}))};return o.promise.finally((function(){return o.fulfilled=!0})),this._tileRequests.set(c,o),this.requestUpdate(),c}},{key:"releaseTile",value:function(e){var t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchTile(t.level,t.row,t.col));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"canResume",value:function(){var e=Object(o.a)(Object(l.a)(i.prototype),"canResume",this).call(this);return e?null!==this.tileMatrixSet:e}},{key:"_refresh",value:function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(t){if(t.bitmap.source){t.bitmap.source=null;var i={id:t.key.id,fulfilled:!1,promise:e._fetchQueue.push(t.key).then((function(i){t.bitmap.source=i,t.requestRender(),e.notifyChange("updating")}))};i.promise.then((function(){return i.fulfilled=!0}),(function(){return i.fulfilled=!0})),e._tileRequests.set(t,i)}})),this.notifyChange("updating")}},{key:"_getTileMatrixSetBySpatialReference",value:function(e){var t=this.view.spatialReference;if(!e.tileMatrixSets)return null;var i=e.tileMatrixSets.find((function(e){return e.tileInfo.spatialReference.wkid===t.wkid}));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find((function(e){return R.indexOf(e.tileInfo.spatialReference.wkid)>-1}))),i}}]),i}(Object(j.a)(Object(x.a)(Object(_.a)(m.a))));Object(p.a)([Object(f.b)()],I.prototype,"suspended",void 0),Object(p.a)([Object(f.b)({readOnly:!0})],I.prototype,"tileMatrixSet",null);var S=I=Object(p.a)([Object(b.a)("esri.views.2d.layers.WMTSLayerView2D")],I);t.default=S}}]);
//# sourceMappingURL=53.fd0b65e2.chunk.js.map