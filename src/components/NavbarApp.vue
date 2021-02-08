<template>
  <nav class="top-nav">
    <ul>
      <li v-for="(menuItem, menuKey) in menus" v-bind:key="menuKey">
        <a
          href="javascript:"
          class="top-menu"
          :class="{
            'top-menu--active': menuItem.active,
          }"
          @click="linkTo(menuItem, $router)"
        >
          <div class="top-menu__icon">
            <activity-icon></activity-icon>
          </div>
          <div class="top-menu__title">
            {{ menuItem.title }}
            <ChevronDownIcon
              v-if="menuItem.subMenu"
              class="top-menu__sub-icon"
            />
          </div>
        </a>
      <!--   BEGIN: Second Child    -->
        <ul v-if="menuItem.subMenu">
          <li
            v-for="(subMenu, subMenuKey) in menuItem.subMenu"
            v-bind:key="subMenuKey"
          >
            <a
              href="javascript:"
              class="top-menu"
            >
              <div class="top-menu__icon">
                <ActivityIcon />
              </div>
              <div class="top-menu__title">
                {{ subMenu.title }}
                <ChevronDownIcon
                  v-if="subMenu.subMenu"
                  class="top-menu__sub-icon"
                />
              </div>
            </a>
            <!-- BEGIN: Third Child -->
            <ul v-if="subMenu.subMenu">
              <li
                v-for="(sub2Menu, sub2MenuKey) in subMenu.subMenu"
                :key="sub2MenuKey"
              >
                <a
                  href="javascript:"
                  class="top-menu"
                >
                  <div class="top-menu__icon">
                    <ZapIcon />
                  </div>
                  <div class="top-menu__title">
                    {{ sub2Menu.title }}
                  </div>
                </a>
              </li>
            </ul>
          <!-- END: Third Child -->
          </li>
        </ul>
        <!-- END: Second Child -->
      </li>
      <!-- END: First Child -->
    </ul>
  </nav>
</template>

<script>
import menu from "../menu";
import { ChevronDownIcon, ActivityIcon, ZapIcon } from 'vue-feather-icons';
import {linkTo, nestedMenu} from '../menu/menu-config';

export default {
  name: "NavbarApp",
  components: { ActivityIcon, ChevronDownIcon, ZapIcon },
  data() {
    return {
      menus: nestedMenu(menu, this.$route)
    }
  },
  methods: {
    linkTo
  }
};
</script>

<style scoped></style>
