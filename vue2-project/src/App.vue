<template>
  <div id="app">
    <Header name="app1"/>
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    Header: () => import('app1/Header')
  }
}
</script>