(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){e.exports=n(185)},13:function(e,t,n){e.exports={frameBox:"_2os-kn5z2nwszfDhn2gHoF",shadow:"KmHrAbb_dUUHU2mSmghPo",tenth:"_3yfCHgAngCVSh6U8Tp2For",frameNumber:"_1ve3N7DOYqO0Spe00h_bUq",unSelectedBk:"_3ZJUWrBP1YWuPjAFCLurTT",markArea:"_2dgsSgPoe1wdZGhfUGz2j2",scoreBox:"_2cYdaT0sLRIe-HYBlnHRFx",markTenth:"_39ntdwckX-c_eM_uLl3iba",mark:"_20teK0FZY6iSRd245fF2S_",totalScore:"_1DyytT6e_as3_wHGTvBZNz"}},178:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"START_MEMORY_GAME",function(){return N}),n.d(a,"SHOW_ALL",function(){return G}),n.d(a,"CLICK_CARD",function(){return j}),n.d(a,"UNFLIP_ALL",function(){return x}),n.d(a,"MEMORY_TOGGLE_RULES",function(){return M}),n.d(a,"MEMORY_AUTOPLAY_MODE",function(){return L}),n.d(a,"startGame",function(){return R}),n.d(a,"unflipAll",function(){return B}),n.d(a,"showAll",function(){return T}),n.d(a,"memoryToggleRules",function(){return S}),n.d(a,"clickCard",function(){return I}),n.d(a,"autoplayMode",function(){return F});var r={};n.r(r),n.d(r,"NEW_BOWLING_GAME",function(){return P}),n.d(r,"ROLL_BOWLING_BALL",function(){return H}),n.d(r,"BOWLING_TOGGLE_RULES",function(){return Y}),n.d(r,"newBowlingGame",function(){return z}),n.d(r,"bowlingToggleRules",function(){return D}),n.d(r,"rollBowlingBall",function(){return V});var c={};n.r(c),n.d(c,"START_MEMORY_GAME",function(){return N}),n.d(c,"SHOW_ALL",function(){return G}),n.d(c,"CLICK_CARD",function(){return j}),n.d(c,"UNFLIP_ALL",function(){return x}),n.d(c,"MEMORY_TOGGLE_RULES",function(){return M}),n.d(c,"MEMORY_AUTOPLAY_MODE",function(){return L}),n.d(c,"startGame",function(){return R}),n.d(c,"unflipAll",function(){return B}),n.d(c,"showAll",function(){return T}),n.d(c,"memoryToggleRules",function(){return S}),n.d(c,"clickCard",function(){return I}),n.d(c,"autoplayMode",function(){return F}),n.d(c,"SELECT_GAME",function(){return W}),n.d(c,"selectGame",function(){return U}),n.d(c,"NEW_BOWLING_GAME",function(){return P}),n.d(c,"ROLL_BOWLING_BALL",function(){return H}),n.d(c,"BOWLING_TOGGLE_RULES",function(){return Y}),n.d(c,"newBowlingGame",function(){return z}),n.d(c,"bowlingToggleRules",function(){return D}),n.d(c,"rollBowlingBall",function(){return V});var o=n(0),l=n.n(o),i=n(12),s=n.n(i),u=n(20),m=n(10),d=n(11),f=n(15),p=n(14),h=n(16),v=n(17),E=n(192),g=["time","grid","wrench","cog","flag","star","airplane","key","globe","dollar","flash","heart"];n(70),n(92);var O=function(e){return!e.find(function(e){return!e.isMatched})},y=function(){return function(e){for(var t=[];t.length<e;){var n=Math.floor(Math.random()*e)+1;t.indexOf(n)>-1||(t[t.length]=n)}return t}(24)},b=function(e){return 2===e.filter(function(e){return e.isFlipped&&!e.isMatched}).length},w=function(e){for(var t=[],n=0,a=0;n<12;n++)t.push({index:a++,name:g[n],exposedClicks:[]}),t.push({index:a++,name:g[n],exposedClicks:[]});for(var r=[],c=0;c<24;c++)r[e[c]-1]=t[c];return r},_=function(e,t,n){if(t.isFlipped||t.isMatched||b(e))return null;var a=e.find(function(e){return e.isFlipped});if(void 0===a){var r=Object.assign({},t,{exposedClicks:t.exposedClicks.concat(n),isFlipped:!0,isMatched:!1});return{cards:e.map(function(e){return e.index===r.index?r:e}),clickedCard:r}}if(a.name===t.name){var c=Object.assign({},t,{exposedClicks:t.exposedClicks.concat(n),isFlipped:!1,isMatched:!0});return{cards:e.map(function(e){return e.name!==t.name?e:Object.assign({},e.index===t.index?c:e,{isFlipped:!1,isMatched:!0})}),clickedCard:c}}var o=Object.assign({},t,{exposedClicks:t.exposedClicks.concat(n),isFlipped:!0,isMatched:!1});return{cards:e.map(function(e){return e.index===o.index?o:e}),clickedCard:o}},C=function(e){var t={};e.forEach(function(e){e.exposedClicks.length>0&&!e.isMatched&&(t.hasOwnProperty(e.name)?t[e.name].second=e:t[e.name]={first:e})});var n=Object.values(t).filter(function(e){return e.second});return n.length?n[0]:null},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?e.find(function(e){return 0===e.exposedClicks.length&&t.index!==e.index}):e.find(function(e){return 0===e.exposedClicks.length})},A=function(e,t){var n=e.filter(function(e){return e.exposedClicks.length>0&&e.index!==t.index&&e.name===t.name});return n.length>0?n[0]:k(e,t)},N="START_MEMORY_GAME",G="SHOW_ALL",j="CLICK_CARD",x="UNFLIP_ALL",M="MEMORY_TOGGLE_RULES",L="MEMORY_AUTOPLAY_MODE",R=function(){return{type:N,payload:y()}},B=function(){return{type:x}},T=function(e){return{type:G,show:e}},S=function(){return{type:M}},I=function(e){return function(t,n){var a=n().memoryGame;a.pause||e.isMatched||e.isFlipped||!0===a.autoplayMode||(t({type:j,payload:e}),n().memoryGame.pause&&setTimeout(function(){t(B())},700))}},F=function(){return function(e,t){e({type:L,payload:!t().memoryGame.autoplayMode});var n=null;clearInterval(n),n=setInterval(function(){var a=t().memoryGame;O(a.cards)?(clearInterval(n),e({type:L,payload:!1})):a.autoplayMode?b(a.cards)?e(B()):e({type:j,payload:function(e){if(O(e))return null;var t=e.find(function(e){return e.isFlipped}),n=null;if(t)n=A(e,t);else{var a=C(e);n=a?a.first:k(e)}return n}(a.cards)}):clearInterval(n)},200)}},W="SELECT_GAME",U=function(e){return{type:W,payload:e}},P="NEW_BOWLING_GAME",H="ROLL_BOWLING_BALL",Y="BOWLING_TOGGLE_RULES",z=function(){return{type:P}},D=function(){return{type:Y}},V=function(e){return{type:H,payload:e}},K=n(118),J=n(190),q=n(176),Z=n(43),X=n(177),Q=n(175),$=n(52),ee=n.n($),te=["Memory","Bowling"],ne=n(38),ae=n(191),re=n(186),ce=n(188),oe=n(93),le=n.n(oe),ie=n(72),se=function(e){if(e){for(var t=[],n=0;n<e.length;n++)e[n].isMatched&&t.push({name:e[n].name,first:e[n-1].exposedClicks.length,second:e[n].exposedClicks.length,matchCount:t.length});var a=t.filter(function(e){return 11===e.matchCount}),r=t.filter(function(e){return!a.map(function(e){return e.name}).includes(e.name)}),c=r.filter(function(e){return 1===e.second}),o=(r=r.filter(function(e){return!c.map(function(e){return e.name}).includes(e.name)})).filter(function(e){return e.first<=2&&e.second<=2}),l=(r=r.filter(function(e){return!o.map(function(e){return e.name}).includes(e.name)})).filter(function(e){return e.second<3||e.first<3}),i=(r=r.filter(function(e){return!l.map(function(e){return e.name}).includes(e.name)})).filter(function(e){return e.second<=3||e.first<=3}),s=r=r.filter(function(e){return!i.map(function(e){return e.name}).includes(e.name)}),u=Math.max.apply(Math,Object(ie.a)(t.map(function(e){return e.first})).concat(Object(ie.a)(t.map(function(e){return e.second})))),m=t.sort(function(e,t){var n=Math.max(e.first,e.second),a=Math.max(t.first,t.second);if(n===a){var r=e.first+e.second,c=t.first+t.second;return r===c?0:r<c?1:-1}return n<a?1:-1});return l=l.concat(a),{luck:c,level1:o,level2:l,level3:i,level4:s,lastMatch:a,maxSeen:u,flipCounts:m}}},ue=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return se(this.props.history),l.a.createElement("div",{className:le.a.memoryGameControls},l.a.createElement(E.a,{text:"Restart",onClick:function(){return e.props.appActions.startGame()}}),"Clicks: ".concat(this.props.clickCount),l.a.createElement(ce.a,{checked:this.props.showAll,label:"Show All",style:{marginTop:"6px"},onChange:function(){return e.props.appActions.showAll()}}),l.a.createElement(ce.a,{checked:this.props.autoplayMode,label:"Autoplay",style:{marginTop:"6px"},onChange:function(){return e.props.appActions.autoplayMode()}}))}}]),t}(l.a.Component),me=n(29),de=n.n(me),fe=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:de.a.gameBoardContainer},"\xa0         ",l.a.createElement("div",{className:de.a.gameBoard},(this.props.cards||[]).map(function(t){return l.a.createElement(pe,Object.assign({key:t.index,showAll:e.props.showAll,onClick:function(){return e.props.appActions.clickCard(t)}},t))}),"\xa0\xa0\xa0\xa0\xa0\xa0    "))}}]),t}(l.a.Component),pe=function(e){var t=e.isMatched||e.isFlipped||e.showAll,n="".concat(de.a.cardIcon," ").concat(e.isFlipped?de.a.flipped:e.isMatched?de.a.matched:"");return l.a.createElement("div",{className:de.a.memoryCard,onClick:e.onClick},t&&l.a.createElement("div",{className:n},l.a.createElement(re.a,{icon:e.name,iconSize:"calc(8vmin)"})))},he=n(44),ve=n.n(he),Ee=n(189),ge=n(53),Oe=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:ge.container},l.a.createElement("div",{className:ge.btnContainer},l.a.createElement(E.a,{onClick:this.props.onClick},this.props.show?"Hide":"Show"," Rules")),l.a.createElement(Ee.a,{isOpen:this.props.show},l.a.createElement("div",{className:ge.content},this.props.content)))}}]),t}(l.a.Component),ye=n(6),be=n.n(ye),we=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:ve.a.container},l.a.createElement("div",{className:ve.a.rulesContainer},l.a.createElement(Oe,{content:l.a.createElement("div",{style:{wrap:"breakWord"}},l.a.createElement("ul",null,l.a.createElement("li",null,"At the start of the game, the player is presented with 24 facedown cards."),l.a.createElement("li",null,"On the reverse side of every card is an icon. There are twelve unique icons."),l.a.createElement("li",null,"Play begins with the player clicking a card to reveal the icon."),l.a.createElement("li",null,"The player then clicks another card to reveal a second icon."),l.a.createElement("li",null,"If the icons match, the matched cards are grayed."),l.a.createElement("li",null,"If the icons do not match, the cards are turned facedown."),l.a.createElement("li",null,"The game continues until there are no cards left to match."),l.a.createElement("li",null,"Alternatively, play can begin with the cards faceup (using the 'Show All' switch) then turning them facedown after you have memorized the icon positions. "),l.a.createElement("li",null,"The object of the game is to match all the icons using the fewest clicks possible."))),show:this.props.showRules,onClick:function(){return e.props.appActions.memoryToggleRules()}})),O(this.props.cards)&&l.a.createElement("div",{className:ve.a.gameOver},l.a.createElement("div",null,"GAME OVER!"),l.a.createElement(ae.a,{content:function(e){var t=se(e);return l.a.createElement("div",{className:be.a.container},l.a.createElement("div",{className:be.a.heading},"Click Efficiency"),l.a.createElement("div",{className:be.a.items},l.a.createElement("div",{className:be.a.row},l.a.createElement("div",{className:be.a.title},"Excellent"),l.a.createElement("div",{className:be.a.data},"".concat(t.level1.map(function(e){return e.name}).join(", ")))),l.a.createElement("div",{className:be.a.row},l.a.createElement("div",{className:be.a.title},"Good"),l.a.createElement("div",{className:be.a.data},"".concat(t.level2.map(function(e){return e.name}).join(", ")))),l.a.createElement("div",{className:be.a.row},l.a.createElement("div",{className:be.a.title},"Poor"),l.a.createElement("div",{className:be.a.data},"".concat(t.level3.map(function(e){return e.name}).join(", ")))),t.level4.length>0&&l.a.createElement("div",{className:be.a.row},l.a.createElement("div",{className:be.a.title},"Very Poor"),l.a.createElement("div",{className:be.a.data},"".concat(t.level4.map(function(e){return e.name}).join(", ")))),l.a.createElement("div",{className:be.a.row},l.a.createElement("div",{className:be.a.title},"Lucky"),l.a.createElement("div",{className:be.a.data},"".concat(t.luck.map(function(e){return e.name}).join(", "))))))}(this.props.history),minimal:!0},l.a.createElement(re.a,{icon:"info-sign",iconSize:"calc(.65em)",className:ve.a.infoIcon}))),l.a.createElement(ue,this.props),l.a.createElement(fe,this.props),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),t}(l.a.Component);var _e=Object(u.b)(function(e){return Object(ne.a)({},e.memoryGame)},function(e){return{appActions:Object(v.b)(a,e)}})(we),Ce=0;var ke=n(45),Ae=function(){function e(t){Object(m.a)(this,e),this.frame=t,this.rolls=[],this.mark=Ce}return Object(d.a)(e,[{key:"addRoll",value:function(e){this.complete||(this.rolls.push(e),this.setMark(),this.complete=9===this.frame&&this.mark!==Ce?3===this.rolls.length:2===this.mark||2===this.rolls.length)}},{key:"setMark",value:function(){this.mark=10===this.rolls[0]?2:this.rolls[0]+this.rolls[1]===10?1:Ce}}]),e}(),Ne=function(e,t){var n=e.slice(),a=Ge(n);a&&a.addRoll(t);for(var r=0,c=0;c<10;c++){var o=xe(n[c],n[c+1],n[c+2]);n[c].score=o,r+=o,n[c].totalScore=r}return n},Ge=function(e){return(e||[]).find(function(e){return!e.complete})},je=function(){return Array.from({length:10},function(e,t){return new Ae(t++)})},xe=function(e,t,n){if(e.complete)switch(e.mark){case 2:return 10+function(e,t,n){return 9===e.frame?e.rolls[1]+e.rolls[2]:8===e.frame?2===t.mark?10+t.rolls[1]:t.rolls[0]+t.rolls[1]:2===t.mark?n?10+n.rolls[0]:0:t.rolls[0]+t.rolls[1]}(e,t,n);case 1:return 10+function(e,t){return 9===e.frame?e.rolls[2]:t&&t.rolls.length>0?t.rolls[0]:void 0}(e,t);default:return e.rolls[0]+e.rolls[1]}return NaN},Me=function(e){var t=e.frame,n=Array.from({length:function(e){return e?0===e.rolls.length?10:9===e.frame?1===e.rolls.length?10===e.rolls[0]?10:10-e.rolls[0]:2===e.mark?10===e.rolls[1]?10:10-e.rolls[1]:1===e.mark?10:null:10-e.rolls[0]:0}(t)+1},function(e,t){return t++}).map(function(t){return l.a.createElement(E.a,{className:ke.pinButton,style:{minWidth:"27px",minHeight:"27px",padding:"3px 7px"},text:t,key:t,onClick:function(){return e.appActions.rollBowlingBall(t)}})});return l.a.createElement("div",{className:ke.buttonContainer},l.a.createElement("div",{className:ke.pinSelector},"Click the number of pins to knock down"),l.a.createElement("div",{className:ke.pinBox},n))},Le=n(55),Re=function(e){var t,n=((t=e.frames)||[]).length&&!0===t[9].complete,a=Ge(e.frames);return l.a.createElement("div",{className:Le.gameControls},n&&l.a.createElement("div",{className:Le.gameOver},"GAME OVER!"),!n&&l.a.createElement(Me,Object.assign({frame:a},e)),!n&&l.a.createElement("div",{className:Le.frameCount},"Frame ".concat(a.frame+1,", Ball ").concat(a.rolls.length+1,"  ")),l.a.createElement(E.a,{text:"Restart",onClick:function(){return e.appActions.newBowlingGame()}}))},Be=n(13),Te=function(e){var t,n="".concat(Be.frameBox," ").concat(9===e.frame?Be.tenth:"","  ").concat(e.isCurrent?Be.shadow:"");return l.a.createElement("div",{className:n},l.a.createElement("div",{className:"".concat(Be.frameNumber," ").concat(e.isCurrent?"":Be.unSelectedBk)},e.frame+1),l.a.createElement("div",{className:Be.markArea},l.a.createElement("div",{className:"".concat(Be.scoreBox," ").concat(9===e.frame?Be.markTenth:"")},9===(t=e).frame&&t.rolls.length>0?2===t.mark?"X":0===t.rolls[0]?"-":t.rolls[0]:""),l.a.createElement("div",{className:"".concat(Be.scoreBox," ").concat(Be.mark)},function(e){return 0===e.rolls.length?"":9===e.frame?1===e.mark?"/":10===e.rolls[1]?"X":0===e.rolls[1]?"-":e.rolls[1]:2===e.mark?"X":0===e.rolls[0]?"-":e.rolls[0]}(e)),l.a.createElement("div",{className:"".concat(Be.scoreBox," ").concat(Be.mark)},function(e){if(0===e.rolls.length)return"";if(9===e.frame)switch(e.mark){default:return"";case 2:return 10===e.rolls[2]?"X":e.rolls[1]+e.rolls[2]===10?"/":0===e.rolls[2]?"-":e.rolls[2];case 1:return 10===e.rolls[2]?"X":e.rolls[2]}else switch(e.mark){default:return 0===e.rolls[1]?"-":e.rolls[1];case 2:return"";case 1:return"/"}}(e))),l.a.createElement("div",{className:Be.totalScore},!e.complete||isNaN(e.totalScore)?"":e.totalScore))},Se=n(97),Ie=function(e){var t=Ge(e.frames);return l.a.createElement("div",{className:Se.gameBoardContainer},(e.frames||[]).map(function(e){return l.a.createElement(Te,Object.assign({key:e.frame,isCurrent:t&&t.frame===e.frame},e))}))},Fe=n(98),We=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:Fe.container},l.a.createElement(Oe,{content:l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.bowl.com/Welcome/Welcome_Home/Keeping_Score",target:"_blank",rel:"noopener noreferrer"},"How to score")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.pba.com/Resources/Bowling101",target:"_blank",rel:"noopener noreferrer"},"Rules of bowling")))),show:this.props.showRules,onClick:function(){return e.props.appActions.bowlingToggleRules()}}),l.a.createElement(Re,this.props),l.a.createElement(Ie,this.props),"\xa0\xa0\xa0\xa0\xa0\xa0")}}]),t}(l.a.Component);var Ue=Object(u.b)(function(e){return Object(ne.a)({},e.bowlingGame)},function(e){return{appActions:Object(v.b)(r,e)}})(We),Pe=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"gameSelectionButtons",value:function(){var e=this;return l.a.createElement("div",null,te.map(function(t){return l.a.createElement(E.a,{key:t,className:K.a.MINIMAL,active:e.props.selectedGame===t,text:t,onClick:function(){return e.props.appActions.selectGame(t)}})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:ee.a.app},l.a.createElement(J.a,null,l.a.createElement(q.a,{align:Z.a.LEFT},l.a.createElement(X.a,null,"Roy's Stuff"),l.a.createElement(Q.a,null),this.gameSelectionButtons())),l.a.createElement("div",{className:ee.a.gameContainer},"Memory"===this.props.selectedGame&&l.a.createElement(_e,null),"Bowling"===this.props.selectedGame&&l.a.createElement(Ue,null),"Maze"===this.props.selectedGame&&l.a.createElement(He,{text:"".concat(this.props.selectedGame," is under construction")})))}}]),t}(o.Component),He=function(e){return l.a.createElement("div",{className:ee.a.constructionContainer},e.text)};var Ye=Object(u.b)(function(e){return{selectedGame:e.selectedGame}},function(e){return{appActions:Object(v.b)(c,e)}})(Pe),ze=function(e){var t=e.store;return l.a.createElement(u.a,{store:t},l.a.createElement(Ye,t))},De=(n(178),n(99));n(184);function Ve(e,t){switch(t.type){case N:return Object.assign({},e,{cards:w(t.payload),clickCount:0,pause:!1,history:[]});case x:var n=e.cards.map(function(e){return e.isFlipped?Object.assign({},e,{isFlipped:!1}):e});return Object.assign({},e,{cards:n,pause:!1});case j:var a=t.payload,r=e.clickCount+1,c=_(e.cards,a,r);if(null===c)return e;var o=0!==(c.cards||[]).length,l=b(c.cards);return o?Object.assign({},e,{cards:c.cards,clickCount:r,pause:l,history:e.history.concat(c.clickedCard)}):e;case G:return Object.assign({},e,{showAll:!e.showAll});case L:return Object.assign({},e,{autoplayMode:t.payload,pause:!1});case M:return Object.assign({},e,{showRules:!e.showRules});default:return e}}var Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;return Object(ne.a)({},e,{memoryGame:Ve(e.memoryGame,t),bowlingGame:function(e,t){switch(t.type){case P:return Object.assign({},e,{frames:je()});case H:return Object.assign({},e,{frames:Ne(e.frames,t.payload)});case Y:return Object.assign({},e,{showRules:!e.showRules});default:return e}}(e.bowlingGame,t),selectedGame:t.type===W?t.payload:e.selectedGame})},Je={selectedGame:"Memory",memoryGame:{showAll:!1,cards:w(y()),clickCount:0,pause:!1,showRules:!0,history:[],autoplayMode:!1},bowlingGame:{frames:je(),showRules:!1}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ze,{store:function(){var e=[De.a];return Object(v.c)(Ke,v.a.apply(void 0,e))}()}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){e.exports={gameBoardContainer:"_2pCeM4upCPJm-A2pGiZF9a",gameBoard:"OYtnOVEFBwBsvZPmUE4yU",memoryCard:"_13UPxVRzAGYcrNiHJB-a3n",flipped:"_2qeCsNhrPjZdKDfSyd-qG0",matched:"s8vUgpOz1bXkhDMETj9D9",cardIcon:"_25ZIyRAmlS-AR4mbhPVRT7"}},44:function(e,t,n){e.exports={container:"_2RK5XsQVaftRMrPw7w8lt8",gameBoard:"_2u5AvPbyjBL2rF3Gmxzbwu",gameBoardContainer:"_1a7InEzNh1KEvrfJH-0B0U",gameOver:"_1PdXWdxlNA1XPaFOeEzfHW",gameDescription:"_1WqQzen-4MDGC_-ExjFWNm",memoryGameControls:"_18c6mgsvHUO71ixP9De5Ld",memoryCard:"_2Vv87KuIWYpn8ism0Lb2l0",flipped:"_1Tt6i4GWAZjhLcIkHlApLY",matched:"_3TqVz0bWw-CpUy79J658uq",cardIcon:"_2V0eVus6tVUoxqNVenBwF6",rulesContainer:"qb5ZeD3Q-XXr6wHgpcTba",infoIcon:"_2g2GF-qu-ss5anvEBGGBO8"}},45:function(e,t,n){e.exports={buttonContainer:"_3mfDwf5T21h3S5gOd-A5l2",pinSelector:"_2QzNo79U25GUvmzyZsuB2P",pinButton:"_1AcMG_bzWqtzQRWvYoiQpx",pinBox:"_2Yd0J5JPAqeI4CPUzmgSJl",title:"_4RYrzRm7UiRt4Nboe_0c0"}},52:function(e,t,n){e.exports={app:"_29i3VoR0G3sL3DcRK8ahet",constructionContainer:"_3mtoTcoro7yvTzmjl0aJ3Q",gameContainer:"_2kOrVEsZamFO5lc5JKqvsK"}},53:function(e,t,n){e.exports={container:"D7m4GwtlvaAd04POFe6JG",content:"N7nEOT7wo61GylvCV2kuR",heading:"_2HAKb6gQzcfLw0W4CDzDbl",btnContainer:"_3qhiY2VXNbcFb8uYQPS8Kl"}},55:function(e,t,n){e.exports={gameControls:"_2cyE19f_O9jItA66AnJnTV",gameOver:"HVC137GIAHHlAAxMhdqIX",frameCount:"_1zOUMqv9j6aMSOtKpymG7Y"}},6:function(e,t,n){e.exports={container:"_2N_047lwZK0Ygpe3gWRWNi",heading:"_1F-rGOPHUxRmDR2oHAxZ_E",items:"_3ei9w944mB2nDxC2bjfiLm",row:"_39t8_CaNsv34vcAPjp_l-g",title:"_1SsucuRagTV9x6Vwj1BLds",data:"_3K9iCJD5cK4r8h-J7yyHYK"}},93:function(e,t,n){e.exports={memoryGameControls:"_1mEabh8ffvJrwwEzZxbhd1"}},97:function(e,t,n){e.exports={gameBoardContainer:"_2lkia-blKM_HxgDTNlrPSJ"}},98:function(e,t,n){e.exports={container:"_2qLE2mJclH2Hkc4jr2uo-T"}}},[[104,2,1]]]);
//# sourceMappingURL=main.15b422c9.chunk.js.map