(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{ZKXN:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return _})),t.d(n,"default",(function(){return v}));var a=t("Fcif"),o=t("mK0O"),d=(t("obia"),t("y+Ly")),l=(t("JJ8S"),t("JIFb")),r=(t("WlIq"),t("wftt")),i=(t("6ySo"),t("HNSN")),c=(t("VebZ"),t("7uBi")),s=(t("IRq+"),t("lMI+")),u=(t("wl/M"),t("DrYe")),p=(t("tgoD"),t("TRAS")),m=t("dV/x"),b=(t("fMh/"),t("mXGw")),y=t("/FXl"),x=t("TjRS"),g=t("ZFoC"),f=t("9H5y"),h=t("yb4O"),k=t("h9Zt"),w=t("p59U"),I=t("s8wl"),S=t("2V35");t("aD51");const O=["components"],j=["columns","exportOpts"];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const _={};void 0!==_&&_&&_===Object(_)&&Object.isExtensible(_)&&!Object.prototype.hasOwnProperty.call(_,"__filemeta")&&Object.defineProperty(_,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/table/index.mdx"}});const R={_frontmatter:_},D=x.a;function v(e){let{components:n}=e,t=Object(m.a)(e,O);return Object(y.b)(D,Object(a.a)({},R,t,{components:n,mdxType:"MDXLayout"}),Object(y.b)("h1",{id:"table-表格"},"Table 表格"),Object(y.b)("h2",{id:"何时使用"},"何时使用"),Object(y.b)("p",null,"当有大量结构化的数据需要展现时；"),Object(y.b)("p",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"),Object(y.b)("h2",{id:"基本用法"},"基本用法"),Object(y.b)("h3",{id:"最基本的"},"最基本的"),Object(y.b)(g.c,{__position:0,__code:"<Table\n  rowKey=\"key\"\n  resizeable={true}\n  columns={[\n    {\n      title: <Help title=\"姓名/外号\" tips=\"健哥的外号叫李健\" />,\n      dataIndex: 'name',\n      width: 200,\n      render: (v, r) => (\n        <NameIdSpace\n          isEditStyle\n          name={\n            <Text\n              editable={{\n                inputWidth: 160,\n                onCheck: value => {\n                  console.log(value)\n                  return true\n                },\n              }}\n            >\n              {v}\n            </Text>\n          }\n          id={r.nickname}\n        />\n      ),\n    },\n    {\n      title: <Info title=\"年龄\" tips=\"永远18岁\" />,\n      dataIndex: 'age',\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n    {\n      title: '联系方式',\n      dataIndex: 'phoneNumber',\n      width: 200,\n      render: (v, r) => {\n        return (\n          <AttachSelect\n            placeholder=\"Adding a Phone number\"\n            disabled={v === '18518300669'}\n            disabledTip=\"号码太好不能换\"\n            defaultValue={\n              r.phoneLabel && r.phoneNumber\n                ? { name: r.phoneLabel, id: r.phoneNumber }\n                : undefined\n            }\n            onChange={v => {\n              console.log(v)\n            }}\n          >\n            <AttachSelect.Option value={'18888888888'} name=\"靓号\">\n              <NameIdSpace isLinkStyle name=\"靓号\" id=\"18888888888\" />\n            </AttachSelect.Option>\n            <AttachSelect.Option value={'17777777777'} name=\"靓号2\">\n              <NameIdSpace isLinkStyle name=\"靓号2\" id=\"17777777777\" />\n            </AttachSelect.Option>\n            <AttachSelect.Option value={'19999999999'} name=\"靓号3\">\n              <NameIdSpace isLinkStyle name=\"靓号3\" id=\"19999999999\" />\n            </AttachSelect.Option>\n          </AttachSelect>\n        )\n      },\n    },\n    {\n      title: 'Action',\n      dataIndex: 'action',\n      align: 'center',\n      width: 200,\n      render: () => {\n        return (\n          <ActionMenu\n            menu={[\n              {\n                key: '1',\n                text: 'Action 1',\n                children: [\n                  {\n                    key: '1-1',\n                    text: 'Action 1-1',\n                    children: [{ key: '1-1-1', text: 'Action 1-1-1' }],\n                  },\n                ],\n              },\n              {\n                key: '2',\n                text: 'Action 2',\n                danger: true,\n                tooltips: { title: 'tooltiptooltip' },\n              },\n            ]}\n          />\n        )\n      },\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      nickname: '小帅哥',\n      age: 32,\n      address: '西湖区湖底公园1号',\n      phoneLabel: undefined,\n      phoneNumber: undefined,\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      nickname: '大帅哥',\n      age: 42,\n      address: '西湖区湖底公园1号',\n      phoneLabel: '靓号',\n      phoneNumber: '18518300669',\n    },\n  ]}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",resizeable:!0,columns:[{title:Object(y.b)(f.a,{title:"姓名/外号",tips:"健哥的外号叫李健",mdxType:"Help"}),dataIndex:"name",width:200,render:(e,n)=>Object(y.b)(w.a,{isEditStyle:!0,name:Object(y.b)(d.a,{editable:{inputWidth:160,onCheck:e=>(console.log(e),!0)},mdxType:"Text"},e),id:n.nickname,mdxType:"NameIdSpace"})},{title:Object(y.b)(f.b,{title:"年龄",tips:"永远18岁",mdxType:"Info"}),dataIndex:"age"},{title:"住址",dataIndex:"address"},{title:"联系方式",dataIndex:"phoneNumber",width:200,render:(e,n)=>Object(y.b)(k.a,{placeholder:"Adding a Phone number",disabled:"18518300669"===e,disabledTip:"号码太好不能换",defaultValue:n.phoneLabel&&n.phoneNumber?{name:n.phoneLabel,id:n.phoneNumber}:void 0,onChange:e=>{console.log(e)},mdxType:"AttachSelect"},Object(y.b)(k.a.Option,{value:"18888888888",name:"靓号"},Object(y.b)(w.a,{isLinkStyle:!0,name:"靓号",id:"18888888888",mdxType:"NameIdSpace"})),Object(y.b)(k.a.Option,{value:"17777777777",name:"靓号2"},Object(y.b)(w.a,{isLinkStyle:!0,name:"靓号2",id:"17777777777",mdxType:"NameIdSpace"})),Object(y.b)(k.a.Option,{value:"19999999999",name:"靓号3"},Object(y.b)(w.a,{isLinkStyle:!0,name:"靓号3",id:"19999999999",mdxType:"NameIdSpace"})))},{title:"Action",dataIndex:"action",align:"center",width:200,render:()=>Object(y.b)(I.a,{menu:[{key:"1",text:"Action 1",children:[{key:"1-1",text:"Action 1-1",children:[{key:"1-1-1",text:"Action 1-1-1"}]}]},{key:"2",text:"Action 2",danger:!0,tooltips:{title:"tooltiptooltip"}}],mdxType:"ActionMenu"})}],dataSource:[{key:"1",name:"胡彦斌",nickname:"小帅哥",age:32,address:"西湖区湖底公园1号",phoneLabel:void 0,phoneNumber:void 0},{key:"2",name:"胡彦祖",nickname:"大帅哥",age:42,address:"西湖区湖底公园1号",phoneLabel:"靓号",phoneNumber:"18518300669"}],mdxType:"Table"})),Object(y.b)("h3",{id:"多选"},"多选"),Object(y.b)(g.c,{__position:1,__code:"<Table\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      age: 32,\n      address: '西湖区湖底公园1号',\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      age: 42,\n      address: '西湖区湖底公园1号',\n    },\n  ]}\n  selection={{\n    type: 'checkbox',\n    rowClick: true,\n    getCheckboxProps: r => ({\n      disabled: r.key === '2',\n      tooltip: { title: '你很棒' },\n    }),\n    onChange: (keys, rows) => {\n      console.log(keys, rows)\n    },\n    operation: (selectedRowKeys, selectedRows, setSelectedRowKeys) => [\n      <Button\n        key=\"1\"\n        size=\"s\"\n        type=\"normal\"\n        onClick={() => {\n          console.log(selectedRowKeys, selectedRows)\n          setSelectedRowKeys([])\n        }}\n        danger\n      >\n        Delete\n      </Button>,\n    ],\n    otherOperation: () => [\n      {\n        key: '1',\n        text: 'test',\n        onClick: () => {\n          console.log('aaa')\n        },\n      },\n    ],\n  }}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"住址",dataIndex:"address"}],dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],selection:{type:"checkbox",rowClick:!0,getCheckboxProps:e=>({disabled:"2"===e.key,tooltip:{title:"你很棒"}}),onChange:(e,n)=>{console.log(e,n)},operation:(e,n,t)=>[Object(y.b)(u.a,{key:"1",size:"s",type:"normal",onClick:()=>{console.log(e,n),t([])},danger:!0,mdxType:"Button"},"Delete")],otherOperation:()=>[{key:"1",text:"test",onClick:()=>{console.log("aaa")}}]},mdxType:"Table"})),Object(y.b)("h3",{id:"单选"},"单选"),Object(y.b)(g.c,{__position:2,__code:"() => {\n  const [selection, setselection] = React.useState(undefined)\n  return (\n    <Space direction=\"vertical\" style={{ width: '100%' }}>\n      <Switch\n        onChange={v => {\n          if (v) {\n            setselection({\n              type: 'radio',\n              rowClick: true,\n              defaultSelectedRowKeys: ['1'],\n            })\n          } else {\n            setselection(undefined)\n          }\n        }}\n      />\n      <Table\n        rowKey=\"key\"\n        columns={[\n          {\n            title: '姓名',\n            dataIndex: 'name',\n          },\n          {\n            title: '年龄',\n            dataIndex: 'age',\n          },\n          {\n            title: '住址',\n            dataIndex: 'address',\n          },\n        ]}\n        dataSource={[\n          {\n            key: '1',\n            name: '胡彦斌',\n            age: 32,\n            address: '西湖区湖底公园1号',\n          },\n          {\n            key: '2',\n            name: '胡彦祖',\n            age: 42,\n            address: '西湖区湖底公园1号',\n          },\n        ]}\n        selection={selection}\n      />\n    </Space>\n  )\n}",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},()=>{const[e,n]=b.useState(void 0);return Object(y.b)(r.a,{direction:"vertical",style:{width:"100%"},mdxType:"Space"},Object(y.b)(l.a,{onChange:e=>{n(e?{type:"radio",rowClick:!0,defaultSelectedRowKeys:["1"]}:void 0)},mdxType:"Switch"}),Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"住址",dataIndex:"address"}],dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],selection:e,mdxType:"Table"}))}),Object(y.b)("h3",{id:"筛选"},"筛选"),Object(y.b)(g.c,{__position:3,__code:"<Table\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n      filters: [\n        { text: '胡彦斌', value: '胡彦斌' },\n        { text: '胡彦祖', value: '胡彦祖' },\n      ],\n      filterDropdown: filterDropdownRender, // singleFilterDropdownRender 单选使用这个render，但需要注意，及时单选filterValue也是数组，注意赋值以及onChange时候的转换，尤其是从url.search上获取的\n      filterIcon: filterIconRender,\n      onFilter: (value, record) => {\n        console.log(value, record)\n        return record.name.includes(value)\n      },\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n      filters: [\n        {\n          text: '20-30岁',\n          children: [\n            {\n              text: '22',\n              value: 22,\n            },\n          ],\n        },\n        {\n          text: '30-40岁',\n          children: [\n            {\n              text: '31',\n              value: 31,\n            },\n            {\n              text: '32',\n              value: 32,\n            },\n          ],\n        },\n        {\n          text: '40-50岁',\n          children: [\n            {\n              text: '42',\n              value: 42,\n            },\n            {\n              text: '44',\n              value: 44,\n            },\n            {\n              text: '45',\n              value: 45,\n            },\n          ],\n        },\n      ],\n      filterDropdown: p =>\n        filterDropdownRender({ ...p, selectAllText: '所有年龄段' }),\n      filterIcon: filterIconRender,\n      onFilter: (value, record) => {\n        console.log(value, record)\n        return record.age === value\n      },\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      age: 32,\n      address: '西湖区湖底公园1号',\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      age: 42,\n      address: '西湖区湖底公园1号',\n    },\n  ]}\n  onChange={(pagination, filters, sorter) => {\n    console.log(pagination, filters, sorter) //后端接口筛选可用此方法，不写onFilter\n  }}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name",filters:[{text:"胡彦斌",value:"胡彦斌"},{text:"胡彦祖",value:"胡彦祖"}],filterDropdown:f.d,filterIcon:f.e,onFilter:(e,n)=>(console.log(e,n),n.name.includes(e))},{title:"年龄",dataIndex:"age",filters:[{text:"20-30岁",children:[{text:"22",value:22}]},{text:"30-40岁",children:[{text:"31",value:31},{text:"32",value:32}]},{text:"40-50岁",children:[{text:"42",value:42},{text:"44",value:44},{text:"45",value:45}]}],filterDropdown:e=>Object(f.d)(T(T({},e),{},{selectAllText:"所有年龄段"})),filterIcon:f.e,onFilter:(e,n)=>(console.log(e,n),n.age===e)},{title:"住址",dataIndex:"address"}],dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],onChange:(e,n,t)=>{console.log(e,n,t)},mdxType:"Table"})),Object(y.b)("h3",{id:"排序"},"排序"),Object(y.b)(g.c,{__position:4,__code:"<Table\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n      defaultSortOrder: 'descend',\n      sorter: (a, b) => a.age - b.age,\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  onChange={(pagination, filters, sorter) => {\n    console.log(pagination, filters, sorter) //后端接口排序可用此方法，sorter设置为true\n  }}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      age: 32,\n      address: '西湖区湖底公园1号',\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      age: 42,\n      address: '西湖区湖底公园1号',\n    },\n  ]}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age",defaultSortOrder:"descend",sorter:(e,n)=>e.age-n.age},{title:"住址",dataIndex:"address"}],onChange:(e,n,t)=>{console.log(e,n,t)},dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],mdxType:"Table"})),Object(y.b)("h3",{id:"提示"},"提示"),Object(y.b)(g.c,{__position:5,__code:"<Table\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      age: 32,\n      address: '西湖区湖底公园1号',\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      age: 42,\n      address: '西湖区湖底公园1号',\n    },\n  ]}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"住址",dataIndex:"address"}],dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],mdxType:"Table"})),Object(y.b)("h3",{id:"children"},"Children"),Object(y.b)(g.c,{__position:6,__code:"<Table\n  selection={{\n    type: 'checkbox',\n    onChange: (keys, rows) => {\n      console.log(keys, rows)\n    },\n    operation: (selectedRowKeys, selectedRows) => [\n      <Button\n        key=\"1\"\n        size=\"s\"\n        type=\"normal\"\n        onClick={() => {\n          console.log(selectedRowKeys, selectedRows)\n        }}\n        danger\n      >\n        Delete\n      </Button>,\n    ],\n  }}\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      age: 32,\n      address: '西湖区湖底公园1号',\n      description:\n        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      age: 42,\n      address: '西湖区湖底公园1号',\n      description:\n        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',\n      children: [\n        {\n          key: '3',\n          name: '胡彦斌',\n          nickname: '小帅哥',\n          age: 32,\n          address: '西湖区湖底公园1号',\n          phoneLabel: undefined,\n          phoneNumber: undefined,\n        },\n      ],\n    },\n  ]}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{selection:{type:"checkbox",onChange:(e,n)=>{console.log(e,n)},operation:(e,n)=>[Object(y.b)(u.a,{key:"1",size:"s",type:"normal",onClick:()=>{console.log(e,n)},danger:!0,mdxType:"Button"},"Delete")]},rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"住址",dataIndex:"address"}],dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",children:[{key:"3",name:"胡彦斌",nickname:"小帅哥",age:32,address:"西湖区湖底公园1号",phoneLabel:void 0,phoneNumber:void 0}]}],mdxType:"Table"})),Object(y.b)("h3",{id:"expanded"},"Expanded"),Object(y.b)(g.c,{__position:7,__code:"<Table\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: '胡彦斌',\n      age: 32,\n      address: '西湖区湖底公园1号',\n      description:\n        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',\n    },\n    {\n      key: '2',\n      name: '胡彦祖',\n      age: 42,\n      address: '西湖区湖底公园1号',\n      description:\n        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',\n    },\n  ]}\n  expandable={{\n    expandedRowRender: record => <span>{record.description}</span>,\n    expandIcon: expandIconRender,\n  }}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"住址",dataIndex:"address"}],dataSource:[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号",description:"My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."}],expandable:{expandedRowRender:e=>Object(y.b)("span",null,e.description),expandIcon:f.c},mdxType:"Table"})),Object(y.b)("h3",{id:"空状态--loading"},"空状态 && Loading"),Object(y.b)(g.c,{__position:8,__code:"<Table\n  rowKey=\"key\"\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n    },\n    {\n      title: '住址',\n      dataIndex: 'address',\n    },\n  ]}\n  dataSource={[]}\n  loading\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",columns:[{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"住址",dataIndex:"address"}],dataSource:[],loading:!0,mdxType:"Table"})),Object(y.b)("h3",{id:"fix-scroll"},"Fix Scroll"),Object(y.b)(g.c,{__position:9,__code:"<Table\n  rowKey=\"key\"\n  scroll={{ x: '100%' }}\n  columns={[\n    {\n      title: '姓名',\n      dataIndex: 'name',\n      width: 200,\n      fixed: 'left',\n    },\n    {\n      title: '年龄',\n      dataIndex: 'age',\n      width: 200,\n      fixed: 'left',\n    },\n    { title: 'Column 1', dataIndex: 'address', width: 200 },\n    { title: 'Column 2', dataIndex: 'address', width: 200 },\n    { title: 'Column 3', dataIndex: 'address', width: 200 },\n    { title: 'Column 4', dataIndex: 'address', width: 200 },\n    { title: 'Column 5', dataIndex: 'address', width: 200 },\n    { title: 'Column 6', dataIndex: 'address', width: 200 },\n    {\n      title: '住址',\n      dataIndex: 'address',\n      width: 200,\n      fixed: 'right',\n    },\n  ]}\n  dataSource={[\n    {\n      key: '1',\n      name: 'John Brown',\n      age: 32,\n      address: 'New York Park',\n    },\n    {\n      key: '2',\n      name: 'Jim Green',\n      age: 40,\n      address: 'London Park',\n    },\n  ]}\n/>",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},Object(y.b)(p.a,{rowKey:"key",scroll:{x:"100%"},columns:[{title:"姓名",dataIndex:"name",width:200,fixed:"left"},{title:"年龄",dataIndex:"age",width:200,fixed:"left"},{title:"Column 1",dataIndex:"address",width:200},{title:"Column 2",dataIndex:"address",width:200},{title:"Column 3",dataIndex:"address",width:200},{title:"Column 4",dataIndex:"address",width:200},{title:"Column 5",dataIndex:"address",width:200},{title:"Column 6",dataIndex:"address",width:200},{title:"住址",dataIndex:"address",width:200,fixed:"right"}],dataSource:[{key:"1",name:"John Brown",age:32,address:"New York Park"},{key:"2",name:"Jim Green",age:40,address:"London Park"}],mdxType:"Table"})),Object(y.b)("h3",{id:"设置表头和导出功能"},"设置表头和导出功能"),Object(y.b)(g.c,{__position:10,__code:"() => {\n  const { columns, exportOpts, ...props } = useSetColumn({\n    columns: [\n      {\n        title: <Help title=\"姓名\" tips=\"这就是简单的姓名\" />,\n        dataIndex: 'name',\n        columnsOpts: {\n          title: '姓名', //当columns.title为ReactNode时，才需要设置此项\n          disabled: false,\n          defaultChecked: true,\n        },\n        exportOpts: {\n          title: '姓名',\n          key: 'name',\n          disabled: true,\n          defaultChecked: true,\n        },\n      },\n      {\n        title: '年龄',\n        dataIndex: 'age',\n        columnsOpts: {\n          disabled: false,\n          defaultChecked: false,\n        },\n        exportOpts: {\n          title: '年龄',\n          key: 'age',\n          disabled: false,\n          defaultChecked: true,\n        },\n      },\n      {\n        title: '住址',\n        dataIndex: 'address',\n        columnsOpts: {\n          disabled: true,\n          defaultChecked: true,\n        },\n        exportOpts: [\n          {\n            title: '住址1',\n            key: 'address1',\n            disabled: false,\n            defaultChecked: true,\n          },\n          {\n            title: '住址2',\n            key: 'address2',\n            disabled: false,\n            defaultChecked: true,\n          },\n        ],\n      },\n    ],\n    id: 'table-demo',\n    userUid: 'string',\n    version: '1.0.0',\n  })\n  return (\n    <Space direction=\"vertical\" style={{ width: '100%' }}>\n      <Button.Group size=\"s\">\n        <ExportButton\n          exportOpts={exportOpts}\n          currentListParams={{\n            pageNum: 1,\n            pageSize: 20,\n          }}\n          onExport={(...arg) => {\n            console.log(arg)\n          }}\n        />\n        <SetColumnButton {...props} />\n        <Button\n          type=\"normal\"\n          icon={<Icon type=\"general/Sync\" />}\n          width={56}\n        />\n      </Button.Group>\n      <Table rowKey=\"key\" columns={columns} dataSource={[]} />\n    </Space>\n  )\n}",__scope:{props:t,DefaultLayout:x.a,Playground:g.c,Props:g.d,Table:p.a,Button:u.a,Dropdown:s.a,Menu:c.default,Icon:i.a,Space:r.a,Switch:l.a,Text:d.a,Help:f.a,Info:f.b,filterDropdownRender:f.d,singleFilterDropdownRender:f.f,filterIconRender:f.e,expandIconRender:f.c,useSetColumn:h.b,SetColumnButton:h.a,AttachSelect:k.a,NameIdSpace:w.a,ActionMenu:I.a,ExportButton:S.a,DefaultLayout:x.a,_frontmatter:_},mdxType:"Playground"},()=>{const e=Object(h.b)({columns:[{title:Object(y.b)(f.a,{title:"姓名",tips:"这就是简单的姓名",mdxType:"Help"}),dataIndex:"name",columnsOpts:{title:"姓名",disabled:!1,defaultChecked:!0},exportOpts:{title:"姓名",key:"name",disabled:!0,defaultChecked:!0}},{title:"年龄",dataIndex:"age",columnsOpts:{disabled:!1,defaultChecked:!1},exportOpts:{title:"年龄",key:"age",disabled:!1,defaultChecked:!0}},{title:"住址",dataIndex:"address",columnsOpts:{disabled:!0,defaultChecked:!0},exportOpts:[{title:"住址1",key:"address1",disabled:!1,defaultChecked:!0},{title:"住址2",key:"address2",disabled:!1,defaultChecked:!0}]}],id:"table-demo",userUid:"string",version:"1.0.0"}),{columns:n,exportOpts:t}=e,o=Object(m.a)(e,j);return Object(y.b)(r.a,{direction:"vertical",style:{width:"100%"},mdxType:"Space"},Object(y.b)(u.a.Group,{size:"s"},Object(y.b)(S.a,{exportOpts:t,currentListParams:{pageNum:1,pageSize:20},onExport:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];console.log(n)},mdxType:"ExportButton"}),Object(y.b)(h.a,Object(a.a)({},o,{mdxType:"SetColumnButton"})),Object(y.b)(u.a,{type:"normal",icon:Object(y.b)(i.a,{type:"general/Sync",mdxType:"Icon"}),width:56,mdxType:"Button"})),Object(y.b)(p.a,{rowKey:"key",columns:n,dataSource:[],mdxType:"Table"}))}),Object(y.b)("h2",{id:"api"},"API"),Object(y.b)("p",null,Object(y.b)("a",{parentName:"p",href:"https://ant.design/components/table-cn/"},"Ant Design Table API")),Object(y.b)("h3",{id:"tableselection多选单选操作"},"Table.selection（多选、单选操作）"),Object(y.b)("pre",null,Object(y.b)("code",{parentName:"pre"},"  selection?: {\n    type?: 'checkbox' | 'radio'; //默认checkbox\n    defaultSelectedRowKeys?: string[];\n    onChange?: (selectedRowKeys: string[], selectedRows: T[]) => void;\n    rowClick?: boolean;\n    operation?: (\n      selectedRowKeys: string[],\n      selectedRows: T[],\n      setSelectedRowKeys: (key: string[]) => void\n    ) => React.ReactElement[];\n    otherOperation?: ( //当operation<2个时，这里的会放到前面展示\n      selectedRowKeys: string[],\n      selectedRows: T[],\n      setSelectedRowKeys: (key: string[]) => void\n    ) => Action[];\n  };\n")),Object(y.b)("h3",{id:"usesetcolumn"},"useSetColumn"),Object(y.b)("pre",null,Object(y.b)("code",{parentName:"pre"},"    const { columns,  columnsConfig, setColumnsConfig } = useSetColumn({\n      columns: [\n        {\n          title: '姓名',\n          dataIndex: 'name',\n          columnsOpts: {  //在原本的columns里增加了这个配置\n            title?:'姓名',  //一般可不传此字段，当columns.title是一个node时，使用这个字段作为展示和记录，默认使用columns.title\n            key:string,\n            disabled: false,\n            defaultChecked: true,\n          },\n          exportOpts?:  //如果需要判断权限确定是否导出，可传undefined不展示此项，设置hidden为true时，也会自动过滤此项\n          | {\n              title: string;\n              key: string;\n              disabled: boolean;\n              defaultChecked: boolean;\n            }\n          | {\n              title: string;\n              key: string;\n              disabled: boolean;\n              defaultChecked: boolean;\n            }[]\n        },\n        ...\n      ],\n      id: 'table-demo', //应全局唯一\n      userUid: 'string', //绑定在user层面\n      version: '1.0.0', //columns配置更新后更新版本\n    });\n\n    <SetColumnButton columnsConfig={columnsConfig} setColumnsConfig={setColumnsConfig}/> //可以传Button的各种属性，可以放在ButtonGroup下使用\n")),Object(y.b)("p",null,"注：提供的一些组件、方法从 table 中引入"),Object(y.b)("pre",null,Object(y.b)("code",{parentName:"pre"},"import {\n  Help,\n  filterDropdownRender,\n  singleFilterDropdownRender,\n  filterIconRender,\n  expandIconRender,\n  useSetColumn,\n  SetColumnButton,\n} from './table';\n")))}void 0!==v&&v&&v===Object(v)&&Object.isExtensible(v)&&!Object.prototype.hasOwnProperty.call(v,"__filemeta")&&Object.defineProperty(v,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/table/index.mdx"}}),v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-table-index-mdx-de3ed9732ed9d0864143.js.map