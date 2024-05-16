<template>
  <div class="w-screen h-screen flex items-stretch justify-stretch">
    <div class="left h-full w-60 overflow-y-auto">
      <uni-collapse>
        <uni-collapse-item title="使用说明" :open="true">
          <div
            class="py-3 px-5 cursor-pointer flex items-center justify-between"
            :class="{ 'bg-gray-100': currentComponent == 'decription' }"
            @click="clickItem('decription')"
          >
            <span>使用说明</span>
            <uni-icons type="right" size="14" style="color: #999"></uni-icons>
          </div>
        </uni-collapse-item>
        <uni-collapse-item title="组件" :open="true">
          <div class="cpn">
            <div
              class="cpn-item py-3 px-5 cursor-pointer flex items-center justify-between"
              :class="{ 'bg-gray-100': currentComponent == item.id }"
              v-for="item in cpnList"
              :key="item.id"
              @click="clickItem(item.id)"
            >
              <span>{{ item.name }}</span>
              <uni-icons type="right" size="14" style="color: #999"></uni-icons>
            </div>
          </div>
        </uni-collapse-item>
      </uni-collapse>
    </div>
    <div class="p-3 grow flex h-screen">
      <div class="grow pr-2 h-full overflow-y-auto">
        <component :is="componented"></component>
      </div>
      <div
        v-if="currentComponent != 'decription'"
        class="p-1 h-full bg-black border rounded-lg"
      >
        <div class="w-full bg-white h-full border rounded-md">
          <iframe
            :src="iframeUrl"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import cpnList from "../../data/component";
import components from "@/components/index";

const currentComponent = ref("decription");
const iframeUrl = ref("");
const clickItem = (id) => {
  currentComponent.value = id;
  iframeUrl.value = `/lywui#/pages/${id}/index`;
};
const componented = computed(() => {
  return components[`./${currentComponent.value}-des.vue`].default || "";
});
</script>
<style>
page {
  -webkit-user-select: text;
}
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: red;
}

::-moz-scrollbar {
  width: 8px;
}

::-moz-scrollbar-thumb {
  background-color: red;
}
</style>
