import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);
var car=JSON.parse(localStorage.getItem('car')||'[]')
const store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addToCar(state,goodsinfo){
      var flag=false
      state.car.some(item=>{
        if(item.id=goodsinfo.id){
          flag=true
          return true
        }
      })
      if(!flag){
        console.log(goodsinfo)
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      console.log(c)
      return c
    },
    // getGoodsCount(state) {
    //   var o = {}
    //   state.car.forEach(item => {
    //     o[item.id] = item.count
    //   })
    //   return o
    // },
    // getGoodsCount(state){
    //   var o={}
    //   state.car.forEach(item=>{
    //   o[item.id]=item.count
    //   })
    //   return o
    // }

  }
})

export default store;
