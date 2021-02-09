<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Change Password</h2>
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
                src="../assets/images/profile-2.jpg"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium text-base">
                {{ profile.username }}
              </div>
              <div class="text-gray-600">{{ profile.email }}</div>
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
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a
              class="flex items-center text-theme-1 dark:text-theme-10 font-medium"
              href=""
            >
              <ActivityIcon class="w-4 h-4 mr-2" />
              Personal Information
            </a>
            <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" />
              Account Settings
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" />
              Change Password
            </a>
            <a class="flex items-center mt-5" href="">
              <SettingsIcon class="w-4 h-4 mr-2" />
              User Settings
            </a>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a class="flex items-center" href="">
              <ActivityIcon class="w-4 h-4 mr-2" />
              Email Settings
            </a>
            <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" />
              Saved Credit Cards
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" />
              Social Networks
            </a>
            <a class="flex items-center mt-5" href="">
              <SettingsIcon class="w-4 h-4 mr-2" />
              Tax Information
            </a>
          </div>
          <div class="p-5 border-t flex dark:border-dark-5">
            <button
              type="button"
              class="button button--sm block bg-theme-1 text-white"
            >
              New Group
            </button>
            <button
              type="button"
              class="button button--sm border text-gray-700 dark:bg-dark-5 dark:text-gray-300 ml-auto"
            >
              New Quick Link
            </button>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Change Password -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Change Password</h2>
          </div>
          <div class="p-5">
            <div>
              <label>Old Password</label>
              <input
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
                v-model="profile.oldPassword"
                disabled
              />
            </div>
            <div class="mt-3">
              <label>New Password</label>
              <input
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
                v-model="form.newPassword"
              />
            </div>
            <div class="mt-3">
              <label>Confirm New Password</label>
              <input
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
              />
            </div>
            <button
              type="button"
              class="button bg-theme-1 text-white mt-4"
              @click.prevent="formSubmit"
            >
              Change Password
            </button>
          </div>
        </div>
        <!-- END: Change Password -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { me } from '../services/auth.service';
import { request } from '../services/core.service';

export default {
  name: 'ChangePassword',
  data() {
    return {
      profile: {
        username: '',
        email: '',
        oldPassword: '',
      },
      form: {
        id: '',
        newPassword: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      userToken: 'auth/userToken',
    }),
  },
  async created() {
    const { data: { username, email, user_id, password_hash } } = await me(this.userToken);
    this.profile.username = username;
    this.profile.email = email;
    this.profile.oldPassword = password_hash;
    this.form.id = user_id;
  },
  methods: {
    async formSubmit() {
      try {
        await request({
          url: 'site/changepassword',
          method: 'post',
          data: this.form,
          token: this.userToken,
        });
        await this.$router.push({ name: 'top-menu-profile' });
      } catch (e) {
        alert('not saved');
      }
    },
  },
};
</script>

<style scoped>

</style>