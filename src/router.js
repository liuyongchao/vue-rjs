import Vue from "vue";
import Router from "vue-router";

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from "@/views/layout/Layout";

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true
  },
  { path: "/404", component: () => import("@/views/404"), hidden: true },
  //首页
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    name: "Home",
    hidden: true,
    children: [
      {
        path: "home",
        component: () => import("@/views/Home")
      }
    ]
  },
  {
    path: "/product",
    component: Layout,
    redirect: "/product/productsoftwarecopyright",
    name: "example",
    meta: { title: "产品办理", icon: "form" },
    children: [
      {
        path: "productsoftwarecopyright",
        name: "ProductSoftwareCopyright",
        component: () => import("@/views/product/ProductSoftwareCopyright"),
        meta: { title: "软件著作", icon: "form" }
      },
      {
        path: "ProductSoftwareTest",
        name: "ProductSoftwareTest",
        component: () => import("@/views/product/ProductSoftwareTest"),
        meta: { title: "产品测试", icon: "form" }
      },
      {
        path: "ProductHi-techprodution",
        name: "ProductHi-techprodution",
        component: () => import("@/views/product/ProductHi-techprodution"),
        meta: { title: "企业认证", icon: "form" }
      },
      {
        path: "ProductCMMICertification",
        name: "ProductCMMICertification",
        component: () => import("@/views/product/ProductCMMICertification"),
        meta: { title: "CMMI认证", icon: "form" }
      },
      {
        path: "ProductentErpriseEvaluation",
        name: "ProductentErpriseEvaluation",
        component: () => import("@/views/product/ProductentErpriseEvaluation"),
        meta: { title: "企业评估", icon: "form" }
      }
    ]
  },

  //统计管理
  {
    path: "/statistics",
    component: Layout,
    redirect: "/statistics/StatisticsSoftwareCopyright",
    name: "statistics",
    meta: { title: "统计管理", icon: "example" },
    children: [
      {
        path: "index",
        name: "Soft",
        component: () =>
          import("@/views/statistics/StatisticsSoftwareCopyright"),
        meta: { title: "软件著作", icon: "form" }
      },
      {
        path: "statisticssoftwaretest",
        name: "StatisticsSoftwareTest",
        component: () => import("@/views/statistics/StatisticsSoftwareTest"),
        meta: { title: "产品测试", icon: "form" }
      },
      {
        path: "statisticsHi-techprodution",
        name: "StatisticsHi",
        component: () =>
          import("@/views/statistics/StatisticsHi-techprodution"),
        meta: { title: "企业认证", icon: "form" }
      },
      {
        path: "statisticsCMMICertification",
        name: "StatisticsCMMICertification",
        component: () =>
          import("@/views/statistics/StatisticsCMMICertification"),
        meta: { title: "CMMI认证", icon: "form" }
      },
      {
        path: "statisticserpriseevaluation",
        name: "StatisticsErpriseEvaluation",
        component: () =>
          import("@/views/statistics/StatisticsErpriseEvaluation"),
        meta: { title: "企业评估", icon: "form" }
      }
    ]
  },
  //业务管理
  {
    path: "/businessmgr",
    name: "businessmgr",
    component: Layout,
    redirect: "/businessmgr/productmgr",
    meta: { title: "业务管理", icon: "form" },
    children: [
      {
        path: "productmgr",
        name: "productmgr",
        component: () => import("@/views/businessmgr/productmgr"),
        meta: { title: "产品管理", icon: "form" }
      },
      {
        path: "processmgr",
        name: "processmgr",
        component: () => import("@/views/businessmgr/processmgr"),
        meta: { title: "流程管理", icon: "form" }
      }
    ]
  },

  //系统管理
  {
    path: "/system",
    name: "system",
    component: Layout,
    redirect: "/sytem/systemuser",
    meta: { title: "系统管理", icon: "form" },
    children: [
      {
        path: "systemuser",
        name: "SystemUser",
        component: () => import("@/views/system/SystemUser"),
        meta: { title: "用户管理", icon: "form" }
      },
      {
        path: "systemrole",
        name: "SystemRole",
        component: () => import("@/views/system/SystemRole"),
        meta: { title: "角色管理", icon: "form" }
      }
    ]
  },

  //个人信息
  {
    path: "/userinfo",
    name: "userinfo",
    component: Layout,
    redirect: "/user/userinfodetail",
    meta: {
      title: "个人信息",
      icon: "form"
    },
    children: [
      {
        path: "index",
        name: "UserinfoDetail",
        component: () => import("@/views/userinfo/UserinfoDetail"),
        meta: { title: "我的信息", icon: "form" }
      },
      {
        path: "UserinfoEdit",
        name: "UserinfoEdit",
        component: () => import("@/views/userinfo/UserinfoEdit"),
        meta: { title: "修改密码", icon: "form" }
      }
    ]
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "example" },
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "Form", icon: "form" }
      },
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table"),
        meta: { title: "Table", icon: "table" }
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree"),
        meta: { title: "Tree", icon: "tree" }
      }
    ]
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "nested",
    meta: {
      title: "nested",
      icon: "nested"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "menu1",
        meta: { title: "menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "menu1-1",
            meta: { title: "menu1-1" }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "menu1-2",
            meta: { title: "menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "menu1-2-1",
                meta: { title: "menu1-2-1" }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "menu1-2-2",
                meta: { title: "menu1-2-2" }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "menu1-3",
            meta: { title: "menu1-3" }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        meta: { title: "menu2" }
      }
    ]
  },

  { path: "*", redirect: "/404", hidden: true }
];

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
