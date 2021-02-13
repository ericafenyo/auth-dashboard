<template>
  <button
    :id="id"
    :class="['button', ...classNames]"
    :disabled="disabled"
    @click="$emit('on-click')"
  >
    <i v-if="icon" class="material-icons button--icon">{{ icon }}</i>
    <span class="button--text" v-if="!loading">{{ text }}</span>
    <span class="button--loading-indicator" v-if="loading">
      <LoadingIndicator />
    </span>
  </button>
</template>

<script lang="ts">
export type ButtonSize = "x-small" | "small" | "medium" | "large";
export type ButtonType = "primary" | "secondary" | "destroy" | "confirm";
export type ButtonStyle = "standard" | "text" | "outline";

import { Vue, Component, Prop } from "vue-property-decorator";
import LoadingIndicator from "./LoadingIndicator.vue";

@Component({ components: { LoadingIndicator } })
export default class Button extends Vue {
  @Prop({ type: String, default: "Button" })
  readonly text!: string;

  @Prop({ type: String, default: "primary" })
  readonly type!: ButtonType;

  @Prop({ type: String, default: "standard" })
  readonly theme!: ButtonStyle;

  @Prop({ type: Boolean, default: true })
  readonly rounded!: boolean;

  @Prop({ type: String, default: "medium" })
  readonly size!: ButtonSize;

  @Prop({ type: String, default: "" })
  readonly icon!: string;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly block!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly loading!: boolean;

  @Prop({ type: String })
  readonly id!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly submit!: boolean;

  get classNames() {
    const classes = [];
    const { type, size, icon, loading, block } = this;

    classes.push(`button--${type}`);
    classes.push(`button--${size}`);
    icon && classes.push(`${icon}`);
    block && classes.push("block");
    loading && classes.push("loading");
    return classes;
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";

.button {
  padding: 0 1rem;
  min-width: 80px;
  overflow: hidden;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  border-radius: $border-radius;
  cursor: pointer;
  transition: all 0.2s;

  &.block {
    width: 100%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // Button sizes
  &--x-small {
    height: 32px;
  }

  &--small {
    height: 32px;
  }

  &--medium {
    height: 40px;
  }

  &--large {
    height: 48px;
  }

  // Button types
  &--primary {
    background-color: $blue;
    border-color: $blue;
    color: $white;

    &:focus,
    &:hover {
      background-color: $blue-dark;
    }

    &:active {
      background-color: $blue;
    }
  }

  &--destroy {
    background-color: $red;
    border-color: $red;
    color: $white;

    &:focus,
    &:hover {
      background-color: $red-dark;
    }

    &:active {
      background-color: $red;
    }
  }

  &--secondary {
    background-color: $grey-100;
    border-color: $grey-100;
    color: $grey-500;
  }

  &--confirm {
    background-color: $green;
    color: $white;

    &:hover,
    &:focus {
      background-color: $green-dark;
    }

    &:active {
      background-color: $green;
    }
  }

  &--outline {
    background-color: transparent;
    border-color: #dfe3e8;
    color: #a0aec0;
  }

  &.loading {
    opacity: 0.6 !important;
  }

  &--text {
    padding: 0 8px;
  }

  &--loading-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
