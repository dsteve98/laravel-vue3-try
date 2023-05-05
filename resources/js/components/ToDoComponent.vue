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
      list: [
        { title: "menyapu", status: false },
        { title: "cuci piring", status: false },
        { title: "pel", status: false },
      ],
    };
  },
  computed: {
    
  },
  methods: {
    addList(datainput) {
      let newList = {
        title: datainput,
      };
      this.list.push(newList);
    },
    deleteList(index) {
      this.list.splice(index, 1);
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>