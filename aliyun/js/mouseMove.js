"use strict";function mouseMove(n){function t(n){if(null==o||null==e)return null;var t=$(n).position().left;t+=o-$(n).parent().position().left;var s=$(n).position().top;return s+=e-$(n).parent().position().top,{x:t,y:s}}{var s=[{sx:35,sy:0,mw:3,mh:.5,bx:6.4,by:8.4,rx:-.1},{sx:20,sy:0,mw:.3,mh:.1,bx:6.5,by:7.4,rx:-.1},{sx:0,sy:0,mw:3,mh:1,bx:8.4,by:10.4,rx:-.6}],o=null,e=null;setInterval(function(){for(var o=0;3>o;o++){var e=t(n+o);if(null!=e){var r=parseInt($(n+o).css("left")),i=r+.1*(s[o].sx+s[o].mw-(e.x-100)/s[o].bx-r),l=parseInt($(n+o).css("top")),u=l+.1*(s[o].sy+s[o].mh-(e.y-100)/s[o].by-l);$(n+o).css({left:i,top:u})}}},15)}$(window).mousemove(function(n){n=n||window.event,o=n.pageX,e=n.pageY})}