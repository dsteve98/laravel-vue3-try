<template>
  <form class="form">
    <h1>To Do</h1>
    <div class="form">
      <input type="text" v-model="inputform" />
      <button-form textlabel="Submit" @emit-click="addList" stylecustom="blue" />
      <button-form textlabel="Reset" @emit-click="resetList" />
    </div>
  </form>
</template>

<script>
export default {
  emits: ['emit-submit'],
  data() {
    return {
      inputform: "",
    };
  },
  methods: {
    addList() {
      this.$emit("emit-submit", this.inputform);
      this.inputform = "";
    },
    resetList() {
      this.inputform = "";
    },
  },
};
</script>