(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5CCA":function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return l})),n.d(e,"default",(function(){return m}));var a=n("Fcif"),s=(n("wl/M"),n("DrYe")),b=(n("WlIq"),n("wftt")),o=n("+I+c"),c=(n("mXGw"),n("/FXl")),p=n("TjRS"),i=n("ZFoC"),d=(n("aD51"),["components"]),l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/space/index.mdx"}});var u={_frontmatter:l},r=p.a;function m(t){var e,n,m,O,j,B=t.components,y=Object(o.a)(t,d);return Object(c.b)(r,Object(a.a)({},u,y,{components:B,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"space-间距"},"Space 间距"),Object(c.b)("p",null,"设置组件之间的间距。"),Object(c.b)("h2",{id:"基本用法"},"基本用法"),Object(c.b)(i.c,{__position:0,__code:'<Space>\n  test\n  <Button size="s">test1</Button>\n  <Button size="s">test2</Button>\n</Space>',__scope:(e={props:y,DefaultLayout:p.a,Playground:i.c,Props:i.d,Space:b.default,Button:s.a},e.DefaultLayout=p.a,e._frontmatter=l,e),mdxType:"Playground"},Object(c.b)(b.default,{mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test1"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test2"))),Object(c.b)("h2",{id:"垂直"},"垂直"),Object(c.b)(i.c,{__position:1,__code:'<Space direction="vertical">\n  test\n  <Button size="s">test1</Button>\n  <Button size="s">test2</Button>\n</Space>',__scope:(n={props:y,DefaultLayout:p.a,Playground:i.c,Props:i.d,Space:b.default,Button:s.a},n.DefaultLayout=p.a,n._frontmatter=l,n),mdxType:"Playground"},Object(c.b)(b.default,{direction:"vertical",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test1"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test2"))),Object(c.b)("h2",{id:"设置间距"},"设置间距"),Object(c.b)(i.c,{__position:2,__code:'<Space size="ll">\n  test\n  <Button size="s">test</Button>\n  <Button size="s">test</Button>\n</Space>',__scope:(m={props:y,DefaultLayout:p.a,Playground:i.c,Props:i.d,Space:b.default,Button:s.a},m.DefaultLayout=p.a,m._frontmatter=l,m),mdxType:"Playground"},Object(c.b)(b.default,{size:"ll",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"))),Object(c.b)("h2",{id:"对齐"},"对齐"),Object(c.b)(i.c,{__position:3,__code:"<div style={{ width: '300px', height: '100px', border: '1px solid #ccc' }}>\n  <Space align=\"start\">\n    test\n    <Button size=\"s\">test</Button>\n    <Button>test</Button>\n  </Space>\n</div>\n<div style={{ width: '300px', height: '100px', border: '1px solid #ccc' }}>\n  <Space align=\"end\">\n    test\n    <Button size=\"s\">test</Button>\n    <Button>test</Button>\n  </Space>\n</div>\n<div style={{ width: '300px', height: '100px', border: '1px solid #ccc' }}>\n  <Space align=\"center\">\n    test\n    <Button size=\"s\">test</Button>\n    <Button>test</Button>\n  </Space>\n</div>\n<div style={{ width: '300px', height: '100px', border: '1px solid #ccc' }}>\n  <Space align=\"baseline\">\n    test\n    <Button size=\"s\">test</Button>\n    <Button>test</Button>\n  </Space>\n</div>",__scope:(O={props:y,DefaultLayout:p.a,Playground:i.c,Props:i.d,Space:b.default,Button:s.a},O.DefaultLayout=p.a,O._frontmatter=l,O),mdxType:"Playground"},Object(c.b)("div",{style:{width:"300px",height:"100px",border:"1px solid #ccc"}},Object(c.b)(b.default,{align:"start",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{mdxType:"Button"},"test"))),Object(c.b)("div",{style:{width:"300px",height:"100px",border:"1px solid #ccc"}},Object(c.b)(b.default,{align:"end",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{mdxType:"Button"},"test"))),Object(c.b)("div",{style:{width:"300px",height:"100px",border:"1px solid #ccc"}},Object(c.b)(b.default,{align:"center",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{mdxType:"Button"},"test"))),Object(c.b)("div",{style:{width:"300px",height:"100px",border:"1px solid #ccc"}},Object(c.b)(b.default,{align:"baseline",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{mdxType:"Button"},"test")))),Object(c.b)("h2",{id:"换行"},"换行"),Object(c.b)(i.c,{__position:4,__code:'<div style={{ width: \'300px\', height: \'100px\', border: \'1px solid #ccc\' }}>\n  <Space wrap="wrap">\n    test\n    <Button size="s">test</Button>\n    <Button>test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n  </Space>\n</div>\n<div style={{ width: \'300px\', height: \'100px\', border: \'1px solid #ccc\' }}>\n  <Space wrap="reverse">\n    test\n    <Button size="s">test</Button>\n    <Button>test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n    <Button size="s">test</Button>\n  </Space>\n</div>',__scope:(j={props:y,DefaultLayout:p.a,Playground:i.c,Props:i.d,Space:b.default,Button:s.a},j.DefaultLayout=p.a,j._frontmatter=l,j),mdxType:"Playground"},Object(c.b)("div",{style:{width:"300px",height:"100px",border:"1px solid #ccc"}},Object(c.b)(b.default,{wrap:"wrap",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"))),Object(c.b)("div",{style:{width:"300px",height:"100px",border:"1px solid #ccc"}},Object(c.b)(b.default,{wrap:"reverse",mdxType:"Space"},"test",Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test"),Object(c.b)(s.a,{size:"s",mdxType:"Button"},"test")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"属性"),Object(c.b)("th",{parentName:"tr",align:null},"说明"),Object(c.b)("th",{parentName:"tr",align:null},"类型"),Object(c.b)("th",{parentName:"tr",align:null},"默认值"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"align"),Object(c.b)("td",{parentName:"tr",align:null},"对齐方式"),Object(c.b)("td",{parentName:"tr",align:null},"start ","|"," end ","|","center ","|","baseline"),Object(c.b)("td",{parentName:"tr",align:null},"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"direction"),Object(c.b)("td",{parentName:"tr",align:null},"间距方向"),Object(c.b)("td",{parentName:"tr",align:null},"vertical ","|"," horizontal"),Object(c.b)("td",{parentName:"tr",align:null},"horizontal")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"size"),Object(c.b)("td",{parentName:"tr",align:null},"间距大小"),Object(c.b)("td",{parentName:"tr",align:null},"l - lllll ","|"," number"),Object(c.b)("td",{parentName:"tr",align:null},"l")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"wrap"),Object(c.b)("td",{parentName:"tr",align:null},"换行"),Object(c.b)("td",{parentName:"tr",align:null},"nowrap ","|"," wrap ","|","reverse"),Object(c.b)("td",{parentName:"tr",align:null},"nowrap")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"className"),Object(c.b)("td",{parentName:"tr",align:null},"The computed class name of the Space element"),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null},"-")))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/space/index.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-space-index-mdx-62337995d9cec6b18f5d.js.map