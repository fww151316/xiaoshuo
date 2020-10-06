
<template>
  <div class="index">
    <Header></Header>
    <mt-search v-model="value" @click.native="goscout"></mt-search>
    <!-- 轮播 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img
          src="https://plf-new.zhuishushenqi.com/management/images/20200731/b4e8024d71c04943bbd0c08da90baf5f.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://plf-new.zhuishushenqi.com/management/images/20200828/bab82a74e140477c8af02d93d8431ee4.jpg"
          alt
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="https://plf-new.zhuishushenqi.com/management/images/20200925/77ff7d5c22374868a999e71a0b7100d1.png"
          alt
        />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 分类 -->
    <div class="sort">
      <mt-button size="small" @click.native="go('玄幻')">玄幻</mt-button>
      <mt-button size="small" @click.native="go('奇幻')">奇幻</mt-button>
      <mt-button size="small" @click.native="go('武侠')">武侠</mt-button>
      <mt-button size="small" @click.native="go('仙侠')">仙侠</mt-button>
      <mt-button size="small" @click.native="go('历史')">历史</mt-button>
    </div>

    <!-- 推荐 -->
    <div class="recom">
      <h3>热门推荐</h3>
      <ul v-infinite-scroll="gob" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li class="hot" @click="gobook(item._id)" v-for="item in list" :key="item._id">
          <img :src="item.imgurl" />
          <div class="right">
            <h4>{{item.title}}</h4>
            <p>{{item.shortIntro}}</p>
            <span>{{item.majorCate}}</span>
            <i>
              <b>{{item.latelyFollower}}</b>人气
            </i>
          </div>
        </li>
      </ul>
    </div>

    <div class="kong"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      value: "",
      list: [],
      t: 0,
      f: 20,
      s: 0,
      loading: false,
      img_base_url: "https://statics.zhuishushenqi.com"
    };
  },
  created() {
    // 实例被创建之后执行代码
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
    gob() {
      this.loading = true;
      this.$http.get("/ranking/54d42d92321052167dfb75e3").then(res => {
        // 分页
        this.s = res.ranking.books.length;
        for (var i = this.t; i < this.f; i++) {
          this.list.push(res.ranking.books[i]);
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
    goscout(){
      this.$router.push({
        path:'/scout'
      })
    },
    go(id){
      this.$router.push({
        path:'/sort/'+id
      })
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
.mint-search {
  padding-top: 50px;
  height: 50px;
}
.mint-swipe {
  height: 150px;
}
.mint-swipe img {
  width: 100%;
  height: 150px;
}
.sort {
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mint-button {
  background: rgb(147, 119, 226);
  color: #fff;
  font-weight: 900;
}
.recom {
  h3 {
    font-size: 16px;
    line-height: 30px;
    margin-left: 15px;
  }
  .hot {
    margin-left: 15px;
    display: flex;
    margin-bottom: 15px;
    img {
      width: 62px;
      height: 80px;
      margin-right: 10px;
    }
    .right {
      h4 {
        font-weight: 900;
        font-size: 16px;
      }
      p {
        width: 280px;
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
}
.kong {
  height: 60px;
}
</style>