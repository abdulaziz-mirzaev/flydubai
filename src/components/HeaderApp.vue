<template>
  <div
    class="border-b border-theme-24 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10"
  >
    <div class="top-bar-boxed flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="-intro-x hidden md:flex">
        <img
          alt="Midone Tailwind HTML Admin Template"
          class="w-6"
          src="../assets/images/logo.svg"
        />
        <span class="text-white text-lg ml-3">
          Mid<span class="font-medium">one</span>
        </span>
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <div class="-intro-x breadcrumb breadcrumb--light mr-auto">
        <a href="" class="">Application</a>
        <i data-feather="chevron-right" class="breadcrumb__icon"></i>
        <a href="" class="breadcrumb--active">Dashboard</a>
      </div>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Search -->
      <div class="intro-x relative mr-3 sm:mr-6">
        <div class="search hidden sm:block">
          <input
            type="text"
            class="search__input input dark:bg-dark-1 placeholder-theme-13"
            placeholder="Search..."
          />
          <i data-feather="search" class="search__icon dark:text-gray-300"></i>
        </div>
        <a class="notification notification--light sm:hidden" href="">
          <i
            data-feather="search"
            class="notification__icon dark:text-gray-300"
          ></i>
        </a>
        <div class="search-result">
          <div class="search-result__content">
            <div class="search-result__content__title">Pages</div>
            <div class="mb-5">
              <a href="" class="flex items-center">
                <div
                  class="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"
                >
                  <i class="w-4 h-4" data-feather="inbox"></i>
                </div>
                <div class="ml-3">Mail Settings</div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div
                  class="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"
                >
                  <i class="w-4 h-4" data-feather="users"></i>
                </div>
                <div class="ml-3">Users & Permissions</div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div
                  class="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"
                >
                  <i class="w-4 h-4" data-feather="credit-card"></i>
                </div>
                <div class="ml-3">Transactions Report</div>
              </a>
            </div>
            <div class="search-result__content__title">Users</div>
            <div class="mb-5">
              <a href="" class="flex items-center mt-2">
                <div class="w-8 h-8 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../assets/images/profile-3.jpg"
                  />
                </div>
                <div class="ml-3">Tom Cruise</div>
                <div
                  class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
                >
                  tomcruise@left4code.com
                </div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div class="w-8 h-8 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../assets/images/profile-11.jpg"
                  />
                </div>
                <div class="ml-3">Robert De Niro</div>
                <div
                  class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
                >
                  robertdeniro@left4code.com
                </div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div class="w-8 h-8 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../assets/images/profile-4.jpg"
                  />
                </div>
                <div class="ml-3">Russell Crowe</div>
                <div
                  class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
                >
                  russellcrowe@left4code.com
                </div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div class="w-8 h-8 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    src="../assets/images/profile-7.jpg"
                  />
                </div>
                <div class="ml-3">Leonardo DiCaprio</div>
                <div
                  class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
                >
                  leonardodicaprio@left4code.com
                </div>
              </a>
            </div>
            <div class="search-result__content__title">Products</div>
            <a href="" class="flex items-center mt-2">
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/preview-4.jpg"
                />
              </div>
              <div class="ml-3">Sony Master Series A9G</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                Electronic
              </div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/preview-7.jpg"
                />
              </div>
              <div class="ml-3">Dell XPS 13</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                PC &amp; Laptop
              </div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/preview-14.jpg"
                />
              </div>
              <div class="ml-3">Oppo Find X2 Pro</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                Smartphone &amp; Tablet
              </div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div class="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/preview-10.jpg"
                />
              </div>
              <div class="ml-3">Nike Tanjun</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                Sport &amp; Outdoor
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- END: Search -->
      <!-- BEGIN: Notifications -->
      <div class="intro-x dropdown mr-4 sm:mr-6">
        <div
          class="dropdown-toggle notification notification--light notification--bullet cursor-pointer"
        >
          <i
            data-feather="bell"
            class="notification__icon dark:text-gray-300"
          ></i>
        </div>
        <div class="notification-content pt-2 dropdown-box">
          <div
            class="notification-content__box dropdown-box__content box dark:bg-dark-6"
          >
            <div class="notification-content__title">Notifications</div>
            <div class="cursor-pointer relative flex items-center ">
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/profile-3.jpg"
                />
                <div
                  class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5"
                  >Tom Cruise</a
                  >
                  <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                    06:05 AM
                  </div>
                </div>
                <div class="w-full truncate text-gray-600 mt-0.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500
                </div>
              </div>
            </div>
            <div class="cursor-pointer relative flex items-center mt-5">
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/profile-11.jpg"
                />
                <div
                  class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5"
                  >Robert De Niro</a
                  >
                  <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                    01:10 PM
                  </div>
                </div>
                <div class="w-full truncate text-gray-600 mt-0.5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomi
                </div>
              </div>
            </div>
            <div class="cursor-pointer relative flex items-center mt-5">
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/profile-4.jpg"
                />
                <div
                  class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5"
                  >Russell Crowe</a
                  >
                  <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                    06:05 AM
                  </div>
                </div>
                <div class="w-full truncate text-gray-600 mt-0.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500
                </div>
              </div>
            </div>
            <div class="cursor-pointer relative flex items-center mt-5">
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/profile-7.jpg"
                />
                <div
                  class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5"
                  >Leonardo DiCaprio</a
                  >
                  <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                    05:09 AM
                  </div>
                </div>
                <div class="w-full truncate text-gray-600 mt-0.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500
                </div>
              </div>
            </div>
            <div class="cursor-pointer relative flex items-center mt-5">
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  class="rounded-full"
                  src="../assets/images/profile-9.jpg"
                />
                <div
                  class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5"
                  >Kevin Spacey</a
                  >
                  <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                    01:10 PM
                  </div>
                </div>
                <div class="w-full truncate text-gray-600 mt-0.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#039;s
                  standard dummy text ever since the 1500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Notifications -->
      <!-- BEGIN: Account Menu -->
      <div class="intro-x dropdown w-8 h-8">
        <div
          class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            src="../assets/images/profile-1.jpg"
          />
        </div>
        <div class="dropdown-box w-56">
          <div
            class="dropdown-box__content box bg-theme-38 dark:bg-dark-6 text-white"
          >
            <div class="p-4 border-b border-theme-40 dark:border-dark-3">
              <div class="font-medium">Tom Cruise</div>
              <div class="text-xs text-theme-41 mt-0.5 dark:text-gray-600">
                Software Engineer
              </div>
            </div>
            <div class="p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <i data-feather="user" class="w-4 h-4 mr-2"></i> Profile
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <i data-feather="edit" class="w-4 h-4 mr-2"></i> Add Account
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <i data-feather="lock" class="w-4 h-4 mr-2"></i> Reset Password
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <i data-feather="help-circle" class="w-4 h-4 mr-2"></i> Help
              </a>
            </div>
            <div class="p-2 border-t border-theme-40 dark:border-dark-3">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                @click="onLogout"
              >
                <i data-feather="toggle-right" class="w-4 h-4 mr-2"></i>
                Выйти
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Account Menu -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderApp',
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>

<style scoped></style>
