<template>
  <div class="home_container">
    <div class="home_container_header">
      <div class="home_container_header_bg" />
      <p class="home_container_header_title">
        因私出国服务平台
      </p>
      <div class="home_user home_container_header_user">
        <van-image
          round
          width="10.66667vw"
          height="10.66667vw"
          :src="avatar"
        />
        <p class="home_user_name">
          庄晨忠
        </p>
        <i class="van-icon van-icon-arrow"><!----></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      avatar: require('../../assets/images/avatar.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.home_container {
  height: calc(var(--vh, 1vh) * 100 - 13.33333vw);
  overflow: auto;
  font-size: 28px;

  .home_container_header {
    position: relative;
    height: 64vw;

    .home_container_header_bg {
      position: absolute;
      z-index: -1;
      width: 100vw;
      height: 61.33333vw;
      background-image: url('../../assets/images/header-bg.png');
      background-size: contain;
    }

    .home_container_header_title {
      padding: 4vw;
      font-size: 5.33333vw;
      color: #fff;
    }

    .home_user {
      display: flex;
      align-items: center;
      padding: 2.66667vw;
      background-color: #fff;
      border-radius: 1.6vw;
      box-shadow: 0 0.8vw 1.86667vw rgb(0 0 0 / 10%);

      .home_user_name {
        flex: 1;
        padding: 2.66667vw;
      }
    }

    .home_container_header_user {
      position: absolute;
      right: 4.66667vw;
      bottom: 0;
      left: 4.66667vw;
    }
  }
}
</style>
