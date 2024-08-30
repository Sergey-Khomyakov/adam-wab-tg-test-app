import{r as _,j as le}from"./index-hh1UCnD3.js";var he=Object.defineProperty,fe=(t,e,r)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,p=(t,e,r)=>(fe(t,typeof e!="symbol"?e+"":e,r),r);function G(t,e){let r;const n=()=>{r!==void 0&&e&&e(r),r=void 0};return[()=>r===void 0?r=t(n):r,n]}function z(t){const e=k(),{count:r}=e;e.unsubscribe(t),r&&!e.count&&xe()}function _e(t){return k().subscribe(t),()=>z(t)}class de{constructor(e,r={}){this.scope=e,this.options=r}print(e,...r){const n=new Date,s=Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,timeZone:"UTC"}).format(n),{textColor:o,bgColor:c}=this.options,i="font-weight: bold;padding: 0 5px;border-radius:5px";console[e](`%c${s}%c / %c${this.scope}`,`${i};background-color: lightblue;color:black`,"",`${i};${o?`color:${o};`:""}${c?`background-color:${c}`:""}`,...r)}error(...e){this.print("error",...e)}log(...e){this.print("log",...e)}}const O=new de("SDK",{bgColor:"forestgreen",textColor:"white"});let x=!1;const j=({name:t,payload:e})=>{O.log("Event received:",e?{name:t,payload:e}:{name:t})};function be(t){x!==t&&(x=t,t?_e(j):z(j))}function me(...t){x&&O.log(...t)}class I{constructor(){p(this,"listeners",new Map),p(this,"listenersCount",0),p(this,"subscribeListeners",[])}clear(){this.listeners.clear(),this.subscribeListeners=[]}get count(){return this.listenersCount+this.subscribeListeners.length}emit(e,...r){this.subscribeListeners.forEach(n=>n({event:e,args:r})),(this.listeners.get(e)||[]).forEach(([n,s])=>{n(...r),s&&this.off(e,n)})}on(e,r,n){let s=this.listeners.get(e);return s||this.listeners.set(e,s=[]),s.push([r,n]),this.listenersCount+=1,()=>this.off(e,r)}off(e,r){const n=this.listeners.get(e)||[];for(let s=0;s<n.length;s+=1)if(r===n[s][0]){n.splice(s,1),this.listenersCount-=1;return}}subscribe(e){return this.subscribeListeners.push(e),()=>this.unsubscribe(e)}unsubscribe(e){for(let r=0;r<this.subscribeListeners.length;r+=1)if(this.subscribeListeners[r]===e){this.subscribeListeners.splice(r,1);return}}}function H(t,e,r){return window.addEventListener(t,e,r),()=>window.removeEventListener(t,e,r)}function W(...t){let e=!1;const r=t.flat(1);return[n=>!e&&r.push(n),()=>{e||(e=!0,r.forEach(n=>n()))},e]}class $ extends Error{constructor(e,r,n){super(r,{cause:n}),this.type=e,Object.setPrototypeOf(this,$.prototype)}}function w(t,e,r){return new $(t,e,r)}const we="ERR_METHOD_UNSUPPORTED",ge="ERR_METHOD_PARAMETER_UNSUPPORTED",ye="ERR_UNKNOWN_ENV",ve="ERR_INVOKE_CUSTOM_METHOD_RESPONSE",Ee="ERR_TIMED_OUT",Pe="ERR_UNEXPECTED_TYPE",K="ERR_PARSE";function A(){return w(Pe,"Value has unexpected type")}class N{constructor(e,r,n){this.parser=e,this.isOptional=r,this.type=n}parse(e){if(!(this.isOptional&&e===void 0))try{return this.parser(e)}catch(r){throw w(K,`Unable to parse value${this.type?` as ${this.type}`:""}`,r)}}optional(){return this.isOptional=!0,this}}function v(t,e){return()=>new N(t,!1,e)}const b=v(t=>{if(typeof t=="boolean")return t;const e=String(t);if(e==="1"||e==="true")return!0;if(e==="0"||e==="false")return!1;throw A()},"boolean");function Q(t,e){const r={};for(const n in t){const s=t[n];if(!s)continue;let o,c;if(typeof s=="function"||"parse"in s)o=n,c=typeof s=="function"?s:s.parse.bind(s);else{const{type:i}=s;o=s.from||n,c=typeof i=="function"?i:i.parse.bind(i)}try{const i=c(e(o));i!==void 0&&(r[n]=i)}catch(i){throw w(K,`Unable to parse field "${n}"`,i)}}return r}function Y(t){let e=t;if(typeof e=="string"&&(e=JSON.parse(e)),typeof e!="object"||e===null||Array.isArray(e))throw A();return e}function m(t,e){return new N(r=>{const n=Y(r);return Q(t,s=>n[s])},!1,e)}const g=v(t=>{if(typeof t=="number")return t;if(typeof t=="string"){const e=Number(t);if(!Number.isNaN(e))return e}throw A()},"number"),a=v(t=>{if(typeof t=="string"||typeof t=="number")return t.toString();throw A()},"string");function Ae(t){return m({eventType:a(),eventData:e=>e}).parse(t)}function qe(){["TelegramGameProxy_receiveEvent","TelegramGameProxy","Telegram"].forEach(t=>{delete window[t]})}function Ce(t,e){window.dispatchEvent(new MessageEvent("message",{data:JSON.stringify({eventType:t,eventData:e}),source:window.parent}))}function Te(){[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach(t=>{let e=window;t.forEach((r,n,s)=>{if(n===s.length-1){e[r]=Ce;return}r in e||(e[r]={}),e=e[r]})})}const Re={clipboard_text_received:m({req_id:a(),data:t=>t===null?t:a().optional().parse(t)}),custom_method_invoked:m({req_id:a(),result:t=>t,error:a().optional()}),popup_closed:{parse(t){return m({button_id:e=>e==null?void 0:a().parse(e)}).parse(t??{})}},viewport_changed:m({height:g(),width:t=>t==null?window.innerWidth:g().parse(t),is_state_stable:b(),is_expanded:b()})};function ke(){const t=new I,e=new I;e.subscribe(n=>{t.emit("event",{name:n.event,payload:n.args[0]})}),Te();const[,r]=W(qe,H("resize",()=>{e.emit("viewport_changed",{width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0})}),H("message",n=>{if(n.source!==window.parent)return;let s;try{s=Ae(n.data)}catch{return}const{eventType:o,eventData:c}=s,i=Re[o];try{const u=i?i.parse(c):c;e.emit(...u?[o,u]:[o])}catch(u){O.error(`An error occurred processing the "${o}" event from the Telegram application.
Please, file an issue here:
https://github.com/Telegram-Mini-Apps/telegram-apps/issues/new/choose`,s,u)}}),()=>t.clear(),()=>e.clear());return[{on:e.on.bind(e),off:e.off.bind(e),subscribe(n){return t.on("event",n)},unsubscribe(n){t.off("event",n)},get count(){return e.count+t.count}},r]}const[Se,xe]=G(t=>{const[e,r]=ke(),n=e.off.bind(e);return e.off=(s,o)=>{const{count:c}=e;n(s,o),c&&!e.count&&t()},[e,r]},([,t])=>t());function k(){return Se()[0]}function Ie(t,e){k().off(t,e)}function C(t,e,r){return k().on(t,e,r)}function M(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}function De(t,e){const r=t.split("."),n=e.split("."),s=Math.max(r.length,n.length);for(let o=0;o<s;o+=1){const c=parseInt(r[o]||"0",10),i=parseInt(n[o]||"0",10);if(c!==i)return c>i?1:-1}return 0}function f(t,e){return De(t,e)<=0}function T(t,e,r){if(typeof r=="string"){if(t==="web_app_open_link"){if(e==="try_instant_view")return f("6.4",r);if(e==="try_browser")return f("7.6",r)}if(t==="web_app_set_header_color"&&e==="color")return f("6.9",r);if(t==="web_app_close"&&e==="return_back")return f("7.6",r)}switch(t){case"web_app_open_tg_link":case"web_app_open_invoice":case"web_app_setup_back_button":case"web_app_set_background_color":case"web_app_set_header_color":case"web_app_trigger_haptic_feedback":return f("6.1",e);case"web_app_open_popup":return f("6.2",e);case"web_app_close_scan_qr_popup":case"web_app_open_scan_qr_popup":case"web_app_read_text_from_clipboard":return f("6.4",e);case"web_app_switch_inline_query":return f("6.7",e);case"web_app_invoke_custom_method":case"web_app_request_write_access":case"web_app_request_phone":return f("6.9",e);case"web_app_setup_settings_button":return f("6.10",e);case"web_app_biometry_get_info":case"web_app_biometry_open_settings":case"web_app_biometry_request_access":case"web_app_biometry_request_auth":case"web_app_biometry_update_token":return f("7.2",e);case"web_app_setup_swipe_behavior":return f("7.7",e);default:return["iframe_ready","iframe_will_reload","web_app_close","web_app_data_send","web_app_expand","web_app_open_link","web_app_ready","web_app_request_theme","web_app_request_viewport","web_app_setup_main_button","web_app_setup_closing_behavior"].includes(t)}}function Oe(t){return"external"in t&&M(t.external)&&"notify"in t.external&&typeof t.external.notify=="function"}function We(t){return"TelegramWebviewProxy"in t&&M(t.TelegramWebviewProxy)&&"postEvent"in t.TelegramWebviewProxy&&typeof t.TelegramWebviewProxy.postEvent=="function"}function Z(){try{return window.self!==window.top}catch{return!0}}const $e="https://web.telegram.org";let Ne=$e;function Me(){return Ne}function R(t,e,r){let n={},s;if(!e&&!r?n={}:e&&r?(n=r,s=e):e&&("targetOrigin"in e?n=e:s=e),me("Posting event:",s?{event:t,data:s}:{event:t}),Z())return window.parent.postMessage(JSON.stringify({eventType:t,eventData:s}),n.targetOrigin||Me());if(Oe(window)){window.external.notify(JSON.stringify({eventType:t,eventData:s}));return}if(We(window)){window.TelegramWebviewProxy.postEvent(t,JSON.stringify(s));return}throw w(ye,"Unable to determine current environment and possible way to send event. You are probably trying to use Mini Apps method outside the Telegram application environment.")}function Ue(t){return(e,r)=>{if(!T(e,t))throw w(we,`Method "${e}" is unsupported in Mini Apps version ${t}`);if(M(r)&&e==="web_app_set_header_color"&&"color"in r&&!T(e,"color",t))throw w(ge,`Parameter "color" of "${e}" method is unsupported in Mini Apps version ${t}`);return R(e,r)}}function Le(t){return({req_id:e})=>e===t}function F(t){return w(Ee,`Timeout reached: ${t}ms`)}function X(t,e){return Promise.race([typeof t=="function"?t():t,new Promise((r,n)=>{setTimeout(()=>{n(F(e))},e)})])}async function D(t){let e;const r=new Promise(i=>e=i),{event:n,capture:s,timeout:o}=t,[,c]=W((Array.isArray(n)?n:[n]).map(i=>C(i,u=>{(!s||(Array.isArray(n)?s({event:i,payload:u}):s(u)))&&e(u)})));try{return(t.postEvent||R)(t.method,t.params),await(o?X(r,o):r)}finally{c()}}async function Ve(t,e,r,n={}){const{result:s,error:o}=await D({...n,method:"web_app_invoke_custom_method",event:"custom_method_invoked",params:{method:t,params:e,req_id:r},capture:Le(r)});if(o)throw w(ve,o);return s}function ee(t){return/^#[\da-f]{6}$/i.test(t)}function Be(t){return/^#[\da-f]{3}$/i.test(t)}function te(t){const e=t.replace(/\s/g,"").toLowerCase();if(ee(e))return e;if(Be(e)){let n="#";for(let s=0;s<3;s+=1)n+=e[1+s].repeat(2);return n}const r=e.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||e.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(!r)throw new Error(`Value "${t}" does not satisfy any of known RGB formats.`);return r.slice(1).reduce((n,s)=>{const o=parseInt(s,10).toString(16);return n+(o.length===1?"0":"")+o},"#")}function je(t){const e=te(t);return Math.sqrt([.299,.587,.114].reduce((r,n,s)=>{const o=parseInt(e.slice(1+s*2,1+(s+1)*2),16);return r+o*o*n},0))<120}class He{constructor(e){p(this,"ee",new I),p(this,"on",this.ee.on.bind(this.ee)),p(this,"off",this.ee.off.bind(this.ee)),this.state=e}clone(){return{...this.state}}set(e,r){Object.entries(typeof e=="string"?{[e]:r}:e).reduce((n,[s,o])=>this.state[s]===o||o===void 0?n:(this.state[s]=o,this.ee.emit(`change:${s}`,o),!0),!1)&&this.ee.emit("change",this.state)}get(e){return this.state[e]}}class Je{constructor(e){p(this,"state"),p(this,"get"),p(this,"set"),p(this,"clone"),this.state=new He(e),this.set=this.state.set.bind(this.state),this.get=this.state.get.bind(this.state),this.clone=this.state.clone.bind(this.state)}}function Ge(t,e){return r=>T(e[r],t)}class re extends Je{constructor(e,r,n){super(e),p(this,"supports"),this.supports=Ge(r,n)}}class ze extends re{constructor(e,r,n){super({isVisible:e},r,{show:"web_app_setup_back_button",hide:"web_app_setup_back_button"}),p(this,"on",(s,o)=>s==="click"?C("back_button_pressed",o):this.state.on(s,o)),p(this,"off",(s,o)=>s==="click"?Ie("back_button_pressed",o):this.state.off(s,o)),this.postEvent=n}set isVisible(e){this.set("isVisible",e),this.postEvent("web_app_setup_back_button",{is_visible:e})}get isVisible(){return this.get("isVisible")}hide(){this.isVisible=!1}show(){this.isVisible=!0}}const ne=v(t=>t instanceof Date?t:new Date(g().parse(t)*1e3),"Date");function U(t,e){return new N(r=>{if(typeof r!="string"&&!(r instanceof URLSearchParams))throw A();const n=typeof r=="string"?new URLSearchParams(r):r;return Q(t,s=>{const o=n.get(s);return o===null?void 0:o})},!1,e)}const Ke=m({id:g(),type:a(),title:a(),photoUrl:{type:a().optional(),from:"photo_url"},username:a().optional()},"Chat").optional(),J=m({addedToAttachmentMenu:{type:b().optional(),from:"added_to_attachment_menu"},allowsWriteToPm:{type:b().optional(),from:"allows_write_to_pm"},firstName:{type:a(),from:"first_name"},id:g(),isBot:{type:b().optional(),from:"is_bot"},isPremium:{type:b().optional(),from:"is_premium"},languageCode:{type:a().optional(),from:"language_code"},lastName:{type:a().optional(),from:"last_name"},photoUrl:{type:a().optional(),from:"photo_url"},username:a().optional()},"User").optional();function Qe(){return U({authDate:{type:ne(),from:"auth_date"},canSendAfter:{type:g().optional(),from:"can_send_after"},chat:Ke,chatInstance:{type:a().optional(),from:"chat_instance"},chatType:{type:a().optional(),from:"chat_type"},hash:a(),queryId:{type:a().optional(),from:"query_id"},receiver:J,startParam:{type:a().optional(),from:"start_param"},user:J},"InitData")}const Ye=v(t=>te(a().parse(t)),"rgb");function Ze(t){return t.replace(/_[a-z]/g,e=>e[1].toUpperCase())}function Fe(t){return t.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`)}const Xe=v(t=>{const e=Ye().optional();return Object.entries(Y(t)).reduce((r,[n,s])=>(r[Ze(n)]=e.parse(s),r),{})},"ThemeParams");function se(t){return U({botInline:{type:b().optional(),from:"tgWebAppBotInline"},initData:{type:Qe().optional(),from:"tgWebAppData"},initDataRaw:{type:a().optional(),from:"tgWebAppData"},platform:{type:a(),from:"tgWebAppPlatform"},showSettings:{type:b().optional(),from:"tgWebAppShowSettings"},startParam:{type:a().optional(),from:"tgWebAppStartParam"},themeParams:{type:Xe(),from:"tgWebAppThemeParams"},version:{type:a(),from:"tgWebAppVersion"}}).parse(t)}function oe(t){return se(t.replace(/^[^?#]*[?#]/,"").replace(/[?#]/g,"&"))}function et(){return oe(window.location.href)}function ie(){return performance.getEntriesByType("navigation")[0]}function tt(){const t=ie();if(!t)throw new Error("Unable to get first navigation entry.");return oe(t.name)}function ae(t){return`telegram-apps/${t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function ce(t,e){sessionStorage.setItem(ae(t),JSON.stringify(e))}function ue(t){const e=sessionStorage.getItem(ae(t));try{return e?JSON.parse(e):void 0}catch{}}function rt(){return se(ue("launchParams")||"")}function nt(t){return JSON.stringify(Object.fromEntries(Object.entries(t).map(([e,r])=>[Fe(e),r])))}function st(t){const{initDataRaw:e,themeParams:r,platform:n,version:s,showSettings:o,startParam:c,botInline:i}=t,u=new URLSearchParams;return u.set("tgWebAppPlatform",n),u.set("tgWebAppThemeParams",nt(r)),u.set("tgWebAppVersion",s),e&&u.set("tgWebAppData",e),c&&u.set("tgWebAppStartParam",c),typeof o=="boolean"&&u.set("tgWebAppShowSettings",o?"1":"0"),typeof i=="boolean"&&u.set("tgWebAppBotInline",i?"1":"0"),u.toString()}function ot(t){ce("launchParams",st(t))}function it(){const t=[];for(const e of[et,tt,rt])try{const r=e();return ot(r),r}catch(r){t.push(r instanceof Error?r.message:JSON.stringify(r))}throw new Error([`Unable to retrieve launch parameters from any known source. Perhaps, you have opened your app outside Telegram?
`,"📖 Refer to docs for more information:",`https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/environment
`,"Collected errors:",t.map(e=>`— ${e}`)].join(`
`))}function at(){const t=ie();return!!(t&&t.type==="reload")}function ct(){let t=0;return()=>(t+=1).toString()}const[ut]=G(ct);function pe(t,e){return()=>{const r=it(),n={...r,postEvent:Ue(r.version),createRequestId:ut()};if(typeof t=="function")return t(n);const[s,o,c]=W(),i=e({...n,state:at()?ue(t):void 0,addCleanup:s}),u=l=>(c||s(l.on("change",y=>{ce(t,y)})),l);return[i instanceof Promise?i.then(u):u(i),o]}}const wt=pe("backButton",({postEvent:t,version:e,state:r={isVisible:!1}})=>new ze(r.isVisible,e,t));class pt extends re{constructor(){super(...arguments),p(this,"on",this.state.on.bind(this.state)),p(this,"off",this.state.off.bind(this.state))}}function lt(){return U({contact:m({userId:{type:g(),from:"user_id"},phoneNumber:{type:a(),from:"phone_number"},firstName:{type:a(),from:"first_name"},lastName:{type:a().optional(),from:"last_name"}}),authDate:{type:ne(),from:"auth_date"},hash:a()},"RequestedContact")}function ht(t,e){return r=>{const[n,s]=e[r];return T(n,s,t)}}function ft(t){return new Promise(e=>{setTimeout(e,t)})}class _t extends pt{constructor({postEvent:e,createRequestId:r,version:n,botInline:s,...o}){super(o,n,{requestPhoneAccess:"web_app_request_phone",requestWriteAccess:"web_app_request_write_access",switchInlineQuery:"web_app_switch_inline_query",setHeaderColor:"web_app_set_header_color",setBackgroundColor:"web_app_set_background_color"}),p(this,"botInline"),p(this,"postEvent"),p(this,"createRequestId"),p(this,"requestPhoneAccessPromise"),p(this,"requestWriteAccessPromise"),p(this,"supportsParam"),this.createRequestId=r,this.postEvent=e,this.botInline=s;const c=this.supports.bind(this);this.supports=i=>c(i)?i!=="switchInlineQuery"||s:!1,this.supportsParam=ht(n,{"setHeaderColor.color":["web_app_set_header_color","color"],"close.returnBack":["web_app_close","return_back"]})}async getRequestedContact({timeout:e=1e4}={}){return lt().parse(await Ve("getRequestedContact",{},this.createRequestId(),{postEvent:this.postEvent,timeout:e}))}get bgColor(){return this.get("bgColor")}close(e){this.postEvent("web_app_close",this.supportsParam("close.returnBack")?{return_back:e}:{})}get headerColor(){return this.get("headerColor")}get isBotInline(){return this.botInline}get isDark(){return je(this.bgColor)}ready(){this.postEvent("web_app_ready")}async requestContact({timeout:e=5e3}={}){try{return await this.getRequestedContact()}catch{}if(await this.requestPhoneAccess()!=="sent")throw new Error("Access denied.");const r=Date.now()+e;let n=50;return X(async()=>{for(;Date.now()<r;){try{return await this.getRequestedContact()}catch{}await ft(n),n+=50}throw F(e)},e)}async requestPhoneAccess(e={}){return this.requestPhoneAccessPromise||(this.requestPhoneAccessPromise=D({...e,method:"web_app_request_phone",event:"phone_requested",postEvent:this.postEvent}).then(({status:r})=>r).finally(()=>this.requestPhoneAccessPromise=void 0)),this.requestPhoneAccessPromise}async requestWriteAccess(e={}){return this.requestWriteAccessPromise||(this.requestWriteAccessPromise=D({...e,method:"web_app_request_write_access",event:"write_access_requested",postEvent:this.postEvent}).then(({status:r})=>r).finally(()=>this.requestWriteAccessPromise=void 0)),this.requestWriteAccessPromise}sendData(e){const{size:r}=new Blob([e]);if(!r||r>4096)throw new Error(`Passed data has incorrect size: ${r}`);this.postEvent("web_app_data_send",{data:e})}setHeaderColor(e){this.postEvent("web_app_set_header_color",ee(e)?{color:e}:{color_key:e}),this.set("headerColor",e)}setBgColor(e){this.postEvent("web_app_set_background_color",{color:e}),this.set("bgColor",e)}switchInlineQuery(e,r=[]){if(!this.supports("switchInlineQuery")&&!this.isBotInline)throw new Error("Method is unsupported because Mini App should be launched in inline mode.");this.postEvent("web_app_switch_inline_query",{query:e,chat_types:r})}}const gt=pe("miniApp",({themeParams:t,botInline:e=!1,state:r={bgColor:t.bgColor||"#ffffff",headerColor:t.headerBgColor||"#000000"},...n})=>new _t({...n,...r,botInline:e}));function dt(t=!0){const e=[C("reload_iframe",()=>{R("iframe_will_reload"),window.location.reload()})],r=()=>e.forEach(n=>n());if(t){const n=document.createElement("style");n.id="telegram-custom-styles",document.head.appendChild(n),e.push(C("set_custom_style",s=>{n.innerHTML=s}),()=>document.head.removeChild(n))}return R("iframe_ready",{reload_supported:!0}),r}const bt=_.createContext(void 0);function yt({children:t,acceptCustomStyles:e,debug:r}){const n=_.useRef(!0),[s,o]=_.useState(new Map),c=_.useRef(s),i=_.useCallback(l=>{n.current&&o(y=>(l&&l(y),new Map(y)))},[]),u=_.useMemo(()=>({use(l,...y){const L=s.get(l);if(L)return L;let d,S;try{d=l(...y)}catch(h){S=h}function q(h){return s.set(l,h),h}if(S)return q({error:S});let E;if(Array.isArray(d)&&(E=d[1],d=d[0]),!d)return q({result:d,cleanup:E});function V(h){if("on"in h){const P=h.on("change",()=>i()),B=E;E=()=>{B&&B(),P()}}return{result:h,cleanup:E}}return d instanceof Promise?(d.then(h=>i(P=>P.set(l,V(h))),h=>i(P=>P.set(l,{error:h}))),q({})):q(V(d))}}),[s]);return _.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),_.useEffect(()=>{if(Z())return dt(e)},[e]),_.useEffect(()=>{be(r||!1)},[r]),_.useEffect(()=>{c.current=s},[s]),_.useEffect(()=>()=>{c.current.forEach(l=>{"cleanup"in l&&l.cleanup&&l.cleanup()})},[]),le.jsx(bt.Provider,{value:u,children:t})}export{gt as d,wt as j,it as n,yt as u};
