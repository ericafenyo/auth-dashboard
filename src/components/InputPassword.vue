<template>
  <span class="input-password">
    <input
      :type="computeInputType"
      :class="classes"
      :placeholder="placeholder"
      :id="id"
      :value="value"
      :name="name"
      @input="$emit('input', $event.target.value)"
      ref="inputPassword"
    />
    <Icon
      :size="20"
      :class="[isVisible ? 'icon-active' : 'icon-inactive']"
      :name="computeIcon"
      @click.native="toggleVisibility"
    />
  </span>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class InputPassword extends Vue {
  @Prop({ type: String, default: "" })
  readonly name!: string;

  @Prop({ type: String, default: "" })
  readonly value!: string;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Object, default: null })
  readonly classes!: any;

  @Prop({ type: String, default: "" })
  readonly helperText!: string;

  @Prop({ type: String, default: "" })
  readonly placeholder!: string;

  @Prop({ type: String, default: "" })
  readonly id!: string;

  model = "";
  isVisible = false;

  get computeIcon(): string {
    return this.isVisible ? "eye-off" : "eye";
  }

  get computeInputType(): string {
    return this.isVisible ? "text" : "password";
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

::placeholder {
  font-weight: 400;
  font-size: $font-size-body;
}

.input-password {
  position: relative;

  #password {
    padding-right: 38px;
  }

  #password[type="password"] {
    font-weight: 500;
    font-size: 1rem;
  }

  #password.input-error {
    border-color: $red;
  }

  .icon {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
    padding: 10px;
  }

  .icon-inactive {
    color: #b0abb5;
  }

  .icon-active {
    color: $color-primary-text;
  }
}
</style>
