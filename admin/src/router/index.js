import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      // 分类
      {path: '/categories/create',component: CategoryEdit},
      // props属性表示，将URL中的参数注入到对应组件，在组件内定义props属性进行接收。
      {path: '/categories/edit/:id',component: CategoryEdit,props: true},
      {path: '/categories/list',component: CategoryList},
      // 物品
      {path: '/items/create',component: ItemEdit},
      {path: '/items/edit/:id',component: ItemEdit,props: true},
      {path: '/items/list',component: ItemList},
      // 英雄
      {path: '/heros/create',component: HeroEdit},
      {path: '/heros/edit/:id',component: HeroEdit,props: true},
      {path: '/heros/list',component: HeroList},
      // 文章
      {path: '/articles/create',component: ArticleEdit},
      {path: '/articles/edit/:id',component: ArticleEdit,props: true},
      {path: '/articles/list',component: ArticleList}
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
