(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={container:"_2RK5XsQVaftRMrPw7w8lt8",gameBoard:"_2u5AvPbyjBL2rF3Gmxzbwu",gameBoardContainer:"_1a7InEzNh1KEvrfJH-0B0U",gameOver:"_1PdXWdxlNA1XPaFOeEzfHW",gameDescription:"_1WqQzen-4MDGC_-ExjFWNm",memoryGameControls:"_18c6mgsvHUO71ixP9De5Ld",memoryCard:"_2Vv87KuIWYpn8ism0Lb2l0",flipped:"_1Tt6i4GWAZjhLcIkHlApLY",matched:"_3TqVz0bWw-CpUy79J658uq",cardIcon:"_2V0eVus6tVUoxqNVenBwF6",rulesContainer:"qb5ZeD3Q-XXr6wHgpcTba"}},22:function(e,t,n){e.exports={buttonContainer:"_1mKUYi4HwfnB1h80B2pbQ_",pinSelector:"_3AUnbMAtoIVtEs-YwwW1t-",pinButton:"_1skXvoBC5Q_e5z2t0ywCd",pinBox:"Fj9QsZiKAPNgYnZKQIm0z",title:"_15wNJmxC5EXbhK3ZQWfS8E"}},26:function(e,t,n){e.exports={app:"_2XyUai4Nbw7tWe8ybs2pDF",constructionContainer:"_3GqH5aLha_kCKzIRjcZiVA",gameContainer:"_31H6O7fy05qgotoqEJLrrC"}},27:function(e,t,n){e.exports={container:"D7m4GwtlvaAd04POFe6JG",content:"N7nEOT7wo61GylvCV2kuR",heading:"_2HAKb6gQzcfLw0W4CDzDbl",btnContainer:"_3qhiY2VXNbcFb8uYQPS8Kl"}},28:function(e,t,n){e.exports={gameControls:"_1IVD1UjrozSPyNB_-9Blk2",gameOver:"I0aYAHMzK1wYUfjWGcCxU",frameCount:"_2B_Y3mq-E54wM28IQpTC6v"}},38:function(e,t,n){e.exports={gameBoardContainer:"_2lkia-blKM_HxgDTNlrPSJ"}},39:function(e,t,n){e.exports={container:"_2qLE2mJclH2Hkc4jr2uo-T"}},46:function(e,t,n){e.exports=n(77)},55:function(e,t,n){},7:function(e,t,n){e.exports={frameBox:"_2os-kn5z2nwszfDhn2gHoF",shadow:"KmHrAbb_dUUHU2mSmghPo",tenth:"_3yfCHgAngCVSh6U8Tp2For",frameNumber:"_1ve3N7DOYqO0Spe00h_bUq",unSelectedBk:"_3ZJUWrBP1YWuPjAFCLurTT",markArea:"_2dgsSgPoe1wdZGhfUGz2j2",scoreBox:"_2cYdaT0sLRIe-HYBlnHRFx",markTenth:"_39ntdwckX-c_eM_uLl3iba",mark:"_20teK0FZY6iSRd245fF2S_",totalScore:"_1DyytT6e_as3_wHGTvBZNz"}},77:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"START_MEMORY_GAME",function(){return k}),n.d(r,"SHOW_ALL",function(){return y}),n.d(r,"CLICK_CARD",function(){return C}),n.d(r,"UNFLIP_ALL",function(){return G}),n.d(r,"MEMORY_TOGGLE_RULES",function(){return A}),n.d(r,"startGame",function(){return L}),n.d(r,"unflipAll",function(){return N}),n.d(r,"showAll",function(){return B}),n.d(r,"memoryToggleRules",function(){return j}),n.d(r,"clickCard",function(){return R});var a={};n.r(a),n.d(a,"NEW_BOWLING_GAME",function(){return x}),n.d(a,"ROLL_BOWLING_BALL",function(){return S}),n.d(a,"BOWLING_TOGGLE_RULES",function(){return W}),n.d(a,"newBowlingGame",function(){return I}),n.d(a,"bowlingToggleRules",function(){return F}),n.d(a,"rollBowlingBall",function(){return H});var o={};n.r(o),n.d(o,"START_MEMORY_GAME",function(){return k}),n.d(o,"SHOW_ALL",function(){return y}),n.d(o,"CLICK_CARD",function(){return C}),n.d(o,"UNFLIP_ALL",function(){return G}),n.d(o,"MEMORY_TOGGLE_RULES",function(){return A}),n.d(o,"startGame",function(){return L}),n.d(o,"unflipAll",function(){return N}),n.d(o,"showAll",function(){return B}),n.d(o,"memoryToggleRules",function(){return j}),n.d(o,"clickCard",function(){return R}),n.d(o,"SELECT_GAME",function(){return M}),n.d(o,"selectGame",function(){return T}),n.d(o,"NEW_BOWLING_GAME",function(){return x}),n.d(o,"ROLL_BOWLING_BALL",function(){return S}),n.d(o,"BOWLING_TOGGLE_RULES",function(){return W}),n.d(o,"newBowlingGame",function(){return I}),n.d(o,"bowlingToggleRules",function(){return F}),n.d(o,"rollBowlingBall",function(){return H});var c=n(0),l=n.n(c),i=n(34),s=n.n(i),u=n(14),m=(n(55),n(11)),f=n(12),d=n(15),p=n(13),h=n(16),E=n(9),g=n(83),w=["time","grid","wrench","cog","flag","star","airplane","key","globe","dollar","flash","heart"];n(31),n(37);var v=function(e){for(var t=[],n=0,r=0;n<12;n++)t.push({index:r++,name:w[n]}),t.push({index:r++,name:w[n]});for(var a=[],o=0;o<24;o++)a[e[o]-1]=t[o];return a},b=function(){return function(e){for(var t=[];t.length<e;){var n=Math.floor(Math.random()*e)+1;t.indexOf(n)>-1||(t[t.length]=n)}return t}(24)},_=function(e,t){if(t.isFlipped||t.isMatched||O(e))return null;var n=e.find(function(e){return e.isFlipped});return void 0===n?e.map(function(e){return e.index===t.index?Object.assign({},e,{isFlipped:!0,isMatched:!1}):e}):n.name===t.name?e.map(function(e){return e.name===t.name?Object.assign({},e,{isFlipped:!1,isMatched:!0}):e}):e.map(function(e){return e.index===t.index?Object.assign({},e,{isFlipped:!0,isMatched:!1}):e})},O=function(e){return 2===e.filter(function(e){return e.isFlipped&&!e.isMatched}).length},k="START_MEMORY_GAME",y="SHOW_ALL",C="CLICK_CARD",G="UNFLIP_ALL",A="MEMORY_TOGGLE_RULES",L=function(){return{type:k,payload:b()}},N=function(){return{type:G}},B=function(e){return{type:y,show:e}},j=function(){return{type:A}},R=function(e){return function(t,n){n().memoryGame.pause||e.isMatched||e.isFlipped||(t({type:C,payload:e}),n().memoryGame.pause&&setTimeout(function(){t(N())},700))}},M="SELECT_GAME",T=function(e){return{type:M,payload:e}},x="NEW_BOWLING_GAME",S="ROLL_BOWLING_BALL",W="BOWLING_TOGGLE_RULES",I=function(){return{type:x}},F=function(){return{type:W}},H=function(e){return{type:S,payload:e}},U=n(67),Y=n(82),z=n(74),K=n(6),P=n(75),D=n(73),V=n(26),X=n.n(V),q=["Memory","Bowling"],Q=n(24),J=n(81),Z=n(78),$=n(10),ee=n.n($),te=n(80),ne=n(27),re=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:ne.container},l.a.createElement("div",{className:ne.btnContainer},l.a.createElement(g.a,{onClick:this.props.onClick},this.props.show?"Hide":"Show"," Rules")),l.a.createElement(te.a,{isOpen:this.props.show},l.a.createElement("div",{className:ne.content},this.props.content)))}}]),t}(l.a.Component),ae=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=!this.props.cards.find(function(e){return!e.isMatched});return l.a.createElement("div",{className:ee.a.container},l.a.createElement("div",{className:ee.a.rulesContainer},l.a.createElement(re,{content:l.a.createElement("div",{style:{wrap:"breakWord"}},l.a.createElement("ul",null,l.a.createElement("li",null,"At the start of the game, the player is presented with 24 facedown cards."),l.a.createElement("li",null,"On the reverse side of every card is an icon. There are twelve unique icons."),l.a.createElement("li",null,"Play begins with the player clicking a card to reveal the icon."),l.a.createElement("li",null,"The player then clicks another card to reveal a second icon."),l.a.createElement("li",null,"If the icons match, the matched cards are grayed."),l.a.createElement("li",null,"If the icons do not match, the cards are turned facedown."),l.a.createElement("li",null,"The game continues until there are no cards left to match."),l.a.createElement("li",null,"Alternatively, play can begin with the cards faceup (using the 'Show All' switch) then turning them facedown after you have memorized the icon positions. "),l.a.createElement("li",null,"The object of the game is to match all the icons using as few clicks as possible."))),show:this.props.showRules,onClick:function(){return e.props.appActions.memoryToggleRules()}})),t&&l.a.createElement("div",{className:ee.a.gameOver},"GAME OVER!"),l.a.createElement("div",{className:ee.a.memoryGameControls},l.a.createElement(g.a,{text:"Restart",onClick:function(){return e.props.appActions.startGame()}}),"Click Count: ".concat(this.props.clickCount),l.a.createElement(J.a,{checked:this.props.showAll,label:"Show All",style:{marginTop:"6px"},onChange:function(){return e.props.appActions.showAll()}})),l.a.createElement("div",{className:ee.a.gameBoardContainer},"\xa0         ",l.a.createElement("div",{className:ee.a.gameBoard},(this.props.cards||[]).map(function(t){return l.a.createElement(oe,Object.assign({key:t.index,showAll:e.props.showAll,onClick:function(){return e.props.appActions.clickCard(t)}},t))}),"\xa0\xa0\xa0\xa0\xa0\xa0    ")),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),t}(l.a.Component),oe=function(e){var t=e.isMatched||e.isFlipped||e.showAll,n="".concat(ee.a.cardIcon," ").concat(e.isFlipped?ee.a.flipped:e.isMatched?ee.a.matched:"");return l.a.createElement("div",{className:ee.a.memoryCard,onClick:e.onClick},t&&l.a.createElement("div",{className:n},l.a.createElement(Z.a,{icon:e.name,iconSize:"calc(8vmin)"})))};var ce=Object(u.b)(function(e){return Object(Q.a)({},e.memoryGame)},function(e){return{appActions:Object(E.b)(r,e)}})(ae),le=0;var ie=n(22),se=function(){function e(t){Object(m.a)(this,e),this.frame=t,this.rolls=[],this.mark=le}return Object(f.a)(e,[{key:"addRoll",value:function(e){this.complete||(this.rolls.push(e),this.setMark(),this.complete=9===this.frame&&this.mark!==le?3===this.rolls.length:2===this.mark||2===this.rolls.length)}},{key:"setMark",value:function(){this.mark=10===this.rolls[0]?2:this.rolls[0]+this.rolls[1]===10?1:le}}]),e}(),ue=function(e,t){var n=e.slice(),r=me(n);r&&r.addRoll(t);for(var a=0,o=0;o<10;o++){var c=de(n[o],n[o+1],n[o+2]);n[o].score=c,a+=c,n[o].totalScore=a}return n},me=function(e){return(e||[]).find(function(e){return!e.complete})},fe=function(){return Array.from({length:10},function(e,t){return new se(t++)})},de=function(e,t,n){if(e.complete)switch(e.mark){case 2:return 10+function(e,t,n){return 9===e.frame?e.rolls[1]+e.rolls[2]:8===e.frame?2===t.mark?10+t.rolls[1]:t.rolls[0]+t.rolls[1]:2===t.mark?n?10+n.rolls[0]:0:t.rolls[0]+t.rolls[1]}(e,t,n);case 1:return 10+function(e,t){return 9===e.frame?e.rolls[2]:t&&t.rolls.length>0?t.rolls[0]:void 0}(e,t);default:return e.rolls[0]+e.rolls[1]}return NaN},pe=function(e){var t=e.frame,n=Array.from({length:function(e){return e?0===e.rolls.length?10:9===e.frame?1===e.rolls.length?10===e.rolls[0]?10:10-e.rolls[0]:2===e.mark?10===e.rolls[1]?10:10-e.rolls[1]:1===e.mark?10:null:10-e.rolls[0]:0}(t)+1},function(e,t){return t++}).map(function(t){return l.a.createElement(g.a,{className:ie.pinButton,text:t,key:t,onClick:function(){return e.appActions.rollBowlingBall(t)}})});return l.a.createElement("div",{className:ie.buttonContainer},l.a.createElement("div",{className:ie.pinSelector},"Click the number of pins to knock down"),l.a.createElement("div",{className:ie.pinBox},n))},he=n(28),Ee=function(e){var t,n=((t=e.frames)||[]).length&&!0===t[9].complete,r=me(e.frames);return l.a.createElement("div",{className:he.gameControls},n&&l.a.createElement("div",{className:he.gameOver},"GAME OVER!"),!n&&l.a.createElement(pe,Object.assign({frame:r},e)),!n&&l.a.createElement("div",{className:he.frameCount},"Frame ".concat(r.frame+1,", Ball ").concat(r.rolls.length+1,"  ")),l.a.createElement(g.a,{text:"Restart",onClick:function(){return e.appActions.newBowlingGame()}}))},ge=n(7),we=function(e){var t,n="".concat(ge.frameBox," ").concat(9===e.frame?ge.tenth:"","  ").concat(e.isCurrent?ge.shadow:"");return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"".concat(ge.frameNumber," ").concat(e.isCurrent?"":ge.unSelectedBk)},e.frame+1),l.a.createElement("div",{className:ge.markArea},l.a.createElement("div",{className:"".concat(ge.scoreBox," ").concat(9===e.frame?ge.markTenth:"")},9===(t=e).frame&&t.rolls.length>0?2===t.mark?"X":0===t.rolls[0]?"-":t.rolls[0]:""),l.a.createElement("div",{className:"".concat(ge.scoreBox," ").concat(ge.mark)},function(e){return 0===e.rolls.length?"":9===e.frame?1===e.mark?"/":10===e.rolls[1]?"X":0===e.rolls[1]?"-":e.rolls[1]:2===e.mark?"X":0===e.rolls[0]?"-":e.rolls[0]}(e)),l.a.createElement("div",{className:"".concat(ge.scoreBox," ").concat(ge.mark)},function(e){if(0===e.rolls.length)return"";if(9===e.frame)switch(e.mark){default:return"";case 2:return 10===e.rolls[2]?"X":e.rolls[1]+e.rolls[2]===10?"/":0===e.rolls[2]?"-":e.rolls[2];case 1:return 10===e.rolls[2]?"X":e.rolls[2]}else switch(e.mark){default:return 0===e.rolls[1]?"-":e.rolls[1];case 2:return"";case 1:return"/"}}(e))),l.a.createElement("div",{className:ge.totalScore},!e.complete||isNaN(e.totalScore)?"":e.totalScore))},ve=n(38),be=function(e){var t=me(e.frames);return l.a.createElement("div",{className:ve.gameBoardContainer},(e.frames||[]).map(function(e){return l.a.createElement(we,Object.assign({key:e.frame,isCurrent:t&&t.frame===e.frame},e))}))},_e=n(39),Oe=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:_e.container},l.a.createElement(re,{content:l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.bowl.com/Welcome/Welcome_Home/Keeping_Score",target:"_blank",rel:"noopener noreferrer"},"How to score")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.pba.com/Resources/Bowling101",target:"_blank",rel:"noopener noreferrer"},"Rules of bowling")))),show:this.props.showRules,onClick:function(){return e.props.appActions.bowlingToggleRules()}}),l.a.createElement(Ee,this.props),l.a.createElement(be,this.props),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),t}(l.a.Component);var ke=Object(u.b)(function(e){return Object(Q.a)({},e.bowlingGame)},function(e){return{appActions:Object(E.b)(a,e)}})(Oe),ye=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(f.a)(t,[{key:"gameSelectionButtons",value:function(){var e=this;return l.a.createElement("div",null,q.map(function(t){return l.a.createElement(g.a,{key:t,className:U.a.MINIMAL,active:e.props.selectedGame===t,text:t,onClick:function(){return e.props.appActions.selectGame(t)}})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:X.a.app},l.a.createElement(Y.a,null,l.a.createElement(z.a,{align:K.a.LEFT},l.a.createElement(P.a,null,"Game Room"),l.a.createElement(D.a,null),this.gameSelectionButtons())),l.a.createElement("div",{className:X.a.gameContainer},"Memory"===this.props.selectedGame&&l.a.createElement(ce,null),"Bowling"===this.props.selectedGame&&l.a.createElement(ke,null),"Maze"===this.props.selectedGame&&l.a.createElement(Ce,{text:"".concat(this.props.selectedGame," is under construction")})))}}]),t}(c.Component),Ce=function(e){return l.a.createElement("div",{className:X.a.constructionContainer},e.text)};var Ge=Object(u.b)(function(e){return{selectedGame:e.selectedGame}},function(e){return{appActions:Object(E.b)(o,e)}})(ye),Ae=n(40);n(76);function Le(e,t){switch(t.type){case k:return Object.assign({},e,{cards:v(t.payload),clickCount:0,pause:!1});case G:var n=e.cards.map(function(e){return e.isFlipped?Object.assign({},e,{isFlipped:!1}):e});return Object.assign({},e,{cards:n,pause:!1});case C:var r=_(e.cards,t.payload),a=0!==(r||[]).length,o=O(r);return a?Object.assign({},e,{cards:r,clickCount:e.clickCount+1,pause:o}):e;case y:return Object.assign({},e,{showAll:!e.showAll});case A:return Object.assign({},e,{showRules:!e.showRules});default:return e}}var Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;return{memoryGame:Le(e.memoryGame,t),bowlingGame:function(e,t){switch(t.type){case x:return Object.assign({},e,{frames:fe()});case S:return Object.assign({},e,{frames:ue(e.frames,t.payload)});case W:return Object.assign({},e,{showRules:!e.showRules});default:return e}}(e.bowlingGame,t),selectedGame:t.type===M?t.payload:e.selectedGame}},Be={selectedGame:"Memory",memoryGame:{showAll:!1,cards:v(b()),clickCount:0,pause:!1,showRules:!0},bowlingGame:{frames:fe(),showRules:!1}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(u.a,{store:function(){var e=[Ae.a];return Object(E.c)(Ne,E.a.apply(void 0,e))}()},l.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.808903ef.chunk.js.map