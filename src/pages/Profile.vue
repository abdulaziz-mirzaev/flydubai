<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Профиль пользователя: {{ userName }}</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5">
          <div class="relative flex items-center p-5">
            <div class="w-12 h-12 image-fit">
              <img
                alt="flydubai"
                class="rounded-full"
                src="../assets/images/profile-1.jpg"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium text-base">{{ userName }}</div>
              <div class="text-gray-600">{{ userEmail }}</div>
            </div>
            <div class="dropdown">
              <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-600 dark:text-gray-300"
                />
              </a>
              <div class="dropdown-box w-56">
                <div class="dropdown-box__content box dark:bg-dark-1">
                  <div
                    class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                  >
                    Export Options
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ActivityIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      English
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <BoxIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Indonesia
                      <div
                        class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                      >
                        10
                      </div>
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <LayoutIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      English
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <SidebarIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Indonesia
                    </a>
                  </div>
                  <div
                    class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                  >
                    <button
                      type="button"
                      class="button button--sm bg-theme-1 text-white"
                    >
                      Settings
                    </button>
                    <button
                      type="button"
                      class="button button--sm bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300 ml-auto"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">

        <!-- BEGIN: General Statistics -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">General Statistics</h2>
            <div class="dropdown ml-auto">
              <a
                class="dropdown-toggle w-5 h-5 block sm:hidden"
                href="javascript:;"
              >
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-600 dark:text-gray-300"
                />
              </a>
              <button
                class="dropdown-toggle button font-normal border dark:border-dark-5 text-white relative items-center text-gray-700 dark:text-gray-300 hidden sm:flex"
              >
                Export
                <ChevronDownIcon class="w-4 h-4 ml-2" />
              </button>
              <div class="dropdown-box w-40">
                <div class="dropdown-box__content box dark:bg-dark-1">
                  <div
                    class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                  >
                    Export Tools
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <PrinterIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Print
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ExternalLinkIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Excel
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <FileTextIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      CSV
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ArchiveIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5">
            <div class="flex flex-col sm:flex-row items-center">
              <div class="flex flex-wrap sm:flex-nowrap mr-auto">
                <div class="flex items-center mr-5 mb-1 sm:mb-0">
                  <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                  <span>Author Sales</span>
                </div>
                <div class="flex items-center mr-5 mb-1 sm:mb-0">
                  <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                  <span>Product Profit</span>
                </div>
              </div>
              <div class="dropdown mt-3 sm:mt-0 mr-auto sm:mr-0">
                <button
                  class="dropdown-toggle button font-normal border dark:border-dark-5 text-white relative flex items-center text-gray-700 dark:text-gray-300"
                >
                  Filter by Month
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-box w-40">
                  <div
                    class="dropdown-box__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                  >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >January</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >February</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >March</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >June</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >July</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="report-chart mt-8">
              <ReportLineChart :height="130" />
            </div>
          </div>
        </div>
        <!-- END: General Statistics -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters({
      userEmail: 'auth/userEmail',
      userName: 'auth/userName',
    }),
  },
};
</script>

<style scoped>

</style>