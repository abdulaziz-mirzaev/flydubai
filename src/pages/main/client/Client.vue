<template>
    <div class="content">
        <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 class="text-lg font-medium mr-auto">Список: Клиентов</h2>
            <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
                <button class="button text-white bg-theme-1 shadow-md mr-2" @click="$router.push('/client/create')">
                    Создать Новый Клиент
                </button>
            </div>
        </div>
        <!-- BEGIN: HTML Table Data -->
        <div class="intro-y box p-5 mt-5">
            <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
                <div class="flex ml-auto mt-5 sm:mt-0">
                    <button
                        class="button w-1/2 sm:w-auto flex items-center border text-gray-700 mr-2 dark:bg-dark-5 dark:text-gray-300"
                        @click="onPrint"
                    >
                        <i data-feather="printer" class="w-4 h-4 mr-2"></i> Print
                    </button>
                    <div class="dropdown w-1/2 sm:w-auto">
                        <button
                            class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >
                            <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                            <i
                                data-feather="chevron-down"
                                class="w-4 h-4 ml-auto sm:ml-2"
                            ></i>
                        </button>
                        <div class="dropdown-box w-40">
                            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                                <a
                                    href="javascript:;"
                                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                    @click="onExportCsv"
                                >
                                    <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                                    CSV
                                </a>
                                <a
                                    href="javascript:;"
                                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                    @click="onExportJson"
                                >
                                    <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                                    JSON
                                </a>
                                <a
                                    href="javascript:;"
                                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                    @click="onExportXlsx"
                                >
                                    <i data-feather="file-text" class="w-4 h-4 mr-2"></i> Export
                                    XLSX
                                </a>
                                <a
                                    href="javascript:;"
                                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                    @click="onExportHtml"
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
        <DeleteModal v-if="$store.getters['common/deleteModal']"/>
    </div>
</template>

<script>
  import {ChevronDownIcon, FileTextIcon, PrinterIcon} from "vue-feather-icons";
  import Tabulator from 'tabulator-tables';
  import {getAll, getGlobals, getInfo, remove} from "../../../services/api.service";
  import $ from "cash-dom";
  import feather from "feather-icons";
  import router from '@/router';
  import xlsx from 'xlsx';
  import DeleteModal from "@/components/DeleteModal";

  export default {
    components: {
      // eslint-disable-next-line vue/no-unused-components
      PrinterIcon, FileTextIcon, ChevronDownIcon, DeleteModal
    },

    name: 'Client',

    data() {
      return {
        tabulator: {},
      };
    },
    computed: {
      tableRef() {
        return this.$refs.tableRef;
      },
    },

    methods: {
      async initTabulator() {
        const {data} = await getAll('client');
        const {data: {attributes: titles} } = await getInfo('client');
        const {data: {clientTypes} } = await getGlobals();

        console.log(clientTypes);

        const columns = [
          {
            field: "id",
            minWidth: 100,
            width: 150,
          },
          'first_name',
          'last_name',
          'patronym',
          {
            field: "passport_serial",
            title: "Пасспорт",
            mutator(value, data) {
              return `${value} ${data.passport_number}`
            }
          },
          {
            field: "clientType.name",
            title: titles.client_type_id,
            headerFilter: "select",
            headerFilterParams: Object.values(clientTypes)
          },
          {
            field: "actions",
            title: "Действия",
            print: false,
            download: false,
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
                await remove('client', id);
                await this.table.deleteRow(id)

              });

              $(a[0].children[0]).on('click', () => {
                router.push({path: '/client/edit', props: {id}})
              });

              return a[0];
            }
          }

        ];

        for (let [index, column] of columns.entries()) {

          if (typeof column == 'string') {
            columns[index] = {
              field: column
            }
          }

          if (!columns[index].title) {
            columns[index].title = titles[columns[index].field]
          }

          if (!columns[index].headerFilter && columns[index].field !== 'actions') {
            columns[index].headerFilter = 'input';
          }
        }

        this.tabulator = new Tabulator(this.tableRef, {
          data,
          pagination: "local",
          paginationSize: 20,
          paginationSizeSelector: [10, 20, 30, 40],
          layout: 'fitColumns',
          responsiveLayout: 'collapse',
          placeholder: "Нет данных",
          headerHozAlign: "center",
          cellHozAlign: "center",
          cellVertAlign: "middle",
          initialSort:[
            {column:"id", dir:"desc"}
          ],
          headerFilterPlaceholder:"Поиск...",
          columns,
          renderComplete() {
            feather.replace({
              "stroke-width": 1.5,
            });
          },
        });
      },

      // Export
      onExportCsv() {
        this.tabulator.download("csv", "data.csv");
      },

      onExportJson() {
        this.tabulator.download("json", "data.json");
      },

      onExportXlsx() {
        window.XLSX = xlsx;
        this.tabulator.download("xlsx", "data.xlsx", {
          sheetName: "Products",
        });
      },

      onExportHtml() {
        this.tabulator.download("html", "data.html", {
          style: true,
        });

      },

      // Print
      onPrint() {
        this.tabulator.print();
      },
    },

    created() {
      this.initTabulator()
    },
  }
</script>
