<template>
  <!-- BEGIN: Login Form -->
  <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
    <div
      class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
      <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
        Войти
      </h2>
      <span class="text-red-700 mt-2" v-if="errors">{{ errors[0] }}</span>
      <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">Несколько шагов для того, чтобы
        войти на ваш аккаунт
      </div>
      <div class="intro-x mt-8">
        <input
          v-model="formData.username"
          type="text"
          class="intro-x login__input input input--lg border border-gray-300 block"
          placeholder="Эл. почта или Имя пользователя"
        >
        <div v-if="errors.username" class="text-red-700">
          <ul class="list-none">
            <li
              v-for="(error, index) in errors.username"
              :key="index"
            >
              {{ error }}
            </li>
          </ul>
        </div>
        <input
          v-model="formData.password"
          type="password"
          class="intro-x login__input input input--lg border border-gray-300 block mt-4"
          placeholder="Пароль"
        >
        <div v-if="errors.password_hash" class="text-red-700">
          <ul class="list-none">
            <li
              v-for="(error, index) in errors.password_hash"
              :key="index"
            >
              {{ error }}
            </li>
          </ul>
        </div>
      </div>
      <!--      <div class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4">-->
      <!--        <div class="flex items-center mr-auto">-->
      <!--          <input type="checkbox" class="input border mr-2" id="remember-me">-->
      <!--          <label class="cursor-pointer select-none" for="remember-me">Запомнить</label>-->
      <!--        </div>-->
      <!--        <a href="">Забыли пароль?</a>-->
      <!--      </div>-->
      <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
        <button
          :disabled="!!isLoading"
          class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top"
          @click="onSubmit"
        >
          Войти
        </button>
        <router-link
          :to="{ name: 'register' }"
          class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"
          tag="button"
        >
          Регистрация
        </router-link>
      </div>
      <!--      <div class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">-->
      <!--        By signin up, you agree to our-->
      <!--        <br>-->
      <!--        <a class="text-theme-1 dark:text-theme-10" href="">Terms and Conditions</a> & <a-->
      <!--        class="text-theme-1 dark:text-theme-10" href="">Privacy Policy</a>-->
      <!--      </div>-->
    </div>
  </div>
  <!-- END: Login Form -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      errors: 'common/error',
      isLoading: 'common/isLoading',
      userRole: 'auth/userRole',
    }),
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('auth/login', {
          username: this.formData.username,
          password_hash: this.formData.password,
        });
        switch (this.userRole) {
          case 'operator':
            await this.$router.push({ name: 'operator' });
            break;

          case 'accounter':
            await this.$router.push({ name: 'accounter-orders' });
            break;

          case 'cashier':
            await this.$router.push({ name: 'cashier' });
            break;

          case 'director':
            await this.$router.push({ name: 'director' });
            break;

          default:
            await this.$router.push({ name: 'top-menu-dashboard' });
            break;
        }
      } catch (e) {
        console.warn(e.message);
      }
    },
  },
};
</script>

<style scoped>

</style>