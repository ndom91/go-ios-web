<template>
  <n-config-provider preflight-style-disabled>
    <n-layout class="h-screen" embedded position="absolute">
      <n-layout-header bordered class="p-4"> go-ios web </n-layout-header>
      <n-layout has-sider class="max-h-screen flex-1">
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
        >
          <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <n-layout class="flex-1">
          <slot />
        </n-layout>
      </n-layout>
      <n-layout-footer bordered class="p-4">Footer - dpaulus</n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { h, defineComponent, Component } from 'vue'
import { NIcon } from 'naive-ui'
import Home from '../components/icons/Home'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: 'App',
    key: 'app',
    icon: renderIcon(Home),
  },
  {
    label: 'Device',
    key: 'device',
    icon: renderIcon(Home),
    children: [
      {
        label: 'Cloud iPhone',
        key: 'cloud-iphone',
      },
    ],
  },
  {
    label: 'User',
    key: 'user',
    icon: renderIcon(Home),
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: renderIcon(Home),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            // icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            disabled: true,
            key: 'sheep-man',
            // icon: renderIcon(PersonIcon)
          },
        ],
      },
      {
        label: 'Beverage',
        key: 'beverage',
        // icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky',
          },
        ],
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich',
          },
        ],
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]

export default defineComponent({
  setup() {
    return {
      menuOptions,
    }
  },
})
</script>
