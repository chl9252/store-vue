import imitationServer from './imitationServer'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	date: 0,
	goods: []
  },
  mutations: {
  	sort (state, goods) {
  		state.goods = goods
  		return state
  	},
  	updat(state, goods) {
  		state.goods = goods
  		state.date = Date.now()
  		return state
  	}
  },
  actions: {
  	async updat () {
  		if (Date.now() > this.state.date + 5000) {
	  		const goods = await imitationServer.getGoods('/goods')
	  		this.commit('updat', goods)
	  	}
  		
  	},
  	sort () {
  		const goods = this.state.goods.sort(rSort)
   		this.commit('sort', goods)
  	}
  }
})
export default store

function rSort () {
	return Math.random() - Math.random()
}