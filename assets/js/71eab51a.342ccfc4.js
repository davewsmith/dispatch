"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4072],{5680:(t,e,a)=>{a.d(e,{xA:()=>d,yg:()=>f});var r=a(6540);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var c=r.createContext({}),l=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=l(a),p=n,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||o;return a?r.createElement(f,i(i({ref:e},d),{},{components:a})):r.createElement(f,i({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7072:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(8168),n=(a(6540),a(5680));const o={},i="Data Formats",s={unversionedId:"administration/settings/data/data-format",id:"administration/settings/data/data-format",title:"Data Formats",description:"Data sources are not always uniformed in nature. It's often helpful to understand what the underlying data format for a given data source is. Here, Dispatch allows you to define common data formats that sources in your environment use.",source:"@site/docs/administration/settings/data/data-format.mdx",sourceDirName:"administration/settings/data",slug:"/administration/settings/data/data-format",permalink:"/dispatch/docs/administration/settings/data/data-format",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/administration/settings/data/data-format.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Data",permalink:"/dispatch/docs/administration/settings/data/"},next:{title:"Environment",permalink:"/dispatch/docs/administration/settings/data/environment"}},c={},l=[],d={toc:l},u="wrapper";function m(t){let{components:e,...a}=t;return(0,n.yg)(u,(0,r.A)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"data-formats"},"Data Formats"),(0,n.yg)("p",null,"Data sources are not always uniformed in nature. It's often helpful to understand what the underlying data format for a given data source is. Here, Dispatch allows you to define common data formats that sources in your environment use."),(0,n.yg)("p",null,"Some example data formats:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"JSON"),(0,n.yg)("li",{parentName:"ul"},"CSV"),(0,n.yg)("li",{parentName:"ul"},"Syslog"),(0,n.yg)("li",{parentName:"ul"},"XML"),(0,n.yg)("li",{parentName:"ul"},"Non-standard")))}m.isMDXComponent=!0}}]);