import{_ as n}from"./default-i18n.3881921e.js";import{d as m,u as d}from"./links.813d802e.js";import{d as f}from"./isArrayLikeObject.5519e7e6.js";const i="all-in-one-seo-pack",h=r=>{const o=m();if(!o.tags.length)return[];const c=o.context[r];if(!c)return o.tags.filter(e=>!e.context||e.context.includes("all"));const l=[];let t=[];if(c.forEach(e=>{o.tags.filter(a=>a.id===e).forEach(a=>{if(a.context){if(!a.context.includes("all")&&!a.context.includes(r))return;l.push(a.id)}a&&!a.deprecated&&t.push({...a})})}),l.length){const e=[];t.forEach((s,a)=>{l.includes(s.id)&&!s.context&&e.push(a)});for(let s=e.length-1;0<=s;s--)t.splice(e[s],1)}const u=d(),p=u.aioseo.postData.postTypes.find(e=>e.name+"Title"===r||e.name+"Description"===r||"breadcrumbs-post-type-"+e.name===r);if(p&&(t=t.map(e=>(e.name=e.name.replace("Post",p.singular),e.description=e.description.replace("page/post",p.singular.toLowerCase()),e)),p.name==="product")){const e=t.findIndex(s=>s.id==="post_excerpt");e!==-1&&(t[e].name=n("Product Short Description",i),t[e].description=n("A short description for your product.",i),t[e].value=n("Sample short description for your product.",i))}const _=u.aioseo.postData.taxonomies.find(e=>e.name+"Title"===r||e.name+"Description"===r||"breadcrumbs-taxonomy-"+e.name===r);return _&&(t=t.map(e=>(e.name=e.name.replace("Category",_.singular),e))),(r==="dateTitle"||r==="dateDescription")&&(t=t.map(e=>(e.name=e.name.replace("Category",n("Archive",i)),e.name=e.name.replace("Post",n("Archive",i)),e.description=e.description.replace("page/post",n("archive",i)),e))),t.sort((e,s)=>e.name<s.name?-1:e.name>s.name?1:0)},y=(r,o,c)=>{switch(c){case"title":switch(r){case"taxonomies":return["taxonomy_title","separator_sa","site_title"];case"archives":switch(o){case"author":return["author_name","separator_sa","site_title"];case"search":return["search_term","separator_sa","site_title"];case"date":default:return["archive_title","separator_sa","site_title"]}default:return["post_title","separator_sa","site_title"]}case"description":switch(r){case"taxonomies":return["taxonomy_title","separator_sa","taxonomy_description"];case"attachment":return["attachment_caption","separator_sa","site_title"];case"archives":switch(o){case"author":return["author_name","separator_sa","site_title"];case"search":return["search_term","separator_sa","site_title"];case"date":default:return["archive_title","separator_sa","site_title"]}default:return o==="attachment"?["attachment_caption","separator_sa","site_title"]:o==="product"?["post_excerpt","post_content"]:["post_excerpt","post_content","separator_sa"]}}},D={context:h,decodeHTMLEntities:f,getDefaultTags:y};export{D as t};
