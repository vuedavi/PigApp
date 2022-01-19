<template>
  <div class="piggyValues">
    <div class="piggyActions">
      <Actions option="Gasto" data-type="Gasto"/>
      <Actions option="Ganho" data-type="Ganho"/>
    </div>
    <div class="tableValues">
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Valor</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="({title, value, type, id}, index) in transitions" v-bind:key="index">
              <td>
                <router-link class="detailsLink" :to="`/details/${id}`">
                  {{title}}
                </router-link>
              </td>
              <td v-bind:data-td="type">R$ {{value}}</td>
              
              <td class="sub">
                  <span class="material-icons" @click="removeTransition(id)">remove_circle</span>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Actions from '../components/actionButton.vue'

export default {
  name: 'Home',
  data(){
    return{
      transitions: [
        
      ],
      
    }
  },
  methods:{
    removeTransition(id){
      this.transitions =  this.transitions.filter(el =>{
        return el.id != id
      })
      localStorage.setItem('DB', JSON.stringify(this.transitions))
    }
  },
  mounted(){
    const DB = localStorage.getItem('DB')
    if(!DB){
      localStorage.setItem('DB', JSON.stringify([]))
      this.transitions = JSON.parse(DB)
      
    }else{
      this.transitions = JSON.parse(DB)
    }
  },
  
  components: {
    Actions
  }
}
</script>
<style scoped>
.piggyValues{
  width: 100%;
  height: max-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
.piggyValues .piggyActions{
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
}
.tableValues, .tableValues table{
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  border-radius: 15px;
  color: #35495e;
}
.tableValues table tr{
  height: 35px;
  text-align: center;
  background: white;
  
 
}
.tableValues table tbody tr{

  border-bottom: 1px solid #1281FF;
}

.tableValues table tr *{
  padding: 10px;
  border-radius: 15px;
  overflow: hidden;
}
.tableValues table tbody tr td.sub{
  color: #ff4949;
  cursor: pointer;
}
.tableValues table tbody tr td[data-td="Ganho"]{
  color: #2cc47d;
}
.tableValues table tbody tr td[data-td="Gasto"]{
  color: #ff4949;
}
.tableValues table tbody tr td .detailsLink{
  color: #35495e;
  font-weight: 600;
  
}

@media(min-width: 800px){
  .piggyValues{
    width: 80%;
  }
}
@media(min-width: 1000px){
  .piggyValues{
    width: 60%;
  }
}
@media(min-width: 1300px){
  .piggyValues{
    width: 45%;
  }
}
</style>
