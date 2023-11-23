<template>
  <div class="flex justify-between h-full gap-24">
    <div class="bg-[#495057] w-1/2 min-w-[200px] flex items-center justify-center flex-col left-icon">
      <div class="h-28 w-28 mb-4">
        <img src="../assets/images/sign.png"/>
      </div>
      <div class="w-28 text-center text-[#FFFFFF]">
        <img src="../assets/images/sign_text.png"/>
      </div>
    </div>
    <div class="bg-[#FFFFFF] w-1/2 px-12 py-16 relative flex items-center right-form">
      <div class="w-28 absolute top-16 left-12">
        <img src="../assets/images/sign_text.png"/>
      </div>
      <div class="flex flex-col flex-1 justify-between gap-20 form">
        <el-input v-model="form.region" placeholder="请输入用户名" size="large"/>
        <el-input v-model="form.type" placeholder="请输入密码" size="large"/>
        <el-button size="large" class="w-full button" color="#495057" :dark="isDark">登录</el-button>
      </div>
    </div>
  </div> 
</template>

<script setup>
import { ref } from 'vue';

const form = ref({

})
</script>

<style scoped>
@media (width < 900px){
  .left-icon {
    display: none;
  }
  .right-form {
    width: 100%;
  }
}
.button {
  padding: 1.8rem 0;
}

.form >>> .el-input {
  /* --el-input-focus-border-color: #495057; */
  --el-input-focus-border-color: rgb(204,196,3);
}
</style>
