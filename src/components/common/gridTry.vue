<template>
  <grid-layout :layout="layout" :col-num="2" :row-height="30" :is-draggable="draggable" :is-resizable="resizable"
    :vertical-compact="true" :use-css-transforms="true">
    <grid-item v-for="item in layout" :key="item.i" :static="item.static" :x="item.x" :y="item.y" :w="item.w" :h="item.h"
      :i="item.i">
      <span class="text">{{ itemTitle(item) }}</span>
    </grid-item>
  </grid-layout>
</template>

<script>
import { ref } from 'vue';
import { GridLayout, GridItem } from 'vue3-grid-layout-next';

export default {
  components: {
    GridLayout,
    GridItem,
  },
  setup() {
    const layout = ref([
    { "x": 0, "y": 0, "w": 1, "h": 4, "i": "1"},
  { "x": 1, "y": 0, "w": 1, "h": 5, "i": "2"},
  { "x": 0, "y": 0, "w": 1, "h": 3, "i": "3"},
  { "x": 1, "y": 0, "w": 1, "h": 3, "i": "4"},
  { "x": 0, "y": 0, "w": 1, "h": 3, "i": "5"},
  { "x": 1, "y": 5, "w": 1, "h": 5, "i": "6"},
  { "x": 0, "y": 5, "w": 1, "h": 5, "i": "7"},
  { "x": 1, "y": 5, "w": 1, "h": 5, "i": "8"},
  { "x": 0, "y": 3, "w": 1, "h": 4, "i": "9"},
  { "x": 1, "y": 4, "w": 1, "h": 4, "i": "10"},
  { "x": 0, "y": 4, "w": 1, "h": 4, "i": "11"},
  { "x": 1, "y": 10, "w": 1, "h": 5, "i": "12"},
  { "x": 0, "y": 10, "w": 1, "h": 5, "i": "13"},
  { "x": 1, "y": 8, "w": 1, "h": 4, "i": "14"},
  { "x": 0, "y": 8, "w": 1, "h": 4, "i": "15"},
  { "x": 1, "y": 10, "w": 1, "h": 5, "i": "16"},
  { "x": 0, "y": 4, "w": 1, "h": 2, "i": "17"},
  { "x": 1, "y": 9, "w": 1, "h": 3, "i": "18"},
  { "x": 0, "y": 6, "w": 1, "h": 2, "i": "19"}
    ]);

    const draggable = ref(false);
    const resizable = ref(false);

    const itemTitle = (item) => {
      let result = item.i;
      if (item.static) {
        result += ' - Static';
      }
      return result;
    };

    return {
      layout,
      draggable,
      resizable,
      itemTitle,
    };
  },
};
</script>

<style scoped>
.vue-grid-layout {
  background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
