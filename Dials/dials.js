new Vue({
  el: '#app',
  data () {
    return {
      navSelectedIndex: 0,
      isLayerShow: false,
      layerItem: {},
      aside: [
        '全部表盘',
        '简约主义',
        '时尚酷炫',
        '体育专区',
        '静物风景',
        '卡通动漫',
        '游戏地带',
        '明星影视'
      ],
      dials: [
        {
          avatar: 'http://img.zcool.cn/community/017dce5770f0b10000012e7e538494.jpg',
          name: '高科技炫酷',
          size: '4.3M',
          times: '3461'
        },
        {
          avatar: 'http://img.zcool.cn/community/01f56b5770efc20000012e7e247650.jpg',
          name: '华丽一族',
          size: '4.3M',
          times: '6672'
        },
        {
          avatar: 'http://img.zcool.cn/community/01150a5770f0b40000018c1b6d128e.jpg',
          name: 'Dior',
          size: '4.3M',
          times: '903'
        },
        {
          avatar: 'http://img.zcool.cn/community/01b3bf5770f0e60000012e7eeb9a22.jpg@1280w_1l_2o_100sh.jpg',
          name: '阿里山西瓜',
          size: '4.3M',
          times: '2175'
        },
        {
          avatar: 'http://img.zcool.cn/community/01f56b5770efc20000012e7e247650.jpg',
          name: '三个枕头',
          size: '4.3M',
          times: '8351'
        },
        {
          avatar: 'http://img.zcool.cn/community/017dce5770f0b10000012e7e538494.jpg',
          name: '卡牌大师',
          size: '4.3M',
          times: '1845'
        },
        {
          avatar: 'http://img.zcool.cn/community/017dce5770f0b10000012e7e538494.jpg',
          name: '天真无邪苍老师',
          size: '4.3M',
          times: '32578'
        }
      ]
    }
  },
  methods: {
    navSelect (index) {
      this.navSelectedIndex = index;
    },
    showDetail (item) {
      this.layerItem = item;
      this.isLayerShow = true;
    }
  }
})