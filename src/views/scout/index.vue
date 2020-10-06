<!-- 搜索页面失去焦点执行-->
<template>
  <div class='index'>
      <header id="book" >
      <mt-header title="搜索" id="ti">
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
      </mt-header>
    </header>

      <mt-search v-model="value1" @click.native="scout" @blur.native="scout" ></mt-search>
      
      <div>
          <mt-cell v-for="item in list" :key="item._id" :title="item.title" @click.native="gobook(item._id)"></mt-cell>
      </div>

  </div>
</template>

<script>
export default {
  props: { // 父辈向子辈传参
  },
  name: 'index',
  data () {
    return {
        value1:'',
        list:[]
    }
  },
  created () { // 实例被创建之后执行代码
        // this.scout()
    },
  computed: { // 计算属性

    },
  components: { // 组件的引用

    },
  methods: { // 方法
    scout(){
        this.$http.get('/book/fuzzy-search?query='+ this.value1).then(res =>{
            console.log(res.books)
            this.list = res.books
        })
    },
    gobook(id){
        this.$router.push({
            path:"/book/"+id
        })
    }

    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
</script>
<style scoped lang='scss'>
#book .mint-header {
  width: 100%;
  height: 50px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  top: 0;
  z-index: 2;
}
#ti {
  font-size: 18px;
}
.mint-search {
  padding-top: 50px;
  height: 50px;
}
</style>