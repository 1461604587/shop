import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist:[],
    num:0,
    totalPrice:0
  },
  mutations: {
    toCart(state,item){
     let goods=state.cartlist.find(v=>v.id===item.id);
    //  goods.count=1;
     if(!goods){
        state.cartlist.push(item)  

        console.log(state.cartlist)
     }
    
   
    },
    add(state,item){
      let goods=state.cartlist.find(v=>v.id===item.id);
      goods.count++;
      state.num++;
      state.totalPrice=state.num*goods.price;
    },
    remove(state,item){
      let gods=state.cartlist.find(v=>v.id===item.id);
      // if(gods<=0){
      //     state.cartlist.splice(index,1)
      // }
      if(gods.count<=0){
        return 
      }
      gods.count--;
      state.num--
    }
  },
  actions: {
  },
  modules: {
  }
})
