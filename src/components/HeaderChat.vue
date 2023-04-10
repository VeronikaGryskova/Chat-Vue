<template>
  <div class="headerChat">
    <div class="headerChat_title">
      <div class="headerChat_title_name">
        {{ $store.state.currentChannel?.title }}
      </div>
      <div class="headerChat_title_favorites"></div>
    </div>
    <div class="headerChat_info">
      <a href="#" class="participants">
        <div class="participants_icon"></div>
        <div class="participants_quantity">1,093</div>
      </a>
      <SearchChat></SearchChat>
      <NoticeChat></NoticeChat>
      <a href="#" class="kebabMenu">
        <div class="kebabMenu_icon"></div>
      </a>
    </div>
  </div>
</template>

<script>
import NoticeChat from "./NoticeChat.vue";
import SearchChat from "./SearchChat.vue";

export default {
  components: { SearchChat, NoticeChat },
  props: {},
};
</script>

<style lang="scss" scoped>
.headerChat {
  padding: 32px 25px 15px;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #c2c2c2;
  &_title {
    display: flex;
    align-items: center;
    gap: 7px;
    &_name {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #000000;
    }
    &_favorites {
      background: url(../img/icons/favorites.svg) no-repeat;
      width: 15px;
      height: 14px;
    }
  }
  &_info {
    display: flex;
    align-items: center;
    gap: 25px;

    .participants {
      text-decoration: none;
      width: 55px;
      display: flex;
      align-items: center;
      gap: 7px;
      &_icon {
        background: url(../img/icons/participants.svg);
        width: 11px;
        height: 13px;
      }
      &_quantity {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #a4a4a4;
      }
    }
    .kebabMenu {
      text-decoration: none;
      &_icon {
        background: url(../img/icons/kebabMenu.svg);
        width: 6px;
        height: 17px;
      }
    }
  }
}
</style>
