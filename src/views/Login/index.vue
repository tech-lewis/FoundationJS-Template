<template>
  <div class="login">
    <van-nav-bar class="nav-bar" title="登录"></van-nav-bar>
    <van-form @failed="onFailed" @submit="onSubmit">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="userNo"
          name="userNo"
          left-icon="manager"
          placeholder="请输入6位账号"
          :rules="[{ pattern, message: '请输入正确的账号' }]"
        />
        <!-- 通过 validator 进行函数校验 -->
        <van-field
          v-model="phone"
          name="phone"
          placeholder="请输入您的手机号"
          left-icon="phone"
          :rules="[{ validator, message: '请输入正确内容' }]"
        />
        <!-- 通过 validator 返回错误提示 -->
        <van-field
          v-model="phone"
          name="phone"
          placeholder="校验函数返回错误提示"
          left-icon="phone-o"
          :rules="[{ validator: validatorMessage }]"
        />
        <!-- 通过 validator 进行异步函数校验 -->
        <van-field
          v-model="password"
          name="password"
          placeholder="异步校验您的密码"
          left-icon="lock"
          type="password"
          :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">Orz 我要登录</van-button>
      </div>
    </van-form>
    {{password}}
  </div>
</template>

<script>
import { Toast } from "vant";
import { ref, reactive, toRefs } from 'vue';
function useSubmit () {
  const onSubmit = async () => {}

  return {
    onSubmit // 封装的hook
  }
}

export default {
  setup() {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("abc");
    const value4 = ref("");
    const pattern = /\d{6}/;

    // 校验函数返回 true 表示校验通过，false 表示不通过
    const validator = val => /1\d{10}/.test(val);

    // 校验函数可以直接返回一段错误提示
    const validatorMessage = val => `${val} 不合法，请重新输入`;

    // 校验函数可以返回 Promise，实现异步校验
    const asyncValidator = val =>
      new Promise(resolve => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(val === "1234");
        }, 1000);
      });

    const onFailed = errorInfo => {
      console.log("failed", errorInfo);
    };


    const user = reactive({
      userNo: '',
      phone: '',
      password: ''
    });
    return {
      value1,
      value2,
      value3,
      value4,
      pattern,
      onFailed,
      validator,
      asyncValidator,
      ...toRefs(user),
      ...useSubmit(user),
      onSubmit: (values) => {
        console.log('submit', values);
        // 模拟登录
        Toast.loading("_(:з」∠)_登录...");
        setTimeout(() => {
          Toast.clear();
        }, 1000);
      }
    };
  }
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #3296fa;
}
</style>