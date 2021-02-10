<template>
  <div class="content">
    id: {{ orderId }}
    <span v-if="error" class="text-red-700">{{ error }}</span>
    <spinner-app v-if="isLoading" />
    <form-builder-app v-else :schema="schema" :model="model" :options="formOptions" @submit="onSubmit" />
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { getOne, edit } from '../../../services/api.service';
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
      error: '',
      model: {
        number: '2',
        operator_id: [],
        count: '1522',
        summ: '4500',
        nds: '2',
        summ_terminal: '12',
        payment_type: [],
        status: [],
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'number',
            label: 'Количество',
            model: 'count',
            required: true,
            validator: VueFormGenerator.validators.number,
          },
          {
            type: 'select',
            inputType: 'select',
            label: 'Оператор',
            model: 'operator_id',
            readonly: false,
            featured: true,
            required: false,
            disabled: false,
            validator: VueFormGenerator.validators.array,
            values: [
              1, 2, 3,
            ],
            default: 2,
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Сумма',
            model: 'summ',
            required: true,
            validator: VueFormGenerator.validators.string,
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'НДС',
            model: 'nds',
            placeholder: 'User\'s e-mail address',
            required: true,
            validator: VueFormGenerator.validators.number,
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Сумма с карты',
            model: 'summ_terminal',
            multi: true,
            required: true,
            multiSelect: true,
            default: true,
          },
          {
            type: 'select',
            label: 'Способ оплаты',
            model: 'payment_type',
            multi: false,
            readonly: false,
            featured: false,
            disabled: false,
            required: true,
            values: function () {
              return [
                { id: 'CASH', name: 'НАЛИЧНЫЕ' },
                { id: 'CASH_TERMINAL', name: 'СМЕШАННЫЙ' },
                { id: 'TERMINAL', name: 'ТЕРМИНАЛ' },
                { id: 'TRANSFER', name: 'ПЕРЕЧИСЛЕНИЕ' },
                { id: 'VALUTE', name: 'ВАЛЮТА' },
              ];
            },
            default: 'CASH',
          },
          {
            type: 'select',
            label: 'Статус',
            model: 'status',
            required: true,
            values: [
              { id: 'BOOKED', name: 'БРОНИРОВАН' },
              { id: 'CANCEL', name: 'ОТМЕНЕНО' },
              { id: 'DELETED', name: 'УДАЛЕН' },
              { id: 'NEW', name: 'НОВАЯ' },
              { id: 'PAID', name: 'ОПЛАЧЕНО' },
              { id: 'PROCESS', name: 'В ОБРАБОТКЕ' },
              { id: 'RETURNED', name: 'ВОЗВРАТ ВДС' },
            ],
            default: 'BOOKED',
          },
          {
            buttonText: 'Submit',
            validateBeforeSubmit: true,
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
      const {
        data: {
          number, operator_id, count, summ, nds, summ_terminal, payment_type, status,
        },
      } = await getOne('order', this.orderId);

      this.model.number = number;
      this.model.operator_id = operator_id;
      this.model.count = count;
      this.model.summ = summ;
      this.model.nds = nds;
      this.model.summ_terminal = summ_terminal;
      this.model.payment_type = payment_type;
      this.model.status = status;
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      this.error = e.response;
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      try {
        await edit('order', this.orderId, this.model);
        await this.$router.push({ name: 'accounter-orders' });
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
        this.error = e.response;
      }
    },
  },
};
</script>
