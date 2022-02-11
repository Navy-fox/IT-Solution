<template>
  <div class="relative">
    <img src="@/assets/image/bg-mine.png" alt="" class="absolute invisible lg:visible">
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

      <div class="relative px-5 md:hidden">
        <swiper ref="mySwiper" :options="swiperOptions" class="flex items-center justify-center h-full">
          <swiper-slide class="swiper-slide">
            <img src="@/assets/icon/clock.svg" alt="">
            <h5 class="text-lg font-bold">Быстро</h5>
            <p class="text-xs w-48">
              Наша цель помочь вам продать машину как
              можно быстрее, оформив все необходимые
              докуметы в ускоренном порядке, и мы
              сделаем для этого всё от себя зависящее.
            </p>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/icon/check.svg" alt="">
            <h5 class="text-lg font-bold">Просто</h5>
            <p class="text-xs w-48">
              Мы купим вашу машину при любом условии!
              Не важно есть ли на ней техосмотр, нуждается
              ли она в ремонте или имеет неисправности;
              Мы приобритём вашу машину без лишних
              задержек и вопросов.
            </p>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img src="@/assets/icon/clock.svg" alt="">
            <h5 class="text-lg font-bold">Прибыльно</h5>
            <p class="text-xs w-48">
              Разумеется вы хотели бы продать свою
              машину с максимальной выгодой. Мы
              способны предложить вам за ваш автомобиль
              самую высокую цену на рынке.
            </p>
          </swiper-slide>
        </swiper>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  data() {
    return {
      swiperOptions: {
        initialSlide: 1,
        slideToClickedSlide: true,
        autoHeight: false,
        // grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: '30%',
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
      }
    }
  },
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
.swiper-slide {
  @apply text-dark text-center shadow-md
  flex flex-col gap-3 items-center justify-center w-48 min-w-max
  px-2 py-7 bg-gray-200
  border border-lightgreen rounded-xl bg-center bg-cover

}
.swiper-slide-next,
.swiper-slide-prev {
  @apply mt-5 mb-5 max-h-60
}

.swiper-slide-active {
  @apply text-dark text-center shadow
  flex flex-col gap-3 items-center justify-center w-48 h-72
  px-2 py-7 bg-white
  border border-accent rounded-xl
}
</style>
