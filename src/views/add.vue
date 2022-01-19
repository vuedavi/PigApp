<template>
  <div class="add">
    <div class="head">
      <Back/>
      <div>
        <h1>Adicionar Transação</h1>
        <h4>Tipo da transação: <span>{{$route.params.type}}</span></h4>
      </div>
      
    </div>
    <div>
      <label for="title">Titulo:</label>
      <input name="title" type="text" v-model="title" v-bind:data-type="$route.params.type" placeholder="Titulo" class="InputTitle" maxlength="15">
    </div>
    <div>
      <label for="value">Valor:</label>
      <input name="value" type="Number" v-model="value" v-bind:data-type="$route.params.type" placeholder="Valor" class="InputValue" maxlength="4">
    </div>
    <div class="textarea">
      <label for="Descricao">Descrição:</label>
      <textarea name="Descricao" v-model="description" placeholder="Descrição"></textarea>
    </div>
    <div>
      <button @click="add()">
        Finalizar
      </button>
    </div>
    <div v-if="NotificationCondition == true" class="Notify">
      <p>{{status}}</p>
    </div>
  </div>
</template>

<script>
import Back from '../components/backButton.vue'
export default {
    name: 'add',
    components:{
      Back
    },
    data(){
      return{
        title: '',
        value: '',
        description: '',
        status: '',
        NotificationCondition: false
      }
    },
    methods: {
      to(local){
        return window.location.href = local
      },
      add(){
        const DB = localStorage.getItem('DB')
        
        const {title, value, description} = this
        
        if(title == "" || value == ""){
          this.status = 'Todos os campos são obrigatórios!'
          this.NotificationCondition = true
          setTimeout(()=>{this.NotificationCondition = false}, 3500)
        }else{
          
          let Month = new Date().getMonth()
          if(Month < 10){
            Month = `0${Month + 1}`
          }
          console.log('COM DADOS')
          if(!DB){
            
            window.localStorage.setItem('DB', JSON.stringify([{
              title: title,
              value: value,
              description: description || 'Sem Descrição',
              data: `${new Date().getDate()}/${Month}/${new Date().getFullYear()}`,
              id: Date.now(),
              type: this.$route.params.type
            }]))
            this.to('/')
          }else{
            
            const currentArray = JSON.parse(localStorage.getItem('DB'))
            currentArray.push({
              title: title,
              value: value,
              description: description || 'Sem Descrição',
              data: `${new Date().getDate()}/${Month}/${new Date().getFullYear()}`,
              id: Date.now(),
              type: this.$route.params.type
            })
            window.localStorage.setItem('DB', JSON.stringify(currentArray))
            this.to('/')
          }
          
        }
        
      }
    }
}
</script>

<style>
.add{
  height: max-content;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
  
}
.head * h4 span{
  color: #0077ff;
}
.add div label{
  font-size: 20px;
}
.add div input{
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  border: 2px solid #1281FF;
  background: whitesmoke;
  font-size: 15px;
  font-weight: 600;
}

.add div{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.add div.head{
  display: flex;
  
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #35495e;
  gap: 30px;
}

.head *{
  width: max-content;
}
.head * h1{
  font-size: 25px;
}
div.textarea textarea{
  width: 100%;
  height: 300px;
  border: 2px solid #1281FF;
  border-radius: 5px;
  padding: 10px 10px;
  background: whitesmoke;
  font-size: 15px;
  font-weight: 600;
  
}
.add div button{
  height: 50px;
  border-radius: 5px;
  border: 2px solid #1281FF;
  background-color: #1281FF;
  color: white;
  font-size: 20px;
  transition: all 150ms;
}
.add div button:hover, .add div button:focus{
  box-shadow: 0px 0px 0px 5px #1281ff63;
}
.Notify{
  z-index: 2;
  position: fixed;
  top: 20px;
  left: 5%;
  right: 5%;
  width: 90vw;
  height: 70px;
  background-color: #0077ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  transition: all 150ms;
  box-shadow: 0px 0px 5px 1px #35495e;
  
}

</style>