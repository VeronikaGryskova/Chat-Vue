<template>
  <ul>
    <li v-for="(item, index) in dataSocial" :key="index">
      <a :href="item.link">
        <img :src="item.icon" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: { dataSocial: Array },
};
</script>

<style lang="scss">
li {
  list-style-type: none;
}
</style>
