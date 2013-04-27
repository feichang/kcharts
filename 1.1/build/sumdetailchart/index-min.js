KISSY.add("gallery/kcharts/1.1/sumdetailchart/index",function(e,f,c,a,d){var g=c.all;function b(i){var h=this;g("head").append("<style>v\\:*{behavior:url(#default#VML);position:absolute; display: inline-block;}</style>");h.init(i)}e.augment(b,{version:"1.0",SVGTEMPLATE:{START:'<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">',END:"</svg>",CIRCLE:'<circle cx="{{cx}}" cy="{{cy}}" r="{{r}}" fill="{{style.background}}" style="position:absolute"/>',LINE:'<line x1="{{sx}}" y1="{{sy}}" x2="{{dx}}" y2="{{dy}}" style="background-color:{{style.borderColor}};position:absolute;stroke:{{style.borderColor}};stroke-width:{{style.borderWidth}}"/>',H1:'<text x="{{cx}}" y="{{cy}}" text-anchor="middle" fill="{{h1.color}}"><tspan font-weight="bold" font-size="{{h1.fontSize}}px">{{h1.text}}</tspan></text>',H2:'<text x="{{cx}}" y="{{cy+h2.fontSize*5/3}}" text-anchor="middle" fill="{{h2.color}}"><tspan font-weight="400" font-size="{{h2.fontSize}}px" font-family="Microsoft Yahei">{{h2.text}}</tspan></text>'},VMLTEMPLATE:{CIRCLE:'<v:roundrect style="position:absolute;display:block;left:{{left}}px;top:{{top}}px;width:{{width}}px;height:{{height}}px;"fillcolor="{{style.background}}"arcsize = ".5"stroked="f"></v:roundrect>',LINE:'<v:line from="{{sx}}px,{{sy}}px" to="{{dx}}px,{{dy}}px" style="position:absolute;*top:{{top}}px;*left:{{left}}px;"stroke="true"strokecolor="{{style.borderColor}}"strokeweight="{{style.borderWidth}}px"></v:line>',H1:'<span style="display:block;position:absolute;width:{{2*r}}px;top:{{h1tt}}px;left:{{h1tl}}px;font-size: {{h1.fontSize}}px;font-weight: 700;color:{{h1.color}};text-align:center;">{{h1.text}}</span>',H2:'<span style="display:block;position:absolute;width:{{2*r}}px;top:{{h2tt}}px;left:{{h2tl}}px;font-size: {{h2.fontSize}}px;font-weight: 700;color:{{h2.color}};text-align:center;">{{h2.text}}</span>'},CONFIG:{},init:function(m){var i=this;this.circles=[],this.lines=[],this.CONFIG=m;if(f.ie==8){i.utils.fixIE8()}i.countCenter(m);lines=i.CONFIG.lines;circles=i.CONFIG.circles;var l=i.drawCircle(circles);var h=i.drawLine(lines);var k=i.drawH1(circles);var j=i.drawH2(circles);i.paint(m.container,h+l+k+j)},utils:{cos:function(i,h){return i*Math.cos((h/360)*2*Math.PI)},sin:function(i,h){return i*Math.sin((h/360)*2*Math.PI)},fixIE8:function(){document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML")}},countCenter:function(){var q=this,o=[],t=[],p=q.CONFIG,h=p.r,j=p.meanDeg,s=p.startDeg,k=p.startDeg;for(var n=0,m=p.son.length;n<m;n++){p.son[n].cx=p.father.cx+q.utils.sin(h,k);p.son[n].cy=p.father.cy-q.utils.cos(h,k);k+=j}e.each(p.son,function(i){t.push({sx:p.father.cx,sy:p.father.cy,dx:i.cx,dy:i.cy,top:p.father.cy>=i.cy?i.cy:p.father.cy,left:p.father.cx>=i.cx?i.cx:p.father.cx,style:{borderColor:p.lineStyle.borderColor,borderWidth:p.lineStyle.borderWidth}})});q.CONFIG.lines=t;o.push(p.father);o=o.concat(p.son);e.each(o,function(r,l){r.h1tl=r.cx-r.r;r.h1tt=r.cy-r.h1.fontSize*4/5;r.h2tl=r.cx-r.r;r.h2tt=r.cy+r.h1.fontSize*4/5});q.CONFIG.circles=o},drawCircle:function(h){var i=this;render="",svgcircle=i.SVGTEMPLATE.CIRCLE,vmlcircle=i.VMLTEMPLATE.CIRCLE;e.each(h,function(k){if(f.ie<9){var j={left:k.cx-k.r,top:k.cy-k.r,width:2*k.r,height:2*k.r,style:k.style};render+=new a(vmlcircle).render(j)}else{render+=new a(svgcircle).render(k)}});return render},drawLine:function(h){var i=this,j=i.SVGTEMPLATE.LINE,l=i.VMLTEMPLATE.LINE,k="";e.each(h,function(m){if(f.ie<9){k+=new a(l).render(m)}else{k+=new a(j).render(m)}});return k},drawH1:function(h){var j=this,i=j.SVGTEMPLATE.H1,k=j.VMLTEMPLATE.H1,l="";e.each(h,function(m){if(f.ie<9){l+=new a(k).render(m)}else{l+=new a(i).render(m)}});return l},drawH2:function(h){var j=this,i=j.SVGTEMPLATE.H2,k=j.VMLTEMPLATE.H2,l="";e.each(h,function(m){if(f.ie<9){l+=new a(k).render(m)}else{l+=new a(i).render(m)}});return l},paint:function(j,m){var l=this,k=l.SVGTEMPLATE,i=l.VMLTEMPLATE,m=m||"",h="";if(f.ie<9){h+=m}else{h=k.START;h+=m;h+=k.END}if(f.ie==8){g(j).outerHTML=g(j).outerHTML}g(j).css("position","relative");g(j).html(h)},log:function(h){if(f.ie<7){}else{console.log(h)}}});return b},{requires:["ua","node","gallery/template/1.0/index","../raphael/index"]});