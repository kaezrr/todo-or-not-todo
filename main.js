(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap);"]),i.push([t.id,"* {\n    box-sizing: border-box;\n    color: #f5efe7;\n    font-family: 'Montserrat', sans-serif;\n    transition: all 0.3s ease;\n}\n\nbody {\n    margin: 0;\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    background-color: #f0f4f8;\n}\n\n.project-list {\n    background-color: #505168;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    padding-left: 20px;\n    transition: all 0.3s ease;\n}\n\nh1 {\n    font-weight: 500;\n    margin-bottom: 0;\n    color: #f5efe7;\n}\n\n#project-display > h1 {\n    margin: 0;\n    color: #f5efe7;\n}\n\n.new-project {\n    display: flex;\n    gap: 20px;\n}\n\n.new-project > input {\n    color: #213555;\n    padding: 10px;\n    width: 60%;\n    border-radius: 5px;\n    border: 2px solid #d8c4b6;\n    background-color: #f5efe7;\n    font-size: 14px;\n}\n\nbutton {\n    background-color: #45364b;\n    border-radius: 20px;\n    padding: 5px 15px;\n    border: none;\n    cursor: pointer;\n    font-weight: 600;\n    transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n    background-color: #2d2327;\n    color: white;\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-card {\n    font-size: 1.1rem;\n    margin-right: 20px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 2px solid #d8c4b6;\n    border-radius: 10px;\n    transition:\n        transform 0.3s ease,\n        background-color 0.3s ease;\n}\n\n.project-card:hover {\n    background-color: #364156;\n    transform: translateY(-5px);\n}\n\n.project-card:not(:last-child),\n.todo-item:not(:last-child) {\n    margin-bottom: 20px;\n}\n\n.todo-list {\n    background-color: #27233a;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 5%;\n}\n\n#project-display {\n    width: 60%;\n    min-height: 80%;\n    border-radius: 10px;\n    border: 3px solid #d8c4b6;\n    padding: 20px;\n    background-color: #505168;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n    opacity: 0;\n    transform: translateY(-20px);\n    animation: fadeInUp 0.5s forwards;\n}\n\n#todo-list {\n    flex: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-item {\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;\n    align-items: center;\n    padding: 10px;\n    border-radius: 10px;\n    background-color: #212d40;\n    opacity: 0;\n    transform: translateY(20px);\n    animation: fadeIn 0.4s forwards;\n}\n\n.todo-item.expanded {\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;\n    align-items: center;\n}\n\n.todo-item.expanded .desc {\n    font-size: 14px;\n    padding: 10px;\n}\n\n.desc {\n    grid-column: 1 / 3;\n}\n\n.todo-item p:first-of-type {\n    padding: 0px 6%;\n}\n\n.todo-item p:last-of-type {\n    grid-column: 4/ 6;\n    justify-self: center;\n}\n\n.todo-item p {\n    padding: 0px 5px;\n    margin: 0px;\n    font-size: 13px;\n}\n\n.todo-item > h3 {\n    font-size: 20px;\n    font-weight: 500;\n    margin: 10px 0;\n    transition: text-decoration 0.3s ease;\n}\n\n.todo-item input[type='checkbox']:checked + h3 {\n    text-decoration: line-through;\n    color: #b0b0b0;\n}\n\ndialog {\n    background-color: #212d40;\n    border-radius: 10px;\n    padding: 20px;\n    width: 350px;\n    border: none;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n    transform: scale(0.8);\n    opacity: 0;\n    transition:\n        transform 0.3s ease-out,\n        opacity 0.3s ease-out;\n}\n\ndialog[open] {\n    transform: scale(1);\n    opacity: 1;\n}\n\ndialog::backdrop {\n    background: rgba(0, 0, 0, 0.5);\n    animation: fadeIn 0.3s ease-in-out;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n}\n\nform label {\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\nform input {\n    padding: 8px;\n    border: 2px solid #ccc;\n    border-radius: 5px;\n    font-size: 1rem;\n    background-color: #f5efe7;\n    color: black;\n}\n\nform input:focus {\n    outline: none;\n    border-color: #007bff;\n}\n\nform button {\n    padding: 10px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: background 0.2s ease-in-out;\n}\n\n#submit-form {\n    background: #28a745;\n    color: white;\n}\n\n#cancel-form {\n    background: #dc3545;\n    color: white;\n}\n\n#submit-form:hover {\n    background: #218838;\n}\n\n#cancel-form:hover {\n    background: #c82333;\n}\n\n@keyframes fadeIn {\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes fadeInUp {\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.todo-item > button:not(:last-child) {\n    margin-right: 1em;\n}\n",""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var m=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),c=n.n(s),d=n(56),u=n.n(d),l=n(540),m=n.n(l),f=n(113),h=n.n(f),p=n(208),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;class b{constructor(t,e,n,r,a=!1){this.title=t,this.desc=e||"No description provided.",this.dueDate=n||new Date,this.priority=r||"None",this.done=a,this.expanded=!1}update(t,e,n,r){this.title=t,this.desc=e||"No description provided.",this.dueDate=n||new Date,this.priority=r||"None"}}function y(t,e,n,r){t[e][n].update(r.title,r.desc,r.dueDate,r.priority),localStorage.setItem("projects",JSON.stringify(t))}const w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function x(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const v={date:x({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:x({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:x({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const S={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function E(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}const j={ordinalNumber:(P={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(P.matchPattern);if(!n)return null;const r=n[0],a=t.match(P.parsePattern);if(!a)return null;let o=P.valueCallback?P.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var P;const C={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=w[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(t,e,n,r)=>k[t],localize:S,match:j,options:{weekStartsOn:0,firstWeekContainsDate:1}};let D={};function W(){return D}Math.pow(10,8);const T=6048e5,N=Symbol.for("constructDateFrom");function I(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&N in t?t[N](e):t instanceof Date?new t.constructor(e):new Date(e)}function O(t,e){return I(e||t,t)}function Y(t){const e=O(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function L(t,e){const n=O(t,e?.in);return n.setHours(0,0,0,0),n}function q(t,e){const n=O(t,e?.in);return function(t,e,n){const[r,a]=function(t,...e){const n=I.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=L(r),i=L(a),s=+o-Y(o),c=+i-Y(i);return Math.round((s-c)/864e5)}(n,function(t,e){const n=O(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function B(t,e){const n=W(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=O(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function F(t,e){return B(t,{...e,weekStartsOn:1})}function z(t,e){const n=O(t,e?.in),r=n.getFullYear(),a=I(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=F(a),i=I(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=F(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function H(t,e){const n=O(t,e?.in),r=+F(n)-+function(t,e){const n=z(t,e),r=I(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),F(r)}(n);return Math.round(r/T)+1}function A(t,e){const n=O(t,e?.in),r=n.getFullYear(),a=W(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=I(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=B(i,e),c=I(e?.in||t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=B(c,e);return+n>=+s?r+1:+n>=+d?r:r-1}function Q(t,e){const n=O(t,e?.in),r=+B(n,e)-+function(t,e){const n=W(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=A(t,e),o=I(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),B(o,e)}(n,e);return Math.round(r/T)+1}function G(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const J={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return G("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):G(n+1,2)},d:(t,e)=>G(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>G(t.getHours()%12||12,e.length),H:(t,e)=>G(t.getHours(),e.length),m:(t,e)=>G(t.getMinutes(),e.length),s:(t,e)=>G(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return G(Math.trunc(r*Math.pow(10,n-3)),e.length)}},X={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return J.y(t,e)},Y:function(t,e,n,r){const a=A(t,r),o=a>0?a:1-a;return"YY"===e?G(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):G(o,e.length)},R:function(t,e){return G(z(t),e.length)},u:function(t,e){return G(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return G(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return G(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return J.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return G(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Q(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):G(a,e.length)},I:function(t,e,n){const r=H(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):G(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):J.d(t,e)},D:function(t,e,n){const r=q(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):G(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return G(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return G(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return G(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return J.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):J.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):J.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):J.s(t,e)},S:function(t,e){return J.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return U(r);case"XXXX":case"XX":return R(r);default:return R(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return U(r);case"xxxx":case"xx":return R(r);default:return R(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+$(r,":");default:return"GMT"+R(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+$(r,":");default:return"GMT"+R(r,":")}},t:function(t,e,n){return G(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return G(+t,e.length)}};function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+G(o,2)}function U(t,e){return t%60==0?(t>0?"-":"+")+G(Math.abs(t)/60,2):R(t,e)}function R(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+G(Math.trunc(r/60),2)+e+G(r%60,2)}const V=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},K=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Z={p:K,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return V(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",V(r,e)).replace("{{time}}",K(a,e))}},_=/^D+$/,tt=/^Y+$/,et=["D","DD","YY","YYYY"];function nt(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+O(t)));var e}const rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,it=/''/g,st=/[a-zA-Z]/;function ct(t,e,n){const r=W(),a=n?.locale??r.locale??C,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=O(t,n?.in);if(!nt(s))throw new RangeError("Invalid time value");let c=e.match(at).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,Z[e])(t,a.formatLong):t})).join("").match(rt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:dt(t)};if(X[e])return{isToken:!0,value:t};if(e.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return tt.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return _.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),et.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,X[o[0]])(s,o,a.localize,d)})).join("")}function dt(t){const e=t.match(ot);return e?e[1].replace(it,"'"):t}function ut(t,e){t.replaceChildren();for(let n in e){let e=document.createElement("div"),r=document.createElement("p"),a=document.createElement("button");e.classList="project-card",r.textContent=n,r.classList="project-card-name",a.textContent="delete",a.dataset.key=n,a.classList="del-project",e.append(r),e.append(a),t.appendChild(e)}}function lt(t,e){const n=document.getElementById("project-display");n.replaceChildren();const r=document.createElement("h1");r.textContent=e,n.append(r);const a=document.createElement("div");a.id="todo-list",t[e].forEach(((n,r)=>{a.append(function(t,e,n,r){const a=document.createElement("div");a.classList="todo-item";const o=document.createElement("input");o.type="checkbox",o.name="item-done",o.checked=e.done,o.addEventListener("click",(a=>{e.done=a.target.checked,y(t,n,r,e)}));const i=document.createElement("h3");i.textContent=e.title;const s=document.createElement("button");s.textContent="more",s.classList="more",s.dataset.project=n,s.dataset.index=r;const c=document.createElement("button");c.textContent="edit",c.classList="edit",c.dataset.project=n,c.dataset.index=r;const d=document.createElement("button");if(d.textContent="delete",d.classList="delete",d.dataset.project=n,d.dataset.index=r,a.append(o,i,s,c,d),e.expanded){s.classList="less",s.textContent="less",a.classList+=" expanded";const t=document.createElement("p");t.classList="desc",t.textContent=e.desc;const n=document.createElement("p");n.textContent=ct(e.dueDate,"dd MMM y");const r=document.createElement("p");r.textContent=`Priority: ${e.priority}`,a.append(t,n,r)}return a}(t,n,e,r))}));const o=document.createElement("button");o.id="add-todo",o.textContent="New Item",o.addEventListener("click",(t=>{document.querySelector("dialog").showModal()})),n.append(a),n.append(o)}function mt(){const t=document.getElementById("project-display");t.replaceChildren();const e=document.createElement("h1");e.textContent="Select a project",t.append(e)}let ft={};const ht=document.getElementById("projects");if(localStorage.getItem("projects")){ft=JSON.parse(localStorage.getItem("projects"));for(let t in ft)for(let e of ft[t])e.update=function(t,e,n,r){this.title=t,this.desc=e||"No description provided.",this.dueDate=n||new Date,this.priority=r||"None"}}ut(ht,ft),mt();const pt=document.querySelector("form");document.getElementById("cancel-form").addEventListener("click",(t=>{document.querySelector("dialog").close(),pt.dataset.edit=!1,pt.reset()})),pt.addEventListener("submit",(t=>{const e=document.querySelector("#project-display > h1").textContent;"true"===pt.dataset.edit?(function(t,e,n){const r=document.getElementById("title").value,a=document.getElementById("about").value,o=document.getElementById("date").value,i=document.getElementById("priority").value;y(t,e,n,new b(r,a,o,i))}(ft,e,pt.dataset.index),pt.dataset.edit=!1):function(t,e){const n=document.getElementById("title").value,r=document.getElementById("about").value,a=document.getElementById("date").value,o=document.getElementById("priority").value;!function(t,e,n){t[e].push(n),localStorage.setItem("projects",JSON.stringify(t))}(t,e,new b(n,r,a,o))}(ft,e),lt(ft,e),pt.reset()})),ht.addEventListener("click",(t=>{switch(t.target.className){case"del-project":return function(t,e){e in t?(delete t[e],localStorage.setItem("projects",JSON.stringify(t))):alert("Project with name does not exist!")}(ft,t.target.dataset.key),ut(ht,ft),void mt();case"project-card-name":return void lt(ft,t.target.textContent);case"project-card":return void lt(ft,t.target.querySelector("p").textContent)}}));const gt=document.getElementById("new-project-name");document.querySelector(".new-project > button").addEventListener("click",(t=>{(function(t,e){return e in t||""===e?(alert("Project cannot be duplicate or blank!"),!1):(t[e]=[],localStorage.setItem("projects",JSON.stringify(t)),!0)})(ft,gt.value)&&(gt.value="",ut(ht,ft))})),document.getElementById("project-display").addEventListener("click",(t=>{const e=t.target;switch(e.className){case"delete":return function(t,e,n){t[e].splice(n,1),localStorage.setItem("projects",JSON.stringify(t))}(ft,e.dataset.project,e.dataset.index),void lt(ft,e.dataset.project);case"more":return ft[e.dataset.project][e.dataset.index].expanded=!0,void lt(ft,e.dataset.project);case"less":return ft[e.dataset.project][e.dataset.index].expanded=!1,void lt(ft,e.dataset.project);case"edit":return pt.dataset.edit=!0,function(t,e,n){const r=t[e][n];document.getElementById("title").value=r.title,document.getElementById("about").value=r.desc,document.getElementById("date").value=ct(r.dueDate,"yyyy-MM-dd"),document.getElementById("priority").value=r.priority}(ft,e.dataset.project,e.dataset.index),document.querySelector("dialog").showModal(),void(pt.dataset.index=e.dataset.index)}}))})();