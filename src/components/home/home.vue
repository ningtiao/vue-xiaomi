<template>
  <div class="container">
    <header class="nav-header">
        <div class="logo-wrap">
            <div class="logo-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" alt="">
            </div>
        </div>
        <div class="search-wrap">
            <div class="search-item">
                <i class="icon iconfont icon-sousuo ico-search"></i>
                搜索商品名称
            </div>
        </div>
        <div class="user-wrap">
            <div class="user-item">
                <div><i class="icon iconfont icon icon-wo ico-user"></i></div>
            </div>
        </div>
    </header>

      <section class="content-wrap">
        <!-- 轮播图 -->
        <div class="banner-wrap">
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in baseList" :key="item.index"><router-link to="/goodsdetail?id=0003"><img :src="item.img_url"></router-link></mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 内容区导航栏 -->
        <ul class="nav-list">
            <li class="list-item">
                <a href="">
                    <img src="/static/mifenka.webp" alt="">
                </a>
            </li>
            <li class="list-item">
                <a href="">
                    <img src="/static/xinpinfabu.webp" alt="">
                </a>
            </li>
            <li class="list-item">
                <a href="">
                    <img src="/static/xiaomishangou.jpg" alt="">
                </a>
            </li>
            <li class="list-item">
                <a href="">
                    <img src="/static/yijiuhuanxin.webp" alt="">
                </a>
            </li>
            <li class="list-item">
                <a href="">
                    <img src="/static/huodongpindao.png" alt="">
                </a>
            </li>
        </ul>
        <!-- 商品列表区 -->
        <div class="goods-wrap">
            <!-- 大图区 -->
          <div class="cells_auto_fill multi_cell" index="3">
            <a class="exposure items" style="width: 7.9rem;height: 11.08rem;">
              <img src="//i8.mifile.cn/v1/a1/cb26aa21-7d7f-8df4-d910-e4df3f5dba2f!358x508.webp" lazy="loaded" style="width: 7.9rem;height: 11.08rem;"></a>
            <a class="exposure items" style="width: 7.9rem; height: 5.52rem; left:8rem;">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/48bd91b61be2d5c8ca1d328a7c5d442c.jpeg" lazy="loaded" style="width: 7.9rem; height: 5.52rem;">
            </a>
            <a class="exposure items" style="width: 7.9rem; height: 5.52rem; left:8rem; top: 5.56rem;">
              <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b089ea2903cabfc215e8f2529864f48f.jpg" lazy="loaded" style="width: 7.9rem;height: 5.52rem;">
            </a>
          </div>

          <ul class="big-item-list">
              <li class="big-item"><router-link to="/goodsdetail?id=0012"><img src="//i8.mifile.cn/v1/a1/4cf0ba4c-bcac-5d4c-8ead-451830e2f95c!720x280.webp" alt=""></router-link></li>
              <li class="big-item"><router-link to="/goodsdetail?id=0013"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ff4e162350da5ab73e952c7b1724e931.jpg" alt=""></router-link></li>
          </ul>
            <!-- 小图区 -->
          <ul class="normal-item-list list_two_type1 clearfix"  v-for="item in goodList" :key="item.index">
              <li class="normal-item" v-if="item.view_type == 'list_two_type1'" v-for="items in item.body.items" :key="items.index" @click="viewGoods(item.goodsId)">
                  <div class="img">
                      <img :src="items.img_url" alt="">
                  </div>
                  <div class="info">
                      <div class="name">{{item.view_type}}</div>
                      <div class="brief">{{items.product_brief}}</div>
                      <div class="price">
                          ￥{{items.product_org_price}}
                      </div>
                  </div>
              </li>
          </ul>
        </div>
    </section>

  </div>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/homepage.css'
import { Swipe, SwipeItem } from 'mint-ui'
import axios from 'axios'

export default {
  components: {
    Swipe,
    SwipeItem
  },
  data() {
    return {
      index01: 0,
      list2: '',
      active: '推荐',
      index: 0,
      baseList: '',
      goodList: ''
    }
  },
  created() {
    this.getNavlist()
  },
  methods: {
    getNavlist() {
      axios.get('/static/mock/navbar.json').then(res => {
        console.log(res.data.data.tabs)
        this.list2 = res.data.data.tabs
        this.baseList = res.data.data.data.sections[0].body.items
        this.goodList = res.data.data.data.sections
        console.log(this.goodList)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .banner-wrap{
      height: 8rem;
  }
  .banner-wrap img{
      width: 100%;
      height: 8rem;
  }
  .nav{
    height: 34px;
  }
  .cells_auto_fill{
    width: 16rem;
    height: 11.08rem;
    position: relative;
    .items {
      position: absolute;
      height: auto!important;
      display: block;
    }
  }
</style>
