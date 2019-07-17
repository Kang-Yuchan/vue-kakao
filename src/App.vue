<template>
  <div id="app">
    <Header></Header>
    <SearchInput></SearchInput>
    <Me></Me>
    <FriendList></FriendList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SearchInput from "./components/SearchInput.vue";
import FriendList from "./components/FriendList.vue";
import Footer from "./components/Footer.vue";
import Me from "./components/Me.vue";

export default {
  components: {
    'Header': Header,
    'SearchInput': SearchInput,
    'Me': Me,
    'FriendList': FriendList,
    'Footer': Footer
  }
}
</script>

<style>

</style>
