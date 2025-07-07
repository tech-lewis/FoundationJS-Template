<template>
  <div class="login">
    移除Vant4
  </div>
</template>

<script>
import { Toast } from "vant";
import { ref, reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router'


function useSubmit () {
  const onSubmit = async () => {
    // 模拟网络请求并且跳转到home
    const router = useRouter()
    router.push('/')
    // 模拟登录
    Toast.loading("_(:з」∠)_登录...");
    setTimeout(() => {
      Toast.clear();
      router.push({ path: '/'})
    }, 1000);
  }

  return {
    onSubmit // 封装的hook
  }
}


// function onSubmit (values) {
//   console.log('submit', values);
// }
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
    const router = useRouter()
    const onSubmit = (values)=> {
      console.log(values)
      // 模拟登录
      Toast.loading("_(:з」∠)_登录...");
      setTimeout(() => {
        Toast.clear();
        router.push({ path: '/'})
      }, 1000);
    }
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
      onSubmit,
      ...toRefs(user),
      // ...useSubmit(user),
      
    };
  }
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #3296fa;
}
</style>