<template>
  <div>
    <div v-for="(group, index) in groupedData" :key="index" :id="'container-' + index">
      <template v-if="group[0][1] === 'l'">
        <div class="column">
          <div :class="`box ${group[0][1]}`">{{ group[0][0] }}</div>
        </div>
      </template>
      <template v-else>
          <div v-for="item in group" :key="item[0]" :class="`box ${item[1]}`">{{ item[0] }}</div>
          <div class="column">
        </div>
      </template>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      data: [
        [1, 'm'],
        [2, 'ss'],
        [3, 'ss'],
        [4, 'sm'],
        [5, 'sm'],
        [6, 'm'],
        [7, 'l'],
        [8, 'm'],
        [9, 'ss'],
        [10, 'ss'],
        [11, 'sm'],
        [12, 'sm'],
        [13, 'm'],
      ],
    };
  },
  computed: {
    groupedData() {
      const groups = [];
      let currentGroup = [];
      let isLastGroupLarge = false;

      for (const item of this.data) {
        if (item[1] === 'l') {
          if (currentGroup.length > 0) {
            groups.push(currentGroup);
          }
          groups.push([item]);
          isLastGroupLarge = true;
          currentGroup = [];
        } else {
          currentGroup.push(item);
          isLastGroupLarge = false;
        }
      }

      if (currentGroup.length > 0) {
        if (isLastGroupLarge) {
          groups.push([currentGroup[0]]);
          currentGroup.shift();
        }
        groups.push(currentGroup);
      }
      console.log(groups)
      return groups;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.box {
  border: 1px solid black;
  margin: 2px;
  padding: 4px;
}
</style>
