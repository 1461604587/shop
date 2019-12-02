<template>
  <div class="home">
 <div class="main">
<router-view></router-view>
 </div>
 <div class="footer">
   <router-link to="/shou">首页</router-link>  
   <router-link to="/cart">购物车</router-link>

 </div>
  </div>
</template>
<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
      flex: 1;
      overflow: auto;
      width: 100%;
    }
    .footer{
      width: 100%;
      height: 50px;
      display: flex;
      a{
        flex: 1;
        line-height: 50px;
        text-align: center;
        &.router-link-exact-active{
          background: red;
          color: white;
        }
      }
    }
  }
</style>

