<template>
  <div class="detail_container">
    <div class="personal_container page_container_view">
      <div class="personal_container_scroll">
        <van-nav-bar
          title="我的"
          class="personal_container_head"
        />

        <div class="personal_container_wrap">
          <div class="info_container">
            <div class="info_container_user">
              <van-image
                class="avatar_image"
                fit="cover"
                round
                :src="require('../../assets/images/avatar.jpg')"
              />

              <p class="info_container_user_name">
                庄晨忠
              </p>

              <van-badge :content="5">
                <van-icon
                  name="envelop-o"
                  size="5.33333vw"
                />
              </van-badge>
            </div>

            <div class="info_container_banner">
              <div class="info_container_banner_image van-image">
                <van-image
                  class="swiper_item_image"
                  width="inherit"
                  height="inherit"
                  fit="cover"
                  :src="require('../../assets/images/banner1.png')"
                />
              </div>
            </div>
          </div>

          <van-cell-group class="menu_container">
            <van-cell
              title="我的消息"
              :icon="require('../../assets/images/xiaoxi.png')"
              is-link
              @click="toUserMessage()"
            />

            <van-cell
              title="个人信息"
              :icon="require('../../assets/images/geren.png')"
              is-link
              @click="toPersonalInformation()"
            />

            <van-cell
              title="我的申请"
              :icon="require('../../assets/images/shenqing.png')"
              is-link
              @click="toUserApplication()"
            />

            <van-cell
              title="我的审批"
              :icon="require('../../assets/images/shenpi.png')"
              is-link
              @click="toUserApprove()"
            />
          </van-cell-group>

          <div class="logout_container">
            退出登录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data () {
    return {

    }
  },
  methods: {
    toPersonalInformation () {
      this.$router.push({
        path: '/personal-information'
      })
    },
    toUserMessage () {
      this.$router.push({
        path: '/user-message'
      })
    },
    toUserApprove () {
      this.$router.push({
        path: '/user-approve'
      })
    },
    toUserApplication () {
      this.$router.push({
        path: '/user-application'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_container {
  height: calc(var(--vh, 1vh) * 100 - 13.33333vw);
  overflow: auto;
  background-color: #f1f3f5;

  ::v-deep .van-nav-bar {
    position: relative;
    z-index: 1;
    line-height: 22px;
    text-align: center;
    user-select: none;
    background-color: #b13a3d;
  }

  ::v-deep .van-nav-bar__title {
    color: #fff;
  }

  .info_container {
    .info_container_user {
      display: flex;
      align-items: center;
      padding: 4vw 4vw 16vw;
      background-color: #fff;

      .avatar_image {
        width: 10.66667vw;
        height: 10.66667vw;
      }

      .info_container_user_name {
        flex: 1;
        padding: 0 2.66667vw;
        font-size: 4vw;
      }
    }

    .info_container_banner {
      height: 26.66667vw;
      margin: -13.33333vw 4vw 0;
      overflow: hidden;
      border-radius: 4vw;
    }
  }

  .menu_container {
    margin-top: 5.33333vw;
    color: #333;

    ::v-deep .van-cell__left-icon {
      display: flex;
      align-items: center;
    }
  }

  .logout_container {
    padding: 4vw 0;
    margin-top: 5.33333vw;
    font-size: 3.46667vw;
    color: #b13a3d;
    text-align: center;
    background-color: #fff;
  }
}
</style>
