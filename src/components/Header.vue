<template>
   <header class="top-header">
      <div class="header__top">
        <div class="header__column">
          <i class="fa fa-plane"></i>
          <i class="fa fa-wifi"></i>
        </div>
        <div class="header__column">
          <span class="header__time">{{moment().format('LT')}}</span>
        </div>
        <div class="header__column">
          <i class="fa fa-moon-o"></i>
          <i class="fa fa-bluetooth-b"></i>
          <span class="header__battery">100% <i class="fa fa-battery-full"></i></span>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__column">
          <span class="header__text">편집</span>
        </div>
        <div class="header__column">
          <span class="header__text">친구 <span class="header__number">3</span></span>
        </div>
        <div class="header__column">
          <i class="fa fa-cog fa-lg"></i>
        </div>
      </div>
    </header>
</template>
<script>
import "moment/locale/ko";
const moment = require("moment");
export default {

    data() {
        return {
            moment: moment
        }
    },
    methods: {
        
    }
}
</script>


<style scoped>
.top-header {
    background-color: #523737;
    color: white;
    padding: 5px 10px 15px 10px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
  }
  
  .top-header a {
    color: white;
  }
  
  .top-header .header__top,
  .top-header .header__bottom {
    display: flex;
    justify-content: space-between;
  }
  
  .top-header .header__top {
    margin-bottom: 15px;
    font-size: 12px;
  }
  
  .top-header .header__bottom {
    margin: 0 10px;
  }
  
  .top-header .header__column {
    width: 33%;
  }
  
  .top-header .header__bottom .header__column:first-child {
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
  
  .top-header .header__column:last-child {
    text-align: right;
  }
  
  .top-header .header__column:nth-child(2) {
    text-align: center;
  }
  
  .top-header .header__number {
    color: yellow;
  }
</style>
