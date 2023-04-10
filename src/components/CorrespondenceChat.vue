<template>
  <div class="messages">
    <div v-for="givenSms in infoMessages" :key="givenSms.id" class="message">
      <img class="avatar" :src="givenSms.user.avatar" />
      <div class="info">
        <div class="nameAndTime">
          <div class="name">{{ givenSms.user.fullName }}</div>
          <div class="time">{{ givenSms.time }}</div>
        </div>

        <div class="content">{{ givenSms.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    infoMessages: Array,
  },
};
</script>

<style lang="scss">
.messages {
  padding: 10px 0;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    border-radius: 5px; /*Закругление ползунка*/
    background: #717882;
  }
  &::-webkit-scrollbar {
    width: 7px; /*Толщина скролла*/
  }
  .message {
    margin: 0 25px 10px;
    display: flex;
    gap: 12px;
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 4px;
    }
    .info {
      .nameAndTime {
        display: flex;
        gap: 10px;
        margin-bottom: 4px;
        .name {
          font-family: "Lato";
          font-style: normal;
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;

          color: #000000;
        }
        .time {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;

          color: #8d8d8d;
        }
      }

      .content {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;

        color: #000000;
        width: 100%;
        padding-right: 20px;
        word-break: break-all;
      }
    }
  }
}
</style>
