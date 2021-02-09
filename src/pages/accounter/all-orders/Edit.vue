<template>
  <div class="content">
    id: {{ orderId }}
    <spinner-app v-if="isLoading" />
    <form-builder-app v-else :schema="schema" :model="model" :options="formOptions" @submit="onSubmit" />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { getOne } from '@/services/api.service';
import VueFormGenerator from 'vue-form-generator';
import FormBuilderApp from '@/components/FormBuilderApp';
import SpinnerApp from '@/components/SpinnerApp';

export default {
  name: 'Edit',
  props: {
    orderId: VueTypes.any.isRequired,
  },
  components: {
    FormBuilderApp,
    SpinnerApp,
  },
  data() {
    return {
      isLoading: false,
      model: {
        id: '',
        number: '',
        password: '',
        age: null,
        skills: [],
        email: '',
        status: false,
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'ID',
            model: 'id',
            readonly: false,
            featured: false,
            disabled: false,
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Name',
            model: 'number',
            readonly: false,
            featured: true,
            required: true,
            disabled: false,
            placeholder: 'User\'s name',
            validator: VueFormGenerator.validators.string,
          },
          {
            type: 'input',
            inputType: 'password',
            label: 'Password',
            model: 'password',
            min: 6,
            required: true,
            hint: 'Minimum 6 characters',
            validator: VueFormGenerator.validators.string,
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Age',
            model: 'age',
            min: 18,
            validator: VueFormGenerator.validators.number,
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'E-mail',
            model: 'email',
            placeholder: 'User\'s e-mail address',
            validator: VueFormGenerator.validators.email,
          },
          {
            type: 'checklist',
            label: 'Skills',
            model: 'skills',
            multi: true,
            required: true,
            multiSelect: true,
            values: ['HTML5', 'Javascript', 'CSS3', 'CoffeeScript', 'AngularJS', 'ReactJS', 'VueJS'],
          },
          {
            type: 'switch',
            label: 'Status',
            model: 'status',
            multi: true,
            readonly: false,
            featured: false,
            disabled: false,
            default: true,
            textOn: 'Active',
            textOff: 'Inactive',
          },
        ],
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
      },
    };
  },
  async created() {
    this.isLoading = true;
    try {
      const { data: order } = await getOne('order', this.orderId);
      this.isLoading = false;
      console.log(order);
    } catch (e) {
      this.isLoading = false;
    }
  },
  methods: {
    async onSubmit() {
      // edit('order', this.model.id, this.model);
      await this.$router.push({ name: 'accounter-orders' });
    },
  },
};
</script>
