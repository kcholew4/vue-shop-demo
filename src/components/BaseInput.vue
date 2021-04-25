<template>
  <div class="input-field">
    <label :for="$attrs.name" class="input-field__label">
      <slot></slot>
    </label>
    <input
      class="input-field__input"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <div class="input-field__message">
      <div v-html="validation.message"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    validation: {
      type: Object,
      required: false,
    },
  },
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.input-field {
  &__input {
    display: block;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid black;
  }

  &__label {
    margin-bottom: 5px;
  }

  &__message {
    margin-top: 5px;
    font-size: 16px;

    div {
      height: 1.5em;
    }
  }
}
</style>
