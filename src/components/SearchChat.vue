<template>
  <div class="search">
    <input placeholder="Search..." />
    <img :src="loupe" />
  </div>
</template>

<script>
import loupe from "../img/icons/loupe.svg";
export default {
  props: { dataSocial: Array },
  data() {
    return {
      loupe: loupe,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 255px;
  height: 33px;
  background: rgba(0, 0, 0, 0.0001);
  border: 0.5px solid rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  display: flex;
  align-items: center;

  input {
    margin-left: 18px;
    width: 200px;
    outline: none;
    border: 0;
    &::placeholder {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #8d8d8d;
    }
  }
}
</style>
