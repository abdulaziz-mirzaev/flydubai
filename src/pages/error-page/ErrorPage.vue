<template>
  <div class="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
    <div class="-intro-x lg:mr-20">
      <img alt="Midone Tailwind HTML Admin Template" class="h-48 lg:h-auto"
           src="@/assets/images/error-illustration.svg">
    </div>
    <div class="text-white mt-10 lg:mt-0">
      <div class="intro-x text-8xl font-medium">404</div>
      <div class="intro-x text-xl lg:text-3xl font-medium mt-5">Ой. Эта страница пропала.</div>
      <div class="intro-x text-lg mt-3">Возможно, вы ошиблись при вводе адреса или страница могла быть перемещена.</div>
      <button
        class="intro-x button button--lg border border-white dark:border-dark-5 dark:text-gray-300 mt-10"
        @click="goBack"
      >
        Назад
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

</style>