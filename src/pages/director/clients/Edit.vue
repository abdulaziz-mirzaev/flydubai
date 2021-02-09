<template>
  <div class="content">
    id: {{ accounterId }}
    <form-builder-app :schema="schema" :model="model" :options="formOptions" @submit="onSubmit" />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import VueFormGenerator from 'vue-form-generator';
import FormBuilderApp from '@/components/FormBuilderApp';
import { edit } from '../../../services/api.service';
// import { getOne } from '@/services/api.service';

export default {
  name: 'Edit',
  props: {
    accounterId: VueTypes.any.isRequired,
  },
  components: {
    FormBuilderApp,
  },
  data() {
    return {
      model: {
        id: 1,
        number: 'John Doe',
        password: 'J0hnD03!x4',
        age: 35,
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true,
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
  // async created() {
  //   const { data: order } = await getOne('order', this.accounterId, this.userToken);
  //   console.log(order);
  // },
  methods: {
    onSubmit() {
      edit('order', this.model.id, this.model);
    },
  },
};
</script>

<style scoped></style>
