(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports={buttonContainer:"_1UCoNeP259IwXQhoNvN6o5",pinSelector:"GxdCRWx0avV9AlskCYcjI",pinButton:"_3mB-aUWJ1gUeg7NcRVwPb0",pinBox:"_2sI-g3Lw-QhgKj_gJQzJyn",title:"_3v6EdzolRXKdkLYeuCZwg"}},26:function(e,t,n){e.exports={app:"_2XyUai4Nbw7tWe8ybs2pDF",constructionContainer:"_3GqH5aLha_kCKzIRjcZiVA",gameContainer:"_31H6O7fy05qgotoqEJLrrC"}},27:function(e,t,n){e.exports={container:"D7m4GwtlvaAd04POFe6JG",content:"N7nEOT7wo61GylvCV2kuR",heading:"_2HAKb6gQzcfLw0W4CDzDbl",btnContainer:"_3qhiY2VXNbcFb8uYQPS8Kl"}},28:function(e,t,n){e.exports={gameControls:"_2i4o6LRmyibYrJUs2UTtrD",gameOver:"FhbiV9m4UQzfoQjZItI_r",frameCount:"_3xlZIsJVneTL7yLtsGIJ4P"}},32:function(e,t,n){e.exports={container:"_2qLE2mJclH2Hkc4jr2uo-T",gameBoardContainer:"_1hPKqsu_TF7aigP02O2s5a"}},45:function(e,t,n){e.exports=n(75)},54:function(e,t,n){},6:function(e,t,n){e.exports={frameBox:"_1rPS0KyrlHvxwTpTq4pvOS",shadow:"_2QFKY5jTpdiE5i24K1HW1p",tenth:"f0Yycf2RU-OgjmUMaCggK",frameNumber:"_2pOZYc33o3ivje6Fzr40Pu",unSelectedBk:"cZ4yeaPVmZ60Y8E3ik0I9",markArea:"_1lukMqVcXRRiny4gOcNfb2",scoreBox:"_2F2QibmVPix9t90ocFnR4t",markTenth:"_22m0SYzjw8okPNWpPsbs0a",mark:"_1fcol9SkiKe_fr46bVRjzB",totalScore:"_1K826AncNPg9yy2lCJFKh4"}},75:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"START_MEMORY_GAME",function(){return _}),n.d(r,"SHOW_ALL",function(){return k}),n.d(r,"CLICK_CARD",function(){return C}),n.d(r,"UNFLIP_ALL",function(){return G}),n.d(r,"MEMORY_TOGGLE_RULES",function(){return L}),n.d(r,"startGame",function(){return N}),n.d(r,"unflipAll",function(){return A}),n.d(r,"showAll",function(){return j}),n.d(r,"memoryToggleRules",function(){return R}),n.d(r,"clickCard",function(){return B});var a={};n.r(a),n.d(a,"NEW_BOWLING_GAME",function(){return T}),n.d(a,"ROLL_BOWLING_BALL",function(){return S}),n.d(a,"BOWLING_TOGGLE_RULES",function(){return I}),n.d(a,"newBowlingGame",function(){return W}),n.d(a,"bowlingToggleRules",function(){return F}),n.d(a,"rollBowlingBall",function(){return P});var o={};n.r(o),n.d(o,"START_MEMORY_GAME",function(){return _}),n.d(o,"SHOW_ALL",function(){return k}),n.d(o,"CLICK_CARD",function(){return C}),n.d(o,"UNFLIP_ALL",function(){return G}),n.d(o,"MEMORY_TOGGLE_RULES",function(){return L}),n.d(o,"startGame",function(){return N}),n.d(o,"unflipAll",function(){return A}),n.d(o,"showAll",function(){return j}),n.d(o,"memoryToggleRules",function(){return R}),n.d(o,"clickCard",function(){return B}),n.d(o,"SELECT_GAME",function(){return M}),n.d(o,"selectGame",function(){return x}),n.d(o,"NEW_BOWLING_GAME",function(){return T}),n.d(o,"ROLL_BOWLING_BALL",function(){return S}),n.d(o,"BOWLING_TOGGLE_RULES",function(){return I}),n.d(o,"newBowlingGame",function(){return W}),n.d(o,"bowlingToggleRules",function(){return F}),n.d(o,"rollBowlingBall",function(){return P});var c=n(0),l=n.n(c),i=n(35),s=n.n(i),u=n(14),m=(n(54),n(10)),f=n(11),p=n(15),d=n(12),h=n(16),g=n(8),E=n(81),v=["time","grid","wrench","cog","flag","star","airplane","key","globe","dollar","flash","heart"];n(31),n(38);var w=function(e){for(var t=[],n=0,r=0;n<12;n++)t.push({index:r++,name:v[n]}),t.push({index:r++,name:v[n]});for(var a=[],o=0;o<24;o++)a[e[o]-1]=t[o];return a},b=function(){return function(e){for(var t=[];t.length<e;){var n=Math.floor(Math.random()*e)+1;t.indexOf(n)>-1||(t[t.length]=n)}return t}(24)},O=function(e,t){if(t.isFlipped||t.isMatched||y(e))return null;var n=e.find(function(e){return e.isFlipped});return void 0===n?e.map(function(e){return e.index===t.index?Object.assign({},e,{isFlipped:!0,isMatched:!1}):e}):n.name===t.name?e.map(function(e){return e.name===t.name?Object.assign({},e,{isFlipped:!1,isMatched:!0}):e}):e.map(function(e){return e.index===t.index?Object.assign({},e,{isFlipped:!0,isMatched:!1}):e})},y=function(e){return 2===e.filter(function(e){return e.isFlipped&&!e.isMatched}).length},_="START_MEMORY_GAME",k="SHOW_ALL",C="CLICK_CARD",G="UNFLIP_ALL",L="MEMORY_TOGGLE_RULES",N=function(){return{type:_,payload:b()}},A=function(){return{type:G}},j=function(e){return{type:k,show:e}},R=function(){return{type:L}},B=function(e){return function(t,n){n().memoryGame.pause||e.isMatched||e.isFlipped||(t({type:C,payload:e}),n().memoryGame.pause&&setTimeout(function(){t(A())},700))}},M="SELECT_GAME",x=function(e){return{type:M,payload:e}},T="NEW_BOWLING_GAME",S="ROLL_BOWLING_BALL",I="BOWLING_TOGGLE_RULES",W=function(){return{type:T}},F=function(){return{type:I}},P=function(e){return{type:S,payload:e}},U=n(66),K=n(80),V=n(72),H=n(13),Y=n(73),z=n(71),X=n(26),q=n.n(X),J=["Memory","Bowling"],D=n(24),Q=n(79),Z=n(76),$=n(9),ee=n.n($),te=n(78),ne=n(27),re=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:ne.container},l.a.createElement("div",{className:ne.btnContainer},l.a.createElement(E.a,{onClick:this.props.onClick},this.props.show?"Hide":"Show"," Rules")),l.a.createElement(te.a,{isOpen:this.props.show},l.a.createElement("div",{className:ne.content},this.props.content)))}}]),t}(l.a.Component),ae=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=!this.props.cards.find(function(e){return!e.isMatched});return l.a.createElement("div",{className:ee.a.container},l.a.createElement("div",{className:ee.a.rulesContainer},l.a.createElement(re,{content:l.a.createElement("div",{style:{wrap:"breakWord"}},l.a.createElement("ul",null,l.a.createElement("li",null,"At the start of the game, the player is presented with 24 facedown cards."),l.a.createElement("li",null,"On the reverse side of every card is an icon. There are twelve unique icons."),l.a.createElement("li",null,"Play begins with the player clicking a card to reveal the icon."),l.a.createElement("li",null,"The player then clicks another card to reveal a second icon."),l.a.createElement("li",null,"If the icons match, the matched cards are grayed."),l.a.createElement("li",null,"If the icons do not match, the cards are turned facedown."),l.a.createElement("li",null,"The game continues until there are no cards left to match."),l.a.createElement("li",null,"Alternatively, play can begin with the cards faceup (using the 'Show All' switch) then turning them facedown after you have memorized the icon positions. "),l.a.createElement("li",null,"The object of the game is to match all the icons using as few clicks as possible."))),show:this.props.showRules,onClick:function(){return e.props.appActions.memoryToggleRules()}})),t&&l.a.createElement("div",{className:ee.a.gameOver},"GAME OVER!"),l.a.createElement("div",{className:ee.a.memoryGameControls},l.a.createElement(E.a,{text:"Restart",onClick:function(){return e.props.appActions.startGame()}}),"Click Count: ".concat(this.props.clickCount),l.a.createElement(Q.a,{checked:this.props.showAll,label:"Show All",style:{marginTop:"6px"},onChange:function(){return e.props.appActions.showAll()}})),l.a.createElement("div",{className:ee.a.gameBoardContainer},"\xa0         ",l.a.createElement("div",{className:ee.a.gameBoard},(this.props.cards||[]).map(function(t){return l.a.createElement(oe,Object.assign({key:t.index,showAll:e.props.showAll,onClick:function(){return e.props.appActions.clickCard(t)}},t))}),"\xa0\xa0\xa0\xa0\xa0\xa0    ")),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),t}(l.a.Component),oe=function(e){var t=e.isMatched||e.isFlipped||e.showAll,n="".concat(ee.a.cardIcon," ").concat(e.isFlipped?ee.a.flipped:e.isMatched?ee.a.matched:"");return l.a.createElement("div",{className:ee.a.memoryCard,onClick:e.onClick},t&&l.a.createElement("div",{className:n},l.a.createElement(Z.a,{icon:e.name,iconSize:"calc(8vmin)"})))};var ce=Object(u.b)(function(e){return Object(D.a)({},e.memoryGame)},function(e){return{appActions:Object(g.b)(r,e)}})(ae),le=n(6),ie=0;var se=function(){function e(t){Object(m.a)(this,e),this.frame=t,this.rolls=[],this.mark=ie}return Object(f.a)(e,[{key:"addRoll",value:function(e){this.complete||(this.rolls.push(e),this.setMark(),this.complete=9===this.frame&&this.mark!==ie?3===this.rolls.length:2===this.mark||2===this.rolls.length)}},{key:"setMark",value:function(){this.mark=10===this.rolls[0]?2:this.rolls[0]+this.rolls[1]===10?1:ie}}]),e}(),ue=function(e,t){var n=e.slice(),r=me(n);r&&r.addRoll(t);for(var a=0,o=0;o<10;o++){var c=pe(n[o],n[o+1],n[o+2]);n[o].score=c,a+=c,n[o].totalScore=a}return n},me=function(e){return(e||[]).find(function(e){return!e.complete})},fe=function(){return Array.from({length:10},function(e,t){return new se(t++)})},pe=function(e,t,n){if(e.complete)switch(e.mark){case 2:return 10+function(e,t,n){return 9===e.frame?e.rolls[1]+e.rolls[2]:8===e.frame?2===t.mark?10+t.rolls[1]:t.rolls[0]+t.rolls[1]:2===t.mark?n?10+n.rolls[0]:0:t.rolls[0]+t.rolls[1]}(e,t,n);case 1:return 10+function(e,t){return 9===e.frame?e.rolls[2]:t&&t.rolls.length>0?t.rolls[0]:void 0}(e,t);default:return e.rolls[0]+e.rolls[1]}return NaN},de=function(e){var t,n="".concat(le.frameBox," ").concat(9===e.frame?le.tenth:"","  ").concat(e.isCurrent?le.shadow:"");return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"".concat(le.frameNumber," ").concat(e.isCurrent?"":le.unSelectedBk)},e.frame+1),l.a.createElement("div",{className:le.markArea},l.a.createElement("div",{className:"".concat(le.scoreBox," ").concat(9===e.frame?le.markTenth:"")},9===(t=e).frame&&t.rolls.length>0?2===t.mark?"X":0===t.rolls[0]?"-":t.rolls[0]:""),l.a.createElement("div",{className:"".concat(le.scoreBox," ").concat(le.mark)},function(e){return 0===e.rolls.length?"":9===e.frame?1===e.mark?"/":10===e.rolls[1]?"X":0===e.rolls[1]?"-":e.rolls[1]:2===e.mark?"X":0===e.rolls[0]?"-":e.rolls[0]}(e)),l.a.createElement("div",{className:"".concat(le.scoreBox," ").concat(le.mark)},function(e){if(0===e.rolls.length)return"";if(9===e.frame)switch(e.mark){default:return"";case 2:return 10===e.rolls[2]?"X":e.rolls[1]+e.rolls[2]===10?"/":0===e.rolls[2]?"-":e.rolls[2];case 1:return 10===e.rolls[2]?"X":e.rolls[2]}else switch(e.mark){default:return 0===e.rolls[1]?"-":e.rolls[1];case 2:return"";case 1:return"/"}}(e))),l.a.createElement("div",{className:le.totalScore},!e.complete||isNaN(e.totalScore)?"":e.totalScore))},he=n(22),ge=function(e){var t=e.frame,n=Array.from({length:function(e){return e?0===e.rolls.length?10:9===e.frame?1===e.rolls.length?10===e.rolls[0]?10:10-e.rolls[0]:2===e.mark?10===e.rolls[1]?10:10-e.rolls[1]:1===e.mark?10:null:10-e.rolls[0]:0}(t)+1},function(e,t){return t++}).map(function(t){return l.a.createElement(E.a,{className:he.pinButton,text:t,key:t,onClick:function(){return e.appActions.rollBowlingBall(t)}})});return l.a.createElement("div",{className:he.buttonContainer},l.a.createElement("div",{className:he.pinSelector},"Click the number of pins to knock down"),l.a.createElement("div",{className:he.pinBox},n))},Ee=n(28),ve=function(e){var t,n=((t=e.frames)||[]).length&&!0===t[9].complete,r=me(e.frames);return l.a.createElement("div",{className:Ee.gameControls},n&&l.a.createElement("div",{className:Ee.gameOver},"GAME OVER!"),!n&&l.a.createElement(ge,Object.assign({frame:r},e)),!n&&l.a.createElement("div",{className:Ee.frameCount},"Frame ".concat(r.frame+1,", Ball ").concat(r.rolls.length+1,"  ")),l.a.createElement(E.a,{text:"Restart",onClick:function(){return e.appActions.newBowlingGame()}}))},we=n(32),be=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props.frames,n=me(t);return l.a.createElement("div",{className:we.container},l.a.createElement(re,{content:l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.bowl.com/Welcome/Welcome_Home/Keeping_Score",target:"_blank",rel:"noopener noreferrer"},"How to score")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.pba.com/Resources/Bowling101",target:"_blank",rel:"noopener noreferrer"},"Rules of bowling")))),show:this.props.showRules,onClick:function(){return e.props.appActions.bowlingToggleRules()}}),l.a.createElement(ve,this.props),l.a.createElement("div",{className:we.gameBoardContainer},(t||[]).map(function(e){return l.a.createElement(de,Object.assign({key:e.frame,isCurrent:n&&n.frame===e.frame},e))})),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),t}(l.a.Component);var Oe=Object(u.b)(function(e){return Object(D.a)({},e.bowlingGame)},function(e){return{appActions:Object(g.b)(a,e)}})(be),ye=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"gameSelectionButtons",value:function(){var e=this;return l.a.createElement("div",null,J.map(function(t){return l.a.createElement(E.a,{key:t,className:U.a.MINIMAL,active:e.props.selectedGame===t,text:t,onClick:function(){return e.props.appActions.selectGame(t)}})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:q.a.app},l.a.createElement(K.a,null,l.a.createElement(V.a,{align:H.a.LEFT},l.a.createElement(Y.a,null,"Game Room"),l.a.createElement(z.a,null),this.gameSelectionButtons())),l.a.createElement("div",{className:q.a.gameContainer},"Memory"===this.props.selectedGame&&l.a.createElement(ce,null),"Bowling"===this.props.selectedGame&&l.a.createElement(Oe,null),"Maze"===this.props.selectedGame&&l.a.createElement(_e,{text:"".concat(this.props.selectedGame," is under construction")})))}}]),t}(c.Component),_e=function(e){return l.a.createElement("div",{className:q.a.constructionContainer},e.text)};var ke=Object(u.b)(function(e){return{selectedGame:e.selectedGame}},function(e){return{appActions:Object(g.b)(o,e)}})(ye),Ce=n(39);n(74);function Ge(e,t){switch(t.type){case _:return Object.assign({},e,{cards:w(t.payload),clickCount:0,pause:!1});case G:var n=e.cards.map(function(e){return e.isFlipped?Object.assign({},e,{isFlipped:!1}):e});return Object.assign({},e,{cards:n,pause:!1});case C:var r=O(e.cards,t.payload),a=0!==(r||[]).length,o=y(r);return a?Object.assign({},e,{cards:r,clickCount:e.clickCount+1,pause:o}):e;case k:return Object.assign({},e,{showAll:!e.showAll});case L:return Object.assign({},e,{showRules:!e.showRules});default:return e}}var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return{memoryGame:Ge(e.memoryGame,t),bowlingGame:function(e,t){switch(t.type){case T:return Object.assign({},e,{frames:fe()});case S:return Object.assign({},e,{frames:ue(e.frames,t.payload)});case I:return Object.assign({},e,{showRules:!e.showRules});default:return e}}(e.bowlingGame,t),selectedGame:t.type===M?t.payload:e.selectedGame}},Ne={selectedGame:"Memory",memoryGame:{showAll:!1,cards:w(b()),clickCount:0,pause:!1,showRules:!0},bowlingGame:{frames:fe(),showRules:!1}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(u.a,{store:function(){var e=[Ce.a];return Object(g.c)(Le,g.a.apply(void 0,e))}()},l.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports={container:"_2RK5XsQVaftRMrPw7w8lt8",gameBoard:"_2u5AvPbyjBL2rF3Gmxzbwu",gameBoardContainer:"_1a7InEzNh1KEvrfJH-0B0U",gameOver:"_1PdXWdxlNA1XPaFOeEzfHW",gameDescription:"_1WqQzen-4MDGC_-ExjFWNm",memoryGameControls:"_18c6mgsvHUO71ixP9De5Ld",memoryCard:"_2Vv87KuIWYpn8ism0Lb2l0",flipped:"_1Tt6i4GWAZjhLcIkHlApLY",matched:"_3TqVz0bWw-CpUy79J658uq",cardIcon:"_2V0eVus6tVUoxqNVenBwF6",rulesContainer:"qb5ZeD3Q-XXr6wHgpcTba"}}},[[45,2,1]]]);
//# sourceMappingURL=main.0a8d4663.chunk.js.map