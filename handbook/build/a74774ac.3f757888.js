(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(156)),o={id:"logging",title:"18. \u65e5\u5fd7\u8bb0\u5f55",sidebar_label:"18. \u65e5\u5fd7\u8bb0\u5f55"},c={unversionedId:"logging",id:"logging",isDocsHomePage:!1,title:"18. \u65e5\u5fd7\u8bb0\u5f55",description:"18.1 \u5173\u4e8e\u65e5\u5fd7",source:"@site/docs\\logging.mdx",slug:"/logging",permalink:"/furion/docs/logging",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/logging.mdx",version:"current",sidebar_label:"18. \u65e5\u5fd7\u8bb0\u5f55",sidebar:"docs",previous:{title:"17. \u89c6\u56fe\u5f15\u64ce",permalink:"/furion/docs/view-engine"},next:{title:"19. \u591a\u8bed\u8a00\u5904\u7406",permalink:"/furion/docs/local-language"}},l=[{value:"18.1 \u5173\u4e8e\u65e5\u5fd7",id:"181-\u5173\u4e8e\u65e5\u5fd7",children:[]},{value:"18.2 \u65e5\u5fd7\u4f5c\u7528",id:"182-\u65e5\u5fd7\u4f5c\u7528",children:[]},{value:"18.3 \u65e5\u5fd7\u7ea7\u522b",id:"183-\u65e5\u5fd7\u7ea7\u522b",children:[]},{value:"18.4 \u5982\u4f55\u4f7f\u7528",id:"184-\u5982\u4f55\u4f7f\u7528",children:[{value:"18.4.1 <code>ILogger&lt;T&gt;</code> \u6cdb\u578b\u65b9\u5f0f",id:"1841-iloggert-\u6cdb\u578b\u65b9\u5f0f",children:[]},{value:"18.4.2 <code>ILoggerFactory</code> \u5de5\u5382\u65b9\u5f0f",id:"1842-iloggerfactory-\u5de5\u5382\u65b9\u5f0f",children:[]},{value:"18.4.3 <code>\u61d2\u4eba\u6a21\u5f0f</code> \ud83d\ude01",id:"1843-\u61d2\u4eba\u6a21\u5f0f-",children:[]}]},{value:"18.5 \u5199\u5165\u5176\u4ed6\u4ecb\u8d28",id:"185-\u5199\u5165\u5176\u4ed6\u4ecb\u8d28",children:[{value:"18.5.1 <code>Serilog</code> \u62d3\u5c55\u5305\u4f7f\u7528",id:"1851-serilog-\u62d3\u5c55\u5305\u4f7f\u7528",children:[]},{value:"18.5.2 \u8bb0\u5f55\u8bf7\u6c42\u65e5\u5fd7",id:"1852-\u8bb0\u5f55\u8bf7\u6c42\u65e5\u5fd7",children:[]}]},{value:"18.6 \u65e5\u5fd7\u793a\u4f8b",id:"186-\u65e5\u5fd7\u793a\u4f8b",children:[]},{value:"18.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"187-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"181-\u5173\u4e8e\u65e5\u5fd7"},"18.1 \u5173\u4e8e\u65e5\u5fd7"),Object(i.b)("p",null,"\u901a\u5e38\u65e5\u5fd7\u6307\u7684\u662f",Object(i.b)("strong",{parentName:"p"},"\u7cfb\u7edf\u65e5\u5fd7"),"\u548c",Object(i.b)("strong",{parentName:"p"},"\u7a0b\u5e8f\u65e5\u5fd7"),"\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u7cfb\u7edf\u65e5\u5fd7")," \u662f\u8bb0\u5f55\u7cfb\u7edf\u4e2d\u786c\u4ef6\u3001\u8f6f\u4ef6\u548c\u7cfb\u7edf\u95ee\u9898\u7684\u4fe1\u606f\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u76d1\u89c6\u7cfb\u7edf\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5b83\u6765\u68c0\u67e5\u9519\u8bef\u53d1\u751f\u7684\u539f\u56e0\uff0c\u6216\u8005\u5bfb\u627e\u53d7\u5230\u653b\u51fb\u65f6\u653b\u51fb\u8005\u7559\u4e0b\u7684\u75d5\u8ff9\u3002\u7cfb\u7edf\u65e5\u5fd7\u5305\u62ec\u7cfb\u7edf\u65e5\u5fd7\u3001\u5e94\u7528\u7a0b\u5e8f\u65e5\u5fd7\u548c\u5b89\u5168\u65e5\u5fd7\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u7a0b\u5e8f\u65e5\u5fd7")," \u662f\u7a0b\u5e8f\u8fd0\u884c\u4e2d\u4ea7\u751f\u7684\u65e5\u5fd7\uff0c\u901a\u5e38\u7531\u6846\u67b6\u8fd0\u884c\u65f6\u6216\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u65e5\u5fd7\u3002\u5305\u62ec\u8bf7\u6c42\u65e5\u5fd7\uff0c\u5f02\u5e38\u65e5\u5fd7\u3001\u5ba1\u8ba1\u65e5\u5fd7\u3001\u884c\u4e3a\u65e5\u5fd7\u7b49\u3002"),Object(i.b)("h2",{id:"182-\u65e5\u5fd7\u4f5c\u7528"},"18.2 \u65e5\u5fd7\u4f5c\u7528"),Object(i.b)("p",null,"\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u90fd\u4e0d\u53ef\u907f\u514d\u7684\u4f7f\u7528\u5230\u65e5\u5fd7\u3002\u6ca1\u6709\u65e5\u5fd7\u867d\u7136\u4e0d\u4f1a\u5f71\u54cd\u9879\u76ee\u7684\u6b63\u786e\u8fd0\u884c\uff0c\u4f46\u662f\u6ca1\u6709\u65e5\u5fd7\u7684\u9879\u76ee\u53ef\u4ee5\u8bf4\u662f\u4e0d\u5b8c\u6574\u7684\u3002\u65e5\u5fd7\u5728\u8c03\u8bd5\uff0c\u9519\u8bef\u6216\u8005\u5f02\u5e38\u5b9a\u4f4d\uff0c\u6570\u636e\u5206\u6790\u4e2d\u7684\u4f5c\u7528\u662f\u4e0d\u8a00\u800c\u55bb\u7684\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8c03\u8bd5")),Object(i.b)("p",null,"\u5728\u9879\u76ee\u8c03\u8bd5\u65f6\uff0c\u67e5\u770b\u6808\u4fe1\u606f\u53ef\u4ee5\u65b9\u4fbf\u5730\u77e5\u9053\u5f53\u524d\u7a0b\u5e8f\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u8f93\u51fa\u7684\u65e5\u5fd7\u4fbf\u4e8e\u8bb0\u5f55\u7a0b\u5e8f\u5728\u4e4b\u524d\u7684\u8fd0\u884c\u7ed3\u679c\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9519\u8bef\u5b9a\u4f4d")),Object(i.b)("p",null,"\u4e0d\u8981\u4ee5\u4e3a\u9879\u76ee\u80fd\u6b63\u786e\u8dd1\u8d77\u6765\u5c31\u53ef\u4ee5\u9ad8\u6795\u65e0\u5fe7\uff0c\u9879\u76ee\u5728\u8fd0\u884c\u4e00\u6bb5\u65f6\u5019\u540e\uff0c\u53ef\u80fd\u7531\u4e8e\u6570\u636e\u95ee\u9898\uff0c\u7f51\u7edc\u95ee\u9898\uff0c\u5185\u5b58\u95ee\u9898\u7b49\u51fa\u73b0\u5f02\u5e38\u3002\u8fd9\u65f6\u65e5\u5fd7\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u6216\u8005\u8fd0\u7ef4\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u9519\u8bef\u4f4d\u7f6e\uff0c\u63d0\u51fa\u89e3\u51b3\u65b9\u6848\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6570\u636e\u5206\u6790")),Object(i.b)("p",null,"\u5927\u6570\u636e\u7684\u5174\u8d77\uff0c\u4f7f\u5f97\u5927\u91cf\u7684\u65e5\u5fd7\u5206\u6790\u6210\u4e3a\u53ef\u80fd\uff0cELK \u4e5f\u8ba9\u65e5\u5fd7\u5206\u6790\u95e8\u69db\u964d\u4f4e\u4e86\u5f88\u591a\u3002\u65e5\u5fd7\u4e2d\u8574\u542b\u4e86\u5927\u91cf\u7684\u7528\u6237\u6570\u636e\uff0c\u5305\u62ec\u70b9\u51fb\u884c\u4e3a\uff0c\u5174\u8da3\u504f\u597d\u7b49\uff0c\u7528\u6237\u753b\u50cf\u5bf9\u4e8e\u516c\u53f8\u4e0b\u4e00\u6b65\u7684\u6218\u7565\u65b9\u5411\u6709\u4e00\u5b9a\u6307\u5f15\u4f5c\u7528\u3002"),Object(i.b)("h2",{id:"183-\u65e5\u5fd7\u7ea7\u522b"},"18.3 \u65e5\u5fd7\u7ea7\u522b"),Object(i.b)("p",null,"\u65e5\u5fd7\u7ea7\u522b\u53ef\u4ee5\u6709\u6548\u7684\u5bf9\u65e5\u5fd7\u4fe1\u606f\u8fdb\u884c\u5f52\u7c7b\uff0c\u65b9\u4fbf\u51c6\u786e\u7684\u67e5\u770b\u7279\u5b9a\u65e5\u5fd7\u5185\u5bb9\u3002\u901a\u5e38\u65e5\u5fd7\u7c7b\u522b\u6709\u4ee5\u4e0b\u7ea7\u522b\uff1a"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u7ea7\u522b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u503c"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u65b9\u6cd5"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Trace"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"LogTrace"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5305\u542b\u6700\u8be6\u7ec6\u7684\u6d88\u606f\u3002 \u8fd9\u4e9b\u6d88\u606f\u53ef\u80fd\u5305\u542b\u654f\u611f\u7684\u5e94\u7528\u6570\u636e\u3002 \u8fd9\u4e9b\u6d88\u606f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5904\u4e8e\u7981\u7528\u72b6\u6001\uff0c\u5e76\u4e14\u4e0d\u5e94\u5728\u751f\u4ea7\u4e2d\u542f\u7528\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8c03\u8bd5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"LogDebug"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7528\u4e8e\u8c03\u8bd5\u548c\u5f00\u53d1\u3002 \u7531\u4e8e\u91cf\u5927\uff0c\u8bf7\u5728\u751f\u4ea7\u4e2d\u5c0f\u5fc3\u4f7f\u7528\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4fe1\u606f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"LogInformation"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8ddf\u8e2a\u5e94\u7528\u7684\u5e38\u89c4\u6d41\u3002 \u53ef\u80fd\u5177\u6709\u957f\u671f\u503c\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8b66\u544a"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"LogWarning"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5bf9\u4e8e\u5f02\u5e38\u4e8b\u4ef6\u6216\u610f\u5916\u4e8b\u4ef6\u3002 \u901a\u5e38\u5305\u62ec\u4e0d\u4f1a\u5bfc\u81f4\u5e94\u7528\u5931\u8d25\u7684\u9519\u8bef\u6216\u60c5\u51b5\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u9519\u8bef"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"LogError"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8868\u793a\u65e0\u6cd5\u5904\u7406\u7684\u9519\u8bef\u548c\u5f02\u5e38\u3002 \u8fd9\u4e9b\u6d88\u606f\u8868\u793a\u5f53\u524d\u64cd\u4f5c\u6216\u8bf7\u6c42\u5931\u8d25\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u5e94\u7528\u5931\u8d25\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u4e25\u91cd"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"LogCritical"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u9700\u8981\u7acb\u5373\u5173\u6ce8\u7684\u5931\u8d25\u3002 \u4f8b\u5982\u6570\u636e\u4e22\u5931\u3001\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db3\u3002")))),Object(i.b)("h2",{id:"184-\u5982\u4f55\u4f7f\u7528"},"18.4 \u5982\u4f55\u4f7f\u7528"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},".NET 5")," \u6846\u67b6\u4e2d\uff0c\u5fae\u8f6f\u5df2\u7ecf\u4e3a\u6211\u4eec\u5185\u7f6e\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u7ec4\u4ef6"),"\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u65e0\u9700\u6211\u4eec\u5f15\u7528\u7b2c\u4e09\u65b9\u5305\u8fdb\u884c\u65e5\u5fd7\u8bb0\u5f55\u3002",Object(i.b)("inlineCode",{parentName:"p"},".NET 5")," \u6846\u67b6\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e24\u79cd\u65e5\u5fd7\u5bf9\u8c61\u521b\u5efa\u65b9\u5f0f\u3002"),Object(i.b)("h3",{id:"1841-iloggert-\u6cdb\u578b\u65b9\u5f0f"},"18.4.1 ",Object(i.b)("inlineCode",{parentName:"h3"},"ILogger<T>")," \u6cdb\u578b\u65b9\u5f0f"),Object(i.b)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"ILogger<T>")," \u5bf9\u8c61\u8fdb\u884c\u6ce8\u5165\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{5}","{5}":!0}),'public class PrivacyModel : PageModel\n{\n    private readonly ILogger<PrivacyModel> _logger;\n\n    public PrivacyModel(ILogger<PrivacyModel> logger)\n    {\n        _logger = logger;\n    }\n\n    public void OnGet()\n    {\n        _logger.LogInformation("GET Pages.PrivacyModel called.");\n    }\n}\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u901a\u8fc7\u6cdb\u578b ",Object(i.b)("inlineCode",{parentName:"p"},"ILogger<T>")," \u65b9\u5f0f\u5199\u5165\u65e5\u5fd7\uff0c\u90a3\u4e48\u9ed8\u8ba4\u5c06 ",Object(i.b)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u5b8c\u6574\u7c7b\u578b\u540d\u79f0\u4f5c\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u7c7b\u522b"),"\u3002"))),Object(i.b)("h3",{id:"1842-iloggerfactory-\u5de5\u5382\u65b9\u5f0f"},"18.4.2 ",Object(i.b)("inlineCode",{parentName:"h3"},"ILoggerFactory")," \u5de5\u5382\u65b9\u5f0f"),Object(i.b)("p",null,"\u4f7f\u7528\u5de5\u5382\u65b9\u5f0f\uff0c\u9700\u624b\u52a8\u4f20\u5165 ",Object(i.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u7c7b\u522b"),"\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{5,7}","{5,7}":!0}),'public class ContactModel : PageModel\n{\n    private readonly ILogger _logger;\n\n    public ContactModel(ILoggerFactory logger)\n    {\n        _logger = logger.CreateLogger("MyCategory");\n    }\n\n    public void OnGet()\n    {\n        _logger.LogInformation("GET Pages.ContactModel called.");\n    }\n}\n')),Object(i.b)("h3",{id:"1843-\u61d2\u4eba\u6a21\u5f0f-"},"18.4.3 ",Object(i.b)("inlineCode",{parentName:"h3"},"\u61d2\u4eba\u6a21\u5f0f")," \ud83d\ude01"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63d0\u4f9b\u4e86\u66f4\u61d2\u7684\u65b9\u5f0f\u5199\u5165\u65e5\u5fd7\uff0c\u4e5f\u5c31\u662f\u901a\u8fc7\u5b57\u7b26\u4e32\u62d3\u5c55\u7684\u65b9\u5f0f\u5199\u5165\uff0c\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'"\u767e\u5c0f\u50e7 \u65b0\u589e\u4e86\u4e00\u6761\u8bb0\u5f55".LogInformation<HomeController>();\n\n"\u7a0b\u5e8f\u51fa\u73b0\u5f02\u5e38\u5566".LogError<HomeController>();\n\n"\u8fd9\u662f\u81ea\u5b9a\u4e49\u7c7b\u522b\u65e5\u5fd7".LogInformation("\u7c7b\u522b");\n')),Object(i.b)("p",null,"\u901a\u8fc7\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u65b9\u4fbf\u8bb0\u5f55\u65e5\u5fd7\uff0c\u4e13\u95e8\u4e3a\u61d2\u4eba\u63d0\u4f9b\u7684\u3002"),Object(i.b)("h2",{id:"185-\u5199\u5165\u5176\u4ed6\u4ecb\u8d28"},"18.5 \u5199\u5165\u5176\u4ed6\u4ecb\u8d28"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".NET 5")," \u6846\u67b6\u4e2d\u5e76\u672a\u63d0\u4f9b\u5199\u5165",Object(i.b)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u3001\u6570\u636e\u5e93")," \u6216\u5176\u4ed6\u4ecb\u8d28\u7684\u63d0\u4f9b\u5668\uff0c\u9ed8\u8ba4\u53ea\u63d0\u4f9b\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"Debug\u3001Console")," \u4e24\u79cd\u65b9\u5f0f\u3002\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u9700\u8981\u5f15\u7528\u7b2c\u4e09\u65b9\u65e5\u5fd7\u7ec4\u4ef6\uff0c\u65b9\u4fbf\u6211\u4eec\u5199\u5165\u5230\u591a\u4e2a\u4ecb\u8d28\u4e2d\u3002"),Object(i.b)("p",null,"\u5728\u8fd9\u91cc\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63a8\u8350\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"Serilog")," \u65e5\u5fd7\u7ec4\u4ef6\uff0c\u4e3a\u6b64\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion.Extras.Logging.Serilog")," \u62d3\u5c55\u5305\uff0c\u65b9\u4fbf\u5feb\u901f\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u7ed3\u5408\u3002"),Object(i.b)("h3",{id:"1851-serilog-\u62d3\u5c55\u5305\u4f7f\u7528"},"18.5.1 ",Object(i.b)("inlineCode",{parentName:"h3"},"Serilog")," \u62d3\u5c55\u5305\u4f7f\u7528"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b89\u88c5 ",Object(i.b)("inlineCode",{parentName:"li"},"Furion.Extras.Logging.Serilog")," \u62d3\u5c55\u5305")),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u5b89\u88c5 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion.Extras.Logging.Serilog")," \u62d3\u5c55\u5305"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5728 ",Object(i.b)("inlineCode",{parentName:"li"},"Program.cs")," \u4e2d\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"UseSerilogDefault()"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{21}","{21}":!0}),"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder.Inject()\n                        .UseStartup<Startup>();\n                })\n                .UseSerilogDefault();\n        }\n    }\n}\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u7279\u522b\u6ce8\u610f")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},".UseSerilogDefault()")," \u9ed8\u8ba4\u96c6\u6210\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53f0")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"\u6587\u4ef6")," \u65b9\u5f0f\u3002\u5982\u9700\u81ea\u5b9a\u4e49\u5199\u5165\uff0c\u5219\u4f20\u5165\u9700\u8981\u5199\u5165\u7684\u4ecb\u8d28\u5373\u53ef\uff1a"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'.UseSerilogDefault(config =>\n{\n    config.WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")\n          .WriteTo.File("log.txt", rollingInterval: RollingInterval.Day, rollOnFileSizeLimit: true);\n});\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u66ff\u6362 ",Object(i.b)("inlineCode",{parentName:"li"},"appsetting.json")," \u9ed8\u8ba4\u65e5\u5fd7\u5185\u5bb9")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information"\n    }\n  }\n')),Object(i.b)("p",null,"\u66ff\u6362\u4e3a\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"Serilog": {\n    "MinimumLevel": {\n      "Default": "Information",\n      "Override": {\n        "System": "Warning",\n        "Microsoft": "Warning",\n        "Microsoft.Hosting.Lifetime": "Information",\n        "Microsoft.EntityFrameworkCore": "Information"\n      }\n    }\n  }\n')),Object(i.b)("h3",{id:"1852-\u8bb0\u5f55\u8bf7\u6c42\u65e5\u5fd7"},"18.5.2 \u8bb0\u5f55\u8bf7\u6c42\u65e5\u5fd7"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Serilog")," \u65e5\u5fd7\u7ec4\u4ef6\u4e5f\u63d0\u4f9b\u4e86\u975e\u5e38\u65b9\u4fbf\u5feb\u6377\u7684\u8bf7\u6c42\u65e5\u5fd7\u4e2d\u95f4\u4ef6\uff0c\u53ea\u9700\u8981\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u542f\u7528\u5373\u53ef\u3002\u5982\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n {\n     app.UseStaticFiles();\n     app.UseSerilogRequestLogging();    // \u5fc5\u987b\u5728 UseStaticFiles \u548c UseRouting \u4e4b\u95f4\n     app.UseRouting();\n }\n")),Object(i.b)("h2",{id:"186-\u65e5\u5fd7\u793a\u4f8b"},"18.6 \u65e5\u5fd7\u793a\u4f8b"),Object(i.b)("p",null,"\u4e0b\u9762\u4fbf\u662f\u65e5\u5fd7\u8f93\u51fa\u65e5\u5fd7\u7684\u6a21\u677f\uff0c\u652f\u6301\u5404\u79cd\u81ea\u5b9a\u4e49\u65b9\u5f0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'2020-12-21 15:54:43.775 +08:00 [INF] Application started. Press Ctrl+C to shut down.\n2020-12-21 15:54:43.897 +08:00 [INF] Hosting environment: Development\n2020-12-21 15:54:43.899 +08:00 [INF] Content root path: D:\\MONK\\Furion\\samples\\Furion.Web.Entry\n2020-12-21 15:55:00.651 +08:00 [WRN] Sensitive data logging is enabled. Log entries and exception messages may include sensitive application data; this mode should only be enabled during development.\n2020-12-21 15:55:00.817 +08:00 [INF] Entity Framework Core 5.0.1 initialized \'DefaultDbContext\' using provider \'Microsoft.EntityFrameworkCore.Sqlite\' with options: SensitiveDataLoggingEnabled DetailedErrorsEnabled MaxPoolSize=100 MigrationsAssembly=Furion.Database.Migrations\n2020-12-21 15:55:01.711 +08:00 [WRN] Compiling a query which loads related collections for more than one collection navigation either via \'Include\' or through projection but no \'QuerySplittingBehavior\' has been configured. By default Entity Framework will use \'QuerySplittingBehavior.SingleQuery\' which can potentially result in slow query performance. See https://go.microsoft.com/fwlink/?linkid=2134277 for more information. To identify the query that\'s triggering this warning call \'ConfigureWarnings(w => w.Throw(RelationalEventId.MultipleCollectionIncludeWarning))\'\n2020-12-21 15:55:01.919 +08:00 [INF] Executed DbCommand (31ms) [Parameters=[], CommandType=\'"Text"\', CommandTimeout=\'30\']\nSELECT "p"."Id", "p"."Name", "p"."Age", "p"."Address", "p0"."PhoneNumber", "p0"."QQ", "p"."CreatedTime", "p0"."Id", "c"."Id", "c"."Name", "c"."Gender", "t"."Id", "t"."Name", "t"."PersonsId", "t"."PostsId"\nFROM "Person" AS "p"\nLEFT JOIN "PersonDetail" AS "p0" ON "p"."Id" = "p0"."PersonId"\nLEFT JOIN "Children" AS "c" ON "p"."Id" = "c"."PersonId"\nLEFT JOIN (\n    SELECT "p2"."Id", "p2"."Name", "p1"."PersonsId", "p1"."PostsId"\n    FROM "PersonPost" AS "p1"\n    INNER JOIN "Post" AS "p2" ON "p1"."PostsId" = "p2"."Id"\n) AS "t" ON "p"."Id" = "t"."PersonsId"\nORDER BY "p"."Id", "p0"."Id", "c"."Id", "t"."PersonsId", "t"."PostsId", "t"."Id"\n2020-12-21 15:55:25.354 +08:00 [INF] Executed DbCommand (3ms) [Parameters=[], CommandType=\'"Text"\', CommandTimeout=\'30\']\nSELECT "p"."Id", "p"."Name", "p"."Age", "p"."Address", "p0"."PhoneNumber", "p0"."QQ", "p"."CreatedTime", "p0"."Id", "c"."Id", "c"."Name", "c"."Gender", "t"."Id", "t"."Name", "t"."PersonsId", "t"."PostsId"\nFROM "Person" AS "p"\nLEFT JOIN "PersonDetail" AS "p0" ON "p"."Id" = "p0"."PersonId"\nLEFT JOIN "Children" AS "c" ON "p"."Id" = "c"."PersonId"\nLEFT JOIN (\n    SELECT "p2"."Id", "p2"."Name", "p1"."PersonsId", "p1"."PostsId"\n    FROM "PersonPost" AS "p1"\n    INNER JOIN "Post" AS "p2" ON "p1"."PostsId" = "p2"."Id"\n) AS "t" ON "p"."Id" = "t"."PersonsId"\nORDER BY "p"."Id", "p0"."Id", "c"."Id", "t"."PersonsId", "t"."PostsId", "t"."Id"\n2020-12-21 15:58:27.328 +08:00 [INF] Application started. Press Ctrl+C to shut down.\n2020-12-21 15:58:27.442 +08:00 [INF] Hosting environment: Development\n2020-12-21 15:58:27.444 +08:00 [INF] Content root path: D:\\MONK\\Furion\\samples\\Furion.Web.Entry\n2020-12-21 15:58:27.909 +08:00 [INF] HTTP GET / responded 200 in 457.0657 ms\n2020-12-21 15:58:33.336 +08:00 [INF] HTTP GET /api/index.html responded 200 in 95.9277 ms\n2020-12-21 15:58:34.187 +08:00 [INF] HTTP GET /swagger/Default/swagger.json responded 200 in 674.9800 ms\n')),Object(i.b)("h2",{id:"187-\u53cd\u9988\u4e0e\u5efa\u8bae"},"18.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(i.b)("hr",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(i.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/logging/?view=aspnetcore-5.0"}),"ASP.NET Core - \u65e5\u5fd7")," \u7ae0\u8282 \u548c ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://serilog.net/"}),"Serilog")," \u6587\u6863\u3002"))))}p.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(g,c(c({ref:t},b),{},{components:n})):r.a.createElement(g,c({ref:t},b))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);