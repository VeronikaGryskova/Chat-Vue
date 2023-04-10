<template>
  <a href="#" class="notice">
    <img class="notice_icon" :src="noticeIcon" />
    <img class="notice_iconNew" :src="newNoticeIcon" />
  </a>
</template>

<script>
import noticeIcon from "../img/icons/notice.svg";
import newNoticeIcon from "../img/icons/newNotice.svg";
export default {
  components: {},
  data() {
    return {
      noticeIcon: noticeIcon,
      newNoticeIcon: newNoticeIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.notice {
  width: 18px;
  height: 17px;
  display: flex;
  &_iconNew {
    width: 5px;
    height: 5px;
  }
}
</style>
