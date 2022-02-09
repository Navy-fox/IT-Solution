<template>
  <div class="fixed top-0 left-0 z-10">
    <div class=" bg-accent rounded-bl-xl w-screen mb-auto fixed flex flex-col gap-2 py-3.5 pl-10 lg:pl-20">
      <a href="tel:+372 43675 476" class="link">
        <img src="@/assets/icon/phone-white.svg" alt="">
        +372 43675 476
      </a>
      <a href="mailto:info@example.ee" class="link">
        <img src="@/assets/icon/mail-white.svg" alt="">
        info@example.ee
      </a>
    </div>
    <div class="flex flex-col gap-5 bg-primary rounded-bl-full w-1/3 fixed right-0 pt-3 pb-1.5 px-4 md:w-9/12 lg:px-6 lg:w-3/4 xl:w-4/5">
      <div class="flex place-content-center">
        <img src="@/assets/icon/logo.svg" alt="" class="col-start-2 mx-auto">
        <div class="flex gap-4 place-content-end">
          <img src="@/assets/icon/facebook.svg" alt="">
          <img src="@/assets/icon/vk.svg" alt="">
        </div>
      </div>
      <nav class="flex col-start-1 col-end-4 place-content-end justify-end gap-2.5 lg:gap-6">
        <nuxt-link to="" class="nav-link">главная</nuxt-link>
        <nuxt-link to="" class="nav-link">о нас</nuxt-link>
        <nuxt-link to="" class="nav-link">отправьте нам сообщение</nuxt-link>
        <nuxt-link to="" class="nav-link">чзв</nuxt-link>
        <nuxt-link to="" class="nav-link">блог</nuxt-link>
        <nuxt-link to="" class="nav-link">контакты</nuxt-link>
        <img src="@/assets/icon/lang-ru.svg" alt="">
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style lang="scss">
.link {
  @apply text-white text-sm font-bold  flex gap-4
}
.nav-link {
  @apply text-white text-xs font-bold uppercase justify-self-end relative;
  &.nuxt-link-active {
    &:before{
      content: '';
      width: 100%;
      height: 4px;
      background: #9CC634;
      position: absolute;
      border-radius: 5px;
      bottom: -15px;
    }
  }
}
</style>
