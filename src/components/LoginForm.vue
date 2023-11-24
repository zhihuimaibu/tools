<template>
  <div class="flex justify-center h-full gap-24">
    <div class="bg-[#495057] w-1/3 min-w-[200px] flex items-center justify-center flex-col left-icon">
      <div class="h-28 w-28">
        <img src="../assets/images/logo.png"/>
      </div>
    </div>
    <div class="bg-[#FFFFFF] w-1/3 px-12 py-32 flex items-stretch justify-between right-form flex-col">
      <div class="flex h-16 items-center">
        <div class="">
          <img src="../assets/images/logo_text.png"/>
        </div>
      </div>
      <div class="flex flex-col justify-start gap-12 form">
        <el-input v-model="form.name" placeholder="请输入用户名" size="large"/>
        <el-input v-model="form.pw" placeholder="请输入密码" size="large"/>
        <el-button size="large" class="button mt-10" color="#495057" @click="handleClick">登录</el-button>
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
  font-size: 1rem;
}

.form >>> .el-input {
  /* --el-input-focus-border-color: #495057; */
  --el-input-focus-border-color: rgb(204,196,3);
}
.form >>> .el-input__wrapper {
  font-size: 1rem;
  padding: 0.4rem 1rem;
}
</style>