<template>
  <div class="container" style="margin-top: 1rem;">
    <h1>To Do</h1>
    <input-form @emit-submit="addList" />
    <list :listdata="list" @emit-delete="deleteList"/>
  </div>
</template>
<script>

import {mapGetters} from "vuex";
export default {
  data: function () {
    return {
      
    };
  },
  computed: {
    ...mapGetters({
      list: 'getToDo'
    })
  },
  methods: {
    addList(datainput) {
      let newList = {
        title: datainput,
      };
      // this.list.push(newList);
      this.$store.dispatch('addList', newList)
    }
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>