"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Modals"},i=void 0,l={unversionedId:"guides/modals",id:"guides/modals",title:"Modals",description:"Modals are a common pattern in mobile apps. They are a way to present a new screen on top of the current screen. They are often used for things like creating a new account, or for a user to select an option from a list.",source:"@site/docs/guides/modals.md",sourceDirName:"guides",slug:"/guides/modals",permalink:"/router/docs/guides/modals",draft:!1,tags:[],version:"current",frontMatter:{title:"Modals"},sidebar:"tutorialSidebar",previous:{title:"Nesting navigators",permalink:"/router/docs/guides/nesting-navigators"},next:{title:"Migration",permalink:"/router/docs/category/migration"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modals are a common pattern in mobile apps. They are a way to present a new screen on top of the current screen. They are often used for things like creating a new account, or for a user to select an option from a list."),(0,o.kt)("video",{src:"/router/demo/modal.mp4",controls:!0,style:{width:"100%"},autoplay:!0,loop:!0}),(0,o.kt)("p",null,"You can implement a modal by creating a root layout route that renders certain routes as modals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="File System"',title:'"File','System"':!0},"app/\n  (root).js\n  (root)/\n    home.js\n    modal.js\n")),(0,o.kt)("p",null,"First we'll move all of our routes into a new top-level layout route called ",(0,o.kt)("inlineCode",{parentName:"p"},"(root)"),". The layout route has the ability to present components as modals. We'll also add a new route called ",(0,o.kt)("inlineCode",{parentName:"p"},"modal")," that we'll use to render modals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(root).js",title:"app/(root).js"},'import { NativeStack } from "expo-router";\n\nexport default function Layout() {\n  return (\n    <NativeStack>\n      <NativeStack.Screen\n        name="home"\n        options={{\n          // Hide the header for all other routes.\n          headerShown: false,\n        }}\n      />\n      <NativeStack.Screen\n        name="modal"\n        options={{\n          // Set the presentation mode to modal for our modal route.\n          presentation: "modal",\n        }}\n      />\n    </NativeStack>\n  );\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(root)/home.js",title:"app/(root)/home.js"},'import { View, Text, Button } from "react-native";\nimport { Link } from "expo-router";\n\nexport default function Home() {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text>Home Screen</Text>\n      <Link href="/modal">Present modal</Link>\n    </View>\n  );\n}\n')),(0,o.kt)("p",null,"Now we'll create a modal which adds a back button when the modal has lost its previous context and must be presented as a standalone page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=app/(root)/modal.js",title:"app/(root)/modal.js"},'import { View, Text } from "react-native";\nimport { Link } from "expo-router";\n\nexport default function Modal({ navigation }) {\n  // If the page was reloaded or navigated to directly, then the modal should be presented as\n  // a full screen page. You may need to change the UI to account for this.\n  const isPresented = navigation.canGoBack();\n\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}\n      {!isPresented && <Link href="../">Dismiss</Link>}\n\n      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}\n      <StatusBar barStyle="light-content" />\n    </View>\n  );\n}\n')))}u.isMDXComponent=!0}}]);