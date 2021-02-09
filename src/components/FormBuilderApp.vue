<template>
  <div class="intro-y box mt-8">
    <div class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
      <h2 class="font-medium text-base mr-auto">
        {{ title }}
      </h2>
    </div>
    <div class="p-5" id="input">
      <div class="preview">
        <vue-form-generator :schema="schema" :model="model" :options="options"></vue-form-generator>
      </div>
      <div class="flex justify-end mt-5">
        <button
          class="button w-24 mr-2 mb-2 border text-gray-700"
          @click="goBack"
        >
          Отменить
        </button>
        <button
          class="button mr-1 mb-2 bg-theme-1 text-white"
          @click="onSubmit"
        >
          {{ submitButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'FormBuilderApp',
  props: {
    title: VueTypes.string.def('Редактировать'),
    submitButtonText: VueTypes.string.def('Редактировать'),
    schema: VueTypes.object.isRequired,
    model: VueTypes.object.isRequired,
    options: VueTypes.object.isRequired,
    formData: VueTypes.object,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>

<style scoped>

</style>