<template>
  <div class="content">
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Список Заказов</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <router-link
          :to="{ name: 'accounter-orders-create' }"
          tag="button"
          class="button text-white bg-theme-1 shadow-md mr-2"
        >
          Создать Новый Заказ
        </router-link>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <div class="flex ml-auto mt-5 sm:mt-0">
          <button
            class="button w-1/2 sm:w-auto flex items-center border text-gray-700 mr-2 dark:bg-dark-5 dark:text-gray-300"
          >
            <PrinterIcon class="w-4 h-4 mr-2" />
            Print
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
            >
              <FileTextIcon class="w-4 h-4 mr-2" />
              Print
              <ChevronDownIcon
                class="w-4 h-4 ml-auto sm:ml-2"
              />
            </button>
            <div class="dropdown-box w-40">
              <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  CSV
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  JSON
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  XLSX
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                  HTML
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div
          id="tabulator"
          ref="tableRef"
          class="mt-5 table-report table-report--tabulator"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, FileTextIcon, PrinterIcon } from 'vue-feather-icons';
import Tabulator from 'tabulator-tables';
import { getAll, getInfo, remove } from '../../../services/api.service';
import $ from 'cash-dom';
import feather from 'feather-icons';
import router from '@/router';

export default {
  components: {
    PrinterIcon, FileTextIcon, ChevronDownIcon,
  },

  name: 'Index',

  data() {
    return {
      tabulator: null,
    };
  },

  computed: {
    tableRef() {
      return this.$refs.tableRef;
    },
  },

  methods: {
    async initTabulator() {
      const { data } = await getAll('order');
      const { data: { attributes: titles } } = await getInfo('order');
      const columns = [
        {
          field: 'id',
          title: titles.id,
          minWidth: 100,
          width: 150,
        },
        {
          field: 'number',
          title: titles.number,
        },

        {
          field: 'operator_id',
          title: titles.operator_id,
        },
        {
          field: 'count',
          title: titles.count,
        },
        {
          field: 'summ',
          title: titles.summ,
        },
        {
          field: 'nds',
          title: titles.nds,
        },
        {
          field: 'summ_terminal',
          title: titles.summ_terminal,
        },
        {
          field: 'payment_type',
          title: titles.payment_type,
        },
        {
          field: 'status',
          title: titles.status,
        },
        {
          field: 'actions',
          title: 'Действия',
          formatter(cell) {
            const id = cell.getData().id;
            const a = $(`<div class="flex lg:justify-center items-center">
                <a href="javascript:;"  class="flex items-center mr-3">
                  <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit
                </a>
                <a class="flex items-center text-theme-6 mr-3">
                  <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete
                </a>
                <a class="flex items-center" >
                  <i data-feather="eye" class="w-4 h-4 mr-1"></i> View
                </a>
              </div>`);

            $(a[0].children[1]).on('click', async () => {
              await remove('order', id);
              await tabulator.deleteRow(id);
            });

            $(a[0].children[0]).on('click', () => {
              router.push({ name: 'accounter-orders-edit', params: { id } });
            });

            return a[0];
          },
        },

      ];

      const tabulator = new Tabulator(this.tableRef, {
        data,
        pagination: 'local',
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        layout: 'fitColumns',
        responsiveLayout: 'collapse',
        placeholder: 'Нет данных',
        headerHozAlign: 'center',
        cellHozAlign: 'center',
        cellVertAlign: 'middle',
        columns,
        renderComplete() {
          feather.replace({
            'stroke-width': 1.5,
          });
        },
      });
    },
  },

  created() {
    this.initTabulator();
  },
};
</script>
