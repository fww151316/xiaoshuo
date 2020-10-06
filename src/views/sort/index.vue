
<template>
  <div class="index">
    <header id="book">
      <mt-header :title="this.$route.params.id" id="ti">
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
      </mt-header>
    </header>
    <div class="kong"></div>

    <ul
      v-infinite-scroll="getbook"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="30"
    >
      <li class="hot" v-for="item in list" :key="item._id" @click="gobook(item._id)">
        <img :src="item.imgurl" />
        <div class="right">
          <h4>{{item.title}}</h4>
          <h3>{{item.author}}</h3>
          <p>{{item.shortIntro}}</p>
          <span>{{item.majorCate}}</span>
          <i>
            <b>{{item.latelyFollower}}</b>人气
          </i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      list: [],
      img_base_url: "https://statics.zhuishushenqi.com",
      t: 0,
      s: 0,
      f: 20
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
  },
  methods: {
    // 方法
    getbook() {
      this.$http.get("/book/by-categories?gender=male&type=hot&major=" +this.$route.params.id +"&minor=&start=1&limit=200"
        )
        .then(res => {
          //   this.list = res.books

          this.s = res.books.length;
          for (var i = this.t; i < this.f; i++) {
            this.list.push(res.books[i]);
          }

          this.t += 20;
          if (this.s > this.f + 20) {
            this.f += 20;
            this.loading = false;
          } else {
            this.f = this.s;
          }

          this.list.forEach(item => {
            item.imgurl = this.img_base_url + item.cover;
          });
        });
    },
    gobook(id) {
      this.$router.push({
        path: "/book/" + id
      });
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
#book .mint-header {
  width: 100%;
  height: 50px;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: fixed;
  top: 0;
}
#ti {
  font-size: 18px;
}
.kong {
  height: 50px;
}

.hot {
  margin-left: 15px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  img {
    width: 70px;
    height: 90px;
    margin-right: 10px;
  }
  .right {
    h4 {
      width: 270px;
      font-weight: 900;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
    }
    h3 {
      color: rgb(248, 163, 163);
      font-size: 14px;
    }
    p {
      width: 270px;
      height: 35px;
      overflow: hidden;
      color: #999;
      font-size: 12px;
      margin-top: 5px;
    }
    span {
      color: #666;
      font-size: 12px;
      padding-right: 10px;
      border-right: #555 solid 1px;
    }
    i {
      margin-left: 5px;
      color: #666;
      b {
        color: #b93321;
      }
    }
  }
}
</style>