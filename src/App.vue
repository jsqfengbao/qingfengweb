<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from './components/Header'
export default {
  name: 'App',
  components: {'v-header': VHeader}
}
</script>

<style>

</style>
