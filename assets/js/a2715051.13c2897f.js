(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2671],{8765:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return u}});var r=n(7560),i=n(8283),a=(n(2784),n(9037)),o=n(2123),s=n(1473),d=n(6785),c={id:"htmlsourcedom",title:"HTMLSourceDom"},m={unversionedId:"htmlsourcedom",id:"htmlsourcedom",isDocsHomePage:!1,title:"HTMLSourceDom",description:"A source which content is a DOM tree created by the transient render",source:"@site/api/htmlsourcedom.mdx",sourceDirName:".",slug:"/htmlsourcedom",permalink:"/react-native-render-html/api/htmlsourcedom",version:"current",frontMatter:{id:"htmlsourcedom",title:"HTMLSourceDom"},sidebar:"apiSidebar",previous:{title:"HTMLSource",permalink:"/react-native-render-html/api/htmlsource"},next:{title:"HTMLSourceInline",permalink:"/react-native-render-html/api/htmlsourceinline"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>baseUrl</code>",id:"baseurl",children:[]},{value:"<code>dom</code>",id:"dom",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{reflectionId:1009,version:"6.0.0-beta.1",mdxType:"HeaderTypeBox"}),(0,a.kt)("p",null,"A source which content is a DOM tree created by the transient render\nengine ",(0,a.kt)("inlineCode",{parentName:"p"},"parseDocument")," method."),(0,a.kt)("p",null,"See ","\u200b",(0,a.kt)(d.Z,{name:"useAmbientTRenderEngine",url:"/api/useambienttrenderengine",type:"api-def",mdxType:"Reference"}),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Remarks")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When you use a DOM source, the ",(0,a.kt)("inlineCode",{parentName:"p"},"onHTMLLoaded")," callback will never\nbe invoked for this source, since the source loader hasn't access to the\nHTML source of the DOM."))),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"baseurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"baseUrl")),(0,a.kt)(o.Z,{reflection:"%7B%22id%22%3A1011%2C%22name%22%3A%22baseUrl%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%22isOptional%22%3Atrue%7D%2C%22comment%22%3A%7B%22shortText%22%3A%22The%20base%20URL%20to%20resolve%20relative%20URLs%20in%20the%20HTML%20code.%5CnSee%20%7B%40link%20useNormalizedUrl%7D.%22%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A701%2C%22character%22%3A9%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22intrinsic%22%2C%22name%22%3A%22string%22%7D%7D",mdxType:"DeclarationBox"}),(0,a.kt)("p",null,"The base URL to resolve relative URLs in the HTML code.\nSee ","\u200b",(0,a.kt)(d.Z,{name:"useNormalizedUrl",url:"/api/usenormalizedurl",type:"api-def",mdxType:"Reference"}),"."),(0,a.kt)("h3",{id:"dom"},(0,a.kt)("inlineCode",{parentName:"h3"},"dom")),(0,a.kt)(o.Z,{reflection:"%7B%22id%22%3A1010%2C%22name%22%3A%22dom%22%2C%22kind%22%3A1024%2C%22kindString%22%3A%22Property%22%2C%22flags%22%3A%7B%7D%2C%22comment%22%3A%7B%22shortText%22%3A%22A%20DOM%20object.%20This%20object%20**must**%20have%20been%20created%20with%5Cnthe%20transient%20render%20engine%20%60parseDocument%60%20method.%22%7D%2C%22sources%22%3A%5B%7B%22fileName%22%3A%22packages%2Frender-html%2Fsrc%2Fshared-types.ts%22%2C%22line%22%3A696%2C%22character%22%3A5%7D%5D%2C%22type%22%3A%7B%22type%22%3A%22union%22%2C%22types%22%3A%5B%7B%22type%22%3A%22reference%22%2C%22id%22%3A164%2C%22name%22%3A%22Element%22%7D%2C%7B%22type%22%3A%22reference%22%2C%22id%22%3A126%2C%22name%22%3A%22Document%22%7D%5D%7D%7D",mdxType:"DeclarationBox"}),(0,a.kt)("p",null,"A DOM object. This object ",(0,a.kt)("strong",{parentName:"p"},"must")," have been created with\nthe transient render engine ",(0,a.kt)("inlineCode",{parentName:"p"},"parseDocument")," method."))}u.isMDXComponent=!0}}]);