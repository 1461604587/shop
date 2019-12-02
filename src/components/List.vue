<template>
  <div class="list">
    <h1>购物车</h1>
    <div class="item" v-for="(item,index) in cart" :key="index">
      <div class="one">
       <img :src="item.img" alt="">
      </div>
      <div class="two">
        <p>{{item.title}}</p>
        <!-- <p>{{item.count}}</p> -->
        <p><button @click="addCart(item)">加入购物车</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  cart:Array
},
methods:{
  addCart(item){
    this.$store.commit("toCart",item)
  }
}
}
</script>

<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
  }
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
        line-height: 75px;
        text-align: center;
      }
    }
  }

</style>