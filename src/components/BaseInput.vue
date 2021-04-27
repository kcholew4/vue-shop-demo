<template>
  <div class="input-field">
    <label :for="$attrs.name" class="input-field__label">
      <slot></slot>
    </label>
    <input class="input-field__input" v-bind="$attrs" v-on="inputListeners" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    inputListeners() {
      //https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
      return {
        ...this.$listeners,
        input: ({ target }) => this.$emit("input", target.value),
      };
    },
  },
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
}
</style>
