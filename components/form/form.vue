<template>
  <div class="flex flex-col gap-6 relative mx-0">
    <div class="form lg:w-3/5">
      <h3 class="text-dark text-lg text-center">Данные автомобиля</h3>
      <div class="car-data grid grid-cols-3 lg:grid-cols-4 gap-5">
        <FormItem label="Марка">
          <input v-model="form.carData.brand">
        </FormItem>
        <FormItem label="Модель ">
          <input v-model="form.carData.model">
        </FormItem>
        <FormItem label="Мотор">
          <input v-model="form.carData.motor">
        </FormItem>
        <FormItem label="Год">
          <input v-model="form.carData.year">
        </FormItem>
        <FormItem label="Топливо">
          <input v-model="form.carData.fuel">
        </FormItem>
        <FormItem label="КПП">
          <input v-model="form.carData.kpp">
        </FormItem>
        <FormItem label="Пробег">
          <input v-model="form.carData.mileage">
        </FormItem>
        <FormItem label="Техосмотр">
          <input v-model="form.carData.inspection">
        </FormItem>
        <FormItem label="Желаемая цена">
          <input v-model="form.carData.price">
        </FormItem>
        <button class="btn col-start-1 col-end-4 lg:col-start-2 lg:col-end-5">Добавить фото</button>
      </div>
    </div>
    <div class="form lg:w-1/2">
      <h3 class="text-dark text-lg text-center">Другие данные</h3>
      <div class="other-data grid grid-cols-4 gap-5">
        <FormItem label="Имя" class="col-span-2">
          <input v-model="form.otherData.name">
        </FormItem>
        <FormItem label="Почта" class="col-span-2">
          <input v-model="form.otherData.email">
        </FormItem>
        <FormItem label="Телефон" class="col-span-2">
          <input v-model="form.otherData.phone">
        </FormItem>
        <FormItem label="Город" class="col-span-2">
          <input v-model="form.otherData.city">
        </FormItem>
        <FormItem label="Сообщение" class="col-span-4">
          <textarea v-model="form.otherData.message" rows="2"></textarea>
        </FormItem>
        <div class="col-span-4 flex gap-5 align-middle relative cursor-pointer">
          <input id="check" type="checkbox" class="h-10 w-6">
          <label for="check" class="check">
            Я согласен(на), что фирма использует мои личные данные на основе <br>
            <a href="" class="text-accent">Политики конфедициальности</a>
          </label>
        </div>
        <button class="btn col-start-2 col-end-4">Отправить</button>
      </div>
    </div>
    <img src="@/assets/image/bg-form.png" alt="" class="bottom-14 right-0 ml-auto sm:w-4/6 md:w-3/6 lg:w-auto lg:absolute">
  </div>
</template>

<script>
import FormItem from "~/components/form/form-item";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  components: {FormItem},
  data() {
    return {
      form: {
        carData: {
          brand: '',
          model: '',
          motor: '',
          year: '',
          fuel: '',
          kpp: '',
          mileage: '',
          inspection: '',
          price: ''
        },
        otherData: {
          name: '',
          email: '',
          phone: '',
          city: '',
          message: '',
          check: ''
        }
      }
    }
  },
}
</script>

<style lang="scss">
.form {
  @apply flex flex-col gap-8 px-5 xl:px-20
}

input[type=checkbox] {
  display: none;
}

.check {
  @apply text-dark text-xs font-bold ml-10 lg:text-center;
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;

    width: 1.25rem;
    height: 1.25rem;

    padding: 0.125rem;

    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #CCCCCC;

    border-radius: 0.25rem;
  }
}

input[type=checkbox]:checked + .check:before {
  content: "\2713";
  color: white;
  font-size: 15px;
  text-align: center;
  background-color: #9CC634;
  border: none;
}
</style>
