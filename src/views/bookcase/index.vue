<!-- 书架页面 -->
<template>
  <div class="index">
    <Header title="书架"></Header>
    <div class="kong"></div>
    <div class="case" @click="gobook(item._id)" v-for="item in list" :key="item._id">
      <img :src="item.imgurl" />
      <div>
        <h3>{{item.title}}</h3>
        <p>{{item.author}}</p>
        <i>{{item.majorCate}}</i>
      </div>
      <button @click.stop="delet(item._id)">删除</button>
    </div>
    <div class="kong"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getToken2, removeToken2 } from "../../utils/auth";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      list: [],
      img_base_url: "https://statics.zhuishushenqi.com"
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.getbook();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
    Header,
    Footer
  },
  methods: {
    // 方法
    gobook(id) {
      this.$router.push({
        path: "/book/" + id
      });
    },

    getbook() {
      const cook = getToken2();
      for (var i in cook) {
        if (cook[i] != "fww") {
          this.$http.get("/book/" + cook[i]).then(res => {
            this.list.push(res);
            this.list.forEach(item => {
              item.imgurl = this.img_base_url + item.cover;
            });
          });
        }
      }
    },
    delet(id) {
      Toast({
        message: "删除成功",
        position: "middle",
        duration: 1000
      });
      removeToken2(id);
      this.list.splice(id,1)
    }
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  }
};
</script>
<style scoped lang='scss'>
.case {
  height: 100px;
  display: flex;
  img {
    width: 60px;
    height: 80px;
    margin-left: 20px;
    margin-right: 15px;
  }
  h3 {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
    font-weight: 900;
    line-height: 30px;
  }
  p {
    font-size: 15px;
    color: #666;
    line-height: 30px;
  }
  i {
    font-size: 14px;
    color: rgb(236, 124, 59);
  }
}
.kong {
  height: 60px;
}
button {
  width: 50px;
  height: 30px;
  background: rgb(240, 129, 129);
  color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 20px;
}
</style>