<template>
  <div>
    <List :cart="cart"/>
  </div>
</template>


<script>
import List from "../components/List"
export default {
 components:{
  List
},
  data(){
    return{
      cart:[]
    }
  },
 created(){
   this.getList()
 },
 methods:{
   getList(){
     this.$axios.get("/list").then(res=>{
       this.cart=res.data;
      console.log(res.data)
     })
   }
 }
}
</script>
