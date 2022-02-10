<template>
  <div class="flex flex-col mt-auto z-10">
    <div class="h-full py-9 px-20 bg-primary flex flex-col gap-5 md:grid md:grid-cols-4 md:gap-10 justify-items-center">
      <p class="text-5xl text-white uppercase self-center">logo</p>
      <div class="footer-group">
        <p class="footer-group__title">Company name</p>
        <p class="footer-group__line">Reg. nr: 437568</p>
        <p class="footer-group__line">Peterburi tee 710 Tallinn Harjumaa 34235</p>
      </div>
      <div class="footer-group">
        <p class="footer-group__title">Свяжись с нами</p>
        <a class="footer-group__line" href="tel:+372 475685">
          <img src="@/assets/icon/phone.svg" alt="">
          +372 475685
        </a>
        <a class="footer-group__line" href="mailto:info@example.ee">
          <img src="@/assets/icon/mail.svg" alt="">
          info@example.ee
        </a>
      </div>
      <div class="footer-group">
        <p class="footer-group__title">Полезные ссылки</p>
        <nuxt-link class="footer-group__line" to="/">О нас</nuxt-link>
        <nuxt-link class="footer-group__line" to="/">Часто задаваемые вопросы</nuxt-link>
        <nuxt-link class="footer-group__line" to="/">Контакты</nuxt-link>
      </div>
    </div>
    <div class="h-14 bg-dark"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style lang="scss">
.footer-group {
  @apply flex flex-col gap-2;
  &__title {
    @apply text-white font-bold leading-4 text-sm self-center md:self-start
  }

  &__line {
    @apply text-white font-normal leading-4 text-sm flex gap-1.5 place-content-center md:place-content-start
  }
}
</style>
