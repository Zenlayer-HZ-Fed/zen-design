(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5NNo":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a("Fcif"),l=(a("XHMN"),a("OSBS")),b=(a("vYLI"),a("dETG")),r=a("+I+c"),c=a("mXGw"),i=a("/FXl"),d=a("TjRS"),p=a("ZFoC"),o=(a("aD51"),["components"]),u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/checkbox/index.mdx"}});var m={_frontmatter:u},O=d.a;function s(e){var t,a,s,j,g,h,N=e.components,y=Object(r.a)(e,o);return Object(i.b)(O,Object(n.a)({},m,y,{components:N,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"checkbox-多选框"},"Checkbox 多选框"),Object(i.b)("p",null,"多选框。"),Object(i.b)("h2",{id:"何时使用"},"何时使用"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"在一组可选项中进行多项选择时；"),Object(i.b)("li",{parentName:"ol"},"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")),Object(i.b)("h2",{id:"基本用法"},"基本用法"),Object(i.b)("h3",{id:"受控"},"受控"),Object(i.b)(p.c,{__position:0,__code:"() => {\n  const [checked, onChange] = React.useState(false)\n  return <Checkbox checked={checked} onChange={onChange} />\n}",__scope:(t={props:y,DefaultLayout:d.a,Playground:p.c,Props:p.d,Checkbox:b.default,Space:l.b},t.DefaultLayout=d.a,t._frontmatter=u,t),mdxType:"Playground"},(function(){var e=c.useState(!1),t=e[0],a=e[1];return Object(i.b)(b.default,{checked:t,onChange:a,mdxType:"Checkbox"})})),Object(i.b)("h3",{id:"不可用"},"不可用"),Object(i.b)(p.c,{__position:1,__code:"<Checkbox style={{ marginRight: 8 }} />\n<Checkbox defaultChecked={true} style={{ marginRight: 8 }} />\n<Checkbox disabled style={{ marginRight: 8 }} />\n<Checkbox checked disabled />",__scope:(a={props:y,DefaultLayout:d.a,Playground:p.c,Props:p.d,Checkbox:b.default,Space:l.b},a.DefaultLayout=d.a,a._frontmatter=u,a),mdxType:"Playground"},Object(i.b)(b.default,{style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{defaultChecked:!0,style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{disabled:!0,style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{checked:!0,disabled:!0,mdxType:"Checkbox"})),Object(i.b)("h3",{id:"部分选中状态"},"部分选中状态"),Object(i.b)(p.c,{__position:2,__code:"<Checkbox indeterminate style={{ marginRight: 8 }} />\n<Checkbox indeterminate disabled />",__scope:(s={props:y,DefaultLayout:d.a,Playground:p.c,Props:p.d,Checkbox:b.default,Space:l.b},s.DefaultLayout=d.a,s._frontmatter=u,s),mdxType:"Playground"},Object(i.b)(b.default,{indeterminate:!0,style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{indeterminate:!0,disabled:!0,mdxType:"Checkbox"})),Object(i.b)("h3",{id:"形状"},"形状"),Object(i.b)(p.c,{__position:3,__code:'<Checkbox shape="circular" style={{ marginRight: 8 }} />\n<Checkbox shape="square" />',__scope:(j={props:y,DefaultLayout:d.a,Playground:p.c,Props:p.d,Checkbox:b.default,Space:l.b},j.DefaultLayout=d.a,j._frontmatter=u,j),mdxType:"Playground"},Object(i.b)(b.default,{shape:"circular",style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{shape:"square",mdxType:"Checkbox"})),Object(i.b)("h3",{id:"大小"},"大小"),Object(i.b)(p.c,{__position:4,__code:'<Checkbox shape="circular" size="m" style={{ marginRight: 8 }} />\n<Checkbox shape="square" size="m" style={{ marginRight: 8 }} />\n<Checkbox shape="circular" size="s" style={{ marginRight: 8 }} />\n<Checkbox shape="square" size="s" />',__scope:(g={props:y,DefaultLayout:d.a,Playground:p.c,Props:p.d,Checkbox:b.default,Space:l.b},g.DefaultLayout=d.a,g._frontmatter=u,g),mdxType:"Playground"},Object(i.b)(b.default,{shape:"circular",size:"m",style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{shape:"square",size:"m",style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{shape:"circular",size:"s",style:{marginRight:8},mdxType:"Checkbox"}),Object(i.b)(b.default,{shape:"square",size:"s",mdxType:"Checkbox"})),Object(i.b)("h3",{id:"checkbox-组"},"Checkbox 组"),Object(i.b)(p.c,{__position:5,__code:"<Checkbox.Group\n  options={[\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n/>\n<Checkbox.Group\n  disabled={true}\n  options={[\n    { label: 'Apple', value: 'Apple' },\n    { label: 'Pear', value: 'Pear' },\n    { label: 'Orange', value: 'Orange' },\n  ]}\n/>",__scope:(h={props:y,DefaultLayout:d.a,Playground:p.c,Props:p.d,Checkbox:b.default,Space:l.b},h.DefaultLayout=d.a,h._frontmatter=u,h),mdxType:"Playground"},Object(i.b)(b.default.Group,{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]}),Object(i.b)(b.default.Group,{disabled:!0,options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]})),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"checkbox"},"Checkbox"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"属性"),Object(i.b)("th",{parentName:"tr",align:null},"说明"),Object(i.b)("th",{parentName:"tr",align:null},"类型"),Object(i.b)("th",{parentName:"tr",align:null},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"defaultChecked"),Object(i.b)("td",{parentName:"tr",align:null},"初始是否选中"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"checked"),Object(i.b)("td",{parentName:"tr",align:null},"指定当前是否选中"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"onChange"),Object(i.b)("td",{parentName:"tr",align:null},"变化时回调函数"),Object(i.b)("td",{parentName:"tr",align:null},"(checked:boolean)=>void"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"label"),Object(i.b)("td",{parentName:"tr",align:null},"label"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"disabled"),Object(i.b)("td",{parentName:"tr",align:null},"失效状态"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"indeterminate"),Object(i.b)("td",{parentName:"tr",align:null},"设置 indeterminate 状态，只负责样式控制 (shape 为'square'时没有次状态)"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"shape"),Object(i.b)("td",{parentName:"tr",align:null},"形状"),Object(i.b)("td",{parentName:"tr",align:null},"'circular' ","|"," 'square'"),Object(i.b)("td",{parentName:"tr",align:null},"'circular'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"size"),Object(i.b)("td",{parentName:"tr",align:null},"大小"),Object(i.b)("td",{parentName:"tr",align:null},"'m' ","|"," 's'"),Object(i.b)("td",{parentName:"tr",align:null},"'m'")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"labelClassName"),Object(i.b)("td",{parentName:"tr",align:null},"自定义 Label CSS className"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"className"),Object(i.b)("td",{parentName:"tr",align:null},"自定义 CSS className"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"style"),Object(i.b)("td",{parentName:"tr",align:null},"自定义内联样式"),Object(i.b)("td",{parentName:"tr",align:null},"CSSProperties"),Object(i.b)("td",{parentName:"tr",align:null},"-")))),Object(i.b)("h3",{id:"checkboxgroup"},"Checkbox.Group"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"属性"),Object(i.b)("th",{parentName:"tr",align:null},"说明"),Object(i.b)("th",{parentName:"tr",align:null},"类型"),Object(i.b)("th",{parentName:"tr",align:null},"默认值"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"defaultValue"),Object(i.b)("td",{parentName:"tr",align:null},"默认选中的选项"),Object(i.b)("td",{parentName:"tr",align:null},"string[]"),Object(i.b)("td",{parentName:"tr",align:null},"[]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"value"),Object(i.b)("td",{parentName:"tr",align:null},"指定选中的选项"),Object(i.b)("td",{parentName:"tr",align:null},"string[]"),Object(i.b)("td",{parentName:"tr",align:null},"[]")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"onChange"),Object(i.b)("td",{parentName:"tr",align:null},"变化时回调函数"),Object(i.b)("td",{parentName:"tr",align:null},"(value:string[])=>void"),Object(i.b)("td",{parentName:"tr",align:null},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"disabled"),Object(i.b)("td",{parentName:"tr",align:null},"整组失效(优先级大于 options 里的 disabled)"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"options"),Object(i.b)("td",{parentName:"tr",align:null},"指定可选项"),Object(i.b)("td",{parentName:"tr",align:null},"Option[]"),Object(i.b)("td",{parentName:"tr",align:null},"[]")))),Object(i.b)("h4",{id:"option"},"Option"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  interface Option {\n    label: string;\n    value: string;\n    disabled?: boolean;\n    shape?: 'circular' | 'square';\n    size?: 'm' | 's'\n    className?: string;\n    style?: React.CSSProperties;\n  }\n")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/checkbox/index.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-checkbox-index-mdx-e62e0616d9ffa2a4696e.js.map