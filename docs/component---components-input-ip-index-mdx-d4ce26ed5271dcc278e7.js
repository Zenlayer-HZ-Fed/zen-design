(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ovlP:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return d})),n.d(e,"default",(function(){return O}));var a=n("Fcif"),l=(n("phgI"),n("yzPz")),b=n("+I+c"),r=(n("mXGw"),n("/FXl")),c=n("TjRS"),i=n("ZFoC"),p=(n("aD51"),["components"]),d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/input-ip/index.mdx"}});var u={_frontmatter:d},m=c.a;function O(t){var e,n=t.components,O=Object(b.a)(t,p);return Object(r.b)(m,Object(a.a)({},u,O,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"inputip-ip-下拉"},"InputIp IP 下拉"),Object(r.b)("h2",{id:"基本用法"},"基本用法"),Object(r.b)("h3",{id:"使用"},"使用"),Object(r.b)(i.c,{__position:0,__code:"<InputIp\n  subnetMaskRange={[16, 30]}\n  includeSubnets={['192.168.0.0/16', '10.0.0.0/8', '172.16.0.0/12']}\n  onChange={v => console.log(v)}\n/>",__scope:(e={props:O,DefaultLayout:c.a,Playground:i.c,InputIp:l.a},e.DefaultLayout=c.a,e._frontmatter=d,e),mdxType:"Playground"},Object(r.b)(l.a,{subnetMaskRange:[16,30],includeSubnets:["192.168.0.0/16","10.0.0.0/8","172.16.0.0/12"],onChange:function(t){return console.log(t)},mdxType:"InputIp"})),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"属性"),Object(r.b)("th",{parentName:"tr",align:null},"说明"),Object(r.b)("th",{parentName:"tr",align:null},"类型"),Object(r.b)("th",{parentName:"tr",align:null},"默认值"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"width"),Object(r.b)("td",{parentName:"tr",align:null},"设置下拉框宽度"),Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"size"),Object(r.b)("td",{parentName:"tr",align:null},"设置下拉框的大小"),Object(r.b)("td",{parentName:"tr",align:null},'"m"',"|",'"l"'),Object(r.b)("td",{parentName:"tr",align:null},'"m"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"type"),Object(r.b)("td",{parentName:"tr",align:null},"设置下拉框的类型"),Object(r.b)("td",{parentName:"tr",align:null},'"outline"',"|",'"filled"'),Object(r.b)("td",{parentName:"tr",align:null},'"outline"')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(r.b)("td",{parentName:"tr",align:null},"默认 ip"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"value"),Object(r.b)("td",{parentName:"tr",align:null},"ip"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"disabledSelectKeys"),Object(r.b)("td",{parentName:"tr",align:null},"禁用指定的 select"),Object(r.b)("td",{parentName:"tr",align:null},"('w' ","|"," 'x' ","|"," 'y' ","|"," 'z' ","|"," 'subnetMask')[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"onChange"),Object(r.b)("td",{parentName:"tr",align:null},"选中下拉选项时的回调"),Object(r.b)("td",{parentName:"tr",align:null},"(value:string)=>void"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"subnetMaskRange"),Object(r.b)("td",{parentName:"tr",align:null},"子网掩码的选择范围"),Object(r.b)("td",{parentName:"tr",align:null},"[number, number]"),Object(r.b)("td",{parentName:"tr",align:null},"[1,30]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"excludeIps"),Object(r.b)("td",{parentName:"tr",align:null},"排除指定 IP"),Object(r.b)("td",{parentName:"tr",align:null},"string[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"excludeSubnets"),Object(r.b)("td",{parentName:"tr",align:null},"排除所有指定网段"),Object(r.b)("td",{parentName:"tr",align:null},"string[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"includeSubnets"),Object(r.b)("td",{parentName:"tr",align:null},"包含指定网段的任意一个"),Object(r.b)("td",{parentName:"tr",align:null},"string[]"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"isNetworkAddress"),Object(r.b)("td",{parentName:"tr",align:null},"是否是网络地址"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"isBroadcastAddress"),Object(r.b)("td",{parentName:"tr",align:null},"是否是广播地址"),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"className"),Object(r.b)("td",{parentName:"tr",align:null},"自定义 CSS className"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"style"),Object(r.b)("td",{parentName:"tr",align:null},"自定义内联样式"),Object(r.b)("td",{parentName:"tr",align:null},"CSSProperties"),Object(r.b)("td",{parentName:"tr",align:null},"-")))))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/input-ip/index.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-input-ip-index-mdx-d4ce26ed5271dcc278e7.js.map