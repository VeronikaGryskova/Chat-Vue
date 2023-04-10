<template>
  <div className="inputChat">
    <div className="left">
      <button className="attachFile"></button>
      <button className="microphone"></button>
    </div>
    <textarea
      :placeholder="
        $store.state.currentChannel
          ? `Message in ${$store.state.currentChannel.title}`
          : 'Select a channel'
      "
      :disabled="!$store.state.currentChannel"
      @input="onChange"
      @keydown="onKeyDown"
      :value="value"
    />

    <button v-if="value.length > 0" class="send" @click="onClick"></button>
    <button className="smiley"></button>
  </div>
</template>

<script>
export default {
  props: {
    onChange: Function,
    onKeyDown: Function,
    onClick: Function,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.inputChat {
  padding: 3px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #c2c2c2;
  .left {
    display: flex;
  }

  .attachFile {
    cursor: pointer;
    margin-right: 22px;
    background: url(../img/icons/attachFile.svg) center center no-repeat;
    width: 17px;
    height: 21px;
    padding: 0;
    border: none;
  }
  .microphone {
    cursor: pointer;
    margin-right: 22px;
    background: url(../img/icons/microphone.svg) center center no-repeat;
    width: 19px;
    height: 21px;
    padding: 0;
    border: none;
  }
  textarea {
    padding: 22px 0;
    resize: none;
    height: 20px;
    margin-right: 22px;
    width: 100%;
    border: 0;
    outline: 0;
    &::placeholder {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #8d8d8d;
    }
  }
  .send {
    cursor: pointer;
    margin-right: 22px;
    background: url(../img/icons/send.svg);
    width: 28px;
    height: 22px;
    padding: 0;
    border: none;
  }
  .smiley {
    cursor: pointer;
    background: url(../img/icons/smiley.svg) center center no-repeat;
    width: 28px;
    height: 21px;
    padding: 0;
    border: none;
  }
}
</style>
