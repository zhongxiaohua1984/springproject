import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]')
// console.log(typeof car)
const store = new Vuex.Store({
  state: {
    car:car
  },
  mutations: {
    addToCar(state, goodsinfo) {
      var flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count=parseInt(goodsinfo.count)
          return true
        }
        // item.count=parseInt(goodsinfo.count)
        // return true
      })
     localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFormCar(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
    getters: {
      getAllCount(state) {
        var sum=0
       state.car.forEach(item=>{
         sum+=item.count
       })
       return sum
      },
      getGoodsCount(state){
        var counts={}
        state.car.forEach(item=>{
          counts[item.id]=item.count
        })
        return counts
      }
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
