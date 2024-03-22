import{u as v,p as $,a as V,f as D}from"./links.813d802e.js";import{l as M}from"./license.e3b96863.js";import{N as R}from"./Network.0876646e.js";import{C as x}from"./Card.68c5f6b2.js";import{T as O}from"./ToolsSettings.a38aaf5f.js";import{B as I}from"./Checkbox.f60a350d.js";import{C as E,S as H}from"./Caret.13c1041f.js";import{C as F}from"./Index.39eb7788.js";import{C as z}from"./SettingsRow.6980606f.js";import{G as j,a as P}from"./Row.cd3858a9.js";import{y as a,o as n,c as m,D as r,m as o,l as p,E as d,t as l,d as g,a as _,F as Y,L as G,H as q,I as C}from"./vue.esm-bundler.7598fd57.js";import{_ as w}from"./_plugin-vue_export-helper.c114f5e4.js";import{S as J}from"./Checkmark.1f5c43de.js";import{C as K}from"./Blur.dfbd44b9.js";import{C as Q}from"./Index.bc260cfc.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.5519e7e6.js";import"./upperFirst.67708519.js";import"./_stringToArray.4de3b1f3.js";import"./toString.8b13982a.js";import"./Tooltip.446bcf89.js";import"./index.dfdc56df.js";import"./Slide.8d21c232.js";import"./addons.6651d172.js";import"./allowed.ea569dbe.js";import"./constants.2883a7a9.js";const W={setup(){return{rootStore:v(),toolsStore:$()}},components:{BaseCheckbox:I,CoreAlert:E,CoreModal:F,CoreSettingsRow:z,GridColumn:j,GridRow:P,SvgClose:H},mixins:[O],props:{site:Object},data(){return{showSuccess:!1,showModal:!1,loading:!1,options:{},strings:{selectSettings:this.$t.__("Select Settings",this.$td),selectSettingsToReset:this.$t.__("Select settings that you would like to reset:",this.$td),resetSelectedSettings:this.$t.__("Reset Selected Settings to Default",this.$td),resetSuccess:this.$t.__("Your settings have been reset successfully!",this.$td),areYouSureReset:this.$t.__("Are you sure you want to reset the selected settings to default?",this.$td),actionCannotBeUndone:this.$t.sprintf(this.$t.__("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.",this.$td),"<strong>","</strong>"),yesIHaveBackup:this.$t.__("Yes, I have a backup and want to reset the settings",this.$td),noBackup:this.$t.__("No, I need to make a backup",this.$td),allSettings:this.$t.sprintf(this.$t.__("All %1$s Settings",this.$td),"AIOSEO")}}},computed:{canReset(){if(this.rootStore.aioseo.data.isNetworkAdmin&&!this.site)return!1;const s=[];return Object.keys(this.options).forEach(t=>{s.push(this.options[t])}),!s.some(t=>t)}},methods:{noMakeBackup(){this.rootStore.navigate.scroll="aioseo-backup-settings",this.rootStore.navigate.highlight="aioseo-backup-settings",this.$router.push({name:"import-export"})},processResetSettings(){const s=[];this.options.all?this.toolsSettings.filter(t=>t.value!=="all").forEach(t=>{s.push(t.value)}):Object.keys(this.options).forEach(t=>{this.options[t]&&s.push(t)}),this.loading=!0,this.toolsStore.resetSettings({payload:s,siteId:this.site?this.site.blog_id:null}).then(()=>{this.showModal=!1,this.loading=!1,this.showSuccess=!0,this.options={},setTimeout(()=>{this.showSuccess=!1},5e3)})}}},X={class:"aioseo-core-reset-settings"},Z={class:"reset-settings"},ee=_("br",null,null,-1),te=_("br",null,null,-1),se={class:"aioseo-modal-body"},oe=["innerHTML"];function ie(s,t,y,c,e,i){const S=a("core-alert"),u=a("base-checkbox"),f=a("grid-column"),L=a("grid-row"),b=a("base-button"),k=a("core-settings-row"),B=a("svg-close"),U=a("core-modal");return n(),m("div",X,[r(k,{name:e.strings.selectSettings,class:"no-border"},{content:o(()=>[e.showSuccess?(n(),p(S,{key:0,class:"reset-success",type:"green"},{default:o(()=>[d(l(e.strings.resetSuccess),1)]),_:1})):g("",!0),_("div",Z,[d(l(e.strings.selectSettingsToReset)+" ",1),ee,te,r(L,{class:"settings"},{default:o(()=>[r(f,null,{default:o(()=>[r(u,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":t[0]||(t[0]=h=>e.options.all=h),disabled:c.rootStore.aioseo.data.isNetworkAdmin&&!y.site},{default:o(()=>[d(l(e.strings.allSettings),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(n(!0),m(Y,null,G(s.toolsSettings,(h,A)=>(n(),p(f,{key:A,xl:"3",md:"4",sm:"6"},{default:o(()=>[e.options.all?g("",!0):(n(),p(u,{key:0,size:"medium",modelValue:e.options[h.value],"onUpdate:modelValue":N=>e.options[h.value]=N,disabled:c.rootStore.aioseo.data.isNetworkAdmin&&!y.site},{default:o(()=>[d(l(h.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),h.value!=="all"&&e.options.all?(n(),p(u,{key:1,size:"medium",modelValue:!0,disabled:""},{default:o(()=>[d(l(h.label),1)]),_:2},1024)):g("",!0)]),_:2},1024))),128))]),_:1}),r(b,{type:"gray",size:"medium",onClick:t[1]||(t[1]=h=>e.showModal=!0),disabled:i.canReset},{default:o(()=>[d(l(e.strings.resetSelectedSettings),1)]),_:1},8,["disabled"])])]),_:1},8,["name"]),r(U,{show:e.showModal,"no-header":"",onClose:t[4]||(t[4]=h=>e.showModal=!1),classes:["aioseo-core-reset-settings-modal"]},{body:o(()=>[_("div",se,[_("button",{class:"close",onClick:t[3]||(t[3]=q(h=>e.showModal=!1,["stop"]))},[r(B,{onClick:t[2]||(t[2]=h=>e.showModal=!1)})]),_("h3",null,l(e.strings.areYouSureReset),1),_("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,oe),r(b,{type:"blue",size:"medium",onClick:i.processResetSettings,loading:e.loading},{default:o(()=>[d(l(e.strings.yesIHaveBackup),1)]),_:1},8,["onClick","loading"]),r(b,{type:"gray",size:"medium",onClick:i.noMakeBackup},{default:o(()=>[d(l(e.strings.noBackup),1)]),_:1},8,["onClick"])])]),_:1},8,["show"])])}const T=w(W,[["render",ie]]);const re={setup(){return{optionsStore:V(),rootStore:v(),toolsStore:$()}},mixins:[R],components:{CoreCard:x,CoreResetSettings:T,CoreSettingsRow:z,SvgCheckmark:J},data(){return{site:null,selectedSite:null,clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},loadingLog:null,strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td)}}},watch:{site(s){this.selectedSite=this.rootStore.aioseo.data.network.sites.sites.find(t=>this.getUniqueSiteId(t)===s.value)}},computed:{canReset(){const s=[];return Object.keys(this.options).forEach(t=>{s.push(this.options[t])}),!s.some(t=>t)},showLogs(){return!this.rootStore.aioseo.data.isNetworkAdmin&&(this.showBadBotBlockerLogs||this.rootStore.aioseo.data.logSizes.redirectLogs||this.rootStore.aioseo.data.logSizes.logs404)},showBadBotBlockerLogs(){return this.optionsStore.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")},sites(){return this.getSites.filter(s=>!s.parentDomain).map(s=>({value:this.getUniqueSiteId(s),label:`${s.domain}${s.path}`}))}},methods:{getSizeClass(s){let t="green";return 262144e3<s?t="orange":1073741274<s&&(t="red"),t},processClearLog(s){this.loadingLog=s,this.toolsStore.clearLog(s).then(()=>{this.loadingLog=null,this.clearedLogs[s]=!0})},disabledLog(s){return!this.rootStore.aioseo.data.logSizes[s].original||this.clearedLogs[s]}}},ne={class:"aioseo-tools-database-tools"},ae={key:0},le={key:1},ce={class:"log-size"},de={key:0},ge={key:1},_e={class:"log-size"},ue={key:0},he={key:1},me={class:"log-size"};function pe(s,t,y,c,e,i){const S=a("base-select"),u=a("core-settings-row"),f=a("core-reset-settings"),L=a("core-card"),b=a("svg-checkmark"),k=a("base-button");return n(),m("div",ne,[r(L,{slug:"databaseTools","header-text":e.strings.resetRestoreSettings},{default:o(()=>[c.rootStore.aioseo.data.isNetworkAdmin?(n(),p(u,{key:0,name:e.strings.selectSite},{content:o(()=>[r(S,{size:"medium",modelValue:e.site,"onUpdate:modelValue":t[0]||(t[0]=B=>e.site=B),options:i.sites},null,8,["modelValue","options"])]),_:1},8,["name"])):g("",!0),r(f,{site:e.selectedSite},null,8,["site"])]),_:1},8,["header-text"]),i.showLogs?(n(),p(L,{key:0,slug:"databaseToolsLogs","header-text":e.strings.logs},{tooltip:o(()=>[d(l(e.strings.logsTooltip),1)]),default:o(()=>[c.rootStore.aioseo.data.logSizes.logs404?(n(),p(u,{key:0,name:e.strings.logs404,align:""},{content:o(()=>[r(k,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="logs404",disabled:i.disabledLog("logs404"),onClick:t[1]||(t[1]=B=>i.processClearLog("logs404"))},{default:o(()=>[i.disabledLog("logs404")?(n(),m("span",ae,[r(b),d(" "+l(e.strings.cleared),1)])):g("",!0),i.disabledLog("logs404")?g("",!0):(n(),m("span",le,l(e.strings.clear404Logs),1))]),_:1},8,["loading","disabled"]),_("div",ce,[_("span",{class:C(["size-dot",i.getSizeClass(c.rootStore.aioseo.data.logSizes.logs404.original)])},null,2),d(" "+l(c.rootStore.aioseo.data.logSizes.logs404.readable),1)])]),_:1},8,["name"])):g("",!0),c.rootStore.aioseo.data.logSizes.redirectLogs?(n(),p(u,{key:1,name:e.strings.redirectLogs,align:""},{content:o(()=>[r(k,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="redirectLogs",disabled:i.disabledLog("redirectLogs"),onClick:t[2]||(t[2]=B=>i.processClearLog("redirectLogs"))},{default:o(()=>[i.disabledLog("redirectLogs")?(n(),m("span",de,[r(b),d(" "+l(e.strings.cleared),1)])):g("",!0),i.disabledLog("redirectLogs")?g("",!0):(n(),m("span",ge,l(e.strings.clearRedirectLogs),1))]),_:1},8,["loading","disabled"]),_("div",_e,[_("span",{class:C(["size-dot",i.getSizeClass(c.rootStore.aioseo.data.logSizes.redirectLogs.original)])},null,2),d(" "+l(c.rootStore.aioseo.data.logSizes.redirectLogs.readable),1)])]),_:1},8,["name"])):g("",!0),i.showBadBotBlockerLogs?(n(),p(u,{key:2,name:e.strings.badBotBlockerLogs,align:""},{content:o(()=>[r(k,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="badBotBlockerLog",disabled:i.disabledLog("badBotBlockerLog"),onClick:t[3]||(t[3]=B=>i.processClearLog("badBotBlockerLog"))},{default:o(()=>[i.disabledLog("badBotBlockerLog")?(n(),m("span",ue,[r(b),d(" "+l(e.strings.cleared),1)])):g("",!0),i.disabledLog("badBotBlockerLog")?g("",!0):(n(),m("span",he,l(e.strings.clearBadBotBlockerLogs),1))]),_:1},8,["loading","disabled"]),_("div",me,[_("span",{class:C(["size-dot",i.getSizeClass(c.rootStore.aioseo.data.logSizes.badBotBlockerLog.original)])},null,2),d(" "+l(c.rootStore.aioseo.data.logSizes.badBotBlockerLog.readable),1)])]),_:1},8,["name"])):g("",!0)]),_:1},8,["header-text"])):g("",!0)])}const be=w(re,[["render",pe]]);const Se={mixins:[R],components:{CoreBlur:K,CoreCard:x,CoreResetSettings:T,CoreSettingsRow:z,Cta:Q},data(){return{strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Network Tools is a %1$s Feature",this.$td),"PRO"),ctaButtonText:this.$t.__("Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},ke={class:"aioseo-tools-database-tools"};function fe(s,t,y,c,e,i){const S=a("base-select"),u=a("core-settings-row"),f=a("core-reset-settings"),L=a("core-blur"),b=a("cta"),k=a("core-card");return n(),m("div",ke,[r(k,{slug:"databaseTools","header-text":e.strings.resetRestoreSettings},{default:o(()=>[r(L,null,{default:o(()=>[r(u,{name:e.strings.selectSite},{content:o(()=>[r(S,{size:"medium",modelValue:{value:"",label:""},options:[]})]),_:1},8,["name"]),r(f)]),_:1}),r(b,{"cta-link":s.$links.getPricingUrl("network-tools","database-tools"),"button-text":e.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("network-tools","database-tools",s.$isPro?"pricing":"liteUpgrade")},{"header-text":o(()=>[d(l(e.strings.ctaHeader),1)]),description:o(()=>[d(l(e.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])]),_:1},8,["header-text"])])}const Le=w(Se,[["render",fe]]),Be={setup(){return{licenseStore:D(),rootStore:v()}},components:{DatabaseTools:be,LiteDatabaseTools:Le},data(){return{license:M}}};function ye(s,t,y,c,e,i){const S=a("database-tools",!0),u=a("lite-database-tools");return n(),m("div",null,[!c.rootStore.aioseo.data.isNetworkAdmin||!c.licenseStore.isUnlicensed&&e.license.hasCoreFeature("tools","network-tools-database")?(n(),p(S,{key:0})):g("",!0),c.rootStore.aioseo.data.isNetworkAdmin&&(c.licenseStore.isUnlicensed||!e.license.hasCoreFeature("tools","network-tools-database"))?(n(),p(u,{key:1})):g("",!0)])}const Qe=w(Be,[["render",ye]]);export{Qe as default};
