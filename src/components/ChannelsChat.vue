<template>
  <ul>
    <li v-for="(item, index) in channels_data" :key="index">
      <RouterLink
        :class="{ active: item.id === currentChannelId }"
        :to="`/channel/${item.id}`"
        @click="getChannelData(item)"
        >{{ item.title }}</RouterLink
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: { channels_data: Array },

  methods: {
    getChannelData(channel) {
      this.$store.dispatch("changeCurrentChannel", channel);
    },
  },
  // computed: {
  //   currentChannelId() {
  //     return this.$store.state.currentChannel?.id;
  //   },
  // },
};
</script>

<style lang="scss">
.active {
  font-weight: 700;
  color: #ffffff;
}
</style>
