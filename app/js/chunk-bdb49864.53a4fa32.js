(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdb49864"],{"1cfa":function(t,e,a){},"28ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-notice-bar",{attrs:{wrapable:"",scrollable:!1,text:"本页面演示商户流程，请自行注册商户，获取API Key后结合自身业务进行开发！"}}),a("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px",margin:"50px 0 50px 0"}},[a("span",{staticStyle:{"font-size":"18px"}},[t._v(" 商户Demo登录 ")])]),a("van-cell-group",{staticStyle:{"margin-top":"30px","margin-bottom":"12px"}},[a("van-field",{attrs:{type:"text",size:"large",label:"用户名：",placeholder:"请输入用户名jack/sam/john/Bill"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("van-field",{attrs:{size:"large",type:"password",label:"密码：",placeholder:"请输入密码123456"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"button-warp"},[a("van-button",{attrs:{type:"info",block:""},on:{click:t.toLogin}},[t._v(" 登 录 ")])],1)],1)},i=[],r=(a("d3b7"),a("ade3")),o=(a("480b"),a("a37c")),s=(a("3c32"),a("417e")),l=(a("e566"),a("5d26")),c=(a("e7e5"),a("d399")),h=(a("9a83"),a("f564")),u=(a("4467"),a("c36e")),f=(a("68ef"),a("a71a"),a("9d70"),a("3743"),a("4d75"),a("e3b3"),a("bc1b"),a("b258"),a("819b"),a("4598")),d=a("bad1"),m=a("a8c1"),g=a("d282"),p=Object(g["a"])("calendar"),b=p[0],y=p[1],v=p[2];function D(t){return v("monthTitle",t.getFullYear(),t.getMonth()+1)}function w(t,e){var a=t.getFullYear(),n=e.getFullYear(),i=t.getMonth(),r=e.getMonth();return a===n?i===r?0:i>r?1:-1:a>n?1:-1}function O(t,e){var a=w(t,e);if(0===a){var n=t.getDate(),i=e.getDate();return n===i?0:n>i?1:-1}return a}function k(t,e){return t=new Date(t),t.setDate(t.getDate()+e),t}function S(t){return k(t,-1)}function j(t){return k(t,1)}function x(t){var e=t[0].getTime(),a=t[1].getTime();return(a-e)/864e5+1}function T(t){return new Date(t)}function B(t){return Array.isArray(t)?t.map((function(t){return null===t?t:T(t)})):T(t)}var $,C=a("e41f"),M=a("b650"),R=a("ea8e"),I=a("96b0"),E=Object(g["a"])("calendar-month"),W=E[0],F=W({props:{date:Date,type:String,color:String,minDate:Date,maxDate:Date,showMark:Boolean,rowHeight:[Number,String],formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number},data:function(){return{visible:!1}},computed:{title:function(){return D(this.date)},rowHeightWithUnit:function(){return Object(R["a"])(this.rowHeight)},offset:function(){var t=this.firstDayOfWeek,e=this.date.getDay();return t?(e+7-this.firstDayOfWeek)%7:e},totalDay:function(){return Object(I["a"])(this.date.getFullYear(),this.date.getMonth()+1)},shouldRender:function(){return this.visible||!this.lazyRender},placeholders:function(){for(var t=[],e=Math.ceil((this.totalDay+this.offset)/7),a=1;a<=e;a++)t.push({type:"placeholder"});return t},days:function(){for(var t=[],e=this.date.getFullYear(),a=this.date.getMonth(),n=1;n<=this.totalDay;n++){var i=new Date(e,a,n),r=this.getDayType(i),o={date:i,type:r,text:n,bottomInfo:this.getBottomInfo(r)};this.formatter&&(o=this.formatter(o)),t.push(o)}return t}},methods:{getHeight:function(){return this.height||(this.height=this.$el.getBoundingClientRect().height),this.height},scrollIntoView:function(t){var e=this.$refs,a=e.days,n=e.month,i=this.showSubtitle?a:n,r=i.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop;Object(m["h"])(t,r)},getMultipleDayType:function(t){var e=this,a=function(t){return e.currentDate.some((function(e){return 0===O(e,t)}))};if(a(t)){var n=S(t),i=j(t),r=a(n),o=a(i);return r&&o?"multiple-middle":r?"end":o?"start":"multiple-selected"}return""},getRangeDayType:function(t){var e=this.currentDate,a=e[0],n=e[1];if(!a)return"";var i=O(t,a);if(!n)return 0===i?"start":"";var r=O(t,n);return 0===i&&0===r&&this.allowSameDay?"start-end":0===i?"start":0===r?"end":i>0&&r<0?"middle":void 0},getDayType:function(t){var e=this.type,a=this.minDate,n=this.maxDate,i=this.currentDate;return O(t,a)<0||O(t,n)>0?"disabled":null!==i?"single"===e?0===O(t,i)?"selected":"":"multiple"===e?this.getMultipleDayType(t):"range"===e?this.getRangeDayType(t):void 0:void 0},getBottomInfo:function(t){if("range"===this.type){if("start"===t||"end"===t)return v(t);if("start-end"===t)return v("startEnd")}},getDayStyle:function(t,e){var a={height:this.rowHeightWithUnit};return"placeholder"===t?(a.width="100%",a):(0===e&&(a.marginLeft=100*this.offset/7+"%"),this.color&&("start"===t||"end"===t||"start-end"===t||"multiple-selected"===t||"multiple-middle"===t?a.background=this.color:"middle"===t&&(a.color=this.color)),a)},genTitle:function(){var t=this.$createElement;if(this.showMonthTitle)return t("div",{class:y("month-title")},[this.title])},genMark:function(){var t=this.$createElement;if(this.showMark&&this.shouldRender)return t("div",{class:y("month-mark")},[this.date.getMonth()+1])},genDays:function(){var t=this.$createElement,e=this.shouldRender?this.days:this.placeholders;return t("div",{ref:"days",attrs:{role:"grid"},class:y("days")},[this.genMark(),e.map(this.genDay)])},genDay:function(t,e){var a=this,n=this.$createElement,i=t.type,r=t.topInfo,o=t.bottomInfo,s=this.getDayStyle(i,e),l="disabled"===i,c=function(){l||a.$emit("click",t)},h=r&&n("div",{class:y("top-info")},[r]),u=o&&n("div",{class:y("bottom-info")},[o]);return"selected"===i?n("div",{attrs:{role:"gridcell",tabindex:-1},style:s,class:[y("day"),t.className],on:{click:c}},[n("div",{class:y("selected-day"),style:{width:this.rowHeightWithUnit,height:this.rowHeightWithUnit,background:this.color}},[h,t.text,u])]):n("div",{attrs:{role:"gridcell",tabindex:l?null:-1},style:s,class:[y("day",i),t.className],on:{click:c}},[h,t.text,u])}},render:function(){var t=arguments[0];return t("div",{class:y("month"),ref:"month"},[this.genTitle(),this.genDays()])}}),H=Object(g["a"])("calendar-header"),P=H[0],A=P({props:{title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},methods:{genTitle:function(){var t=this.$createElement;if(this.showTitle){var e=this.slots("title")||this.title||v("title");return t("div",{class:y("header-title")},[e])}},genSubtitle:function(){var t=this.$createElement;if(this.showSubtitle)return t("div",{class:y("header-subtitle")},[this.subtitle])},genWeekDays:function(){var t=this.$createElement,e=v("weekdays"),a=this.firstDayOfWeek,n=[].concat(e.slice(a,7),e.slice(0,a));return t("div",{class:y("weekdays")},[n.map((function(e){return t("span",{class:y("weekday")},[e])}))])}},render:function(){var t=arguments[0];return t("div",{class:y("header")},[this.genTitle(),this.genSubtitle(),this.genWeekDays()])}}),N=b({props:{title:String,color:String,value:Boolean,readonly:Boolean,formatter:Function,rowHeight:[Number,String],confirmText:String,rangePrompt:String,defaultDate:[Date,Array],getContainer:[String,Function],allowSameDay:Boolean,confirmDisabledText:String,type:{type:String,default:"single"},round:{type:Boolean,default:!0},position:{type:String,default:"bottom"},poppable:{type:Boolean,default:!0},maxRange:{type:[Number,String],default:null},lazyRender:{type:Boolean,default:!0},showMark:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},showSubtitle:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},minDate:{type:Date,validator:d["a"],default:function(){return new Date}},maxDate:{type:Date,validator:d["a"],default:function(){var t=new Date;return new Date(t.getFullYear(),t.getMonth()+6,t.getDate())}},firstDayOfWeek:{type:[Number,String],default:0,validator:function(t){return t>=0&&t<=6}}},data:function(){return{subtitle:"",currentDate:this.getInitialDate()}},computed:{months:function(){var t=[],e=new Date(this.minDate);e.setDate(1);do{t.push(new Date(e)),e.setMonth(e.getMonth()+1)}while(1!==w(e,this.maxDate));return t},buttonDisabled:function(){var t=this.type,e=this.currentDate;if(e){if("range"===t)return!e[0]||!e[1];if("multiple"===t)return!e.length}return!e},dayOffset:function(){return this.firstDayOfWeek?this.firstDayOfWeek%7:0}},watch:{type:"reset",value:"init",defaultDate:function(t){this.currentDate=t,this.scrollIntoView()}},mounted:function(){this.init()},activated:function(){this.init()},methods:{reset:function(){this.currentDate=this.getInitialDate(),this.scrollIntoView()},init:function(){var t=this;this.poppable&&!this.value||this.$nextTick((function(){t.bodyHeight=Math.floor(t.$refs.body.getBoundingClientRect().height),t.onScroll(),t.scrollIntoView()}))},scrollIntoView:function(){var t=this;Object(f["c"])((function(){var e=t.currentDate;if(e){var a="single"===t.type?e:e[0],n=t.value||!t.poppable;a&&n&&t.months.some((function(e,n){if(0===w(e,a)){var i=t.$refs,r=i.body,o=i.months;return o[n].scrollIntoView(r),!0}return!1}))}}))},getInitialDate:function(){var t=this.type,e=this.minDate,a=this.maxDate,n=this.defaultDate;if(null===n)return n;var i=new Date;if(-1===O(i,e)?i=e:1===O(i,a)&&(i=a),"range"===t){var r=n||[],o=r[0],s=r[1];return[o||i,s||j(i)]}return"multiple"===t?n||[i]:n||i},onScroll:function(){var t=this.$refs,e=t.body,a=t.months,n=Object(m["c"])(e),i=n+this.bodyHeight,r=a.map((function(t){return t.getHeight()})),o=r.reduce((function(t,e){return t+e}),0);if(!(i>o&&n>0)){for(var s,l=0,c=[-1,-1],h=0;h<a.length;h++){var u=l<=i&&l+r[h]>=n;u&&(c[1]=h,s||(s=a[h],c[0]=h),a[h].showed||(a[h].showed=!0,this.$emit("month-show",{date:a[h].date,title:a[h].title}))),l+=r[h]}a.forEach((function(t,e){t.visible=e>=c[0]-1&&e<=c[1]+1})),s&&(this.subtitle=s.title)}},onClickDay:function(t){if(!this.readonly){var e=t.date,a=this.type,n=this.currentDate;if("range"===a){if(!n)return void this.select([e,null]);var i=n[0],r=n[1];if(i&&!r){var o=O(e,i);1===o?this.select([i,e],!0):-1===o?this.select([e,null]):this.allowSameDay&&this.select([e,e],!0)}else this.select([e,null])}else if("multiple"===a){if(!n)return void this.select([e]);var s,l=this.currentDate.some((function(t,a){var n=0===O(t,e);return n&&(s=a),n}));if(l){var h=n.splice(s,1),u=h[0];this.$emit("unselect",T(u))}else this.maxRange&&n.length>=this.maxRange?Object(c["a"])(this.rangePrompt||v("rangePrompt",this.maxRange)):this.select([].concat(n,[e]))}else this.select(e,!0)}},togglePopup:function(t){this.$emit("input",t)},select:function(t,e){var a=this,n=function(t){a.currentDate=t,a.$emit("select",B(a.currentDate))};if(e&&"range"===this.type){var i=this.checkRange(t);if(!i)return void(this.showConfirm?n([t[0],k(t[0],this.maxRange-1)]):n(t))}n(t),e&&!this.showConfirm&&this.onConfirm()},checkRange:function(t){var e=this.maxRange,a=this.rangePrompt;return!(e&&x(t)>e)||(Object(c["a"])(a||v("rangePrompt",e)),!1)},onConfirm:function(){this.$emit("confirm",B(this.currentDate))},genMonth:function(t,e){var a=this.$createElement,n=0!==e||!this.showSubtitle;return a(F,{ref:"months",refInFor:!0,attrs:{date:t,type:this.type,color:this.color,minDate:this.minDate,maxDate:this.maxDate,showMark:this.showMark,formatter:this.formatter,rowHeight:this.rowHeight,lazyRender:this.lazyRender,currentDate:this.currentDate,showSubtitle:this.showSubtitle,allowSameDay:this.allowSameDay,showMonthTitle:n,firstDayOfWeek:this.dayOffset},on:{click:this.onClickDay}})},genFooterContent:function(){var t=this.$createElement,e=this.slots("footer");if(e)return e;if(this.showConfirm){var a=this.buttonDisabled?this.confirmDisabledText:this.confirmText;return t(M["a"],{attrs:{round:!0,block:!0,type:"danger",color:this.color,disabled:this.buttonDisabled,nativeType:"button"},class:y("confirm"),on:{click:this.onConfirm}},[a||v("confirm")])}},genFooter:function(){var t=this.$createElement;return t("div",{class:y("footer",{unfit:!this.safeAreaInsetBottom})},[this.genFooterContent()])},genCalendar:function(){var t=this,e=this.$createElement;return e("div",{class:y()},[e(A,{attrs:{title:this.title,showTitle:this.showTitle,subtitle:this.subtitle,showSubtitle:this.showSubtitle,firstDayOfWeek:this.dayOffset},scopedSlots:{title:function(){return t.slots("title")}}}),e("div",{ref:"body",class:y("body"),on:{scroll:this.onScroll}},[this.months.map(this.genMonth)]),this.genFooter()])}},render:function(){var t=this,e=arguments[0];if(this.poppable){var a,n=function(e){return function(){return t.$emit(e)}};return e(C["a"],{attrs:(a={round:!0,value:this.value},a["round"]=this.round,a["position"]=this.position,a["closeable"]=this.showTitle||this.showSubtitle,a["getContainer"]=this.getContainer,a["closeOnPopstate"]=this.closeOnPopstate,a["closeOnClickOverlay"]=this.closeOnClickOverlay,a),class:y("popup"),on:{input:this.togglePopup,open:n("open"),opened:n("opened"),close:n("close"),closed:n("closed")}},[this.genCalendar()])}return this.genCalendar()}}),z=(a("db2c"),a("1125")),U=(a("8a58"),a("b000"),a("1a23")),V=(a("4ddd"),a("9f14")),Y=(a("a44c"),a("e27c")),_=(a("2b28"),a("9ed2")),L=(a("d1cf"),a("ee83")),J=(a("2cbd"),a("ab2c")),K=(a("5f5f"),a("f253")),q=(a("be7f"),a("565f")),G=(a("66b9"),a("0653"),a("34e9")),Q=(a("c194"),a("7744")),X=(a("c3a6"),a("ad06")),Z=(a("4d48"),a("d1e1")),tt=(a("81e6"),a("9ffb")),et=a("d722"),at={name:"login",components:($={},Object(r["a"])($,tt["a"].name,tt["a"]),Object(r["a"])($,Z["a"].name,Z["a"]),Object(r["a"])($,X["a"].name,X["a"]),Object(r["a"])($,Q["a"].name,Q["a"]),Object(r["a"])($,G["a"].name,G["a"]),Object(r["a"])($,M["a"].name,M["a"]),Object(r["a"])($,q["a"].name,q["a"]),Object(r["a"])($,K["a"].name,K["a"]),Object(r["a"])($,J["a"].name,J["a"]),Object(r["a"])($,L["a"].name,L["a"]),Object(r["a"])($,_["a"].name,_["a"]),Object(r["a"])($,Y["a"].name,Y["a"]),Object(r["a"])($,V["a"].name,V["a"]),Object(r["a"])($,U["a"].name,U["a"]),Object(r["a"])($,C["a"].name,C["a"]),Object(r["a"])($,z["a"].name,z["a"]),Object(r["a"])($,N.name,N),Object(r["a"])($,u["a"].name,u["a"]),Object(r["a"])($,h["a"].name,h["a"]),Object(r["a"])($,c["a"].name,c["a"]),Object(r["a"])($,l["a"].name,l["a"]),Object(r["a"])($,s["a"].name,s["a"]),Object(r["a"])($,o["a"].name,o["a"]),$),data:function(){return{username:"",password:"",testInt:0x3c04598e49e40}},methods:{toLogin:function(){var t=this;c["a"].loading({duration:0,forbidClick:!0,message:"登录中..."});var e={userName:this.username,pswd:this.password};Object(et["a"])("/v1/useramount/AppUserLogin",e).then((function(e){e.success?(t.$store.commit("SET_USERNAME",t.username),t.$store.commit("SET_PASSWORD",t.password),t.$router.push("/gpay/pay")):t.$notify({type:"danger",message:e.message})})).finally((function(){c["a"].clear()}))}}},nt=at,it=(a("92d8"),a("2877")),rt=Object(it["a"])(nt,n,i,!1,null,"dbcab04e",null);e["default"]=rt.exports},"819b":function(t,e,a){},"92d8":function(t,e,a){"use strict";a("1cfa")}}]);
//# sourceMappingURL=chunk-bdb49864.53a4fa32.js.map