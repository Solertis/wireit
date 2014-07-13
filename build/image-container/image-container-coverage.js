if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/image-container/image-container.js']) {
   __coverage__['build/image-container/image-container.js'] = {"path":"build/image-container/image-container.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":46}}},"2":{"name":"(anonymous_2)","line":20,"loc":{"start":{"line":20,"column":13},"end":{"line":20,"column":25}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":30},"end":{"line":27,"column":41}}},"4":{"name":"(anonymous_4)","line":41,"loc":{"start":{"line":41,"column":32},"end":{"line":41,"column":44}}},"5":{"name":"(anonymous_5)","line":56,"loc":{"start":{"line":56,"column":33},"end":{"line":56,"column":46}}},"6":{"name":"(anonymous_6)","line":70,"loc":{"start":{"line":70,"column":19},"end":{"line":70,"column":35}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":100,"column":50}},"2":{"start":{"line":15,"column":0},"end":{"line":97,"column":3}},"3":{"start":{"line":23,"column":6},"end":{"line":23,"column":136}},"4":{"start":{"line":24,"column":6},"end":{"line":24,"column":47}},"5":{"start":{"line":25,"column":6},"end":{"line":25,"column":25}},"6":{"start":{"line":27,"column":6},"end":{"line":31,"column":15}},"7":{"start":{"line":29,"column":8},"end":{"line":29,"column":30}},"8":{"start":{"line":30,"column":8},"end":{"line":30,"column":30}},"9":{"start":{"line":36,"column":6},"end":{"line":39,"column":11}},"10":{"start":{"line":41,"column":6},"end":{"line":43,"column":15}},"11":{"start":{"line":42,"column":9},"end":{"line":42,"column":31}},"12":{"start":{"line":47,"column":6},"end":{"line":47,"column":46}},"13":{"start":{"line":48,"column":6},"end":{"line":51,"column":9}},"14":{"start":{"line":56,"column":6},"end":{"line":77,"column":15}},"15":{"start":{"line":58,"column":9},"end":{"line":58,"column":28}},"16":{"start":{"line":61,"column":9},"end":{"line":61,"column":35}},"17":{"start":{"line":62,"column":9},"end":{"line":62,"column":32}},"18":{"start":{"line":63,"column":9},"end":{"line":63,"column":32}},"19":{"start":{"line":67,"column":9},"end":{"line":67,"column":35}},"20":{"start":{"line":68,"column":9},"end":{"line":68,"column":36}},"21":{"start":{"line":70,"column":9},"end":{"line":74,"column":18}},"22":{"start":{"line":71,"column":12},"end":{"line":73,"column":13}},"23":{"start":{"line":72,"column":15},"end":{"line":72,"column":75}},"24":{"start":{"line":76,"column":9},"end":{"line":76,"column":31}}},"branchMap":{"1":{"line":71,"type":"if","locations":[{"start":{"line":71,"column":12},"end":{"line":71,"column":12}},{"start":{"line":71,"column":12},"end":{"line":71,"column":12}}]}},"code":["(function () { YUI.add('image-container', function (Y, NAME) {","","/**"," * @module image-container"," */","","/**"," * ImageContainer is an Overlay (XY positioning)"," * It is a WidgetChild (belongs to Layer)"," * It is also a WidgetParent (has many terminals)"," * @class ImageContainer"," * @extends ContainerBase"," * @constructor"," */","Y.ImageContainer = Y.Base.create(\"image-container\", Y.ContainerBase, [], {","   ","   /**","    * @method renderUI","    */","   renderUI: function () {","      ","      // TODO: ","      var image = Y.Node.create('<img src=\"'+this.get('imageUrl')+'\" width=\"'+this.get('width')+'\"  height=\"'+this.get('height')+'\"/>');","      image.appendTo( this.get('contentBox') );","      this.image = image;","","      this.image.once('load', function() {","        //console.log(\"loaded !!!\");","        this.alignTerminals();","        this.redrawAllWires();","      }, this);","      ","      //console.log( Y.WidgetStdMod.BODY, this._getStdModContent(Y.WidgetStdMod.BODY) );","            ","        // make the overlay draggable","      this.drag = new Y.DD.Drag({","           node: this.get('boundingBox'), ","         handles : [ image ]","        });","   ","      this.drag.on('drag:drag', function () {","         this.redrawAllWires();","      }, this);","   ","   ","      // Make the overlay resizable","      var contentBox = this.get('contentBox');","      var resize = new Y.Resize({ ","         node: contentBox,","         handles: 'br'","      });","      /*resize.plug(Y.Plugin.ResizeConstrained, {","         preserveRatio: true","       });*/","      // On resize, fillHeight, & align terminals & wires","      resize.on('resize:resize', function (e) {","         // TODO: fillHeight","         this._fillHeight();","         ","         //console.log(e.details[0].info);","         var p = e.details[0].info;","         var w = p.right-p.left;","         var h = p.bottom-p.top;","         //console.log(w+\"x\"+h);","         ","         // WARNING !!!","         this.image.set('width',w);","         this.image.set('height',h);","         ","         this.each(function (term) {","            if(term.get('align')) {   ","               term.align( contentBox, [\"tl\",term.get('align').points[1]]);","            }","         }, this);","         ","         this.redrawAllWires();","      }, this);","      ","   }","   ","}, {","","   ATTRS: {","      /**","       * Url of the image you want to render (relative to the script's page)","       * @attribute imageUrl","       */","      imageUrl: {","         value: ''","      },","      ","      zIndex: {","         value: 5","      }","   }","   ","});","","","}, '@VERSION@', {\"requires\": [\"container-base\"]});","","}());"]};
}
var __cov_Xu85nu_sl3tJlmlTZggcuw = __coverage__['build/image-container/image-container.js'];
__cov_Xu85nu_sl3tJlmlTZggcuw.s['1']++;YUI.add('image-container',function(Y,NAME){__cov_Xu85nu_sl3tJlmlTZggcuw.f['1']++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['2']++;Y.ImageContainer=Y.Base.create('image-container',Y.ContainerBase,[],{renderUI:function(){__cov_Xu85nu_sl3tJlmlTZggcuw.f['2']++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['3']++;var image=Y.Node.create('<img src="'+this.get('imageUrl')+'" width="'+this.get('width')+'"  height="'+this.get('height')+'"/>');__cov_Xu85nu_sl3tJlmlTZggcuw.s['4']++;image.appendTo(this.get('contentBox'));__cov_Xu85nu_sl3tJlmlTZggcuw.s['5']++;this.image=image;__cov_Xu85nu_sl3tJlmlTZggcuw.s['6']++;this.image.once('load',function(){__cov_Xu85nu_sl3tJlmlTZggcuw.f['3']++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['7']++;this.alignTerminals();__cov_Xu85nu_sl3tJlmlTZggcuw.s['8']++;this.redrawAllWires();},this);__cov_Xu85nu_sl3tJlmlTZggcuw.s['9']++;this.drag=new Y.DD.Drag({node:this.get('boundingBox'),handles:[image]});__cov_Xu85nu_sl3tJlmlTZggcuw.s['10']++;this.drag.on('drag:drag',function(){__cov_Xu85nu_sl3tJlmlTZggcuw.f['4']++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['11']++;this.redrawAllWires();},this);__cov_Xu85nu_sl3tJlmlTZggcuw.s['12']++;var contentBox=this.get('contentBox');__cov_Xu85nu_sl3tJlmlTZggcuw.s['13']++;var resize=new Y.Resize({node:contentBox,handles:'br'});__cov_Xu85nu_sl3tJlmlTZggcuw.s['14']++;resize.on('resize:resize',function(e){__cov_Xu85nu_sl3tJlmlTZggcuw.f['5']++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['15']++;this._fillHeight();__cov_Xu85nu_sl3tJlmlTZggcuw.s['16']++;var p=e.details[0].info;__cov_Xu85nu_sl3tJlmlTZggcuw.s['17']++;var w=p.right-p.left;__cov_Xu85nu_sl3tJlmlTZggcuw.s['18']++;var h=p.bottom-p.top;__cov_Xu85nu_sl3tJlmlTZggcuw.s['19']++;this.image.set('width',w);__cov_Xu85nu_sl3tJlmlTZggcuw.s['20']++;this.image.set('height',h);__cov_Xu85nu_sl3tJlmlTZggcuw.s['21']++;this.each(function(term){__cov_Xu85nu_sl3tJlmlTZggcuw.f['6']++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['22']++;if(term.get('align')){__cov_Xu85nu_sl3tJlmlTZggcuw.b['1'][0]++;__cov_Xu85nu_sl3tJlmlTZggcuw.s['23']++;term.align(contentBox,['tl',term.get('align').points[1]]);}else{__cov_Xu85nu_sl3tJlmlTZggcuw.b['1'][1]++;}},this);__cov_Xu85nu_sl3tJlmlTZggcuw.s['24']++;this.redrawAllWires();},this);}},{ATTRS:{imageUrl:{value:''},zIndex:{value:5}}});},'@VERSION@',{'requires':['container-base']});
