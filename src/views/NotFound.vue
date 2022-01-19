<template>
  <div class="errorPage">
      <h1>Error 404</h1>
      <p>Back to path '/'</p>
      <router-link to='/'>Back to home</router-link>
  </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style>
.errorPage{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #35495e;
}
.errorPage h1{
    font-size: 50px;
}
.errorPage p{
    font-size: 30px;
}
</style>