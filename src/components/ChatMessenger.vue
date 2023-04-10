<template>
  <div class="chat">
    <HeaderChat></HeaderChat>
    <CorrespondenceChat :infoMessages="filteredMessages"></CorrespondenceChat>
    <InputChat
      @input="handleOnChange"
      @keydown="onKeyDown"
      @click="send"
      :value="message"
    ></InputChat>
  </div>
</template>

<script>
import HeaderChat from "./HeaderChat.vue";
import InputChat from "./InputChat.vue";
import CorrespondenceChat from "./CorrespondenceChat.vue";

import axios from "axios";

export default {
  components: {
    HeaderChat,
    CorrespondenceChat,
    InputChat,
  },
  props: {},
  data() {
    return {
      message: "",
      user: this.$store.state.currentProfile,
      date: "",
      smsDate: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/messages").then((response) => {
      this.$store.dispatch("changeMessages", response.data);
    });
  },
  methods: {
    handleOnChange(e) {
      this.message = e.target.value;
    },
    onKeyDown(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        this.send();
      }
    },
    send() {
      console.log(this.message);

      this.date = new Date();
      this.smsDate = this.date.toLocaleString("ru-RU", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      axios
        .post("http://localhost:3000/messages", {
          user: this.$store.state.currentProfile,
          time: this.smsDate,
          content: this.message,
          idChannel: this.$store.state.currentChannel.id,
        })
        .then(() => {
          this.$store.state.messages.push({
            content: this.message,
            time: this.smsDate,
            user: this.$store.state.currentProfile,
            idChannel: this.$store.state.currentChannel.id,
          });
        });
      setTimeout(() => {
        this.message = "";
      }, 80);
    },
  },
  computed: {
    filteredMessages() {
      return this.$store.state.messages.filter(
        (message) => message.idChannel === this.$store.state.currentChannel?.id
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: #ffffff;
}
</style>
