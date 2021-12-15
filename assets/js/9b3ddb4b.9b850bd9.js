"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[649],{7627:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(1513),i=t(1275),r=(t(7711),t(4635)),o=["components"],s={title:"channel",slug:"/api/attributes",order:6},l=void 0,p={unversionedId:"api/attributes/channel",id:"api/attributes/channel",isDocsHomePage:!1,title:"channel",description:"Garfish.channel \u7528\u4e8e\u5e94\u7528\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u4ed6\u6709\u7740\u4e0e node evnets(v11.13.0) \u6a21\u5757\u76f8\u540c\u7684 api\u3002",source:"@site/docs/api/attributes/channel.md",sourceDirName:"api/attributes",slug:"/api/attributes",permalink:"/api/attributes",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/api/attributes/channel.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1639569977,formattedLastUpdatedAt:"2021/12/15",frontMatter:{title:"channel",slug:"/api/attributes",order:6},sidebar:"api",previous:{title:"loadApp",permalink:"/api/attributes/loadApp"}},c=[{value:"\u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6",id:"\u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6",children:[],level:3},{value:"\u4e3b\u5e94\u7528\u89e6\u53d1\u767b\u5f55\u4e8b\u4ef6",id:"\u4e3b\u5e94\u7528\u89e6\u53d1\u767b\u5f55\u4e8b\u4ef6",children:[],level:3}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.channel")," \u7528\u4e8e\u5e94\u7528\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u4ed6\u6709\u7740\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"node evnets(v11.13.0)")," \u6a21\u5757\u76f8\u540c\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/v11.13.0/docs/api/events.html"},"api"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b9e\u9645\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish")," \u4e5f\u662f\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"EventEmitter")," \u7c7b\uff0c\u4f46\u662f\u4ec5\u4ec5\u4f9b\u5185\u90e8\u4f7f\u7528\uff0c\u5982\u679c\u4f60\u662f\u5728\u5f00\u53d1\u63d2\u4ef6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Garfish.props")," \u6765\u8fdb\u884c\u901a\u4fe1\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.channel.on('event', function (a, b) {\n  console.log(a, b); // 'a', 'b'\n  console.log(this === Garfish.channel); // true\n});\n\nGarfish.channel.emit('event', 'a', 'b');\n")),(0,r.kt)("h3",{id:"\u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6"},"\u5b50\u5e94\u7528\u76d1\u542c\u767b\u5f55\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const App = () => {\n  const handleLogin = (userInfo) => {\n    console.log(`${userInfo.name} has login`);\n  };\n\n  useEffect(() => {\n    window.Garfish.channel.on('login', handleLogin);\n    return () => {\n      window.Garfish.channel.removeListener('login', handleLogin);\n    };\n  });\n};\n")),(0,r.kt)("h3",{id:"\u4e3b\u5e94\u7528\u89e6\u53d1\u767b\u5f55\u4e8b\u4ef6"},"\u4e3b\u5e94\u7528\u89e6\u53d1\u767b\u5f55\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"api.getLoginInfo.then((res) => {\n  if (res.code === 0) {\n    window.Garfish.channel.emit('login', res.data);\n  }\n});\n")))}d.isMDXComponent=!0}}]);