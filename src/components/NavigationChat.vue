<template>
  <div class="navigation">
    <div class="content">
      <div class="nomad">
        <div class="nomadList">
          <div class="nomadList_title">Nomad List</div>
          <div class="nomadList_pointerDown"></div>
        </div>
        <a href="#" class="settings"></a>
      </div>
      <a href="#" class="allTreads">
        <div class="allTreads_icon"></div>
        <div class="allTreads_title">All treads</div>
      </a>
      <div class="channels">
        <div class="channels_header">
          <div class="channels_header_title">Channels</div>
          <div class="channels_header_numbers">{{ channels.length }}</div>
        </div>
        <ChannelsChat
          class="channels_list"
          :channels_data="channels"
        ></ChannelsChat>
      </div>
      <div class="friends">
        <div class="friends_header">
          <div class="friends_header_title">Friends</div>
          <div class="friends_header_numbers">{{ friends.length }}</div>
        </div>
        <FriendsChat class="friends_list" :friends_data="friends"></FriendsChat>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelsChat from "./ChannelsChat.vue";
import FriendsChat from "./FriendsChat.vue";
import axios from "axios";

export default {
  components: {
    ChannelsChat,
    FriendsChat,
  },
  props: {},
  data() {
    return {
      channels: [],
      friends: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/channels").then((response) => {
      this.channels = response.data;
    });
    axios.get("http://localhost:3000/users").then((response) => {
      this.friends = response.data;
    });
  },
};
</script>

<style lang="scss">
.navigation {
  width: 280px;
  height: 100vh;
  background: #25272a;
  mix-blend-mode: normal;
  opacity: 0.75;
  .content {
    margin-top: 35px;
    margin-left: 25px;
    width: 80%;
  }
  .nomad {
    height: 4vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nomadList {
      display: flex;
      align-items: center;
      gap: 7px;
      &_title {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        color: #ffffff;
      }
      &_pointerDown {
        background: url(../img/icons/pointerDown.svg) center center no-repeat;
        height: 8px;
        width: 13px;
      }
    }
    .settings {
      background: url(../img/icons/settings.svg) center center no-repeat;
      width: 15px;
      height: 15px;
    }
  }
  .allTreads {
    height: 3vh;
    text-decoration: none;
    margin-top: 4vh;
    display: flex;
    gap: 13px;
    &_icon {
      background: url(../img/icons/chat.svg);
      height: 16px;
      width: 18px;
    }
    &_title {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #b5b5b5;
    }
  }
  .channels {
    height: 48vh;
    margin-top: 4vh;

    &_header {
      margin-bottom: 14px;
      display: flex;
      justify-content: space-between;
      &_title {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;

        color: #919191;
      }
      &_numbers {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        text-transform: uppercase;

        color: #919191;
      }
    }
    &_list {
      &::-webkit-scrollbar-thumb {
        border-radius: 5px; /*Закругление ползунка*/
        background: #717882;
      }
      &::-webkit-scrollbar {
        width: 7px; /*Толщина скролла*/
      }
      height: 45vh;
      margin-top: 20px;
      overflow-y: auto;
      overflow-x: hidden;

      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;

      li {
        width: 228px;
        height: 30px;
        list-style-type: none;
      }
      li a {
        text-decoration: none;
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #b5b5b5;
      }
      a:hover {
        font-weight: 700;
        color: #ffffff;
      }
    }
  }
  .friends {
    margin-top: 3vh;

    &_header {
      margin-bottom: 2vh;
      display: flex;
      justify-content: space-between;
      &_title {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;

        text-transform: uppercase;

        color: #919191;
      }
      &_numbers {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;

        text-align: right;
        text-transform: uppercase;

        color: #919191;
      }
    }
    &_list {
      height: 23vh;
      margin-block-start: 0;
      margin-block-end: 0;
      padding: 0;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar-thumb {
        border-radius: 5px; /*Закругление ползунка*/
        background: #717882;
      }
      &::-webkit-scrollbar {
        width: 7px; /*Толщина скролла*/
      }

      li {
        height: 34px;
        list-style-type: none;
        margin-top: 2vh;
      }
      li a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #b5b5b5;
        .status {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          &.green {
            background: green;
          }
          &.gray {
            background: gray;
          }
        }

        .avatar {
          width: 30px;
          height: 30px;
          margin-left: 7px;
          margin-right: 13px;
        }
      }
    }
  }
}
</style>
