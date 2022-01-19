<template>
  <div class="details">
      <Back/>
      <div>
          <div class="title">Titulo:</div>
          <div class="value">{{obj.title}}</div>
      </div>
      <div>
          <div class="title">Valor:</div>
          <div class="value">R$ {{obj.value}}</div>
      </div>
      <div>
          <div class="title">Data:</div>
          <div class="value">{{obj.data}}</div>
      </div>
      <div>
          <div class="title">Tipo:</div>
          <div class="value">{{obj.type}}</div>
      </div>
      <div class="detailsDescription">
          <div class="title">Descrição:</div>
          <div class="value">{{obj.description}}</div>
      </div>
  </div>
</template>

<script>
import Back from '../components/backButton.vue'
export default {
    name: 'Details',
    components:{
        Back
    },
    data(){
        return{
            obj: {
                
            }
        }
    },
    mounted(){
        const current = JSON.parse(localStorage.getItem('DB'))
        this.obj = current.find(el=>{
            return el.id == this.$route.params.id
            
        })
    }
}
</script>

<style>
.details{
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
}
.details div{
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: row;
    padding: 10px; 
    color: #35495e;
}
.details .detailsDescription{
    display: flex;
    flex-direction: column;
}
.details div div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
}
.details div .title{
    width: max-content;
    font-size: 25px;
    font-weight: 600;
}
.details div .value{
    font-size: 25px;
    word-break: break-all;
}
</style>