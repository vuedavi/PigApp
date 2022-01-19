<template>
    <router-link :to="`/add/${option}`" class="ButtonAction">
        <span>Adicionar {{option}}</span>
    </router-link>
      
</template>

<script>
export default {
    props:{
        option: String
    }
}
</script>

<style>
.ButtonAction{
  width: 50%;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  color: white;
  
  
}
.ButtonAction[data-type="Gasto"]{
  background-color: rgb(255, 98, 98);
}
.ButtonAction[data-type="Ganho"]{
  background-color: #2cc47d;
}

</style>