<template>
  <div class="login">
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <router-link :to="{ name: 'home' }" class="-intro-x flex items-center pt-5">
            <img alt="Fly Dubai Logo" class="w-24" src="@/assets/images/flydubai.svg">
          </router-link>
          <div class="my-auto">
            <img alt="Fly Dubai" class="-intro-x w-1/2 -mt-16"
                 src="@/assets/images/flydubai.svg">
            <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
              Еще несколько кликов,
              <br>
              чтобы зарегистрироватся.
            </div>
            <!--            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">Manage all your e-commerce accounts in one-->
            <!--              place-->
            <!--            </div>-->
          </div>
        </div>
        <!-- END: Register Info -->

        <register-form />

      </div>
    </div>
    <!-- BEGIN: Dark Mode Switcher-->
    <div data-url="login-dark-register.html"
         class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
      <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
      <div class="dark-mode-switcher__toggle border"></div>
    </div>
  </div>

</template>

<script>
import RegisterForm from '../../components/Forms/RegisterForm';

export default {
  name: 'LoginPage',
  components: {
    RegisterForm,
  },
};
</script>

<style scoped>
  html, body {
    padding: 0 !important;
  }
</style>