import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);
const store = new Vuex.Store({
  stata:{
    car:[]
  },
  mutations:{
    addToCar(state,goodsinfo){
      var flag = false
    state.car.some(item => {
      if (item.id == goodsinfo.id) {
        item.count += parseInt(goodsinfo.count)
        console.log(item.count)
        flag = true
        return true
      }
    })
    if (!flag) {
      state.car.push(goodsinfo)
    }
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
  }
})

export default store;
