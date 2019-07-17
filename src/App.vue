<template>
  <div id="app">
    <Header></Header>
    <SearchInput></SearchInput>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SearchInput from "./components/SearchInput.vue";
import FriendList from "./components/FriendList.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    'Header': Header,
    'SearchInput': SearchInput,
    'FriendList': FriendList,
    'Footer': Footer
  }
}
</script>

<style>

</style>
