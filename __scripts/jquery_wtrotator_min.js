(function(a){a.fn.wtRotator=function(C){var l="inside";var r="outside";var E=0;var F=1;var k={TL:0,TC:1,TR:2,BL:3,BC:4,BR:5,LT:6,LC:7,LB:8,RT:9,RC:10,RB:11};var e=0;var h={"block.top":e++,"block.right":e++,"block.bottom":e++,"block.left":e++,"block.drop":e++,"diag.fade":e++,"diag.exp":e++,"rev.diag.fade":e++,"rev.diag.exp":e++,"block.fade":e++,"block.exp":e++,"block.top.zz":e++,"block.bottom.zz":e++,"block.left.zz":e++,"block.right.zz":e++,"spiral.in":e++,"spiral.out":e++,"vert.tl":e++,"vert.tr":e++,"vert.bl":e++,"vert.br":e++,"fade.left":e++,"fade.right":e++,"alt.left":e++,"alt.right":e++,"blinds.left":e++,"blinds.right":e++,"vert.random.fade":e++,"horz.tl":e++,"horz.tr":e++,"horz.bl":e++,"horz.br":e++,"fade.top":e++,"fade.bottom":e++,"alt.top":e++,"alt.bottom":e++,"blinds.top":e++,"blinds.bottom":e++,"horz.random.fade":e++,none:e++,fade:e++,"h.slide":e++,"v.slide":e++,random:e++};var A={fade:0,down:1,right:2,up:3,left:4,none:5};var o=250;var g=75;var b=50;var q=5000;var x=800;var w=500;var n=600;var y=4;var f="updatetext";var v="updatelist";var z=(jQuery.browser.msie&&parseInt(jQuery.browser.version)<=7);function c(J,S,Q,U,P,K,L){var M;var H;var O;var T=null;var V=function(){O=Math.ceil(S/U);if(O>o){U=Math.ceil(S/o);O=Math.ceil(S/U)}var X="";for(var W=0;W<O;W++){X+="<div class='vpiece' id='"+W+"'></div>"}J.addToScreen(X);M=J.$el.find("div.vpiece");H=new Array(O);M.each(function(Y){a(this).css({left:(Y*U),height:Q});H[Y]=a(this)})};this.clear=function(){clearInterval(T);M.stop(true).css({"z-index":2,opacity:0})};this.displayContent=function(W,X){G(W,X);if(X==h["vert.random.fade"]){R(W)}else{I(W,X)}};var G=function(W,X){switch(X){case h["vert.tl"]:case h["vert.tr"]:N(W,-Q,1,U,false);break;case h["vert.bl"]:case h["vert.br"]:N(W,Q,1,U,false);break;case h["alt.left"]:case h["alt.right"]:N(W,0,1,U,true);break;case h["blinds.left"]:case h["blinds.right"]:N(W,0,1,0,false);break;default:N(W,0,0,U,false)}};var N=function(Z,W,X,ab,ad){var aa=Z.attr("src");var ac=0;var Y=0;if(J.autoCenter()){ac=(Q-Z.height())/2;Y=(S-Z.width())/2}M.each(function(af){var ae=((-af*U)+Y);if(ad){W=(af%2)==0?-Q:Q}a(this).css({background:P+" url('"+aa+"') no-repeat",backgroundPosition:ae+"px "+ac+"px",opacity:X,top:W,width:ab,"z-index":3})})};var I=function(Y,Z){var ab,X,aa,W;switch(Z){case h["vert.tl"]:case h["vert.bl"]:case h["fade.left"]:case h["blinds.left"]:case h["alt.left"]:ab=0;X=O-1;aa=1;break;default:ab=O-1;X=0;aa=-1}T=setInterval(function(){M.eq(ab).animate({top:0,opacity:1,width:U},K,J.easing(),function(){if(a(this).attr("id")==X){J.setComplete(Y)}});if(ab==X){clearInterval(T)}ab+=aa},L)};var R=function(X){t(H);var W=0;var Y=0;T=setInterval(function(){H[W++].animate({opacity:1},K,J.easing(),function(){if(++Y==O){J.setComplete(X)}});if(W==O){clearInterval(T)}},L)};V()}function u(J,S,Q,U,P,K,L){var M;var H;var O;var T=null;var V=function(){O=Math.ceil(Q/U);if(O>o){U=Math.ceil(Q/o);O=Math.ceil(Q/U)}var X="";for(var W=0;W<O;W++){X+="<div class='hpiece' id='"+W+"'><!-- --></div>"}J.addToScreen(X);M=J.$el.find("div.hpiece");H=new Array(O);M.each(function(Y){a(this).css({top:(Y*U),width:S});H[Y]=a(this)})};this.clear=function(){clearInterval(T);M.stop(true).css({"z-index":2,opacity:0})};this.displayContent=function(W,X){G(W,X);if(X==h["horz.random.fade"]){R(W)}else{I(W,X)}};var G=function(W,X){switch(X){case h["horz.tr"]:case h["horz.br"]:N(W,S,1,U,false);break;case h["horz.tl"]:case h["horz.bl"]:N(W,-S,1,U,false);break;case h["alt.top"]:case h["alt.bottom"]:N(W,0,1,U,true);break;case h["blinds.top"]:case h["blinds.bottom"]:N(W,0,1,0,false);break;default:N(W,0,0,U,false)}};var N=function(aa,Z,X,W,ad){var ab=aa.attr("src");var ac=0;var Y=0;if(J.autoCenter()){ac=(Q-aa.height())/2;Y=(S-aa.width())/2}M.each(function(af){var ae=((-af*U)+ac);if(ad){Z=(af%2)==0?-S:S}a(this).css({background:P+" url('"+ab+"') no-repeat",backgroundPosition:Y+"px "+ae+"px",opacity:X,left:Z,height:W,"z-index":3})})};var I=function(X,Y){var aa,W,Z;switch(Y){case h["horz.tl"]:case h["horz.tr"]:case h["fade.top"]:case h["blinds.top"]:case h["alt.top"]:aa=0;W=O-1;Z=1;break;default:aa=O-1;W=0;Z=-1}T=setInterval(function(){M.eq(aa).animate({left:0,opacity:1,height:U},K,J.easing(),function(){if(a(this).attr("id")==W){J.setComplete(X)}});if(aa==W){clearInterval(T)}aa+=Z},L)};var R=function(X){t(H);var W=0;var Y=0;T=setInterval(function(){H[W++].animate({opacity:1},K,J.easing(),function(){if(++Y==O){J.setComplete(X)}});if(W==O){clearInterval(T)}},L)};V()}function m(Q,R,M,S,P,G,Z){var O;var H;var T;var L;var N;var ab;var aa;var Y=function(){L=Math.ceil(M/S);N=Math.ceil(R/S);ab=L*N;if(ab>o){S=Math.ceil(Math.sqrt((M*R)/o));L=Math.ceil(M/S);N=Math.ceil(R/S);ab=L*N}var af="";for(var ae=0;ae<L;ae++){for(var ad=0;ad<N;ad++){af+="<div class='block' id='"+ae+"-"+ad+"'></div>"}}Q.addToScreen(af);H=Q.$el.find("div.block");H.data({tlId:"0-0",trId:"0-"+(N-1),blId:(L-1)+"-0",brId:(L-1)+"-"+(N-1)});var ac=0;T=new Array(ab);O=new Array(L);for(var ae=0;ae<L;ae++){O[ae]=new Array(N);for(var ad=0;ad<N;ad++){O[ae][ad]=T[ac++]=H.filter("#"+(ae+"-"+ad)).data("top",ae*S)}}};this.clear=function(){clearInterval(aa);H.stop(true).css({"z-index":2,opacity:0})};this.displayContent=function(ac,ad){switch(ad){case h["diag.fade"]:V(ac,0,S,0);W(ac,{opacity:1},false);break;case h["diag.exp"]:V(ac,0,0,0);W(ac,{opacity:1,width:S,height:S},false);break;case h["rev.diag.fade"]:V(ac,0,S,0);W(ac,{opacity:1},true);break;case h["rev.diag.exp"]:V(ac,0,0,0);W(ac,{opacity:1,width:S,height:S},true);break;case h["block.fade"]:V(ac,0,S,0);I(ac);break;case h["block.exp"]:V(ac,1,0,0);I(ac);break;case h["block.drop"]:V(ac,1,S,-(L*S));I(ac);break;case h["block.top.zz"]:case h["block.bottom.zz"]:V(ac,0,S,0);K(ac,ad);break;case h["block.left.zz"]:case h["block.right.zz"]:V(ac,0,S,0);U(ac,ad);break;case h["spiral.in"]:V(ac,0,S,0);X(ac,false);break;case h["spiral.out"]:V(ac,0,S,0);X(ac,true);break;default:V(ac,1,0,0);J(ac,ad)}};var V=function(ac,ai,am,ah){var aj=0;var ae=0;if(Q.autoCenter()){aj=(M-ac.height())/2;ae=(R-ac.width())/2}var ak=ac.attr("src");for(var ag=0;ag<L;ag++){for(var af=0;af<N;af++){var al=((-ag*S)+aj);var ad=((-af*S)+ae);O[ag][af].css({background:P+" url('"+ak+"') no-repeat",backgroundPosition:ad+"px "+al+"px",opacity:ai,top:(ag*S)+ah,left:(af*S),width:am,height:am,"z-index":3})}}};var W=function(ac,ak,ah){var aj=new Array(ab);var ad,ag,ae,af;var al=(L-1)+(N-1);if(ah){ad=al;ag=-1;ae=-1;af=H.data("tlId")}else{ad=0;ag=al+1;ae=1;af=H.data("brId")}var ai=0;while(ad!=ag){i=Math.min(L-1,ad);while(i>=0){j=Math.abs(i-ad);if(j>=N){break}aj[ai++]=O[i][j];i--}ad+=ae}ai=0;aa=setInterval(function(){aj[ai++].animate(ak,G,Q.easing(),function(){if(a(this).attr("id")==af){Q.setComplete(ac)}});if(ai==ab){clearInterval(aa)}},Z)};var U=function(af,ag){var ae=true;var ad=0,ac,ai,ah;if(ag==h["block.left.zz"]){ah=(N%2==0)?H.data("trId"):H.data("brId");ac=0;ai=1}else{ah=(N%2==0)?H.data("tlId"):H.data("blId");ac=N-1;ai=-1}aa=setInterval(function(){O[ad][ac].animate({opacity:1},G,Q.easing(),function(){if(a(this).attr("id")==ah){Q.setComplete(af)}});if(O[ad][ac].attr("id")==ah){clearInterval(aa)}(ae?ad++:ad--);if(ad==L||ad<0){ae=!ae;ad=(ae?0:L-1);ac+=ai}},Z)};var K=function(af,ag){var ae=true;var ad,ac=0,ai,ah;if(ag==h["block.top.zz"]){ah=(L%2==0)?H.data("blId"):H.data("brId");ad=0;ai=1}else{ah=(L%2==0)?H.data("tlId"):H.data("trId");ad=L-1;ai=-1}aa=setInterval(function(){O[ad][ac].animate({opacity:1},G,Q.easing(),function(){if(a(this).attr("id")==ah){Q.setComplete(af)}});if(O[ad][ac].attr("id")==ah){clearInterval(aa)}(ae?ac++:ac--);if(ac==N||ac<0){ae=!ae;ac=(ae?0:N-1);ad+=ai}},Z)};var J=function(ae,af){var ah=new Array(ab);var ai;var ag=0;switch(af){case h["block.left"]:ai=H.data("brId");for(var ac=0;ac<N;ac++){for(var ad=0;ad<L;ad++){ah[ag++]=O[ad][ac]}}break;case h["block.right"]:ai=H.data("blId");for(var ac=N-1;ac>=0;ac--){for(var ad=0;ad<L;ad++){ah[ag++]=O[ad][ac]}}break;case h["block.top"]:ai=H.data("brId");for(var ad=0;ad<L;ad++){for(var ac=0;ac<N;ac++){ah[ag++]=O[ad][ac]}}break;default:ai=H.data("trId");for(var ad=L-1;ad>=0;ad--){for(var ac=0;ac<N;ac++){ah[ag++]=O[ad][ac]}}}ag=0;aa=setInterval(function(){ah[ag++].animate({width:S,height:S},G,Q.easing(),function(){if(a(this).attr("id")==ai){Q.setComplete(ae)}});if(ag==ab){clearInterval(aa)}},Z)};var I=function(ad){t(T);var ac=0;count=0;aa=setInterval(function(){T[ac].animate({top:T[ac].data("top"),width:S,height:S,opacity:1},G,Q.easing(),function(){if(++count==ab){Q.setComplete(ad)}});ac++;if(ac==ab){clearInterval(aa)}},Z)};var X=function(ac,ak){var aj=0,ai=0;var an=L-1;var ao=N-1;var ae=0;var ah=ao;var am=new Array();while(an>=0&&ao>=0){var al=0;while(true){am[am.length]=O[aj][ai];if((++al)>ah){break}switch(ae){case 0:ai++;break;case 1:aj++;break;case 2:ai--;break;case 3:aj--}}switch(ae){case 0:ae=1;ah=(--an);aj++;break;case 1:ae=2;ah=(--ao);ai--;break;case 2:ae=3;ah=(--an);aj--;break;case 3:ae=0;ah=(--ao);ai++}}if(am.length>0){if(ak){am.reverse()}var ag=am.length-1;var ad=am[ag].attr("id");var af=0;aa=setInterval(function(){am[af].animate({opacity:1},G,Q.easing(),function(){if(a(this).attr("id")==ad){Q.setComplete(ac)}});if(af==ag){clearInterval(aa)}af++},Z)}};Y()}function B(bL,bH){var az=d(bH.width,825);var bC=d(bH.height,300);var bw=D(bH.button_margin,4);var au=bH.transition.toLowerCase();var aD=d(bH.transition_speed,x);var ab=d(bH.delay,q);var aW=bH.auto_start;var Z=bH.cpanel_position.toLowerCase();var bj=bH.cpanel_align.toUpperCase();var ax=d(bH.thumb_width,24);var aw=d(bH.thumb_height,24);var am=d(bH.button_width,24);var ba=d(bH.button_height,24);var bu=bH.display_thumbimg;var J=bH.display_thumbs;var a6=bH.display_side_buttons;var aU=bH.display_dbuttons;var aS=bH.display_playbutton;var a3=bH.display_numbers;var ah=bH.display_timer;var aK=bH.cpanel_mouseover;var aJ=bH.text_mouseover;var ag=bH.mouseover_pause;var aq=bH.tooltip_type.toLowerCase();var aF=bH.text_effect.toLowerCase();var bI=bH.text_sync;var aE=bH.play_once;var ac=bH.auto_center;var bl=bH.easing;var ao;var aB;var N;var L;var U;var aY;var bd;var br;var av;var bm;var a2;var al;var ap;var an;var a7;var bo;var aC;var a0;var H;var Y;var I;var be;var aQ;var ai;var P;var V;var aR;var bh;var W;var Q;var aM;var ae;this.$el=bL;this.init=function(){an=bL.find(".wt-rotator");a7=an.find("div.screen");I=an.find("div.c-panel");P=I.find("div.buttons");be=I.find("div.thumbnails");aQ=be.find(">ul");ai=aQ.find(">li");br=null;aB=0;N=-1;ao=ai.size();aM=new Array(ao);av=bm=a2=false;bx(h[au]);ap=k[bj]>=k.LT?true:false;if(a6){aU=false}if(bu){a3=false}an.css({width:az,height:bC});aT();a8();bg();bG();aI();if(aJ){an.hover(ak,at)}else{an.bind(f,bi)}var bM=a7.css("background-color");if(a2){U=new c(this,az,bC,d(bH.vert_size,b),bM,aD,d(bH.vstripe_delay,75))}if(bm){aY=new u(this,az,bC,d(bH.horz_size,b),bM,aD,d(bH.hstripe_delay,75))}if(av){bd=new m(this,az,bC,d(bH.block_size,g),bM,aD,d(bH.block_delay,25))}bp(0);aP(aB)};this.setComplete=function(bM){G(bM)};this.addToScreen=function(bM){aC.append(bM)};this.autoCenter=function(){return ac};this.easing=function(){return bl};var aT=function(){var bM="<div class='desc'><div class='inner-bg'></div><div class='inner-text'></div></div>								<div class='preloader'></div>								<div id='timer'></div>";a7.append(bM);a0=a7.find("div.desc");H=a7.find("div.preloader");a7.css({width:az,height:bC});ae=a0.find("div.inner-text");bo=a("<div id='strip'></div>");if(au=="h.slide"){a7.append(bo);bo.css({width:2*az,height:bC});ai.removeAttr("effect")}else{if(au=="v.slide"){a7.append(bo);bo.css({width:az,height:2*bC});ai.removeAttr("effect")}else{a7.append("<a href='#'></a>");aC=a7.find(">a:first")}}};var bG=function(){if(J||aU||aS){if(Z==l){switch(k[bj]){case k.BL:a1("left");R("bottom");break;case k.BC:a1("center");R("bottom");break;case k.BR:a1("right");R("bottom");break;case k.TL:a1("left");R("top");break;case k.TC:a1("center");R("top");break;case k.TR:a1("right");R("top");break;case k.LT:bk("top");bn("left");break;case k.LC:bk("center");bn("left");break;case k.LB:bk("bottom");bn("left");break;case k.RT:bk("top");bn("right");break;case k.RC:bk("center");bn("right");break;case k.RB:bk("bottom");bn("right");break}if(aK){an.hover(bJ,aL)}}else{switch(k[bj]){case k.BL:a1("left");af(false);break;case k.BC:a1("center");af(false);break;case k.BR:a1("right");af(false);break;case k.TL:a1("left");af(true);break;case k.TC:a1("center");af(true);break;case k.TR:a1("right");af(true);break;case k.LT:bk("top");bB(true);break;case k.LC:bk("center");bB(true);break;case k.LB:bk("bottom");bB(true);break;case k.RT:bk("top");bB(false);break;case k.RC:bk("center");bB(false);break;case k.RB:bk("bottom");bB(false);break}}I.css("visibility","visible").click(ar)}};var a1=function(bN){I.css({"margin-top":bw,"margin-bottom":bw,height:Math.max(be.outerHeight(true),P.outerHeight(true))});var bM;if(bN=="center"){bM=Math.round((az-I.width()-bw)/2)}else{if(bN=="left"){bM=bw}else{bM=az-I.width()}}I.css("left",bM)};var bk=function(bN){I.css({"margin-left":bw,"margin-right":bw,width:Math.max(be.outerWidth(true),P.outerWidth(true))});var bM;if(bN=="center"){bM=Math.round((bC-I.height()-bw)/2)}else{if(bN=="top"){bM=bw}else{bM=bC-I.height()}}I.css("top",bM)};var R=function(bO){var bN,bM;if(bO=="top"){bM=0;bN=-I.outerHeight(true)}else{bM=bC-I.outerHeight(true);bN=bC}I.data({offset:bN,pos:bM}).css({top:(aK?bN:bM)})};var bn=function(bO){var bN,bM;if(bO=="left"){bM=0;bN=-I.outerWidth(true)}else{bM=az-I.outerWidth(true);bN=az}I.data({offset:bN,pos:bM}).css({left:(aK?bN:bM)})};var af=function(bM){I.wrap("<div class='outer-hp'></div>");Y=an.find(".outer-hp");Y.height(I.outerHeight(true));if(bM){Y.css({"border-top":"none",top:0});a7.css("top",Y.outerHeight())}else{Y.css({"border-bottom":"none",top:bC});a7.css("top",0)}an.css({height:bC+Y.outerHeight()})};var bB=function(bM){I.wrap("<div class='outer-vp'></div>");Y=an.find(".outer-vp");Y.width(I.outerWidth(true));if(bM){Y.css({"border-left":"none",left:0});a7.css("left",Y.outerWidth())}else{Y.css({"border-right":"none",left:az});a7.css("left",0)}an.css({width:az+Y.outerWidth()})};var a8=function(){V=P.find("div.play-btn");var bO=P.find("div.prev-btn");var bP=P.find("div.next-btn");if(aU){bO.click(aA);bP.click(O)}else{bO.hide();bP.hide()}if(aS){if(aW){V.addClass("pause")}V.click(aj)}else{V.hide()}if(ag){an.hover(aZ,ad)}if(a6){a7.append("<div class='s-prev'></div><div class='s-next'></div>");aR=a7.find(".s-prev");bh=a7.find(".s-next");aR.click(aA).hover(K,bc).mousedown(ar);bh.click(O).hover(K,bc).mousedown(ar);if(aK){aR.css("left",-aR.width());bh.css("margin-left",0);an.hover(bb,M)}}var bN=P.find(">div").css({width:am,height:ba}).mouseover(K).mouseout(bc).mousedown(ar);if(ap){bO.addClass("up");bP.addClass("down");bN.css("margin-bottom",bw);P.width(bN.outerWidth());if(z){P.height(P.find(">div:visible").size()*bN.outerHeight(true))}if(J&&ax>am){var bM=ax-am;switch(k[bj]){case k.RT:case k.RC:case k.RB:P.css("margin-left",bM);break;default:P.css("margin-right",bM)}}}else{bN.css("margin-right",bw);P.height(bN.outerHeight());if(z){P.width(P.find(">div:visible").size()*bN.outerWidth(true))}if(J&&aw>ba){var bM=aw-ba;switch(k[bj]){case k.TL:case k.TC:case k.TR:P.css("margin-bottom",bM);break;default:P.css("margin-top",bM)}}}};var aI=function(){W=a7.find("#timer").data("pct",1);if(ah){var bM=bH.timer_align.toLowerCase();W.css("visibility","visible");W.css("top",bM=="top"?0:bC-W.height())}else{W.hide()}};var bg=function(){var bR=ae.outerHeight()-ae.height();ai.each(function(bX){var bW=a(this).find(">a:first");var bV=h[a(this).attr("effect")];if(bV==undefined||bV==h["h.slide"]||bV==h["v.slide"]){bV=h[au]}else{bx(bV)}a(this).data({imgurl:bW.attr("href"),caption:bW.attr("title"),effect:bV,delay:d(a(this).attr("delay"),ab)});by(a(this),bR);aM[bX]=a(this);if(a3){a(this).append(bX+1)}});ae.css({width:"auto",height:"auto"}).html("");a0.css("visibility","visible");if(bH.shuffle){T(J&&bu)}if(J){if(bu){ai.addClass("image");ai.find(">a").removeAttr("title");var bP=ai.find(">a>img");bP.removeAttr("alt");bP.each(function(){if(a(this)[0].complete||a(this)[0].readyState=="complete"){a(this).css({top:(aw-a(this).height())/2,left:(ax-a(this).width())/2})}else{a(this).load(function(){a(this).css({top:(aw-a(this).height())/2,left:(ax-a(this).width())/2})})}})}ai.css({width:ax,height:aw,"line-height":aw+"px"}).mouseover(bA).mouseout(aa).mousedown(ar);be.click(aG);if(ap){ai.css("margin-bottom",bw);aQ.width(ai.outerWidth());be.width(aQ.width());if(z){be.height(ao*ai.outerHeight(true))}if((aU||aS)&&(am>ax)){var bN=am-ax;switch(k[bj]){case k.RT:case k.RC:case k.RB:be.css("margin-left",bN);break;default:be.css("margin-right",bN)}}var bT=bC-(P.height()+bw);if(be.height()>bT){var bM=ai.outerHeight(true);aQ.addClass("inside").height(ao*bM);be.css({height:Math.floor(bT/bM)*bM-bw,"margin-bottom":bw});var bO=be.height()-(aQ.height()-bw);be.append("<div class='back-scroll'></div><div class='fwd-scroll'></div>");var bU=be.find(".back-scroll");var bQ=be.find(".fwd-scroll");bU.css({height:bM,width:"100%"});bQ.css({height:bM,width:"100%",top:"100%","margin-top":-bM});bU.hover(function(){bQ.show();var bV=-aQ.stop(true).position().top*y;aQ.stop(true).animate({top:0},bV,"linear",function(){bU.hide()})},a4);bQ.hover(function(){bU.show();var bV=(-bO+aQ.stop(true).position().top)*y;aQ.stop(true).animate({top:bO},bV,"linear",function(){bQ.hide()})},a4);an.bind(v,function(){if(!aQ.is(":animated")){var bV=aQ.position().top+(aB*bM);if(bV<0||bV>be.height()-ai.outerHeight()){bV=-aB*bM;if(bV<bO){bV=bO}aQ.stop(true).animate({top:bV},w,function(){a(this).position().top==0?bU.hide():bU.show();a(this).position().top==bO?bQ.hide():bQ.show()})}}})}}else{ai.css("margin-right",bw);aQ.height(ai.outerHeight());be.height(aQ.height());if(z){be.width(ao*ai.outerWidth(true))}if((aU||aS)&&ba>aw){var bN=ba-aw;switch(k[bj]){case k.TL:case k.TC:case k.TR:be.css("margin-bottom",bN);break;default:be.css("margin-top",bN)}}var bS=az-(P.width()+bw);if(be.width()>bS){var bM=ai.outerWidth(true);aQ.addClass("inside").width(ao*bM);be.css({width:Math.floor(bS/bM)*bM-bw,"margin-right":bw});var bO=be.width()-(aQ.width()-bw);be.append("<div class='back-scroll'></div><div class='fwd-scroll'></div>");var bU=be.find(".back-scroll");var bQ=be.find(".fwd-scroll");bU.css({width:bM,height:"100%"});bQ.css({width:bM,height:"100%",left:"100%","margin-left":-bM});bU.hover(function(){bQ.show();var bV=-aQ.stop(true).position().left*y;aQ.stop(true).animate({left:0},bV,"linear",function(){bU.hide()})},a4);bQ.hover(function(){bU.show();var bV=(-bO+aQ.stop(true).position().left)*y;aQ.stop(true).animate({left:bO},bV,"linear",function(){bQ.hide()})},a4);an.bind(v,function(){if(!aQ.is(":animated")){var bV=aQ.position().left+(aB*bM);if(bV<0||bV>be.width()-ai.outerWidth()){bV=-aB*bM;if(bV<bO){bV=bO}aQ.stop(true).animate({left:bV},w,function(){a(this).position().left==0?bU.hide():bU.show();a(this).position().left==bO?bQ.hide():bQ.show()})}}})}}bz()}else{ai.hide()}};var by=function(bM,bO){var bN=bM.find(">div:hidden");var bQ=d(parseInt(bN.css("width"))-bO,300);var bP=d(parseInt(bN.css("height"))-bO,0);ae.width(bQ).html(bN.html());if(bP<ae.height()){bP=ae.height()}bM.data("textbox",{x:bN.css("left"),y:bN.css("top"),w:bQ+bO,h:bP+bO+1,color:bN.css("color"),bgcolor:bN.css("background-color")})};var bz=function(){if(aq=="text"){a("body").append("<div id='rotator-tooltip'><div class='tt-txt'></div></div>");Q=a("body").find("#rotator-tooltip");ai.mouseover(bE).mouseout(aX).mousemove(X);switch(k[bj]){case k.TL:case k.TC:case k.TR:Q.data("bottom",true).addClass("txt-down");break;default:Q.data("bottom",false).addClass("txt-up")}}else{if(aq=="image"){var bP="<div id='rotator-tooltip'>";for(var bO=0;bO<ao;bO++){var bN=aM[bO].find(">a:first>img");if(bN.size()==1){bP+="<img src='"+bN.attr("src")+"' />"}else{bP+="<img/>"}}bP+="</div>";a("body").append(bP);Q=a("body").find("#rotator-tooltip");switch(k[bj]){case k.TL:case k.TC:case k.TR:ai.mouseover(bs);Q.data("bottom",true).addClass("img-down");break;case k.LT:case k.LC:case k.LB:ai.mouseover(aH);Q.data("right",true).addClass("img-right");break;case k.RT:case k.RC:case k.RB:ai.mouseover(aH);Q.data("right",false).addClass("img-left");break;default:ai.mouseover(bs);Q.data("bottom",false).addClass("img-up")}ai.mouseout(aX)}}if(jQuery.browser.msie&&parseInt(jQuery.browser.version)<=6){try{Q.css("background-image","none").children().css("margin",0)}catch(bM){}}};var bs=function(bN){var bM=Q.find(">img").eq(a(this).index());if(bM.attr("src")){Q.find(">img").hide();bM.show();if(bM[0].complete||bM[0].readyState=="complete"){var bP=Q.data("bottom")?a(this).outerHeight():-Q.outerHeight();var bO=a(this).offset();Q.css({top:bO.top+bP,left:bO.left+((a(this).outerWidth()-Q.outerWidth())/2)}).stop(true,true).delay(n).fadeIn(300)}}};var aH=function(bO){var bM=Q.find(">img").eq(a(this).index());if(bM.attr("src")){Q.find(">img").hide();bM.show();if(bM[0].complete||bM[0].readyState=="complete"){var bN=Q.data("right")?a(this).outerWidth():-Q.outerWidth();var bP=a(this).offset();Q.css({top:bP.top+((a(this).outerHeight()-Q.outerHeight())/2),left:bP.left+bN}).stop(true,true).delay(n).fadeIn(300)}}};var bE=function(bN){var bM=aM[a(this).index()].data("caption");if(bM!=""){Q.find(">div.tt-txt").html(bM);var bO=Q.data("bottom")?0:-Q.outerHeight(true);Q.css({top:bN.pageY+bO,left:bN.pageX}).stop(true,true).delay(n).fadeIn(300)}};var X=function(bM){var bN=Q.data("bottom")?0:-Q.outerHeight(true);Q.css({top:bM.pageY+bN,left:bM.pageX})};var aX=function(){Q.stop(true,true).fadeOut(0)};var bJ=function(){if(!ap){I.stop(true).animate({top:I.data("pos"),opacity:1},w)}else{I.stop(true).animate({left:I.data("pos"),opacity:1},w)}};var aL=function(){if(!ap){I.stop(true).animate({top:I.data("offset"),opacity:0},w)}else{I.stop(true).animate({left:I.data("offset"),opacity:0},w)}};var bb=function(){aR.stop(true).animate({left:0},w);bh.stop(true).animate({"margin-left":-bh.width()},w)};var M=function(){aR.stop(true).animate({left:-aR.width()},w);bh.stop(true).animate({"margin-left":0},w)};var aG=function(bO){var bM=a(bO.target);if(bM[0].nodeName!="LI"){bM=bM.parents("li").eq(0)}var bN=bM.index();if(bN>-1&&bN!=aB){al=bN<aB?E:F;bt();N=aB;aB=bN;aP(aB);aX()}return false};var bA=function(){a(this).addClass("thumb-over")};var aa=function(){a(this).removeClass("thumb-over")};var aA=function(){al=E;bt();N=aB;aB=(aB>0)?(aB-1):(ao-1);aP(aB);return false};var O=function(){al=F;bt();N=aB;aB=(aB<ao-1)?(aB+1):0;aP(aB);return false};var aj=function(){aW=!aW;a(this).toggleClass("pause",aW);aW?a5():S();return false};var ad=function(){aW=true;V.toggleClass("pause",aW);a5()};var aZ=function(){aW=false;V.toggleClass("pause",aW);S()};var aN=function(bM){if(bM==ao-1){aW=false;V.toggleClass("pause",aW)}};var K=function(){a(this).addClass("button-over")};var bc=function(){a(this).removeClass("button-over")};var bi=function(bN){if(!a0.data("visible")){a0.data("visible",true);var bO=aM[aB].find(">div:first").html();if(bO&&bO.length>0){var bM=aM[aB].data("textbox");ae.css("color",bM.color);a0.find(".inner-bg").css({"background-color":bM.bgcolor,height:bM.h-1});switch(A[aF]){case A.fade:a9(bO,bM);break;case A.down:bv(bO,bM,{width:bM.w,height:0},{height:bM.h});break;case A.right:bv(bO,bM,{width:0,height:bM.h},{width:bM.w});break;case A.left:bv(bO,bM,{"margin-left":bM.w,width:0,height:bM.h},{width:bM.w,"margin-left":0});break;case A.up:bv(bO,bM,{"margin-top":bM.h,height:0,width:bM.w},{height:bM.h,"margin-top":0});break;default:bK(bO,bM)}}}};var bD=function(){a0.data("visible",false).stop(true,true);switch(A[aF]){case A.fade:case A.down:case A.right:case A.left:case A.up:if(jQuery.browser.msie){ae.css("opacity",0)}a0.fadeOut(w,function(){a(this).css("display","none")});break;default:a0.css("display","none")}};var bv=function(bP,bO,bN,bM){ae.css("opacity",1).html("");a0.stop(true,true).css({display:"block",top:bO.y,left:bO.x,"margin-top":0,"margin-left":0}).css(bN).animate(bM,w,function(){ae.html(bP)})};var a9=function(bN,bM){ae.css("opacity",1).html(bN);a0.css({top:bM.y,left:bM.x,width:bM.w,height:bM.h}).stop(true,true).fadeIn(w,function(){if(jQuery.browser.msie){ae[0].style.removeAttribute("filter")}})};var bK=function(bN,bM){a0.stop(true).css({display:"block",top:bM.y,left:bM.x,width:bM.w,height:bM.h});ae.html(bN)};var ak=function(){an.unbind(f).bind(f,bi).trigger(f)};var at=function(){an.unbind(f);bD()};var aP=function(bO){an.trigger(v);if(aE){aN(bO)}ai.filter(".curr-thumb").removeClass("curr-thumb");ai.eq(bO).addClass("curr-thumb");L=aM[bO].data("delay");bD();if(!bI){an.trigger(f)}if(aC){var bP=aM[bO].find(">a:nth-child(2)");var bM=bP.attr("href");if(bM){aC.unbind("click",ar).css("cursor","pointer").attr({href:bM,target:bP.attr("target")})}else{aC.click(ar).css("cursor","default")}}if(aM[bO].data("img")){H.hide();aV(aM[bO].data("img"))}else{var bN=a("<img class='main-img'/>");bN.load(function(){H.hide();bF(aM[bO],a(this));aV(a(this))}).error(function(){alert("Error loading image")});H.show();bN.attr("src",aM[bO].data("imgurl"))}};var aV=function(bM){if(a2){U.clear();ay()}if(bm){aY.clear();ay()}if(av){bd.clear();ay()}var bN=aM[aB].data("effect");if(bN==h.none||bN==undefined){G(bM);return}else{if(bN==h.fade){bq(bM);return}else{if(bN==h["h.slide"]){bf(bM,"left",az);return}else{if(bN==h["v.slide"]){bf(bM,"top",bC);return}}}}if(bN==h.random){bN=Math.floor(Math.random()*(e-5))}if(bN<=h["spiral.out"]){bd.displayContent(bM,bN)}else{if(bN<=h["vert.random.fade"]){U.displayContent(bM,bN)}else{aY.displayContent(bM,bN)}}};var ay=function(){if(N>=0){var bN=aC.find("img#curr-img").attr("src");var bO=aM[N].data("imgurl");if(bN!=bO){aC.find("img.main-img").attr("id","").hide();var bM=aC.find("img.main-img").filter(function(){return a(this).attr("src")==bO});bM.eq(0).show()}}};var G=function(bM){if(bI){an.trigger(f)}aC.find("img.main-img").attr("id","").hide();bM.attr("id","curr-img").show();a5()};var bq=function(bM){aC.find("img#curr-img").stop(true,true);aC.find("img.main-img").attr("id","").css("z-index",0);bM.attr("id","curr-img").stop(true,true).css({opacity:0,"z-index":1}).show().animate({opacity:1},aD,bl,function(){aC.find("img.main-img:not('#curr-img')").hide();if(bI){an.trigger(f)}a5()})};var bf=function(bQ,bS,bP){bo.stop(true,true);var bM=a("#curr-img",bo);if(bM.size()>0){bo.find(".main-img").attr("id","").parents(".content-box").css({top:0,left:0});bQ.attr("id","curr-img").parents(".content-box").show();var bO,bN;if(al==E){bo.css(bS,-bP);bO=bM;bN=0}else{bO=bQ;bN=-bP}bO.parents(".content-box").css(bS,bP);var bR=(bS=="top")?{top:bN}:{left:bN};bo.stop(true,true).animate(bR,aD,bl,function(){bo.find(".main-img:not('#curr-img')").parents(".content-box").hide();bo.find("#curr-img").parents(".content-box").show();bO.parents(".content-box").css({top:0,left:0});bo.css({top:0,left:0});if(bI){an.trigger(f)}a5()})}else{bo.css({top:0,left:0});bo.find(".main-img").parents(".content-box").hide().css({top:0,left:0});bQ.attr("id","curr-img").parents(".content-box").show();if(bI){an.trigger(f)}a5()}};var bp=function(bN){try{var bM=aM[bN];var bP=a("<img class='main-img'/>");bP.load(function(){if(!bM.data("img")){bF(bM,a(this))}bN++;if(bN<ao){bp(bN)}}).error(function(){bN++;if(bN<ao){bp(bN)}});bP.attr("src",bM.data("imgurl"))}catch(bO){}};var bF=function(bO,bP){if(au=="h.slide"||au=="v.slide"){bo.append(bP);aO(bP);var bM=a("<div class='content-box'></div>").css({width:az,height:bC});bP.wrap(bM);bP.css("display","block");var bN=bO.find(">a:nth-child(2)");if(bN){bP.wrap(bN)}}else{aC.append(bP);aO(bP)}bO.data("img",bP)};var aO=function(bP){if(ac&&bP.width()>0&&bP.height()>0){var bS=(bC-bP.height())/2;var bO=(az-bP.width())/2;var bR=0,bQ=0,bN=0,bM=0;if(bS>0){bN=bS}else{if(bS<0){bR=bS}}if(bO>0){bM=bO}else{if(bO<0){bQ=bO}}bP.css({top:bR,left:bQ,"padding-top":bN,"padding-bottom":bN,"padding-left":bM,"padding-right":bM})}};var a5=function(){if(aW&&br==null){var bM=Math.round(W.data("pct")*L);W.animate({width:(az+1)},bM,"linear");br=setTimeout(O,bM)}};var bt=function(){clearTimeout(br);br=null;W.stop(true).width(0).data("pct",1)};var S=function(){clearTimeout(br);br=null;var bM=1-(W.width()/(az+1));W.stop(true).data("pct",bM)};var a4=function(){aQ.stop(true)};var T=function(){for(var bO=0;bO<aM.length;bO++){var bM=Math.floor(Math.random()*aM.length);var bN=aM[bO];aM[bO]=aM[bM];aM[bM]=bN}};var T=function(bP){if(bP){for(var bO=0;bO<ao;bO++){aM[bO]=ai.eq(bO).clone(true)}}for(var bO=0;bO<ao;bO++){var bM=Math.floor(Math.random()*ao);var bN=aM[bO];aM[bO]=aM[bM];aM[bM]=bN}if(bP){for(var bO=0;bO<ao;bO++){ai.eq(bO).replaceWith(aM[bO])}ai=aQ.find(">li")}};var bx=function(bM){if(bM==h.random){av=bm=a2=true}else{if(bM<=h["spiral.out"]){av=true}else{if(bM<=h["vert.random.fade"]){a2=true}else{if(bM<=h["horz.random.fade"]){bm=true}}}}};var ar=function(){return false}}var d=function(G,H){if(!isNaN(G)&&G>0){return G}return H};var D=function(G,H){if(!isNaN(G)&&G>=0){return G}return H};var t=function(G){var K=G.length;for(var J=0;J<K;J++){var H=Math.floor(Math.random()*K);var I=G[J];G[J]=G[H];G[H]=I}};var p={width:825,height:300,thumb_width:24,thumb_height:24,button_width:24,button_height:24,button_margin:4,auto_start:true,delay:q,transition:"fade",transition_speed:x,cpanel_position:l,cpanel_align:"BR",timer_align:"top",display_thumbs:true,display_side_buttons:false,display_dbuttons:true,display_playbutton:true,display_imgtooltip:true,display_numbers:true,display_thumbimg:false,display_timer:true,mouseover_pause:false,cpanel_mouseover:false,text_mouseover:false,text_effect:"fade",text_sync:true,tooltip_type:"text",shuffle:false,play_once:false,auto_center:false,block_size:g,vert_size:b,horz_size:b,block_delay:25,vstripe_delay:75,hstripe_delay:75,easing:""};var s=a.extend({},p,C);return this.each(function(){var G=new B(a(this),s);G.init()})}})(jQuery);