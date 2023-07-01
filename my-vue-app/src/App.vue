<script setup>
import { useStore } from "vuex"
const store = useStore()
store.commit('addMenu')
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
