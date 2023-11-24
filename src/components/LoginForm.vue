<template>
  <div class="flex justify-center h-full gap-24">
    <div class="bg-[#495057] w-1/3 min-w-[200px] flex items-center justify-center flex-col left-icon">
      <div class="h-28 w-28">
        <img src="../assets/images/sign.png"/>
      </div>
      <!-- <div class="w-28 text-center text-[#FFFFFF]">
        <img src="../assets/images/sign_text.png"/>
      </div> -->
    </div>
    <div class="bg-[#FFFFFF] w-1/3 px-12 py-16 relative flex items-center right-form">
      <div class="w-80 absolute top-16 left-12">
        <img src="../assets/images/sign_text.png"/>
      </div>
      <div class="flex flex-col flex-1 justify-between gap-20 form">
        <el-input v-model="form.name" placeholder="请输入用户名" size="large"/>
        <el-input v-model="form.pw" placeholder="请输入密码" size="large"/>
        <el-button size="large" class="w-full button" color="#495057" @click="handleClick">登录</el-button>
      </div>
    </div>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
import { getPublicKey, login } from '@/request/index.js'
import { encryptValue } from '@/utils/encrypt.js'

const form = ref({})

const handleClick = async function () {
  const res = await getPublicKey({
    username: form.value.name
  })
  const pwEncrypt = encryptValue(res.data, form.value.pw)
  const resLg = await login({
    "username": form.value.name,
    "password": pwEncrypt
  })
  if (resLg.code === 200) {
    
  }else {
    alert('===')
  }
}
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
