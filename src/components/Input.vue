<template>
  <div class="input ">
    <label :for="name" class="input-label">{{ label }}</label>
    <component
      :is="computeComponent"
      :classes="{'input-error': error }"
      :id="name"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="(args) => $emit('input', args)"
    />
    <span
      v-if="error"
      :class="['input-help-message', { 'input-help-message-error': error }, { hidden: !error }]"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

import InputText from "./InputText.vue";
import InputPassword from "./InputPassword.vue";

@Component({
  components: {
    InputText,
    InputPassword,
  },
})
export default class Input extends Vue {
  @Prop({ type: String, default: "" })
  readonly type!: string;

  @Prop({ type: String, default: "" })
  readonly label!: string;

  @Prop({ type: String, default: "" })
  readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  readonly error!: boolean;

  @Prop({ type: String, default: "" })
  readonly size!: string;

  @Prop({ type: String, default: null })
  readonly value!: string;

  @Prop({ type: String, default: "" })
  readonly name!: string;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: String, default: "" })
  readonly errorMessage!: string;

  capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  computeClasses(errors: string[]) {
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
    margin-bottom: 8px;
  }

  /deep/ input {
    height: 40px;
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
      outline: 0;
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

  &-error {
    border-color: $red !important;
  }
}
</style>
