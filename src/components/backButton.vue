<template>
  <router-link to="/" class="back">
        <span class="material-icons">arrow_back</span>
        <span>Voltar</span>
    </router-link>
</template>

<script>
export default {

}
</script>

<style>
.back{
  background-color: #0077ff;
  padding: 10px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
}
.back:hover, .back:focus{
  box-shadow: 0px 0px 0px 5px #1281ff63;
}
</style>