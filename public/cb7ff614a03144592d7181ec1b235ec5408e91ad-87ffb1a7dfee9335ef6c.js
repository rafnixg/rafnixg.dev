(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4JlD":function(t,e,a){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,a,s){return e=e||"&",a=a||"=",null===t&&(t=void 0),"object"==typeof t?i(o(t),(function(o){var s=encodeURIComponent(n(o))+a;return r(t[o])?i(t[o],(function(t){return s+encodeURIComponent(n(t))})).join(e):s+encodeURIComponent(n(t[o]))})).join(e):s?encodeURIComponent(n(s))+a+encodeURIComponent(n(t)):""};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var a=[],n=0;n<t.length;n++)a.push(e(t[n],n));return a}var o=Object.keys||function(t){var e=[];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.push(a);return e}},CxY0:function(t,e,a){"use strict";var n=a("GYWy"),r=a("Nehr");function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){r.isString(t)&&(t=b(t));return t instanceof i?t.format():i.prototype.format.call(t)},e.Url=i;var o=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(l),m=["%","/","?",";","#"].concat(h),p=["/","?","#"],u=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=a("s4NR");function b(t,e,a){if(t&&r.isObject(t)&&t instanceof i)return t;var n=new i;return n.parse(t,e,a),n}i.prototype.parse=function(t,e,a){if(!r.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),s=-1!==i&&i<t.indexOf("#")?"?":"#",l=t.split(s);l[0]=l[0].replace(/\\/g,"/");var b=t=l.join(s);if(b=b.trim(),!a&&1===t.split("#").length){var w=c.exec(b);if(w)return this.path=b,this.href=b,this.pathname=w[1],w[2]?(this.search=w[2],this.query=e?v.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var E=o.exec(b);if(E){var j=(E=E[0]).toLowerCase();this.protocol=j,b=b.substr(E.length)}if(a||E||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===b.substr(0,2);!O||E&&d[E]||(b=b.substr(2),this.slashes=!0)}if(!d[E]&&(O||E&&!y[E])){for(var x,A,I=-1,_=0;_<p.length;_++){-1!==(k=b.indexOf(p[_]))&&(-1===I||k<I)&&(I=k)}-1!==(A=-1===I?b.lastIndexOf("@"):b.lastIndexOf("@",I))&&(x=b.slice(0,A),b=b.slice(A+1),this.auth=decodeURIComponent(x)),I=-1;for(_=0;_<m.length;_++){var k;-1!==(k=b.indexOf(m[_]))&&(-1===I||k<I)&&(I=k)}-1===I&&(I=b.length),this.host=b.slice(0,I),b=b.slice(I),this.parseHost(),this.hostname=this.hostname||"";var q="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!q)for(var C=this.hostname.split(/\./),U=(_=0,C.length);_<U;_++){var S=C[_];if(S&&!S.match(u)){for(var P="",R=0,N=S.length;R<N;R++)S.charCodeAt(R)>127?P+="x":P+=S[R];if(!P.match(u)){var W=C.slice(0,_),F=C.slice(_+1),T=S.match(f);T&&(W.push(T[1]),F.unshift(T[2])),F.length&&(b="/"+F.join(".")+b),this.hostname=W.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),q||(this.hostname=n.toASCII(this.hostname));var z=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+z,this.href+=this.host,q&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!g[j])for(_=0,U=h.length;_<U;_++){var J=h[_];if(-1!==b.indexOf(J)){var G=encodeURIComponent(J);G===J&&(G=escape(J)),b=b.split(J).join(G)}}var H=b.indexOf("#");-1!==H&&(this.hash=b.substr(H),b=b.slice(0,H));var M=b.indexOf("?");if(-1!==M?(this.search=b.substr(M),this.query=b.substr(M+1),e&&(this.query=v.parse(this.query)),b=b.slice(0,M)):e&&(this.search="",this.query={}),b&&(this.pathname=b),y[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){z=this.pathname||"";var Y=this.search||"";this.path=z+Y}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",a=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&r.isObject(this.query)&&Object.keys(this.query).length&&(o=v.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||y[e])&&!1!==i?(i="//"+(i||""),a&&"/"!==a.charAt(0)&&(a="/"+a)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),e+i+(a=a.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(s=s.replace("#","%23"))+n},i.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(r.isString(t)){var e=new i;e.parse(t,!1,!0),t=e}for(var a=new i,n=Object.keys(this),o=0;o<n.length;o++){var s=n[o];a[s]=this[s]}if(a.hash=t.hash,""===t.href)return a.href=a.format(),a;if(t.slashes&&!t.protocol){for(var c=Object.keys(t),l=0;l<c.length;l++){var h=c[l];"protocol"!==h&&(a[h]=t[h])}return y[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(t.protocol&&t.protocol!==a.protocol){if(!y[t.protocol]){for(var m=Object.keys(t),p=0;p<m.length;p++){var u=m[p];a[u]=t[u]}return a.href=a.format(),a}if(a.protocol=t.protocol,t.host||d[t.protocol])a.pathname=t.pathname;else{for(var f=(t.pathname||"").split("/");f.length&&!(t.host=f.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),a.pathname=f.join("/")}if(a.search=t.search,a.query=t.query,a.host=t.host||"",a.auth=t.auth,a.hostname=t.hostname||t.host,a.port=t.port,a.pathname||a.search){var g=a.pathname||"",v=a.search||"";a.path=g+v}return a.slashes=a.slashes||t.slashes,a.href=a.format(),a}var b=a.pathname&&"/"===a.pathname.charAt(0),w=t.host||t.pathname&&"/"===t.pathname.charAt(0),E=w||b||a.host&&t.pathname,j=E,O=a.pathname&&a.pathname.split("/")||[],x=(f=t.pathname&&t.pathname.split("/")||[],a.protocol&&!y[a.protocol]);if(x&&(a.hostname="",a.port=null,a.host&&(""===O[0]?O[0]=a.host:O.unshift(a.host)),a.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===f[0]?f[0]=t.host:f.unshift(t.host)),t.host=null),E=E&&(""===f[0]||""===O[0])),w)a.host=t.host||""===t.host?t.host:a.host,a.hostname=t.hostname||""===t.hostname?t.hostname:a.hostname,a.search=t.search,a.query=t.query,O=f;else if(f.length)O||(O=[]),O.pop(),O=O.concat(f),a.search=t.search,a.query=t.query;else if(!r.isNullOrUndefined(t.search)){if(x)a.hostname=a.host=O.shift(),(q=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=q.shift(),a.host=a.hostname=q.shift());return a.search=t.search,a.query=t.query,r.isNull(a.pathname)&&r.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a}if(!O.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var A=O.slice(-1)[0],I=(a.host||t.host||O.length>1)&&("."===A||".."===A)||""===A,_=0,k=O.length;k>=0;k--)"."===(A=O[k])?O.splice(k,1):".."===A?(O.splice(k,1),_++):_&&(O.splice(k,1),_--);if(!E&&!j)for(;_--;_)O.unshift("..");!E||""===O[0]||O[0]&&"/"===O[0].charAt(0)||O.unshift(""),I&&"/"!==O.join("/").substr(-1)&&O.push("");var q,C=""===O[0]||O[0]&&"/"===O[0].charAt(0);x&&(a.hostname=a.host=C?"":O.length?O.shift():"",(q=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=q.shift(),a.host=a.hostname=q.shift()));return(E=E||a.host&&O.length)&&!C&&O.unshift(""),O.length?a.pathname=O.join("/"):(a.pathname=null,a.path=null),r.isNull(a.pathname)&&r.isNull(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=t.auth||a.auth,a.slashes=a.slashes||t.slashes,a.href=a.format(),a},i.prototype.parseHost=function(){var t=this.host,e=s.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},GYWy:function(t,e,a){(function(t,n){var r;!function(i){e&&e.nodeType,t&&t.nodeType;var o="object"==typeof n&&n;o.global!==o&&o.window!==o&&o.self;var s,c=2147483647,l=/^xn--/,h=/[^\x20-\x7E]/,m=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},u=Math.floor,f=String.fromCharCode;function g(t){throw new RangeError(p[t])}function d(t,e){for(var a=t.length,n=[];a--;)n[a]=e(t[a]);return n}function y(t,e){var a=t.split("@"),n="";return a.length>1&&(n=a[0]+"@",t=a[1]),n+d((t=t.replace(m,".")).split("."),e).join(".")}function v(t){for(var e,a,n=[],r=0,i=t.length;r<i;)(e=t.charCodeAt(r++))>=55296&&e<=56319&&r<i?56320==(64512&(a=t.charCodeAt(r++)))?n.push(((1023&e)<<10)+(1023&a)+65536):(n.push(e),r--):n.push(e);return n}function b(t){return d(t,(function(t){var e="";return t>65535&&(e+=f((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=f(t)})).join("")}function w(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function E(t,e,a){var n=0;for(t=a?u(t/700):t>>1,t+=u(t/e);t>455;n+=36)t=u(t/35);return u(n+36*t/(t+38))}function j(t){var e,a,n,r,i,o,s,l,h,m,p,f=[],d=t.length,y=0,v=128,w=72;for((a=t.lastIndexOf("-"))<0&&(a=0),n=0;n<a;++n)t.charCodeAt(n)>=128&&g("not-basic"),f.push(t.charCodeAt(n));for(r=a>0?a+1:0;r<d;){for(i=y,o=1,s=36;r>=d&&g("invalid-input"),((l=(p=t.charCodeAt(r++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||l>u((c-y)/o))&&g("overflow"),y+=l*o,!(l<(h=s<=w?1:s>=w+26?26:s-w));s+=36)o>u(c/(m=36-h))&&g("overflow"),o*=m;w=E(y-i,e=f.length+1,0==i),u(y/e)>c-v&&g("overflow"),v+=u(y/e),y%=e,f.splice(y++,0,v)}return b(f)}function O(t){var e,a,n,r,i,o,s,l,h,m,p,d,y,b,j,O=[];for(d=(t=v(t)).length,e=128,a=0,i=72,o=0;o<d;++o)(p=t[o])<128&&O.push(f(p));for(n=r=O.length,r&&O.push("-");n<d;){for(s=c,o=0;o<d;++o)(p=t[o])>=e&&p<s&&(s=p);for(s-e>u((c-a)/(y=n+1))&&g("overflow"),a+=(s-e)*y,e=s,o=0;o<d;++o)if((p=t[o])<e&&++a>c&&g("overflow"),p==e){for(l=a,h=36;!(l<(m=h<=i?1:h>=i+26?26:h-i));h+=36)j=l-m,b=36-m,O.push(f(w(m+j%b,0))),l=u(j/b);O.push(f(w(l,0))),i=E(a,y,n==r),a=0,++n}++a,++e}return O.join("")}s={version:"1.4.1",ucs2:{decode:v,encode:b},decode:j,encode:O,toASCII:function(t){return y(t,(function(t){return h.test(t)?"xn--"+O(t):t}))},toUnicode:function(t){return y(t,(function(t){return l.test(t)?j(t.slice(4).toLowerCase()):t}))}},void 0===(r=function(){return s}.call(e,a,e,t))||(t.exports=r)}()}).call(this,a("YuTi")(t),a("yLpj"))},Nehr:function(t,e,a){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},kd2E:function(t,e,a){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,a,i){e=e||"&",a=a||"=";var o={};if("string"!=typeof t||0===t.length)return o;var s=/\+/g;t=t.split(e);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var l=t.length;c>0&&l>c&&(l=c);for(var h=0;h<l;++h){var m,p,u,f,g=t[h].replace(s,"%20"),d=g.indexOf(a);d>=0?(m=g.substr(0,d),p=g.substr(d+1)):(m=g,p=""),u=decodeURIComponent(m),f=decodeURIComponent(p),n(o,u)?r(o[u])?o[u].push(f):o[u]=[o[u],f]:o[u]=f}return o};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},s4NR:function(t,e,a){"use strict";e.decode=e.parse=a("kd2E"),e.encode=e.stringify=a("4JlD")},wCQ3:function(t,e,a){"use strict";a.d(e,"a",(function(){return I}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("CxY0"),s=a.n(o),c=a("N0cg"),l=a.n(c),h=a("qhky"),m=a("LvDl"),p=a.n(m),u=a("17x9"),f=a.n(u),g=function(t){var e=[];return e.push(t.website?t.website:null,t.twitter?"https://twitter.com/"+t.twitter.replace(/^@/,"")+"/":null,t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null),e=p.a.compact(e),{name:t.name||null,sameAsArray:e.length?'["'+p.a.join(e,'", "')+'"]':null,image:t.profile_image||null,facebookUrl:t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null}};g.defaultProps={fetchAuthorData:!1},g.PropTypes={primaryAuthor:f.a.shape({name:f.a.string.isRequired,profile_image:f.a.string,website:f.a.string,twitter:f.a.string,facebook:f.a.string}).isRequired};var d=g,y=function(t){var e=t.image;return e?r.a.createElement(h.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:e}),r.a.createElement("meta",{property:"og:image",content:e}),r.a.createElement("meta",{property:"og:image:width",content:l.a.shareImageWidth}),r.a.createElement("meta",{property:"og:image:height",content:l.a.shareImageHeight})):null},v=a("reRv"),b=function(t){var e=t.data,a=t.settings,n=t.canonical,i=e;a=a.allGhostSettings.edges[0].node;var o=d(i.primary_author),c=p.a.map(Object(v.tags)(i,{visibility:"public",fn:function(t){return t}}),"name"),m=c[0]||"",u=i.feature_image?i.feature_image:p.a.get(a,"cover_image",null),f=a.logo||l.a.siteIcon?s.a.resolve(l.a.siteUrl,a.logo||l.a.siteIcon):null,g={"@context":"https://schema.org/","@type":"Article",author:{"@type":"Person",name:o.name,image:o.image?o.image:void 0,sameAs:o.sameAsArray?o.sameAsArray:void 0},keywords:c.length?c.join(", "):void 0,headline:i.meta_title||i.title,url:n,datePublished:i.published_at,dateModified:i.updated_at,image:u?{"@type":"ImageObject",url:u,width:l.a.shareImageWidth,height:l.a.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:a.title,logo:{"@type":"ImageObject",url:f,width:60,height:60}},description:i.meta_description||i.excerpt,mainEntityOfPage:{"@type":"WebPage","@id":l.a.siteUrl}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||i.excerpt}),r.a.createElement("link",{rel:"canonical",href:n}),r.a.createElement("meta",{property:"og:site_name",content:a.title}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:i.og_title||i.meta_title||i.title}),r.a.createElement("meta",{property:"og:description",content:i.og_description||i.excerpt||i.meta_description}),r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("meta",{property:"article:published_time",content:i.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:i.updated_at}),c.map((function(t,e){return r.a.createElement("meta",{property:"article:tag",content:t,key:e})})),o.facebookUrl&&r.a.createElement("meta",{property:"article:author",content:o.facebookUrl}),r.a.createElement("meta",{name:"twitter:title",content:i.twitter_title||i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.twitter_description||i.excerpt||i.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:n}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:o.name}),m&&r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),m&&r.a.createElement("meta",{name:"twitter:data2",content:m}),a.twitter&&r.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g,void 0,4))),r.a.createElement(y,{image:u}))},w=function(t){return r.a.createElement(i.StaticQuery,{query:"2731221146",render:function(e){return r.a.createElement(b,Object.assign({settings:e},t))}})},E=function(t){var e=t.data,a=t.settings,n=t.canonical,i=t.title,o=t.description,c=t.image,m=t.type;a=a.allGhostSettings.edges[0].node;var u=s.a.resolve(l.a.siteUrl,a.logo||l.a.siteIcon),f=c||e.feature_image||p.a.get(a,"cover_image",null);f=f?s.a.resolve(l.a.siteUrl,f):null,o=o||e.meta_description||e.description||l.a.siteDescriptionMeta||a.description,i=(i||e.meta_title||e.name||e.title)+" - "+a.title;var g={"@context":"https://schema.org/","@type":m,url:n,image:f?{"@type":"ImageObject",url:f,width:l.a.shareImageWidth,height:l.a.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:a.title,logo:{"@type":"ImageObject",url:u,width:60,height:60}},mainEntityOfPage:{"@type":"WebPage","@id":l.a.siteUrl},description:o};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("title",null,i),r.a.createElement("meta",{name:"description",content:o}),r.a.createElement("link",{rel:"canonical",href:n}),r.a.createElement("meta",{property:"og:site_name",content:a.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:i}),r.a.createElement("meta",{property:"og:description",content:o}),r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("meta",{name:"twitter:title",content:i}),r.a.createElement("meta",{name:"twitter:description",content:o}),r.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&r.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g,void 0,4))),r.a.createElement(y,{image:f}))},j=function(t){return r.a.createElement(i.StaticQuery,{query:"2561578252",render:function(e){return r.a.createElement(E,Object.assign({settings:e},t))}})},O=function(t){var e=t.data,a=t.settings,n=t.canonical;a=a.allGhostSettings.edges[0].node;var i=d(e),o=i.image||p.a.get(a,"cover_image",null),s=e.name+" - "+a.title,c=e.bio||l.a.siteDescriptionMeta||a.description,m={"@context":"https://schema.org/","@type":"Person",name:e.name,sameAs:i.sameAsArray?i.sameAsArray:void 0,url:n,image:o?{"@type":"ImageObject",url:o,width:l.a.shareImageWidth,height:l.a.shareImageHeight}:void 0,mainEntityOfPage:{"@type":"WebPage","@id":l.a.siteUrl},description:c};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("title",null,s),r.a.createElement("meta",{name:"description",content:c}),r.a.createElement("link",{rel:"canonical",href:n}),r.a.createElement("meta",{property:"og:site_name",content:a.title}),r.a.createElement("meta",{property:"og:type",content:"profile"}),r.a.createElement("meta",{property:"og:title",content:s}),r.a.createElement("meta",{property:"og:description",content:c}),r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("meta",{name:"twitter:title",content:s}),r.a.createElement("meta",{name:"twitter:description",content:c}),r.a.createElement("meta",{name:"twitter:url",content:n}),a.twitter&&r.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+a.twitter.replace(/^@/,"")+"/"}),a.twitter&&r.a.createElement("meta",{name:"twitter:creator",content:a.twitter}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m,void 0,4))),r.a.createElement(y,{image:o}))},x=function(t){return r.a.createElement(i.StaticQuery,{query:"4145280475",render:function(e){return r.a.createElement(O,Object.assign({settings:e},t))}})},A=function(t){var e=t.data,a=t.settings,n=t.title,i=t.description,o=t.image,c=t.location,h=s.a.resolve(l.a.siteUrl,c.pathname),m=e.ghostPost,p=e.ghostTag,u=e.ghostAuthor,f=e.ghostPage;return a=a.allGhostSettings.edges[0].node,m?r.a.createElement(w,{data:m,canonical:h}):p?r.a.createElement(j,{data:p,canonical:h,type:"Series"}):u?r.a.createElement(x,{data:u,canonical:h}):f?r.a.createElement(j,{data:f,canonical:h,type:"WebSite"}):(n=n||l.a.siteTitleMeta||a.title,i=i||l.a.siteDescriptionMeta||a.description,o=(o=o||a.cover_image||null)?s.a.resolve(l.a.siteUrl,o):null,r.a.createElement(j,{data:{},canonical:h,title:n,description:i,image:o,type:"WebSite"}))};A.defaultProps={data:{}};var I=function(t){return r.a.createElement(i.StaticQuery,{query:"2358152166",render:function(e){return r.a.createElement(A,Object.assign({settings:e},t))}})}}}]);
//# sourceMappingURL=cb7ff614a03144592d7181ec1b235ec5408e91ad-87ffb1a7dfee9335ef6c.js.map