<template>
    <div class="tab-bar">
      <a href="index.html" class="tab-bar__tab tab-bar__tab--selected">
        <i class="fa fa-user"></i>
        <span class="tab-bar__title">친구</span>
      </a>
      <a href="chats.html" class="tab-bar__tab">
        <i class="fa fa-comment"></i>
        <span class="tab-bar__title">채팅</span>
      </a>
      <a href="find.html" class="tab-bar__tab">
        <i class="fa fa-search"></i>
        <span class="tab-bar__title">친구찾기</span>
      </a>
      <a href="more.html" class="tab-bar__tab">
        <i class="fa fa-ellipsis-h"></i>
        <span class="tab-bar__title">더보기</span>
      </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .tab-bar {
    background-color: #f7f7f7;
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #c1c1c1;
    padding: 10px 30px 5px 30px;
  }
  
  .tab-bar .tab-bar__tab {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: #c1c1c1;
    transition: transform .3s linear;
  }
  
  .tab-bar .tab-bar__tab:hover {
    transform: scale(1.1);
  }
  
  .tab-bar .tab-bar__tab i {
    display: block;
    margin-bottom: 5px;
    text-align: center;
    font-size: 24px;
  }
  
  .tab-bar .tab-bar__title {
    font-size: 10px;
  }
  
  .tab-bar .tab-bar__tab--selected {
    color: #523737;
  }
</style>
