<template>
  <ul>
    <li v-for="(item, index) in friends_data" :key="index">
      <a :href="item.link">
        <div :class="item.status ? 'status green' : 'status gray'"></div>
        <img class="avatar" :src="item.avatar" />
        {{ item.username }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: { friends_data: Array },
};
</script>
