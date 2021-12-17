<template>
  <div class="simple">
    <h1>Simple Component</h1>
    <p v-text="msg"></p>
    <p v-text="msgUpper"></p>
  </div>
</template>

<script>
const _ = require("lodash");

export default {
  name: "Simple",
  props: {
    msg: String,
  },
  computed: {
    msgUpper() {
      return _.upperCase(this.msg);
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
