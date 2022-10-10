<template>
  <div class="detail_container">
    <van-nav-bar
      title="我的消息"
      left-arrow
      left-text="返回"
      class="detail_container_head"
    />

    <div class="detail_container_view">
      <div class="content">
        <van-pull-refresh
          v-model="isLoading"
          pulling-text="下拉刷新"
          loosing-text="释放刷新"
          loading-text="加载中"
          @refresh="onRefresh"
        >
          <div class="content_item is-read">
            <div class="item_header">
              <p class="item_header_title">
                过期提醒
              </p>

              <p class="item_header_time is-read">
                已读
              </p>
            </div>

            <div class="item_time">
              2021-12-30 01:05:02
            </div>

            <div class="item_content">
              台湾通行证:庄晨忠:您的证照有效期将在1486.0天后2022-01-29过期！
            </div>

            <div class="item_btn">
              收起
            </div>
          </div>

          <div class="pull">
            <p class="pull_title">
              没有更多了
            </p>
          </div>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_container {
  font-size: 28px;

  ::v-deep .van-nav-bar {
    position: relative;
    z-index: 2;
    line-height: 22px;
    text-align: center;
    user-select: none;
    background-color: #b13a3d;
  }

  ::v-deep .van-nav-bar__title,
  ::v-deep .van-nav-bar .van-icon,
  ::v-deep .van-nav-bar__text {
    color: #fff;
  }

  .detail_container_view {
    height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
    padding: 0 4vw;
    overflow: hidden;
    background-color: #f4f4f4;

    .content {
      padding: 4vw 0;

      .content_item {
        height: 15.2vw;
        padding: 4vw 4vw 0;
        margin-bottom: 4vw;
        overflow: hidden;
        border-radius: 1.33333vw;
      }

      .is-read {
        background-color: #fff;
      }

      .is-not-read {
        background-color: rgb(243, 220, 220);
      }
    }
  }
}
</style>
