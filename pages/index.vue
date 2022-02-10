<template>
  <div>
    <Header/>
    <div class="flex flex-col gap-10 mb-20 mt-36 md:mb-32">
      <Form/>
      <Main/>
      <About/>
      <Company/>
    </div>
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
