<template>
  <div class="fixed top-0 left-0 z-20">
    <div
      class="bg-accent rounded-bl-xl w-screen mb-auto fixed flex flex-col gap-2 py-3 pl-4 md:py-3.5 md:pl-10 lg:pl-20">
      <p class="text-white text-sm font-bold flex gap-2.5 md:hidden">Покупка авто по одному звонку!</p>
      <a href="tel:+372 43675 476" class="text-white text-sm font-bold flex gap-4 md:hidden">
        <img src="@/assets/icon/phone-white.svg" alt="">
        +372 43675 476
      </a>
      <a href="tel:+372 43675 476" class="link">
        <img src="@/assets/icon/phone-white.svg" alt="">
        +372 43675 476
      </a>
      <a href="mailto:info@example.ee" class="link">
        <img src="@/assets/icon/mail-white.svg" alt="">
        info@example.ee
      </a>
    </div>

    <div v-if="menuIsOpen" class="h-full w-10/12 fixed right-0 bg-primary">
      <div class="w-full h-full relative p-8">
        <img
          src="@/assets/icon/bar.svg"
          alt=""
          class="absolute top-5 right-4 w-8 h-8 place-self-end cursor-pointer md:hidden"
          @click="menuIsOpen=false"
        >
        <span class="text-white text-5xl uppercase">logo</span>
        <nav class="flex flex-col gap-12 mt-24">
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/home.svg" alt="">
            главная
          </nuxt-link>
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/people.svg" alt="">
            о нас
          </nuxt-link>
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/mail-unread.svg" alt="">
            отправьте нам сообщение
          </nuxt-link>
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/help-circle.svg" alt="">
            чзв
          </nuxt-link>
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/chatbox-ellipses.svg" alt="">
            блог
          </nuxt-link>
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/location.svg" alt="">
            контакты
          </nuxt-link>
          <nuxt-link to="" class="mobile-nav-link">
            <img src="@/assets/icon/lang-ru.svg" alt="">
            русский
          </nuxt-link>
          <div class="flex gap-8 h-6">
            <img src="@/assets/icon/facebook.svg" alt="">
            <img src="@/assets/icon/vk.svg" alt="">
          </div>
        </nav>
      </div>
    </div>

    <div
      v-if="!menuIsOpen"
      class="h-auto flex flex-col gap-5 bg-primary rounded-bl-full w-1/3 fixed right-0 p-5 md:pt-3 md:pb-1.5 md:px-4 md:w-9/12 lg:px-6 lg:w-3/4 xl:w-4/5"
    >
      <img
        src="@/assets/icon/bar.svg"
        alt=""
        class="w-8 h-8 place-self-end cursor-pointer md:hidden"
        @click="menuIsOpen=true"
      >
      <div class="hidden place-content-center md:flex">
        <img src="@/assets/icon/logo.svg" alt="" class="col-start-2 mx-auto">
        <div class="flex gap-4 place-content-end">
          <img src="@/assets/icon/facebook.svg" alt="">
          <img src="@/assets/icon/vk.svg" alt="">
        </div>
      </div>
      <nav class="hidden col-start-1 col-end-4 place-content-end justify-end gap-1.5 md:flex lg:gap-6">
        <nuxt-link to="/" class="nav-link">главная</nuxt-link>
        <nuxt-link to="/1" class="nav-link">о нас</nuxt-link>
        <nuxt-link to="/1" class="nav-link">отправьте нам сообщение</nuxt-link>
        <nuxt-link to="/1" class="nav-link">чзв</nuxt-link>
        <nuxt-link to="/1" class="nav-link">блог</nuxt-link>
        <nuxt-link to="/1" class="nav-link">контакты</nuxt-link>
        <img src="@/assets/icon/lang-ru.svg" alt="">
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      menuIsOpen: false
    }
  },
}
</script>

<style lang="scss">
.link {
  @apply hidden text-white text-sm font-bold flex gap-4 md:flex;
}

.nav-link {
  @apply text-white text-xs font-bold uppercase justify-self-end relative;
  &.nuxt-link-active {
    &:before {
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
.mobile-nav-link {
  @apply text-white text-lg font-bold uppercase
  flex gap-5
}
</style>
