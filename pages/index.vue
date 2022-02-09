<template>
  <div class="">
    <Header/>
    <Form/>
    <Footer/>
  </div>

</template>

<script>
import '@/assets/style.scss'
import Form from "~/components/form/form";

export default {
  name: 'IndexPage',
  components: {Form},
}
</script>

<style>
</style>
