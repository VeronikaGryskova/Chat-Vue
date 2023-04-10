<template>
  <div class="profile">
    <img class="profile_avatar" :src="profile.avatar" />
    <div class="profile_information">
      <div class="profile_name">
        <div class="username">{{ profile?.fullName }}</div>
        <div :class="profile.status ? 'status green' : 'status gray'"></div>
      </div>

      <div class="profile_description">{{ profile.description }}</div>
      <div class="profile_social">
        <BaseList class="socialList" :dataSocial="icons"></BaseList>
      </div>
      <div class="profile_connection">
        <button class="message">Message</button>
        <button class="toggle">
          <div class="toggle_icon"></div>
        </button>
      </div>
      <div class="profile_username">
        <div class="profile_username_title">Username</div>
        <div class="profile_username_name">{{ profile.username }}</div>
      </div>
      <div class="profile_email">
        <div class="profile_email_title">Email</div>
        <div class="profile_email_name">{{ profile.email }}</div>
      </div>
      <div class="profile_skype">
        <div class="profile_skype_title">Skype</div>
        <div class="profile_skype_name">{{ profile.skype }}</div>
      </div>
      <div class="profile_timezone">
        <div class="profile_timezone_title">Timezone</div>
        <div class="profile_timezone_time">{{ profile.timezone }}</div>
      </div>
      <div class="pointer"></div>
    </div>
  </div>
</template>

<script>
import BaseList from "./base/BaseList.vue";
import facebook from "../img/icons/facebook.svg";
import twitter from "../img/icons/twitter.svg";
import instagram from "../img/icons/instagram.svg";
import linkedIn from "../img/icons/linkedIn.svg";
export default {
  components: {
    BaseList,
  },
  props: {
    msg: String,
    profile: Object,
  },
  data() {
    return {
      icons: [
        {
          icon: facebook,
          link: "https://ru-ru.facebook.com/",
        },
        {
          icon: twitter,
          link: "https://twitter.com/",
        },
        {
          icon: instagram,
          link: "https://www.instagram.com/",
        },
        {
          icon: linkedIn,
          link: "https://www.likeni.ru/glossary/linkedin/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 200px;
  height: 100vh;
  position: relative;
  background: #d9d9db;
  mix-blend-mode: normal;

  &_information {
    padding-top: 15px;
    padding-left: 20px;

    opacity: 0.8;
  }
  &_avatar {
    background-size: cover;
    width: 200px;
    height: 200px;
  }
  &_name {
    display: flex;
    gap: 6px;
    align-items: center;
    .username {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #000000;
    }
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
  }
  &_description {
    margin-top: 4px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #5f6164;
  }
  &_social {
    margin-top: 20px;
  }
  .socialList {
    padding: 0;
    // margin-block-start: 0;
    // margin-block-end: 0;
    display: flex;
    flex-direction: row;
    gap: 6px;
  }
  &_connection {
    margin-top: 19px;
    display: flex;
    gap: 4px;
    .message {
      cursor: pointer;
      width: 134px;
      height: 25px;
      background: #3577ef;
      border: 0;
      border-radius: 5px;

      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;

      color: #ffffff;
    }
    .toggle {
      cursor: pointer;
      width: 25px;
      height: 25px;
      border: 0;
      border-radius: 5px;
      background: #3577ef;
      &_icon {
        height: 7px;
        background: url(../../src/img/icons/toggle.svg) center center no-repeat;
      }
    }
  }
  &_username {
    margin-top: 14px;
    &_title {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #5f6164;
    }
    &_name {
      margin-top: 2px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #000000;
    }
  }
  &_email {
    margin-top: 14px;
    &_title {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #5f6164;
    }
    &_name {
      margin-top: 2px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #000000;
    }
  }
  &_skype {
    margin-top: 14px;
    &_title {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #5f6164;
    }
    &_name {
      margin-top: 2px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #000000;
    }
  }
  &_timezone {
    margin-top: 14px;
    &_title {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #5f6164;
    }
    &_time {
      margin-top: 2px;
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #000000;
    }
  }
  .pointer {
    background: url(../../src/img/icons/pointer.svg) center center no-repeat;
    width: 10px;
    height: 16px;

    position: absolute;
    right: 23px;
    bottom: 28px;
  }
}
</style>
