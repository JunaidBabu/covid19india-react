(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10,29,32,33],{102:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var a=Array.prototype.slice,r=function(e){return e};function i(e){return"translate("+(e+.5)+",0)"}function c(e){return"translate(0,"+(e+.5)+")"}function o(e){return function(t){return+e(t)}}function l(e){var t=Math.max(0,e.bandwidth()-1)/2;return e.round()&&(t=Math.round(t)),function(n){return+e(n)+t}}function s(){return!this.__axis}function u(e,t){var n=[],u=null,d=null,f=6,m=6,v=3,p=1===e||4===e?-1:1,b=4===e||2===e?"x":"y",h=1===e||3===e?i:c;function O(a){var i=null==u?t.ticks?t.ticks.apply(t,n):t.domain():u,c=null==d?t.tickFormat?t.tickFormat.apply(t,n):r:d,O=Math.max(f,0)+v,j=t.range(),g=+j[0]+.5,y=+j[j.length-1]+.5,E=(t.bandwidth?l:o)(t.copy()),w=a.selection?a.selection():a,k=w.selectAll(".domain").data([null]),M=w.selectAll(".tick").data(i,t).order(),x=M.exit(),N=M.enter().append("g").attr("class","tick"),S=M.select("line"),C=M.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),M=M.merge(N),S=S.merge(N.append("line").attr("stroke","currentColor").attr(b+"2",p*f)),C=C.merge(N.append("text").attr("fill","currentColor").attr(b,p*O).attr("dy",1===e?"0em":3===e?"0.71em":"0.32em")),a!==w&&(k=k.transition(a),M=M.transition(a),S=S.transition(a),C=C.transition(a),x=x.transition(a).attr("opacity",1e-6).attr("transform",(function(e){return isFinite(e=E(e))?h(e):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(e){var t=this.parentNode.__axis;return h(t&&isFinite(t=t(e))?t:E(e))}))),x.remove(),k.attr("d",4===e||2==e?m?"M"+p*m+","+g+"H0.5V"+y+"H"+p*m:"M0.5,"+g+"V"+y:m?"M"+g+","+p*m+"V0.5H"+y+"V"+p*m:"M"+g+",0.5H"+y),M.attr("opacity",1).attr("transform",(function(e){return h(E(e))})),S.attr(b+"2",p*f),C.attr(b,p*O).text(c),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===e?"start":4===e?"end":"middle"),w.each((function(){this.__axis=E}))}return O.scale=function(e){return arguments.length?(t=e,O):t},O.ticks=function(){return n=a.call(arguments),O},O.tickArguments=function(e){return arguments.length?(n=null==e?[]:a.call(e),O):n.slice()},O.tickValues=function(e){return arguments.length?(u=null==e?null:a.call(e),O):u&&u.slice()},O.tickFormat=function(e){return arguments.length?(d=e,O):d},O.tickSize=function(e){return arguments.length?(f=m=+e,O):f},O.tickSizeInner=function(e){return arguments.length?(f=+e,O):f},O.tickSizeOuter=function(e){return arguments.length?(m=+e,O):m},O.tickPadding=function(e){return arguments.length?(v=+e,O):v},O}function d(e){return u(2,e)}function f(e){return u(3,e)}},104:function(e,t,n){"use strict";var a=n(78),r=n(96),i=n(0),c=n.n(i),o=n(81);t.a=function(e){var t=e.data,n=e.children,l=Object(i.useState)(!1),s=Object(a.a)(l,2),u=s[0],d=s[1],f=Object(o.f)(u,null,{from:r.j,enter:r.i,leave:r.j,config:{mass:1,tension:210,friction:20}});return c.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:d.bind(void 0,!0),onMouseLeave:d.bind(void 0,!1)},n,f.map((function(e){var n=e.item,a=e.key,r=e.props;return n?c.a.createElement(o.a.div,{key:a,style:r},c.a.createElement("div",{className:"message"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):c.a.createElement(o.a.div,{key:a})})))}},107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),c=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="GitHub";var u=s;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=f(e,["color","size"]);return r.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),r.a.createElement("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),r.a.createElement("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}))}));m.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},m.displayName="Database";var v=m;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=b(e,["color","size"]);return r.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));h.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},h.displayName="Twitter";var O=h;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,o=g(e,["color","size"]);return r.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.a.createElement("polyline",{points:"22,6 12,13 2,6"}))}));y.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},y.displayName="Mail";var E=y,w=n(256);t.default=r.a.memo((function(e){var t=Object(w.a)().t;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india",target:"_blank",rel:"noopener noreferrer"},"covid19india")),r.a.createElement("h5",null,t("We stand with everyone fighting on the frontlines")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://github.com/covid19india/covid19india-react",className:"github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u,null)),r.a.createElement("a",{className:"api",href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v,null)),r.a.createElement("a",{href:"https://twitter.com/covid19indiaorg",target:"_blank",rel:"noopener noreferrer",className:"twitter"},r.a.createElement(O,null)),r.a.createElement("a",{href:"mailto:hello@covid19india.org",className:"mail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E,null))))}))},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(94),r=n(87),i=Symbol("implicit");function c(){var e=new Map,t=[],n=[],o=i;function l(a){var r=a+"",c=e.get(r);if(!c){if(o!==i)return o;e.set(r,c=t.push(a))}return n[(c-1)%n.length]}return l.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new Map;var r,i=Object(a.a)(n);try{for(i.s();!(r=i.n()).done;){var c=r.value,o=c+"";e.has(o)||e.set(o,t.push(c))}}catch(s){i.e(s)}finally{i.f()}return l},l.range=function(e){return arguments.length?(n=Array.from(e),l):n.slice()},l.unknown=function(e){return arguments.length?(o=e,l):o},l.copy=function(){return c(t,n).unknown(o)},r.b.apply(l,arguments),l}},132:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n(31),i=n(88),c=n(79),o=n.n(c),l=n(82),s=n.n(l),u=n(0),d=n.n(u),f=n(256),m=n(81);var v=d.a.memo((function(e){var t=e.statistic,n=e.total,a=e.delta,c=Object(f.a)().t,o=Object(m.c)({total:n,delta:a,from:{total:n,delta:a}},m.b.stiff);return d.a.createElement(d.a.Fragment,null,d.a.createElement("h5",null,c(Object(r.a)(t))),d.a.createElement(m.a.h4,null,"active"!==t?a>0?o.delta.interpolate((function(e){return"+".concat(Object(r.f)(Math.floor(e)))})):d.a.createElement(i.g,{size:9,verticalAlign:2}):"\xa0"),d.a.createElement(m.a.h1,null,o.total.interpolate((function(e){return Object(r.f)(Math.floor(e))}))))}));t.default=d.a.memo((function(e){var t=e.data,n=Object(u.useMemo)((function(){var e=[];return a.m.map((function(t,n){return e.push({animationDelay:"".concat(750+250*n,"ms")}),null})),e}),[]);return d.a.createElement("div",{className:"Level"},a.m.map((function(e,a){return d.a.createElement(m.a.div,{key:a,className:o()("level-item","is-".concat(e),"fadeInUp"),style:n[a]},d.a.createElement(v,Object.assign({statistic:e},{total:Object(r.j)(t,"total",e),delta:Object(r.j)(t,"delta",e)})))})))}),(function(e,t){return!!s()(Object(r.j)(e.data,"total","active"),Object(r.j)(t.data,"total","active"))}))},133:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(78),i=n(23),c=n(79),o=n.n(c),l=n(0),s=n.n(l),u=n(42),d=n.n(u),f=n(81),m=n(145);t.default=s.a.memo((function(e){var t=e.mapStatistic,n=e.setMapStatistic,c=Object(m.a)(),u=Object(r.a)(c,2),v=u[0],p=u[1].width,b=Object(l.useState)(!1),h=Object(r.a)(b,2),O=h[0],j=h[1],g=Object(l.useState)(0),y=Object(r.a)(g,2),E=y[0],w=y[1],k=Object(f.c)((function(){return{opacity:0,background:"".concat(i.b[t],"20"),transform:"translateX(".concat(p*i.m.indexOf(t)*.25,"px)"),config:f.b.gentle}})),M=Object(r.a)(k,2),x=M[0],N=M[1];Object(l.useEffect)((function(){p>0&&d.a.unstable_batchedUpdates((function(){N({transform:"translateX(".concat(p*i.m.indexOf(t)*.25,"px)"),opacity:1,background:"".concat(i.b[t],"20"),delay:0===E?1500:0,onStart:j.bind(void 0,!0),onRest:j.bind(void 0,!1)})}))}),[E,t,N,p]);var S=Object(l.useCallback)((function(e){w((function(e){return e+1})),n(e)}),[n]);return s.a.createElement("div",{className:"MapSwitcher",ref:v},s.a.createElement(f.a.div,{className:"highlight",style:x}),i.m.map((function(e,t){return s.a.createElement("div",{key:t,className:o()("clickable",Object(a.a)({},"is-".concat(e),!O)),onClick:S.bind(void 0,e)})})))}),(function(e,t){return e.mapStatistic===t.mapStatistic}))},134:function(e,t,n){"use strict";var a=n(0),r=n(86),i=["mousedown","touchstart"];t.a=function(e,t,n){void 0===n&&(n=i);var c=Object(a.useRef)(t);Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&c.current(t)},a=0,i=n;a<i.length;a++){var o=i[a];Object(r.c)(document,o,t)}return function(){for(var e=0,a=n;e<a.length;e++){var i=a[e];Object(r.b)(document,i,t)}}}),[n,e])}},144:function(e,t,n){"use strict";n.r(t);var a=n(78),r=n(23),i=n(0),c=n.n(i),o=n(256),l=n(5),s=n(81),u=n(134),d=function(e){var t=e.stateCode,n=e.trail,d=Object(i.useState)(!1),f=Object(a.a)(d,2),m=f[0],v=f[1],p=Object(i.useRef)(),b=Object(l.g)(),h=Object(o.a)().t;Object(u.a)(p,(function(){v(!1)}));var O=Object(s.f)(m,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),j=Object(i.useCallback)((function(e){v(!1),b.push("/state/".concat(e))}),[b]);return c.a.createElement("div",{className:"StateDropdown",ref:p},c.a.createElement(s.a.h1,{className:"state-name fadeInUp",style:n,onClick:v.bind(void 0,!m)},h(r.p[t])),O.map((function(e){var n=e.item,a=e.key,i=e.props;return n?c.a.createElement(s.a.div,{className:"dropdown",style:i,key:a},Object.keys(r.h).filter((function(e){return"TT"!==e&&e!==t})).sort().map((function(e){return c.a.createElement("h1",{key:e,className:"item",onClick:j.bind(void 0,e)},h(r.p[e]))}))):c.a.createElement(s.a.div,{key:t,style:i})})),m&&c.a.createElement("div",{className:"backdrop"}))},f=n(31);t.default=c.a.memo((function(e){var t,n,a,r,l,u=e.data,m=e.stateCode,v=Object(o.a)().t,p=Object(i.useMemo)((function(){var e=[];return[0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),b=Object(s.c)({total:Object(f.j)(u,"total","tested"),config:s.b.gentle});return c.a.createElement("div",{className:"StateHeader"},c.a.createElement("div",{className:"header-left"},c.a.createElement(d,Object.assign({stateCode:m},{hyperlink:!1,trail:p[0]})),(null===u||void 0===u||null===(t=u.meta)||void 0===t?void 0:t.last_updated)&&c.a.createElement("h5",{className:"fadeInUp",style:p[1]},"Last Updated on ".concat(Object(f.d)(u.meta.last_updated,"dd MMM, p")," IST"))),c.a.createElement("div",{className:"header-right fadeInUp",style:p[2]},c.a.createElement("h5",null,v("Tested")),c.a.createElement(s.a.h2,null,b.total.interpolate((function(e){return Object(f.f)(Math.floor(e))}))),(null===u||void 0===u||null===(n=u.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&c.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(f.d)(u.meta.tested.last_updated,"dd MMMM"))),(null===u||void 0===u||null===(r=u.meta)||void 0===r||null===(l=r.tested)||void 0===l?void 0:l.source)&&c.a.createElement("h5",null,"per ",c.a.createElement("a",{href:u.meta.tested.source,target:"_noblank"},"source"))))}))},145:function(e,t,n){"use strict";var a=n(0),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,i=n(86),c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=i.a&&window.ResizeObserver?function(){var e=Object(a.useState)(null),t=e[0],n=e[1],i=Object(a.useState)(c),o=i[0],l=i[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,a=t.y,r=t.width,i=t.height,c=t.top,o=t.left,s=t.bottom,u=t.right;l({x:n,y:a,width:r,height:i,top:c,left:o,bottom:s,right:u})}}))}),[]);return r((function(){if(t)return s.observe(t),function(){s.disconnect()}}),[t]),[n,o]}:function(){return[function(){},c]}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(78),r=n(166),i=n(87),c=n(113);function o(){var e,t,n=Object(c.a)().unknown(void 0),l=n.domain,s=n.range,u=0,d=1,f=!1,m=0,v=0,p=.5;function b(){var n=l().length,a=d<u,i=a?d:u,c=a?u:d;e=(c-i)/Math.max(1,n-m+2*v),f&&(e=Math.floor(e)),i+=(c-i-e*(n-m))*p,t=e*(1-m),f&&(i=Math.round(i),t=Math.round(t));var o=Object(r.a)(n).map((function(t){return i+e*t}));return s(a?o.reverse():o)}return delete n.unknown,n.domain=function(e){return arguments.length?(l(e),b()):l()},n.range=function(e){var t,n;return arguments.length?(t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,b()):[u,d]},n.rangeRound=function(e){var t,n;return t=e,n=Object(a.a)(t,2),u=n[0],d=n[1],u=+u,d=+d,f=!0,b()},n.bandwidth=function(){return t},n.step=function(){return e},n.round=function(e){return arguments.length?(f=!!e,b()):f},n.padding=function(e){return arguments.length?(m=Math.min(1,v=+e),b()):m},n.paddingInner=function(e){return arguments.length?(m=Math.min(1,e),b()):m},n.paddingOuter=function(e){return arguments.length?(v=+e,b()):v},n.align=function(e){return arguments.length?(p=Math.max(0,Math.min(1,e)),b()):p},n.copy=function(){return o(l(),[u,d]).round(f).paddingInner(m).paddingOuter(v).align(p)},i.b.apply(b(),arguments)}},166:function(e,t,n){"use strict";t.a=function(e,t,n){e=+e,t=+t,n=(r=arguments.length)<2?(t=e,e=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((t-e)/n)),i=new Array(r);++a<r;)i[a]=e+a*n;return i}},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(18),c=n.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},s.displayName="Info",t.a=s},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(60),r=n(4),i=n(2),c=n(1);function o(e,t){Object(c.a)(2,arguments);var n=Object(i.a)(e),a=Object(r.a)(t);if(isNaN(a))return new Date(NaN);if(!a)return n;var o=n.getDate(),l=new Date(n.getTime());l.setMonth(n.getMonth()+a+1,0);var s=l.getDate();return o>=s?l:(n.setFullYear(l.getFullYear(),l.getMonth(),o),n)}function l(e,t){Object(c.a)(2,arguments);var n=Object(r.a)(t);return o(e,-n)}function s(e,t){if(Object(c.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var n="years"in t?Object(r.a)(t.years):0,o="months"in t?Object(r.a)(t.months):0,s="weeks"in t?Object(r.a)(t.weeks):0,u="days"in t?Object(r.a)(t.days):0,d="hours"in t?Object(r.a)(t.hours):0,f="minutes"in t?Object(r.a)(t.minutes):0,m="seconds"in t?Object(r.a)(t.seconds):0,v=l(Object(i.a)(e),o+12*n),p=Object(a.a)(v,u+7*s),b=f+60*d,h=m+60*b,O=1e3*h,j=new Date(p.getTime()-O);return j}},242:function(e,t,n){"use strict";n.r(t);var a=n(125),r=n(78),i=n(23),c=n(31),o=n(169),l=n(170),s=n(102),u=n(165),d=n(119),f=n(220),m=(n(101),n(82)),v=n.n(m),p=n(0),b=n.n(p),h=n(145),O=function(e,t){return Object(c.j)(e,"delta",t)},j=50,g=0,y=50,E=0;var w=b.a.memo((function(e){var t=e.timeseries,n=e.statistic,a=e.lookback,m=Object(p.useRef)(),v=Object(h.a)(),w=Object(r.a)(v,2),M=w[0],x=w[1],N=x.width,S=x.height,C=Object.keys(t||{}).filter((function(e){return e<=Object(c.i)()})).slice(-a);return Object(p.useEffect)((function(){if(N){var e=Object(f.a)(m.current),a=N-g,r=S-y,v=Object(u.a)().domain(C).range([E,a]).paddingInner(N/1e3),p=Object(d.a)().domain([Math.min(0,Object(o.a)(C,(function(e){return O(null===t||void 0===t?void 0:t[e],n)}))),Math.max(1,Object(l.a)(C,(function(e){return O(null===t||void 0===t?void 0:t[e],n)})))]).range([r,j]),b=Object(s.a)(v).tickSize(0).tickFormat((function(e){return Object(c.d)(e,"dd MMM")})),h=e.transition().duration(i.c);e.select(".x-axis").transition(h).style("transform","translateY(".concat(p(0),"px)")).call(b).on("start",(function(){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(e,a){return O(null===t||void 0===t?void 0:t[e],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",i.b[n]),e.selectAll(".bar").data(C).join((function(e){return e.append("path").attr("class","bar").attr("d",(function(e){return k(v(e),p(0),v.bandwidth(),0,5)}))})).transition(h).attr("d",(function(e){return k(v(e),p(0),v.bandwidth(),p(0)-p(O(null===t||void 0===t?void 0:t[e],n)),5)})).attr("fill",(function(e,t){return t<C.length-1?i.b[n]+"90":i.b[n]}));var w=e.selectAll(".label").data(C).join("text").attr("class","label").attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e){return Object(c.f)(O(null===t||void 0===t?void 0:t[e],n))}));w.transition(h).attr("fill",i.b[n]).attr("y",(function(e){var a=O(null===t||void 0===t?void 0:t[e],n);return p(a)+(a<0?15:-6)})),w.append("tspan").attr("dy",(function(e){return"".concat(O(null===t||void 0===t?void 0:t[e],n)<0?1.2:-1.2,"em")})).attr("x",(function(e){return v(e)+v.bandwidth()/2})).text((function(e,a){if(0===a)return"";var r=O(null===t||void 0===t?void 0:t[C[a-1]],n);if(!r)return"";var i=O(null===t||void 0===t?void 0:t[e],n)-r;return"".concat(i>0?"+":"").concat(Object(c.f)(100*i/Math.abs(r)),"%")})).transition(h).attr("fill",i.b[n]+"90")}}),[C,S,n,t,N]),b.a.createElement("div",{className:"DeltaBarGraph",ref:M},b.a.createElement("svg",{ref:m,width:N,height:250,viewBox:"0 0 ".concat(N," ").concat(S),preserveAspectRatio:"xMidYMid meet"},b.a.createElement("g",{className:"x-axis"}),b.a.createElement("g",{className:"y-axis"})))}),(function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(e.stateCode,t.stateCode)&&(!!v()(e.lookback,t.lookback)&&!!v()(e.statistic,t.statistic))))}));function k(e,t,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(e," ").concat(t),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var M=n(107),x=n(132),N=n(133),S=n(144),C=n(104),z=n(171);var I=function(e){var t=e.title,n=e.statistic,a=e.total,r=e.formula,i=e.date,c=e.description,o=e.className;return b.a.createElement("div",{className:"meta-item ".concat(o)},b.a.createElement("div",{className:"meta-item-top"},b.a.createElement("h3",null,t),b.a.createElement(C.a,{data:r},b.a.createElement(z.a,null))),b.a.createElement("h1",null,n),b.a.createElement("h5",null,i),a&&b.a.createElement("h5",null,"India has ".concat(a," CPM")),b.a.createElement("p",null,c))},P=n(72),R=n(201),T=n(18),_=n.n(T);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=Object(p.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=L(e,["color","size"]);return b.a.createElement("svg",A({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));D.propTypes={color:_.a.string,size:_.a.oneOfType([_.a.string,_.a.number])},D.displayName="Compass";var F=D;var U=b.a.memo((function(e){var t,n,a,r,o,l=e.stateCode,s=e.data,u=e.timeseries,d=Object(c.j)(s[l],"total","confirmed"),f=Object(c.j)(s[l],"total","active"),m=Object(c.j)(s[l],"total","deceased"),v=Object(c.j)(s[l],"total","recovered"),p=Object(c.j)(s[l],"total","tested"),h=Object(P.a)(Object(c.g)(),"yyyy-MM-dd"),O=Object(P.a)(Object(R.a)(Object(c.g)(),{weeks:1}),"yyyy-MM-dd"),j=Object(c.j)(null===u||void 0===u?void 0:u[O],"total","confirmed"),g=Object(c.j)(s[l],"total","confirmed",!0),y=Object(c.j)(s[l],"total","tested",!0),E=Object(c.j)(s.TT,"total","confirmed",!0),w=v/d*100,k=f/d*100,M=m/d*100,x=(d-j)/j*100;return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"StateMeta population"},b.a.createElement("div",{className:"meta-item population"},b.a.createElement("h3",null,"Population"),b.a.createElement("h1",null,Object(c.f)(null===(t=s[l])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.population))),b.a.createElement("div",{className:"alert"},b.a.createElement(F,null),b.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",b.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),b.a.createElement("div",{className:"StateMeta"},b.a.createElement(I,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(c.f)(g),total:Object(c.f)(E),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Object(c.f)(Math.round(g))," out of every 1 million people in ").concat(i.p[l]," have tested positive for the virus.\n            ")}),b.a.createElement(I,{className:"active",title:"Active",statistic:"".concat(Object(c.f)(k),"%"),formula:"(active / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(k))," are currently infected."):"Currently, there are no active cases in this state."}),b.a.createElement(I,{className:"recovery",title:"Recovery Rate",statistic:"".concat(Object(c.f)(w),"%"),formula:"(recovered / confirmed) * 100",description:w>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(w))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),b.a.createElement(I,{className:"mortality",title:"Mortality Rate",statistic:"".concat(Object(c.f)(M),"%"),formula:"(deceased / confirmed) * 100",description:M>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(M))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),b.a.createElement(I,{className:"gr",title:"Avg. Growth Rate",statistic:x>0?"".concat(Object(c.f)(Math.round(x/7)),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(c.d)(O,"dd MMM")," - ").concat(Object(c.d)(h,"dd MMM")),description:x>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(c.f)(Math.round(x/7)),"%\n              every day."):"There has been no growth in the number of infections in last one week."}),b.a.createElement(I,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Object(c.f)(Math.round(y))),formula:"(total tests in state / total population of state) * 1 Million",date:p?"As of ".concat(Object(c.e)(null===(a=s[l])||void 0===a||null===(r=a.meta)||void 0===r||null===(o=r.tested)||void 0===o?void 0:o.last_updated)," ago"):"",description:y>0?"For every 1 million people in ".concat(i.p[l],",\n                ").concat(Object(c.f)(Math.round(y))," people were tested."):"No tests have been conducted in this state yet."})))}),(function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode})),B=n(97),H=n(79),V=n.n(H);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q=Object(p.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,c=Y(e,["color","size"]);return b.a.createElement("svg",W({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),b.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),b.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));q.propTypes={color:_.a.string,size:_.a.oneOfType([_.a.string,_.a.number])},q.displayName="Smile";var G=q,J=n(111),X=n(256),Z=n(5),K=n(218),Q=n(106),$=Object(p.lazy)((function(){return n.e(24).then(n.bind(null,202))})),ee=Object(p.lazy)((function(){return n.e(21).then(n.bind(null,203))})),te=Object(p.lazy)((function(){return Promise.all([n.e(2),n.e(34)]).then(n.bind(null,174))}));t.default=b.a.memo((function(e){var t,n,o,l,s,u,d=Object(X.a)().t,f=Object(Z.i)().stateCode.toUpperCase(),m=Object(K.a)("mapStatistic","active"),v=Object(r.a)(m,2),h=v[0],O=v[1],j=Object(p.useState)(!1),g=Object(r.a)(j,2),y=g[0],E=g[1],k=Object(p.useState)({stateCode:f,districtName:null}),C=Object(r.a)(k,2),z=C[0],I=C[1];Object(p.useEffect)((function(){z.stateCode!==f&&(I({stateCode:f,districtName:null}),E(!1))}),[z.stateCode,f]);var P=Object(Q.a)("".concat(i.a,"/timeseries-").concat(f,".min.json"),c.c,{revalidateOnMount:!0,refreshInterval:1e5}),R=P.data,T=P.error,_=Object(Q.a)("".concat(i.a,"/data.min.json"),c.c,{revalidateOnMount:!0,refreshInterval:1e5}).data,A=Object(p.useMemo)((function(){var e;if(_){var t=window.innerWidth>=540?3:2,n=(null===(e=_[f])||void 0===e?void 0:e.districts)?Object.keys(_[f].districts).filter((function(e){return"Unknown"!==e})).length:0;return Math.ceil(n/t)}}),[_,f]),L=Object(p.useRef)(),D=Object(B.a)(L,{once:!0}),F=Object(p.useMemo)((function(){var e=[];return[0,0,0,0].map((function(t,n){return e.push({animationDelay:"".concat(250*n,"ms")}),null})),e}),[]),H=y?10:6;return b.a.createElement(b.a.Fragment,null,b.a.createElement(J.a,null,b.a.createElement("title",null,"Coronavirus Outbreak in ",i.p[f]," - covid19india.org"),b.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(i.p[f],": Latest Map and Case Count")})),b.a.createElement("div",{className:"State"},b.a.createElement("div",{className:"state-left"},b.a.createElement(S.default,{data:null===_||void 0===_?void 0:_[f],stateCode:f}),b.a.createElement("div",{style:{position:"relative"}},b.a.createElement(N.default,{mapStatistic:h,setMapStatistic:O}),b.a.createElement(x.default,{data:null===_||void 0===_?void 0:_[f]}),b.a.createElement(te,Object.assign({timeseries:null===R||void 0===R||null===(t=R[f])||void 0===t?void 0:t.dates},{stateCode:f},{forceRender:!!T}))),_&&b.a.createElement(p.Suspense,{fallback:b.a.createElement("div",{style:{minHeight:"50rem"}})},b.a.createElement(ee,{stateCode:f,data:_,regionHighlighted:z,setRegionHighlighted:I,mapStatistic:h,setMapStatistic:O})),b.a.createElement("span",{ref:L}),_&&D&&b.a.createElement(U,Object.assign({stateCode:f,data:_},{timeseries:null===R||void 0===R||null===(n=R[f])||void 0===n?void 0:n.dates}))),b.a.createElement("div",{className:"state-right"},b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"district-bar",style:y?{}:{display:"flex"}},b.a.createElement("div",{className:"district-bar-top"},b.a.createElement("div",{className:"district-bar-left"},b.a.createElement("h2",{className:V()(h,"fadeInUp"),style:F[0]},"Top districts"),b.a.createElement("div",{className:"districts fadeInUp ".concat(y?"is-grid":""),style:y?Object(a.a)({gridTemplateRows:"repeat(".concat(A,", 2rem)")},F[1]):F[1]},Object.keys((null===_||void 0===_||null===(o=_[f])||void 0===o?void 0:o.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var n=_[f].districts[e],a=_[f].districts[t];return Object(c.j)(a,"total",h)-Object(c.j)(n,"total",h)}(e,t)})).slice(0,y?void 0:5).map((function(e){var t=Object(c.j)(_[f].districts[e],"total",h),n=Object(c.j)(_[f].districts[e],"delta",h);return b.a.createElement("div",{key:e,className:"district"},b.a.createElement("h2",null,Object(c.f)(t)),b.a.createElement("h5",null,d(e)),"active"!==h&&b.a.createElement("div",{className:"delta"},b.a.createElement("h6",{className:h},n>0?"\u2191"+Object(c.f)(n):"")))})))),b.a.createElement("div",{className:"district-bar-right fadeInUp",style:F[2]},R&&("confirmed"===h||"deceased"===h)&&b.a.createElement("div",{className:"happy-sign"},Object.keys((null===(l=R[f])||void 0===l?void 0:l.dates)||{}).slice(-H).every((function(e){return 0===Object(c.j)(R[f].dates[e],"delta",h)}))&&b.a.createElement("div",{className:"alert ".concat("confirmed"===h?"is-green":"")},b.a.createElement(G,null),b.a.createElement("div",{className:"alert-right"},"No new ",h," cases in the past five days"))),b.a.createElement(w,Object.assign({timeseries:null===R||void 0===R||null===(s=R[f])||void 0===s?void 0:s.dates,statistic:h},{stateCode:f,lookback:H},{forceRender:!!T})))),b.a.createElement("div",{className:"district-bar-bottom"},Object.keys((null===_||void 0===_||null===(u=_[f])||void 0===u?void 0:u.districts)||{}).length>5?b.a.createElement("button",{className:"button fadeInUp",onClick:function(){E(!y)},style:F[3]},b.a.createElement("span",null,y?"View less":"View all")):b.a.createElement("div",{style:{height:"3.75rem",flexBasis:"15%"}}))),b.a.createElement(p.Suspense,{fallback:b.a.createElement("div",null)},b.a.createElement($,Object.assign({stateCode:f,timeseries:R,regionHighlighted:z,setRegionHighlighted:I},{forceRender:!!T})))))),b.a.createElement(M.default,null))}))},97:function(e,t,n){"use strict";var a=n(78),r=n(0),i={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};t.a=function(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){void 0!==e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&window.requestIdleCallback((function(){o(!0),n.unobserve(e.current)}))}))}),i).observe(e.current)}),[e]),c}}}]);
//# sourceMappingURL=10.f53e9aeb.chunk.js.map