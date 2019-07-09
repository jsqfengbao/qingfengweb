<template>
    <div id="wrapper-header">
      <div id="main-header" class="object">
        <div class="logo"><img src="../assets/img/logo-burst.png" alt="logo platz" height="38" width="90"></div>
        <div id="main_tip_search">
          <form>
            <input type="text" name="search" id="tip_search_input" list="search" autocomplete=off required>
          </form>
        </div>
        <div id="stripes"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'v-header'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
