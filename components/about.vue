<template>
  <div class="relative">
    <div class="mx-5 flex flex-col gap-6 md:mx-16">
      <h2 class="title  z-10 md:w-3/5">о нас</h2>
      <p class="text-dark text-lg font-bold z-10 md:w-2/3">
        Мы действуем на рынке автомобилей уже много лет и знаем как оформить сделку быстро и без проблем.
      </p>
      <p class="text-dark text-xs z-10 md:w-2/3">
        Первое, что следует сделать заинтересованному в продаже машины человеку –
        связаться с нами, заполнив контактную форму на сайте или позвонив по
        телефону. На основании полученного со слов описания машины мы назовем
        предварительную стоимость. Точное ценовое предложение станет известно после
        проведения оценки, которую выполнит наш специалист, выехав для этого в удобное
        для клиента место.
      </p>
      <div class="list grid grid-cols-3 lg:flex lg:flex-col lg:gap-5 md:w-3/5 lg:w-2/5">
        <span class="list-item">
        <img src="@/assets/icon/crown.svg" alt="">
        Предлагаем самые высокие цены
      </span>
        <span class="list-item">
        <img src="@/assets/icon/contract.svg" alt="">
        Оформляем документы прямо на месте
      </span>
        <span class="list-item">
        <img src="@/assets/icon/hand.svg" alt="">
        Выкупаем машины в любом состоянии
      </span>
      </div>
    </div>
    <img src="@/assets/image/bg-about.png" alt="" class="mx-auto lg:absolute lg:right-0 lg:-bottom-40 sm:w-3/5 lg:w-auto">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About"
}
</script>

<style lang="scss" scoped>
.list-item {
  @apply lg:text-left lg:justify-start lg:flex-row
}
</style>
