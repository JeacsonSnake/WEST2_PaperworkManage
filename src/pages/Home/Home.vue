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

    <div class="home_container_swiper">
      <p class="swiper_container_title">
        证照服务
      </p>
      <van-swipe
        class="swiper_container"
        :autoplay="0"
        indicator-color="white"
      >
        <van-swipe-item class="swiper_container_item">
          <van-image
            class="swiper_item_image"
            width="100%"
            fit="fill"
            :src="require('../../assets/images/banner.png')"
          />
        </van-swipe-item>
      </van-swipe>
    </div>

    <ul class="menu_container">
      <li
        class="menu_container_item"
        @click="toApply()"
      >
        <div class="menu_container_item_icon van-image">
          <img
            :src="require('../../assets/images/manuIcon1.png')"
            class="van-image__img"
            style="object-fit: contain;"
          >
        </div>

        <div class="menu_container_item_content">
          <p class="menu_container_item_content_title">
            用证申请
          </p>

          <span class="menu_container_item_content_discription">
            证照使用申请
          </span>
        </div>
      </li>

      <li
        class="menu_container_item"
        @click="toEvidenceRecord()"
      >
        <div class="menu_container_item_icon van-image">
          <img
            :src="require('../../assets/images/manuIcon2.png')"
            class="van-image__img"
            style="object-fit: contain;"
          >
        </div>

        <div class="menu_container_item_content">
          <p class="menu_container_item_content_title">
            用证记录
          </p>
          <span class="menu_container_item_content_discription">
            用在哪何时在用
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      avatar: require('../../assets/images/avatar.jpg')
    }
  },
  methods: {
    toApply () {
      this.$router.push({
        path: '/apply'
      })
    },
    toEvidenceRecord () {
      this.$router.push({
        path: '/evidence-record'
      })
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

  .home_container_swiper {
    padding: 0 4vw;

    .swiper_container_title {
      padding: 4.66667vw 0;
      font-size: 5.86667vw;
    }

    .swiper_container {
      height: 250px;
      background-color: #39a9ed;
      border-radius: 1.3vw;

      .swiper_container_item {
        height: 100%;

        .swiper_item_image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .menu_container {
    display: flex;
    flex-wrap: nowrap;
    padding: 4vw 4vw 1.33333vw;

    .menu_container_item {
      display: flex;
      align-items: center;
      width: 39.33333vw;
      padding: 2.66667vw;
      margin-right: 2.66667vw;
      margin-bottom: 2.66667vw;
      background-color: #f4f4f4;
      border-radius: 2.66667vw;

      .menu_container_item_icon {
        width: 8vw;
        height: 8vw;
      }

      .menu_container_item_content {
        margin-left: 2.66667vw;

        .menu_container_item_content_title {
          margin-bottom: 2.66667vw;
          font-size: 4vw;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
