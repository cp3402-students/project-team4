import{a as b,B as y,f as L,D as c}from"./links.813d802e.js";import{l as g}from"./license.e3b96863.js";import{C as M}from"./Caret.13c1041f.js";import{y as o,o as r,l,m as n,a as C,t as d,d as u,c as _,D as p,x as S,E as D}from"./vue.esm-bundler.7598fd57.js";import{_ as h}from"./_plugin-vue_export-helper.c114f5e4.js";import{B}from"./DatePicker.f7c04d7d.js";import{C as T}from"./Blur.dfbd44b9.js";import{C as A}from"./Index.5b098c62.js";import O from"./ContentRankings.cda5dfdf.js";import{C as J}from"./Index.bc260cfc.js";import R from"./Dashboard.958a1118.js";import N from"./KeywordRankings.b1750f62.js";import P from"./SeoStatistics.5ee156b8.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.5519e7e6.js";import"./upperFirst.67708519.js";import"./_stringToArray.4de3b1f3.js";import"./toString.8b13982a.js";import"./get.31082aba.js";import"./isUndefined.2431eba9.js";import"./_getTag.61c0a63c.js";import"./debounce.4990a8b5.js";import"./toNumber.c4afc119.js";import"./_baseTrim.8725856f.js";import"./allowed.ea569dbe.js";/* empty css             */import"./params.f0608262.js";import"./Ellipse.6b410f74.js";import"./Header.12e3b412.js";import"./addons.6651d172.js";import"./ScrollAndHighlight.b5ba47fd.js";import"./LogoGear.e54c732a.js";import"./AnimatedNumber.29f8f83e.js";import"./numbers.c7cb4085.js";import"./Logo.f0888cfa.js";import"./index.dfdc56df.js";import"./Support.0e6f0669.js";import"./Tabs.c4ec03a5.js";import"./TruSeoScore.b474bf15.js";import"./Information.8ca58f92.js";import"./Slide.8d21c232.js";import"./Url.4051e9b7.js";import"./Date.17e52d00.js";import"./constants.2883a7a9.js";import"./Exclamation.3ebc8239.js";import"./Gear.e267ac3b.js";import"./Row.cd3858a9.js";import"./PostsTable.f3e7acd8.js";import"./WpTable.7aa38f5b.js";import"./ScoreButton.aec6eb4d.js";import"./Table.8398081c.js";import"./Tooltip.446bcf89.js";import"./LicenseConditions.0c467bf7.js";import"./_arrayEach.56a9f647.js";import"./vue.esm-bundler.dc957f17.js";import"./IndexStatus.78fc25b9.js";import"./PostTypes.e5795f0f.js";import"./RequiredPlans.d12c09c3.js";import"./Card.68c5f6b2.js";import"./Overview.92e33ec9.js";import"./DonutChartWithLegend.48e0b578.js";import"./KeywordsGraph.3a06a992.js";import"./SeoStatisticsOverview.f0774433.js";import"./List.5a08a70b.js";import"./Statistics.6c120ab6.js";const V={setup(){return{optionsStore:b(),searchStatisticsStore:y()}},components:{CoreAlert:M},data(){return{error:this.$t.__("Your connection with Google Search Console has expired or is invalid. Please check that your site is verified in Google Search Console and try to reconnect. If the problem persists, please contact our support team.",this.$td)}},computed:{invalidAuthentication(){var t,s;return this.searchStatisticsStore.unverifiedSite||typeof((s=(t=this.optionsStore.internalOptions.internal)==null?void 0:t.searchStatistics)==null?void 0:s.profile)!="object"}}};function G(t,s,i,f,a,e){const m=o("core-alert");return e.invalidAuthentication?(r(),l(m,{key:0,class:"aioseo-input-error aioseo-search-statistics-authentication-alert",type:"red"},{default:n(()=>[C("strong",null,d(a.error),1)]),_:1})):u("",!0)}const U=h(V,[["render",G]]),E={};function F(t,s){return r(),_("div")}const I=h(E,[["render",F]]),z={};function H(t,s){return r(),_("div")}const j=h(z,[["render",H]]);const q={setup(){return{licenseStore:L(),searchStatisticsStore:y()}},emits:["rolling"],components:{AuthenticationAlert:U,BaseDatePicker:B,CoreBlur:T,CoreMain:A,ContentRankings:O,Cta:J,Dashboard:R,KeywordRankings:N,PostDetail:I,Settings:j,SeoStatistics:P},data(){return{maxDate:null,minDate:null,loadingConnect:!1,strings:{pageName:this.$t.__("Search Statistics",this.$td),ctaHeaderText:this.$t.__("Connect your website to Google Search Console",this.$td),ctaDescription:this.$t.__("Connect your site to Google Search Console to receive insights on how content is being discovered. Identify areas for improvement and drive traffic to your website.",this.$td),ctaButtonText:this.$t.__("Connect to Google Search Console",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Improved visibility",this.$td),feature3:this.$t.__("Track page and keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{defaultRange(){const t=new Date(`${this.searchStatisticsStore.range.start} 00:00:00`),s=new Date(`${this.searchStatisticsStore.range.end} 00:00:00`);return[t,s]},excludeTabs(){const t=["post-detail"];return(this.licenseStore.isUnlicensed||!g.hasCoreFeature("search-statistics"))&&t.push("settings"),t},isSettings(){return this.$route.name==="settings"},showConnectCta(){return(g.hasCoreFeature("search-statistics")&&!this.searchStatisticsStore.isConnected||this.searchStatisticsStore.unverifiedSite)&&!this.isSettings},showDatePicker(){return!["settings","content-rankings"].includes(this.$route.name)&&this.searchStatisticsStore.isConnected&&!this.searchStatisticsStore.unverifiedSite},containerClasses(){const t=[];return this.searchStatisticsStore.fetching&&t.push("aioseo-blur"),t},getOriginalMaxDate(){return this.searchStatisticsStore.latestAvailableDate?c.fromFormat(this.searchStatisticsStore.latestAvailableDate,"yyyy-MM-dd").setZone(c.zone)||c.local().plus({days:-2}):c.local().plus({days:-2})},datepickerShortcuts(){return[{text:this.$t.__("Last 7 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last7Days"),[this.getOriginalMaxDate.plus({days:-6}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 28 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last28Days"),[this.getOriginalMaxDate.plus({days:-27}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 3 Months",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last3Months"),[this.getOriginalMaxDate.plus({days:-89}).toJSDate(),this.getOriginalMaxDate.toJSDate()])}]}},methods:{isDisabledDate(t){return this.minDate===null?!0:t.getTime()<this.minDate.getTime()||t.getTime()>this.maxDate.getTime()},onDateChange(t,s){this.searchStatisticsStore.setDateRange({dateRange:t,rolling:s})},connect(){this.loadingConnect=!0,this.searchStatisticsStore.getAuthUrl().then(t=>{window.location=t})},highlightShortcut(t){if(!t)return;document.querySelectorAll(".el-picker-panel__shortcut").forEach(i=>{switch(i.innerText){case this.$t.__("Last 7 Days",this.$td):t==="last7Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 28 Days",this.$td):t==="last28Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 3 Months",this.$td):t==="last3Months"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 6 Months",this.$td):t==="last6Months"?i.classList.add("active"):i.classList.remove("active");break;default:i.classList.remove("active")}})}},mounted(){this.minDate=c.now().plus({months:-16}).toJSDate(),this.maxDate=this.getOriginalMaxDate.toJSDate()}},K={key:0,class:"connect-cta"};function Y(t,s,i,f,a,e){const m=o("base-date-picker"),v=o("authentication-alert"),x=o("core-blur"),$=o("cta"),k=o("core-main");return r(),l(k,{"page-name":a.strings.pageName,"exclude-tabs":e.excludeTabs,showTabs:!e.excludeTabs.includes(t.$route.name),containerClasses:e.containerClasses},{extra:n(()=>[e.showDatePicker?(r(),l(m,{key:0,onChange:e.onDateChange,onUpdated:s[0]||(s[0]=w=>e.highlightShortcut(w)),clearable:!1,defaultValue:e.defaultRange,defaultRolling:f.searchStatisticsStore.rolling,isDisabledDate:e.isDisabledDate,shortcuts:e.datepickerShortcuts,size:"small"},null,8,["onChange","defaultValue","defaultRolling","isDisabledDate","shortcuts"])):u("",!0)]),default:n(()=>[C("div",null,[p(v),e.showConnectCta?(r(),_("div",K,[p(x,null,{default:n(()=>[(r(),l(S(t.$route.name)))]),_:1}),p($,{"cta-button-action":"",onCtaButtonClick:e.connect,"cta-button-loading":a.loadingConnect,"show-link":!1,"button-text":a.strings.ctaButtonText,alignTop:!0,hideBonus:!0,"feature-list":[a.strings.feature1,a.strings.feature2,a.strings.feature3,a.strings.feature4]},{"header-text":n(()=>[D(d(a.strings.ctaHeaderText),1)]),description:n(()=>[D(d(a.strings.ctaDescription),1)]),_:1},8,["onCtaButtonClick","cta-button-loading","button-text","feature-list"])])):u("",!0),e.showConnectCta?u("",!0):(r(),l(S(t.$route.name),{key:1}))])]),_:1},8,["page-name","exclude-tabs","showTabs","containerClasses"])}const ne=h(q,[["render",Y]]);export{ne as default};