<template>
  <div id="app">
    <div class="nav">
      <h1>PigApp</h1>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
html, body, #app{
  min-height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav{
  width: 100%;
  height: max-content;
  padding: 10px 20px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #1281FF;
  background: #ffffff;
  /* color: rgb(60, 233, 60); */
  color: #1281FF;
}
</style>
