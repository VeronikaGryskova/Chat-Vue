<template>
  <NavigationChat></NavigationChat>
  <ChatMessengerVue></ChatMessengerVue>
  <ProfileUserName :profile="profile"></ProfileUserName>
</template>

<script>
import ProfileUserName from "./components/ProfileUserName.vue";
import NavigationChat from "./components/NavigationChat.vue";
import ChatMessengerVue from "./components/ChatMessenger.vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    ChatMessengerVue,
    ProfileUserName,
    NavigationChat,
  },
  data() {
    return {
      profile: {},
    };
  },
  mounted() {
    const router = useRouter();
    axios.get("http://localhost:3000/myAcc").then((response) => {
      this.profile = response.data;
    });
    router.push("/");
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  background: url(../src/img/background.svg) no-repeat;

  background-size: cover;
}
</style>
