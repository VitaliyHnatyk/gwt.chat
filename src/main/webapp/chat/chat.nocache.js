function chat(){var Q='',rc='\n-',yb='" for "gwt:onLoadErrorFn"',wb='" for "gwt:onPropertyErrorFn"',ec='"<script src=\\"',jb='"><\/script>',$='#',qc=');',ic='-\n',sc='-><\/scr',fc='.cache.js\\"><\/scr" + "ipt>"',ab='/',mb='//',Pb='0D51F2725CF44462713B462D78C8AD2B',Sb='3092712C94F694C68368DA15B3024BBC',Wb=':',Rb=':1',qb='::',gc='<scr',ib='<script id="',tb='=',_='?',Tb='B26C1727928401F52B1DB230966905F6',vb='Bad handler "',Lb='Cross-site hosted mode not yet implemented. See issue ',cc='DOMContentLoaded',Ub='EE86EBE572E02C95B3FF75CBDB0D6CEA',Ab='EventSource',Vb='F27A807E21C1BCB8E61525B0E02659F7',kb='SCRIPT',hb='__gwt_marker_chat',lb='base',db='baseUrl',U='begin',T='bootstrap',R='chat',bc='chat.css',fb='chat.nocache.js',pb='chat::',cb='clear.cache.gif',sb='content',pc='document.write(',Z='end',zb='event.source',lc='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',nc='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',Ob='false',Ib='gecko',Jb='gecko1_8',V='gwt.codesvr=',W='gwt.hosted=',X='gwt.hybrid',xb='gwt:onLoadErrorFn',ub='gwt:onPropertyErrorFn',rb='gwt:property',ac='head',_b='href',Mb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Fb='ie10',Hb='ie8',Gb='ie9',bb='img',tc='ipt>',hc='ipt><!-',Yb='link',dc='loadExternalRefs',nb='meta',kc='moduleName:"chat", sessionId:window.__gwtStatsSessionId, subSystem:"startup",',Y='moduleStartup',Eb='msie',ob='name',Xb='normalize.css',Zb='rel',Db='safari',eb='script',Nb='selectingPermutation',S='startup',$b='stylesheet',Qb='true',mc='type: "end"});',oc='type: "moduleRequested"});',gb='undefined',Kb='unknown',Bb='user.agent',Cb='webkit',jc='window.__gwtStatsEvent && window.__gwtStatsEvent({';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s=Q,t={},u=[],v=[],w=[],A=0,B,C;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function D(){var b=false;try{var c=m.location.search;return (c.indexOf(V)!=-1||(c.indexOf(W)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(X)==-1}catch(a){}D=function(){return b};return b}
function F(){if(q&&r){q(B,R,s,A);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Y,millis:(new Date).getTime(),type:Z})}}
function G(){function e(a){var b=a.lastIndexOf($);if(b==-1){b=a.length}var c=a.indexOf(_);if(c==-1){c=a.length}var d=a.lastIndexOf(ab,Math.min(c,b));return d>=0?a.substring(0,d+1):Q}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(bb);b.src=a+cb;a=e(b.src)}return a}
function g(){var a=I(db);if(a!=null){return a}return Q}
function h(){var a=n.getElementsByTagName(eb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(fb)!=-1){return e(a[b].src)}}return Q}
function i(){var a;if(typeof isBodyLoaded==gb||!isBodyLoaded()){var b=hb;var c;n.write(ib+b+jb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=kb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return Q}
function j(){var a=n.getElementsByTagName(lb);if(a.length>0){return a[a.length-1].href}return Q}
function k(){var a=n.location;return a.href==a.protocol+mb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==Q){l=h()}if(l==Q){l=i()}if(l==Q){l=j()}if(l==Q&&k()){l=e(n.location.href)}l=f(l);s=l;return l}
function H(){var b=document.getElementsByTagName(nb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(ob),g;if(f){f=f.replace(pb,Q);if(f.indexOf(qb)>=0){continue}if(f==rb){g=e.getAttribute(sb);if(g){var h,i=g.indexOf(tb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=Q}t[f]=h}}else if(f==ub){g=e.getAttribute(sb);if(g){try{C=eval(g)}catch(a){alert(vb+g+wb)}}}else if(f==xb){g=e.getAttribute(sb);if(g){try{B=eval(g)}catch(a){alert(vb+g+yb)}}}}}}
function I(a){var b=t[a];return b==null?null:b}
function J(a,b){var c=w;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function K(a){var b=v[a](),c=u[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(C){C(a,d,b)}throw null}
v[zb]=function(){return Ab in window};u[zb]={'false':0,'true':1};v[Bb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Cb)!=-1}())return Db;if(function(){return b.indexOf(Eb)!=-1&&n.documentMode>=10}())return Fb;if(function(){return b.indexOf(Eb)!=-1&&n.documentMode>=9}())return Gb;if(function(){return b.indexOf(Eb)!=-1&&n.documentMode>=8}())return Hb;if(function(){return b.indexOf(Ib)!=-1}())return Jb;return Kb};u[Bb]={gecko1_8:0,ie10:1,ie8:2,ie9:3,safari:4};chat.onScriptLoad=function(a){chat.onScriptLoad=null;q=a;F()};if(D()){alert(Lb+Mb);return}H();G();o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Nb});var L;try{J([Ob,Gb],Pb);J([Qb,Gb],Pb);J([Ob,Gb],Pb+Rb);J([Qb,Gb],Pb+Rb);J([Ob,Db],Sb);J([Qb,Db],Sb);J([Ob,Db],Sb+Rb);J([Qb,Db],Sb+Rb);J([Ob,Fb],Tb);J([Qb,Fb],Tb);J([Ob,Fb],Tb+Rb);J([Qb,Fb],Tb+Rb);J([Ob,Hb],Ub);J([Qb,Hb],Ub);J([Ob,Hb],Ub+Rb);J([Qb,Hb],Ub+Rb);J([Ob,Jb],Vb);J([Qb,Jb],Vb);J([Ob,Jb],Vb+Rb);J([Qb,Jb],Vb+Rb);L=w[K(zb)][K(Bb)];var M=L.indexOf(Wb);if(M!=-1){A=Number(L.substring(M+1));L=L.substring(0,M)}}catch(a){return}var N;function O(){if(!r){r=true;if(!__gwt_stylesLoaded[Xb]){var a=n.createElement(Yb);__gwt_stylesLoaded[Xb]=a;a.setAttribute(Zb,$b);a.setAttribute(_b,s+Xb);n.getElementsByTagName(ac)[0].appendChild(a)}if(!__gwt_stylesLoaded[bc]){var a=n.createElement(Yb);__gwt_stylesLoaded[bc]=a;a.setAttribute(Zb,$b);a.setAttribute(_b,s+bc);n.getElementsByTagName(ac)[0].appendChild(a)}F();if(n.removeEventListener){n.removeEventListener(cc,O,false)}if(N){clearInterval(N)}}}
if(n.addEventListener){n.addEventListener(cc,function(){O()},false)}var N=setInterval(function(){if(/loaded|complete/.test(n.readyState)){O()}},50);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:Z});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:dc,millis:(new Date).getTime(),type:U});var P=ec+s+L+fc;n.write(gc+hc+ic+jc+kc+lc+mc+jc+kc+nc+oc+pc+P+qc+rc+sc+tc)}
chat();