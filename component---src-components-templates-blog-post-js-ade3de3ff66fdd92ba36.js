(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(159),a(73);var r=a(0),l=a.n(r),n=a(155),i=a(172),s=a(184),o=a.n(s),c=a(186),m=a(236),u=a.n(m),h=a(239);t.default=function(e){var t=e.data,a=t.site.siteMetadata.commonKeywords,r=t.markdownRemark.html,s=t.markdownRemark.frontmatter,m=s.title,d=s.description,p=s.date,f=s.image,E=s.author;return l.a.createElement(n.a,null,l.a.createElement(i.a,{title:"Expatty Blog | "+m,description:d,keywords:[m].concat(a)}),l.a.createElement("div",{className:"container-fluid blog"},l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-md blog-image"},l.a.createElement("img",{className:"img-fluid",src:f,alt:m}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement("main",null,l.a.createElement("article",{className:"mt-5",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.a.createElement("header",null,l.a.createElement("h1",{className:"title--header",itemProp:"name headline"},m),l.a.createElement("p",null,l.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:o()(p),itemProp:"datePublished"},o()(p).format("dddd, D MMMM YYYY")),l.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",l.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},E)))),l.a.createElement("div",{itemProp:"articleBody",dangerouslySetInnerHTML:{__html:r}}),l.a.createElement("a",{href:t.markdownRemark.fields.slug,hidden:!0}," "))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(c.a,null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md"},l.a.createElement(u.a.DiscussionEmbed,{shortname:"expatty"})))),l.a.createElement("div",{className:"col-md-4 blog-picks"},l.a.createElement("h2",{className:"title--header small mt-5"},"Patty's Picks"),t.picks.edges.map(function(e,a){var r=e.node,n=r.frontmatter.tags.map(function(e){return t.categories.edges.map(function(e){return e.node}).find(function(t){return t.frontmatter.tag===e})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return l.a.createElement(h.a,{key:a,title:r.frontmatter.title,url:r.fields.slug,icons:n,description:r.frontmatter.description,content:r.html,image:r.frontmatter.image})})))))};var d="3226963431"},155:function(e,t,a){"use strict";var r=a(156),l=a(0),n=a.n(l),i=a(168),s=a(149),o=a(175);t.a=function(e){var t=e.children;return n.a.createElement(s.StaticQuery,{query:"1948935994",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),t,n.a.createElement(o.a,null))},data:r})}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},186:function(e,t,a){"use strict";var r=a(0),l=a.n(r);t.a=function(e){var t=e.callToAction;return l.a.createElement("div",{className:"share-bar mt-5"},l.a.createElement("h4",{className:"title--header small"},t||"Share this on:"),l.a.createElement("div",{className:"share-buttons"},l.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Facebook"},l.a.createElement("i",{className:"fa fa-facebook-official share-button"}," facebook")),l.a.createElement("a",{href:"https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Twitter"},l.a.createElement("i",{className:"fa fa-twitter share-button"}," twitter")),l.a.createElement("a",{href:"https://plus.google.com/share?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Google+"},l.a.createElement("i",{className:"fa fa-google-plus share-button"}," google")),l.a.createElement("a",{href:"http://pinterest.com/pin/create/button/?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Pinterest"},l.a.createElement("i",{className:"fa fa-pinterest-p share-button"}," pinterest")),l.a.createElement("a",{href:"http://www.tumblr.com/share/link?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Tumblr"},l.a.createElement("i",{className:"fa fa-tumblr share-button"}," tumblr")),l.a.createElement("a",{href:"http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Reddit"},l.a.createElement("i",{className:"fa fa-reddit-alien share-button"}," reddit")),l.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ site.baseurl }}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source={{ site.title }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on LinkedIn"},l.a.createElement("i",{className:"fa fa-linkedin share-button"}," linkedin")),l.a.createElement("a",{href:"mailto:?subject={{ page.title }}&body=Check out this site {{ site.url }}{{ site.baseurl }}{{ page.url }}",title:"Share via Email"},l.a.createElement("i",{className:"fa fa-envelope share-button"}," email"))))}},239:function(e,t,a){"use strict";a(159),a(33);var r=a(0),l=a.n(r),n=a(185);t.a=function(e){var t=e.title,a=(e.description,e.image),r=e.url,i=e.icons,s=e.content;return l.a.createElement("div",{className:"card"},a&&l.a.createElement("a",{href:r},l.a.createElement("img",{src:a.replace("x400","x800"),alt:t,className:"card-img-top"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h3",{className:"card-title"},l.a.createElement("a",{className:"link",href:r},t)),l.a.createElement("div",{className:"card-text dark-colour",dangerouslySetInnerHTML:{__html:s}}),l.a.createElement("p",null,i&&i.map(function(e,t){return l.a.createElement(n.a,{icon:e.icon,name:e.name,path:e.path,key:t})}))))}}}]);
//# sourceMappingURL=component---src-components-templates-blog-post-js-ade3de3ff66fdd92ba36.js.map