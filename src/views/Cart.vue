<template>
  <div class="cart-page">
    <div class="item" v-for="(item,index) in getCart" :key="index">
      <div class="one">
        <img :src="item.img" alt />
      </div>
      <div class="two">
        <p>{{item.title}}</p>
        <p>
          <span @click="removeFn(item)">-</span>
          <span>{{item.count}}</span>
          <span @click="addFn(item)">+</span>
        </p>
        <p>{{item.price}}</p>
      </div>
    
    </div>
      <p>总个数{{getNum}}</p>
      <p>总价{{getTotal}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    getCart() {
    return  this.$store.state.cartlist;
    },
    getNum(){
      return this.$store.state.num;
    },
    getTotal(){
       return this.$store.state.totalPrice;
    }
  },
  methods:{
    addFn(item){
     this.$store.commit("add",item)
    },
    removeFn(item){
 this.$store.commit("remove",item)
    }
  }
};
</script>
<style lang="scss">
.cart-page{
width: 100%;
height: 100%;
.item{
  width: 100%;
  height: 150px;
  display: flex;
  .one{
    flex: 5;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .two{
    flex: 5;
    p{
      line-height:50px;
      span{
        margin: 0 10px;
      }
    }
  }
}
}
</style>