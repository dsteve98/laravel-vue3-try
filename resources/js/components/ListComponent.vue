<template>
  <ul class="list">
    <li v-for="(item, index) in listdata" :key="index">
      <input type="checkbox" :id="'list' + index" v-model="item.status" /> &nbsp;
      <label :class="item.status ? 'done' : ''">{{ item.title }}</label> &nbsp;
      <button-form @emit-click="deleteList(index)" color="transparent" text="Hapus"/>
    </li>
  </ul>
</template>

<script>
export default {
  emits:['emit-delete'],
  props:{
    listdata:{
      type:Array,
      default: () => {
        return []
      }
    }
  },
  methods:{
    deleteList(index){
      this.$emit('emit-delete', index)
    }
  }
}
</script>