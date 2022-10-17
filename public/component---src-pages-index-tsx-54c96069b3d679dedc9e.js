"use strict";(self.webpackChunkhushes=self.webpackChunkhushes||[]).push([[691],{9628:function(e,t,n){n.d(t,{K:function(){return m}});var i=n(7294),r=n(9890),o=r.default.header.withConfig({displayName:"style__BriefHeader",componentId:"sc-17zbqff-0"})(["position:relative;overflow:hidden;width:100%;padding:0.5rem 0;position:relative;@media screen and (min-width:700px){padding:2.5rem 0 0.5rem;&.index{padding:3rem 0 0 0;}}"]),l=r.default.div.withConfig({displayName:"style__BriefSubTitle",componentId:"sc-17zbqff-1"})(["color:",";font-weight:500;font-size:1rem;margin-bottom:0.4rem;"],(function(e){return e.theme.fontColorMuted})),a=r.default.h1.withConfig({displayName:"style__BriefTitle",componentId:"sc-17zbqff-2"})(["font-size:1.5rem;line-height:1.1;font-weight:700;letter-spacing:-0.06rem;color:",";margin:0 !important;@media screen and (min-width:700px){font-size:2rem;letter-spacing:-0.08rem;}"],(function(e){return e.theme.fontColorHeading})),d=r.default.span.withConfig({displayName:"style__BriefPurpleTitle",componentId:"sc-17zbqff-3"})(["color:",";"],(function(e){return e.theme.highlightColor})),m=function(e){var t=e.highlight,n=e.subTitle,r=e.title,m=e.children,u=e.index;return i.createElement(o,{className:u?"index":""},n&&i.createElement(l,null,t&&i.createElement(d,null,t),n),r&&i.createElement(a,null,r),m&&m)}},7793:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(6162),r=n(7294),o=n(5186),l=n(95),a=n(9437),d=n(9628),m=n(1597),u=n(9890),c=u.default.h2.withConfig({displayName:"style__HeadingContainer",componentId:"sc-189sr9w-0"})(["margin-bottom:1rem;display:flex;align-items:center;justify-content:space-between;border:0;padding:0;"]),s=u.default.div.withConfig({displayName:"style__HeadingTitle",componentId:"sc-189sr9w-1"})(["font-size:1.4rem;margin-bottom:0.75rem;font-family:",";font-weight:700;letter-spacing:-0.03rem;@media screen and (min-width:700px){font-size:1.6rem;}"],(function(e){return e.theme.fontFamilyBase})),f=(0,u.default)(m.Link).withConfig({displayName:"style__HeadingLink",componentId:"sc-189sr9w-2"})(["-webkit-appearance:none;background:",";display:inline-flex;align-items:center;padding:0.6rem 1rem;font-family:",";line-height:1;border-radius:",";font-size:0.9rem;cursor:pointer;font-weight:500;color:",";border:1px solid ",";gap:0.25rem;&:hover{color:",";border-color:",";}"],(function(e){return e.theme.buttonBackgroundColor}),(function(e){return e.theme.fontFamilyBase}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.fontColorBase}),(function(e){return e.theme.borderColor}),(function(e){return e.theme.fontColorBright}),(function(e){return e.theme.borderColorHover})),p=function(e){var t=e.title,n=e.slug;return r.createElement(c,null,r.createElement("div",null,r.createElement(s,null,t)),n&&r.createElement(f,{to:n},"View all"))},g=n(2349),h=n(6671),w=n(5249),y=n(7561);function b(e){var t=e.data,n=t.latest.edges,m=t.Highlights.edges,u=(0,r.useMemo)((function(){return(0,y.Nx)(n)}),[n]),c=(0,r.useMemo)((function(){return(0,y.Nx)(m,{shortTitle:!1,thumbnails:!0})}),[m]);return r.createElement(r.Fragment,null,r.createElement(o.Z,{title:w.Z.siteTitle}),r.createElement(g.H,null),r.createElement(l.iI,null,r.createElement(a.xs,null,r.createElement(d.K,{title:"Hi, I'm  Hush",index:!0},r.createElement(a.LL,null,"𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒍𝒊𝒗𝒆 𝒂 𝒍𝒊𝒇𝒆 𝒚𝒐𝒖‘𝒓𝒆 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇. 𝑰𝒇 𝒚𝒐𝒖 𝒇𝒊𝒏𝒅 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖’𝒓𝒆 𝒏𝒐𝒕, 𝑰 𝒉𝒐𝒑𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒔𝒕𝒓𝒆𝒏𝒈𝒕𝒉 𝒕𝒐 𝒔𝒕𝒂𝒓𝒕 𝒂𝒍𝒍 𝒐𝒗𝒆𝒓 𝒂𝒈𝒂𝒊𝒏. ",r.createElement("br",null),r.createElement("br",null),"我希望你过着自己引以为傲的生活。 如果你发现事实并非如此，我希望你有勇气重新开始。"),r.createElement(a.LL,null,"𝑯𝒂𝒗𝒆 𝒂 𝒈𝒐𝒐𝒅 𝒅𝒂𝒚. ")))),r.createElement(l.iI,null,r.createElement(a.SV,null,r.createElement(p,{title:"最近内容",slug:"/blog"}),r.createElement(a.wZ,null,u.map((function(e){return r.createElement(a.uv,{key:e.slug},r.createElement(a.qp,{className:"recent"},e.date),r.createElement(a.DX,{to:e.slug},e.title),r.createElement(a.Rr,null,e.categories.filter((function(e){return"Highlight"!==e})).map((function(e){return r.createElement(a.k1,{to:"/categories/"+(0,y.lV)(e),key:(0,y.lV)(e)},e)}))))})))),c.length>0&&r.createElement(a.SV,null,r.createElement(p,{title:"热门内容"}),r.createElement(a.in,null,c.map((function(e){return r.createElement(a.VA,{key:"Highlight-"+e.slug},e.thumbnail&&r.createElement(i.Z,{style:{marginRight:"5px"},fixed:e.thumbnail}),r.createElement("div",null,r.createElement(a.qp,null,e.date),r.createElement(a.DX,{to:e.slug},e.title)))}))))))}b.Layout=h.A},9437:function(e,t,n){n.d(t,{DX:function(){return w},Ki:function(){return a},LL:function(){return c},Rr:function(){return y},SV:function(){return m},VA:function(){return g},Vz:function(){return C},b4:function(){return d},in:function(){return p},k1:function(){return b},qp:function(){return h},uv:function(){return f},wZ:function(){return s},xs:function(){return u}});var i=n(1597),r=n(9890),o=n(95),l=n(3956),a=(0,r.default)(l.Gn).withConfig({displayName:"pages__BlogGrid",componentId:"sc-d0wt10-0"})([""]),d=(0,r.default)(l.qz).withConfig({displayName:"pages__BlogContent",componentId:"sc-d0wt10-1"})([""]),m=(0,r.default)(l.At).withConfig({displayName:"pages__IndexSection",componentId:"sc-d0wt10-2"})([""]),u=r.default.div.withConfig({displayName:"pages__BriefWrapper",componentId:"sc-d0wt10-3"})(["display:block;@media screen and (min-width:700px){display:flex;align-items:center;gap:3rem;}"]),c=r.default.p.withConfig({displayName:"pages__BriefDescription",componentId:"sc-d0wt10-4"})(["-webkit-font-smoothing:antialiased;margin-top:3rem;margin-bottom:0;font-size:1.1rem;line-height:1.4;color:",";font-weight:500;"],(function(e){return e.theme.fontColorBase})),s=r.default.div.withConfig({displayName:"pages__RecentPreview",componentId:"sc-d0wt10-5"})(["display:grid;gap:1rem;@media screen and (min-width:700px){grid-template-columns:repeat(3,1fr);gap:1.5rem;}"]),f=(0,r.default)(o.ys).withConfig({displayName:"pages__RecentCard",componentId:"sc-d0wt10-6"})(["flex:1;display:flex;flex-wrap:wrap;min-height:9rem;"]),p=r.default.div.withConfig({displayName:"pages__HighlightPreview",componentId:"sc-d0wt10-7"})(["display:grid;gap:1rem;@media screen and (min-width:700px){grid-template-columns:repeat(2,1fr);gap:1.5rem;}@media screen and (min-width:1060px){grid-template-columns:repeat(3,1fr);}"]),g=(0,r.default)(o.ys).withConfig({displayName:"pages__HighlightCard",componentId:"sc-d0wt10-8"})(["background:transparent;padding:1.5rem;border:2px solid ",";display:flex;align-items:center;gap:1rem;"],(function(e){return e.theme.borderColor})),h=r.default.time.withConfig({displayName:"pages__Time",componentId:"sc-d0wt10-9"})(["display:block;font-family:",";color:",";font-size:0.8rem;&.recent{color:",";}"],(function(e){return e.theme.fontFamilyMonospace}),(function(e){return e.theme.fontColorBright}),(function(e){return e.theme.cardTimeColor})),w=(0,r.default)(i.Link).withConfig({displayName:"pages__TitleLink",componentId:"sc-d0wt10-10"})(["display:block;width:100%;font-size:1.1rem;line-height:1.2;font-family:",";color:",";font-weight:700;margin:0.25rem 0 0.5rem;padding:0;border:0;text-decoration:none;&:hover{text-decoration:underline;color:",";}"],(function(e){return e.theme.fontFamilyBase}),(function(e){return e.theme.fontColorHeading}),(function(e){return e.theme.fontColorBright})),y=r.default.div.withConfig({displayName:"pages__TagLinks",componentId:"sc-d0wt10-11"})(["display:flex;align-items:flex-end;"]),b=(0,r.default)(i.Link).withConfig({displayName:"pages__TagLink",componentId:"sc-d0wt10-12"})(["font-family:",";font-size:0.8rem;color:",";text-decoration:underline;"],(function(e){return e.theme.fontFamilyMonospace}),(function(e){return e.theme.fontColorMuted})),C=(0,r.default)(o.iI).withConfig({displayName:"pages__SunsetContainer",componentId:"sc-d0wt10-13"})(["padding-top:3rem;display:grid;grid-template-columns:repeat(4,1fr);gap:2.2rem;@media screen and (max-width:1000px){padding-top:2rem;gap:1.5rem;}@media screen and (max-width:480px){padding-top:1rem;grid-template-columns:repeat(3,1fr);gap:0.8rem;}"])},7561:function(e,t,n){function i(e,t){return void 0===t&&(t={}),e.map((function(e){var n,i,r=Object.assign({},null==e?void 0:e.node),o=r.id,l=r.frontmatter,a=r.fields;return Object.assign({id:o,date:null==l?void 0:l.date,slug:null==a?void 0:a.slug,tags:null==l?void 0:l.tags,categories:null==l?void 0:l.categories,title:t.shortTitle?null==l?void 0:l.shortTitle:null==l?void 0:l.title,description:null==l?void 0:l.description},t.thumbnails&&{thumbnail:null==l||null===(n=l.thumbnail)||void 0===n||null===(i=n.childImageSharp)||void 0===i?void 0:i.fixed})}))}function r(e){return e&&(""+e).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}n.d(t,{Nx:function(){return i},lV:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-54c96069b3d679dedc9e.js.map