<template>
  <div id="blog">
    <section class="left">
      <!-- <SelectNav></SelectNav> -->
      <!-- 动态模块 -->
      <CommentList v-for="item in blogData" :key="item.id" class="box-global">
        <el-avatar slot="avatar" :src="item.avatar"></el-avatar>
        <p class="name" slot="name">{{ item.name }}</p>
        <span slot="time">{{ item.uploadTime }}</span>
        <span slot="content" class="content">
          {{ item.content }}
        </span>
        <img v-for="i in item.images" slot="image" :key="i.id" :src="i.url" />
        <span slot="comments">{{ item.comments }}</span>
        <span slot="save">{{ item.save }}</span>
        <span slot="see">{{ item.see }}</span>
      </CommentList>
      <LoadMore></LoadMore>
    </section>
    <section class="right">
      <!-- 用户信息 -->
      <div class="user-info box-global">
        <li class="avatar">
          <el-avatar src="https://p.qqan.com/up/2020-8/15979703191215711.jpg"></el-avatar>
          <section class="info">
            <p class="name">小爱同学</p>
            <p><span class="c-coin">C币:</span> 12134</p>
          </section>
        </li>
        <li class="user-fun">
          <ClickButton>个人中心</ClickButton>
          <ClickButton @click.native="goMark">我要发布</ClickButton>
        </li>
      </div>
      <!-- 相关模块 -->
      <div class="box-global">
        <h2 class="label">相关模块</h2>
        <div class="other-model">
          <li v-for="item in modals" :key="item.id" @click="goLink(item)">{{ item.name }}</li>
        </div>
      </div>
      <!-- 最近浏览 -->
      <div class="box-global">
        <h2 class="label">最近浏览</h2>
        <div class="list">
          <li v-for="item in seen" :key="item.id" @click="goToLink(item)">{{ item.name }}</li>
        </div>
      </div>
      <!-- 站内推荐-->
      <div class="box-global">
        <h2 class="label">站内推荐</h2>
        <div class="list">
          <li v-for="item in recommend" :key="item.id" @click="goToLink(item)">{{ item.name }}</li>
        </div>
      </div>
      <!-- 站外推荐 -->
      <div class="box-global">
        <h2 class="label">站外推荐</h2>
        <div class="list">
          <li v-for="item in suggestions" :key="item.id" @click="goToLink(item)">{{ item.name }}</li>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SelectNav from '@/components/SelectNav'
  import CommentList from '@/components/CommentList'
  import RankList from '@/components/RankList'
  import ClickButton from '@/components/ClickButton'
  import LoadMore from '@/components/LoadMore'
  export default {
    name: '',
    components: {
      SelectNav,
      CommentList,
      RankList,
      ClickButton,
      LoadMore,
    },
    data() {
      return {
        time: new Date().toLocaleString(),
        blogData: [
          {
            id: 0,
            avatar: 'https://tvax1.sinaimg.cn/crop.0.0.751.751.180/007enJmely8h18097c78yj30kv0kv0tt.jpg',
            name: '飞飞追鱼',
            uploadTime: '2022-04-26',
            content: '回收杯套和纸袋，循环利用',
            images: [{ id: 0, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/v1.jpg' }],
            comments: 0,
            save: 12,
            see: 45,
          },
          {
            id: 1,
            avatar: 'https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/a7c869e8ly8grtp0t4uoqj20u00u0789.jpg',
            name: 'MR-白冰',
            uploadTime: '2022-04-26',
            content: '茶叶罐当花瓶原来这么有情调',
            images: [{ id: 0, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/v2.jpg' }],
            comments: 1,
            save: 42,
            see: 65,
          },
          {
            id: 2,
            avatar: 'https://tvax4.sinaimg.cn/crop.0.0.1080.1080.180/63263810ly8gdiqrzzvvcj20u00u0ae1.jpg',
            name: '同城',
            uploadTime: '2022-04-25',
            content: '自带杯子',
            images: [{ id: 0, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/v3.jpg' }],
            comments: 0,
            save: 12,
            see: 45,
          },
          {
            id: 3,
            avatar: 'https://tvax2.sinaimg.cn/crop.0.0.1002.1002.180/8eff7c33ly8gdijkeiqrwj20ru0rutaf.jpg',
            name: '苏小元',
            uploadTime: '2022-04-26',
            content: '自制插花瓶，苏打水再利用',
            images: [{ id: 0, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/v4.jpg' }],
            comments: 0,
            save: 12,
            see: 45,
          },
          {
            id: 4,
            avatar: 'https://tvax1.sinaimg.cn/crop.0.0.828.828.180/d8245aa0ly8gdhgv24rdbj20n00n0myd.jpg',
            name: '可名',
            uploadTime: '2022-04-26',
            content: '一路向阳 美好的时光在路上',
            images: [{ id: 0, url: 'https://qucs.oss-cn-hangzhou.aliyuncs.com/images/v5.jpg' }],
            comments: 0,
            save: 12,
            see: 45,
          },
        ],
        modals: [
          { id: 0, name: '加入QU碳', path: '/login' },
          { id: 1, name: 'QU碳足迹', path: '/echart' },
          { id: 2, name: 'QU碳视频', path: '/video' },
          { id: 3, name: 'QU碳资讯', path: '/news' },
          { id: 5, name: 'QU碳行动', path: '/actions' },
          { id: 6, name: 'QU碳文库', path: '/library' },
        ],
        seen: [
          { id: 0, name: '解码朗诗绿色生活ESG：一家物管企业的碳中和样本', path: 'https://tanzhonghe.xny365.com/tanzhonghe/27016.html' },
          { id: 1, name: '杭州亚运会实现碳中和', path: 'https://tanzhonghe.xny365.com/tanzhonghe/15.html' },
          { id: 2, name: '实现“碳中和”目标需做好“加减乘除”，避免一刀切', path: 'https://tanzhonghe.xny365.com/tanzhonghe/15.html' },
          { id: 3, name: '碳中和是什么意思？碳中和概念', path: 'https://tanzhonghe.xny365.com/tanzhonghe/1.html' },
          { id: 4, name: '人大重阳智库报告：中国绿色金融呈矩阵式发展态势', path: 'https://tanzhonghe.xny365.com/tanzhonghe/27042.html' },
          { id: 5, name: '广州南沙与香港探索加强合作推动绿色金融和气候投融资', path: 'https://tanzhonghe.xny365.com/tanzhonghe/27026.html' },
        ],
        recommend: [
          { id: 0, name: '解码朗诗绿色生活ESG：一家物管企业的碳中和样本', path: 'https://tanzhonghe.xny365.com/tanzhonghe/27016.html' },
          { id: 1, name: '杭州亚运会实现碳中和', path: 'https://tanzhonghe.xny365.com/tanzhonghe/15.html' },
          { id: 2, name: '实现“碳中和”目标需做好“加减乘除”，避免一刀切', path: 'https://tanzhonghe.xny365.com/tanzhonghe/15.html' },
          { id: 3, name: '碳中和是什么意思？碳中和概念', path: 'https://tanzhonghe.xny365.com/tanzhonghe/1.html' },
          { id: 4, name: '人大重阳智库报告：中国绿色金融呈矩阵式发展态势', path: 'https://tanzhonghe.xny365.com/tanzhonghe/27042.html' },
          { id: 5, name: '广州南沙与香港探索加强合作推动绿色金融和气候投融资', path: 'https://tanzhonghe.xny365.com/tanzhonghe/27026.html' },
        ],
        suggestions: [
          { id: 0, name: '中国石油“我为碳中和种棵树”活动正式上线', path: 'http://www.9955.net.cn/1229.html' },
          { id: 1, name: '两会经济策–食品行业如何助力碳达峰碳中和？', path: 'http://www.9955.net.cn/1225.html' },
          { id: 2, name: '正确认识和把握碳达峰碳中和', path: 'http://www.9955.net.cn/1221.html' },
          { id: 3, name: '积极稳妥推进碳达峰碳中和工作', path: 'http://www.9955.net.cn/1218.html' },
          { id: 4, name: '碳达峰碳中和、一带一路……第三场“委员通道”聚焦这些热点话题', path: 'http://www.9955.net.cn/1209.html' },
          { id: 5, name: '中核集团成功发行 “碳中和”绿色公司债券', path: 'http://www.9955.net.cn/1212.html' },
        ],
      }
    },
    methods: {
      goMark() {
        this.$router.push('/post_blog')
      },
      // 跳转到各个小界面
      goLink(item) {
        this.$router.push(item.path)
      },
      // 跳转到外部界面
      goToLink(item) {
        window.open(item.path)
      },
    },
  }
</script>

<style scoped lang="less">
  @font-size: 4.2px;
  #blog {
    display: flex;
    padding: 10px 30px;
    .left {
      flex: 2;
    }
    .right {
      flex: 1;
      padding-left: 6px;
      .user-info {
        padding: 6px;
        border-radius: 3px;
        background-color: #fff;
        .avatar {
          display: flex;
          .info {
            flex-direction: column;
            justify-content: flex-start;
            height: 13px;
            margin-left: 5px;
            p {
              font-size: @font-size;
              cursor: pointer;
              &:hover {
                color: #0dbc79;
              }
            }
            .name {
              font-weight: 600;
            }
            .c-coin {
              font-size: @font-size;
              font-weight: 600;
            }
          }
        }

        .user-fun {
          display: flex;
          justify-content: space-around;
          margin-top: 3.7px;
        }
      }
      .other-model {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 3px;
          width: 30%;
          height: 12px;
          color: #fff;
          font-size: @font-size;
          font-weight: 600;
          background-color: #16d46b;
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap; // 文本不换行
          overflow: hidden; // 溢出隐藏
          text-overflow: ellipsis; // 文本溢出显示省略号
          &:hover {
            transform: translateY(-1.7px);
            box-shadow: 2px 2px 7px #dbd9e9;
          }
        }
      }
      .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
          padding-left: 6.3px;
          font-size: @font-size;
          white-space: nowrap; // 文本不换行
          overflow: hidden; // 溢出隐藏
          text-overflow: ellipsis; // 文本溢出显示省略号
          border-bottom: 0.00987rem dashed #eee;
          margin-bottom: 3.7px;
          cursor: pointer;
          &:hover {
            color: #0dbc79;
          }
        }
      }
    }
  }
  .el-avatar {
    width: 13px;
    height: 13px;
  }
</style>
