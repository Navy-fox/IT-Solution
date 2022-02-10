<template>
  <div class=" z-10 mx-5 lg:mt-48 flex flex-col gap-10 md:grid grid-cols-2  lg:gap-16 md:mx-16">
    <div class="w-full flex flex-col justify-between">
      <div class="flex flex-col gap-5">
        <h2 class="title">company name</h2>
        <p class="text-dark text-sm z-10">
          Каждый автовладелец хотя бы раз сталкивался с необходимостью продать машину. Конечно же, вы хотите селать это
          быстрее и с максимальной выгодой. Наши специалисты возьмут на себя все проблемы! Нам можно полностью доверять.
          Мы не являемся кредитной организацией или ломбардом. Мы покупаем ваши машины, в любом виде и состоянии. Да,
          так просто!
          Наша цель - купить вашу машину максимально быстро, просто и выгодно для вас.
        </p>
      </div>
      <div class="flex justify-around md:gap-2 lg:gap-10">
        <div class="card">
          <img src="@/assets/icon/clock.svg" alt="">
          <p>Быстро</p>
        </div>
        <div class="card">
          <img src="@/assets/icon/medal.svg" alt="">
          <p>Качественно</p>
        </div>
        <div class="card">
          <img src="@/assets/icon/handshake.svg" alt="">
          <p>Надежно</p>
        </div>
      </div>
    </div>
    <ul class="list flex flex-col gap-5">
      <li class="list-item">Машину не надо подготавливать к продаже</li>
      <li class="list-item">Покупаем машины любого года выпуска и в любом состоянии</li>
      <li class="list-item">Покупаем машины без техосмотра и страховки</li>
      <li class="list-item">Покупаем машины не работающие и нуждающиеся в ремонте</li>
      <li class="list-item">Предложим за вашу машину больше остальных</li>
      <li class="list-item">Сразу же выплачиваем деньги</li>
      <li class="list-item">Работаем по всей Эстонии и сами выезжаем на место</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Company"
}
</script>

<style scoped lang="scss">
.list-item {
  @apply flex-row justify-start text-left;
  &:before {
    content: url("~@/assets/icon/check-mark.svg");
  }
}
.title:before{
  width: 7.5rem;
}
.card {
  @apply rounded-xl shadow-md w-32 h-32
  flex flex-col gap-5 items-center text-center justify-center
  font-bold text-dark
}
</style>
