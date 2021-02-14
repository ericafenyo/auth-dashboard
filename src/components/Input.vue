<template>
  <div class="input ">
    <div class="flex justify-between mb-2">
      <label :for="name" class="input-label">{{ label }}</label>
      <slot name="label-right"></slot>
    </div>
    <component
      :is="computeComponent"
      :class="{ 'input-error': hasError }"
      :id="name"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="args => $emit('input', args)"
    />
    <span
      v-if="hasHint"
      :class="[
        'input-help-message',
        { 'input-help-message-error': hasError },
        { hidden: !hasError }
      ]"
      >Field is required</span
    >
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

import InputText from "./InputText.vue";
import InputPassword from "./InputPassword.vue";

@Component({
  components: {
    InputText,
    InputPassword
  }
})
export default class Input extends Vue {
  @Prop({ type: String, default: "" })
  readonly type!: string;

  @Prop({ type: String, default: "" })
  readonly label!: string;

  @Prop({ type: String, default: "" })
  readonly placeholder!: string;

  @Prop({ type: String, default: "" })
  readonly helperText!: string;

  @Prop({ type: Boolean, default: false })
  readonly hasError!: boolean;

  @Prop({ type: String, default: "" })
  readonly size!: string;

  @Prop({ type: String, default: null })
  readonly value!: string;

  @Prop({ type: String, default: "" })
  readonly name!: string;

  @Prop({ type: Boolean, default: false })
  readonly hasHint!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly hasAction!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: String, default: "" })
  readonly actionText!: string;

  @Prop({ type: String, default: "" })
  readonly actionRoute!: string;

  capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  computeClasses(errors: any[]) {
    const { state } = this.$props;
    return (state ? `input-${state}` : "") + (errors[0] ? " input-error" : "");
  }

  get computeComponent(): string {
    const { capitalize, type } = this;
    return type ? `Input${capitalize(type)}` : "InputText";
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins";

.input {
  display: flex;
  flex-direction: column;

  &-label {
    font-size: 0.7rem;
    color: #6b7280;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: -0.15px;
  }

  /deep/ input {
    height: 37px;
    font-size: $font-size-body;
    color: var(--color-primary-text);
    background: var(--color-surface-lightest);
    border: 1.5px solid var(--color-border);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: $border-radius;
    width: 100%;
    z-index: 0;
    transition: all 0.2s;
    transition-property: border, background, box-shadow;

    &:hover {
      background: $grey-100;
    }

    &:focus {
      box-shadow: inset 0 0 0px 0.5px $blue;
      background-color: $white;
      border-color: $blue;
    }

    & ~ .input-error {
      border-color: $red;
    }
  }

  &-help-message {
    font-size: 12px;
    margin-top: 0.5rem;
    font-weight: 500;

    &-error {
      color: $red;
    }
  }
}
</style>
