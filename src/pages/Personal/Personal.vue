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
              <div class="info_container_user_image van-image van-image--round">
                <van-image
                  class="swiper_item_image"
                  width="100%"
                  fit="cover"
                  :src="require('../../assets/images/avatar.jpg')"
                />
              </div>

              <p class="info_container_user_name">
                庄晨忠
              </p>

              <div class="van-badge__wrapper">
                <i class="info_container_user_icon van-icon van-icon-envelop-o">
                  <!---->
                </i>

                <div class="van-badge van-badge--fixed">
                  0
                </div>
              </div>
            </div>

            <div class="info_container_banner">
              <div class="info_container_banner_image van-image">
                <van-image
                  class="swiper_item_image"
                  width="100%"
                  fit="cover"
                  :src="require('../../assets/images/banner1.png')"
                />
              </div>
            </div>
          </div>

          <div class="menu_container personal_container_wrap_menu van-cell-group van-hairline--top-bottom">
            <div
              role="button"
              tabindex="0"
              class="van-cell van-cell--clickable"
            >
              <i class="van-icon van-cell__left-icon">
                <van-icon
                  class="swiper_item_image"
                  :src="require('../../assets/images/xiaoxi.png')"
                />
                <!---->
              </i>

              <div class="van-cell__title">
                <span>
                  我的消息
                </span>
              </div>

              <i class="van-icon van-icon-arrow van-cell__right-icon">
                <!---->
              </i>
            </div>

            <div
              role="button"
              tabindex="0"
              class="van-cell van-cell--clickable"
            >
              <i class="van-icon van-cell__left-icon">
                <van-icon
                  class="swiper_item_image"
                  :src="require('../../assets/images/geren.png')"
                />
                <!---->
              </i>
              <div class="van-cell__title">
                <span>
                  个人信息
                </span>
              </div>

              <i class="van-icon van-icon-arrow van-cell__right-icon">
                <!---->
              </i>
            </div>

            <div
              role="button"
              tabindex="0"
              class="van-cell van-cell--clickable"
            >
              <i class="van-icon van-cell__left-icon">
                <van-icon
                  class="swiper_item_image"
                  :src="require('../../assets/images/geren.png')"
                />
                <!---->
              </i>

              <div class="van-cell__title">
                <span>
                  我的申请
                </span>
              </div>

              <i class="van-icon van-icon-arrow van-cell__right-icon">
                <!---->
              </i>
            </div>

            <div
              role="button"
              tabindex="0"
              class="van-cell van-cell--clickable"
            >
              <i class="van-icon van-cell__left-icon">
                <van-icon
                  class="swiper_item_image"
                  :src="require('../../assets/images/shenpi.png')"
                />
                <!---->
              </i>

              <div class="van-cell__title">
                <span>
                  我的审批
                </span>
              </div>

              <i class="van-icon van-icon-arrow van-cell__right-icon">
                <!---->
              </i>
            </div>
          </div>

          <div class="personal_container_wrap_logout">
            退出登录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
}
</style>
