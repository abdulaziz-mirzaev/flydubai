<template>
  <div class="content">
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Список: Клиентов</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="button text-white bg-theme-1 shadow-md mr-2" @click="$router.push('/operator/client/create')">
          Создать Новый Клиент
        </button>
      </div>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <a class="button text-white bg-theme-1 shadow-md mr-2">
          Создать Новый Клиент
        </a>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <div class="flex ml-auto mt-5 sm:mt-0">
          <button
            class="button w-1/2 sm:w-auto flex items-center border text-gray-700 mr-2 dark:bg-dark-5 dark:text-gray-300"
          >
            <PrinterIcon class="w-4 h-4 mr-2"/> Print
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
            >
              <FileTextIcon class="w-4 h-4 mr-2"/> Print
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
  import {ChevronDownIcon, FileTextIcon, PrinterIcon} from "vue-feather-icons";
  import Tabulator from 'tabulator-tables';
  import {getAll} from "../../../services/api.service";

  export default {
    components: {
      PrinterIcon, FileTextIcon, ChevronDownIcon
    },
    name: 'Client',
    data() {
      return {
        tabulator: null,
        tabulatorData: [
          {id: 1, name: 'Abdulaziz'},
          {id: 2, name: 'Abdulloh'}
        ],
      }
    },
    computed: {
      tableRef() {
        return this.$refs.tableRef;
      },
    },
    methods: {
      
    },
    async created() {
      const data = await getAll('client');
      if ( data ) {
        this.tabulator = new Tabulator(this.tableRef, {
          data: data,
          autoColumns: true,
        });
        console.warn(data, 'this is data');
      }
    }
  }
</script>
