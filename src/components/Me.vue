<template>
     <section class="friends__section">
        <header class="friends__section-header">
          <h6 class="friends__section-title">내 프로필</h6>
        </header>
        <div class="friends__section-rows">
          <div class="friends__section-row">
              <img src="src/assets/Images/me.jpg" alt="">
              <a href="profile.html" class="fiends__section-name">
                kang-yuchan
              </a>
          </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .friends__section .friends__section-header {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    padding: 10px 15px;
    font-size: 12px;
    color: #b4b4b4;
  }
  
  .friends__section-rows .friends__section-row {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  
  .friends__section-row.with-tagline {
    justify-content: space-between;
  }
  
  .friends__section-tagline {
    font-size: 10px;
    background: #f0f0f0;
    padding: 10px 10px;
    border-radius: 5px;
    color: #939393;
  }
  
  .friends__section-row img {
    width: 40px;
    border-radius: 50%;
    margin-right: 15px;
    animation: 1s rotateFriend infinite ease-in-out;
  }
  
  @keyframes rotateFriend {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg) scale(0.5);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  
  .friends__section-row a {
    text-decoration: none;
    color: inherit;
  }
  
  .friends__section-column {
    display: flex;
    align-items: center;
  }
</style>
