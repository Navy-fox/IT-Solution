<template>
  <div class="relative">
    <img src="@/assets/image/bg-mine.png" alt="" class="absolute opacity-0 lg:opacity-100">
    <div class="flex flex-col gap-6 lg:w-3/5 lg:ml-auto">
      <div class="flex flex-col gap-2 items-center ">
        <img src="@/assets/icon/logo.svg" alt="">
        <p class="text-dark text-xs font-bold text-center z-10">
          Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно? <br>
          Доверь нам все проблемы, связанные с продажей машины!
        </p>
      </div>
      <div class="hidden justify-center items-center md:flex">
        <div class="slide rounded-bl-xl rounded-tl-xl border-lightgreen border border-r-0">
          <img src="@/assets/icon/clock.svg" alt="">
          <h5 class="text-lg font-bold">Быстро</h5>
          <p class="text-xs">
            Наша цель помочь вам продать машину как
            можно быстрее, оформив все необходимые
            докуметы в ускоренном порядке, и мы
            сделаем для этого всё от себя зависящее.
          </p>
        </div>
        <div class="slide slide--select">
          <img src="@/assets/icon/check.svg" alt="">
          <h5 class="text-lg font-bold">Просто</h5>
          <p class="text-xs">
            Мы купим вашу машину при любом условии!
            Не важно есть ли на ней техосмотр, нуждается
            ли она в ремонте или имеет неисправности;
            Мы приобритём вашу машину без лишних
            задержек и вопросов.
          </p>
        </div>
        <div class="slide rounded-br-xl rounded-tr-xl border-lightgreen border border-l-0">
          <img src="@/assets/icon/clock.svg" alt="">
          <h5 class="text-lg font-bold">Прибыльно</h5>
          <p class="text-xs">
            Разумеется вы хотели бы продать свою
            машину с максимальной выгодой. Мы
            способны предложить вам за ваш автомобиль
            самую высокую цену на рынке.
          </p>
        </div>
      </div>
      <div class="md:hidden"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main"
}
</script>

<style scoped lang="scss">
.slide {
  @apply text-dark text-center shadow
  flex flex-col gap-3
  px-2 py-7 w-48 h-60 items-center justify-center
  z-10;
  &--select {
    @apply py-10 h-72 border border-accent rounded-xl
  }
}
</style>
