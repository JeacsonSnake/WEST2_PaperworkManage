<template>
  <div class="detail_container">
    <!-- eslint-disable-next-line -->
    <div class="login_logo"></div>
    <van-form
      class="login_form"
      @submit="onSubmit"
    >
      <van-field
        v-model="username"
        name="账号"
        placeholder="请输入账号"
        label-width="min-content"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <template v-slot:label>
          <font-awesome-icon
            icon="user"
            class="fontLg"
          />
        </template>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        label-width="min-content"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <template v-slot:label>
          <font-awesome-icon
            icon="lock"
            class="fontLg"
          />
        </template>
      </van-field>

      <div
        class="form_btn"
      >
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#b13a3d"
        >
          提交
        </van-button>
      </div>
    </van-form>
    <div
      class="form_btn_auth"
    >
      <van-button
        round
        block
        type="info"
        native-type="button"
        color="#b13a3d"
      >
        统一身份认证登录
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="scss" scoped>
.detail_container {
  box-sizing: border-box;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  padding: 31.73333vw 17.33333vw 0;
  background-image: url('../../assets/images/login-bg.png');
  background-size: cover;

  .fontLg {
    width: min-content;
    font-size: 1.8em;
  }

  .login_logo {
    width: 66.4vw;
    height: 19.2vw;
    margin-bottom: 37.33333vw;
    background-image: url('../../assets/images/logo.png');
    background-size: cover;
  }

  .login_form {
    .van-field .van-field__label {
      display: flex;
      align-items: center;
      width: -webkit-min-content;
      width: -moz-min-content;
      width: min-content;
    }

    .form_btn {
      width: 46.66667vw;
      margin: 13.33333vw auto 0;
    }
  }

  .form_btn_auth {
    width: 46.66667vw;
    margin: 5.33333vw auto 0;
  }
}
</style>
