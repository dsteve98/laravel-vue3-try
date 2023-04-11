<template>
  <div class="form">
    <input type="text" v-model="inputform">
    <button-form @emit-click="reset" color="blue" text="Reset"/>
    <button-form @emit-click="addList" text="Submit"/>
  </div>
</template>

<script>
export default {
  emits:['emit-submit'],
  data(){
    return{
      inputform: ""
    }
  },
  methods:{
    addList(){
      this.$emit('emit-submit', this.inputform)
      this.reset()
    },
    reset(){
      this.inputform = ""
    }
  }
}
</script>