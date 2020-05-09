<template>
  <div>
    <v-alert type="error" dark dismissible @input="onClose">{{text}}</v-alert>
  </div>
</template>

<script>
export default {
  props: ["text"],
  methods: {
    onClose() {
      this.$emit("dismissed");
    }
  }
};
</script>