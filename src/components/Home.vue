<template>
    <div id="home">
      <v-nav></v-nav>
      <Menu></Menu>
      <Body></Body>
    </div>
</template>

<script type="text/ecmascript-6">
import Header from './Header'
import Nav from './Nav'
import Menu from './Menu'
import Body from './Body'

export default {
  name: 'Home',
  components: {
    Body,
    Menu,
    'v-header': Header,
    'v-nav': Nav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
