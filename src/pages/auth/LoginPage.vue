<template>
  <div class="login">
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img alt="Midone Tailwind HTML Admin Template" class="w-6" src="dist/images/logo.svg">
            <span class="text-white text-lg ml-3"> Mid<span class="font-medium">One</span> </span>
          </a>
          <div class="my-auto">
            <img alt="Midone Tailwind HTML Admin Template" class="-intro-x w-1/2 -mt-16"
                 src="dist/images/illustration.svg">
            <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">
              A few more clicks to
              <br>
              sign in to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">Manage all your e-commerce accounts in one
              place
            </div>
          </div>
        </div>
        <!-- END: Login Info -->

        <login-form />

      </div>
    </div>
    <!-- BEGIN: Dark Mode Switcher-->
    <div data-url="login-dark-login.html"
         class="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
      <div class="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
      <div class="dark-mode-switcher__toggle border"></div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../components/Forms/LoginForm';

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
};
</script>

<style scoped></style>
