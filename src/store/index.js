import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'
import * as moreActions from './actions'
import * as moreGetters from './getters'

Vue.use(Vuex)

const state = {
  user: ls.getItem('user'),
  // 添加 auth 来保存当前用户的登录状态
  auth: ls.getItem('auth'),
  articles: ls.getItem('articles'),
  // 搜索值
  searchValue: '',
  // origin: location.origin,
  // 配置过 GitHub Pages，可以使用下面的值
  origin: location.origin.indexOf('github.io') !== -1 ? `${location.origin}/vuejs-essential/dist` : location.origin,
}

const mutations = {
  UPDATE_USER(state, user) {
    state.user = user
    ls.setItem('user', user)
  },
  // 添加 UPDATE_AUTH 来更改当前用户的登录状态
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth', auth)
  },
  // 更改所有文章的事件类型
  UPDATE_ARTICLES(state, articles) {
    state.articles = articles
    ls.setItem('articles', articles)
  },
  // 更新搜索值的事件类型
  UPDATE_SEARCH_VALUE(state, searchValue) {
    state.searchValue = searchValue
  },
}

const actions = {
  login({ commit }, user) {
    if (user) commit('UPDATE_USER', user)
    // 更新当前用户的登录状态为已登录
    commit('UPDATE_AUTH', true)	
    router.push('/')
  },
  logout({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name: 'Home', params: { logout: true } })
  },
  // 更新个人信息
  updateUser({ state, commit }, user) {
	// 获取仓库的个人信息  
    const stateUser = state.user
	
	// 简单的数据类型判断
    if (stateUser && typeof stateUser === 'object') {
	  // 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)	
      user = { ...stateUser, ...user }
    }

    // 更新个人信息
	commit('UPDATE_USER', user)
  },
  // 使用对象展开运算符混入 moreActions
  ...moreActions
}

// 添加 getters
const getters = {
  getArticleById: (state, getters) => (id) => {
    // 使用派生状态 computedArticles 作为所有文章
    let articles = getters.computedArticles

    if (Array.isArray(articles)) {
      articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
      return articles.length ? articles[0] : null
    } else {
      return null
    }
  },
  // 混入 moreGetters, 你可以理解为 getters = Object.assign(getters, moreGetters)
  ...moreGetters
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store