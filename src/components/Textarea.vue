<template>
  <div>
    <div class="flex justify-between">
      <label class="textarea-label mb-2" :for="name">{{ label }}</label>
      <slot name="label-right">
        <Link
          size="small"
          v-if="hasAction"
          :text="actionText"
          :to="actionRoute"
        />
      </slot>
    </div>
    <textarea
      :id="name"
      :placeholder="placeholder"
      :name="name"
      class="textarea"
      rows="6"
      ref="inputTextArea"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import autosize from "autosize";

@Component
export default class Textarea extends Vue {
  $refs!: {
    inputTextArea: HTMLTextAreaElement;
  };

  @Prop({ type: String, default: "" })
  readonly label!: string;

  @Prop({ type: Boolean, default: false })
  readonly hasAction!: boolean;

  @Prop({ type: String, default: "" })
  readonly type!: string;

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
  readonly disabled!: boolean;

  @Prop({ type: String, default: "" })
  readonly actionText!: string;

  @Prop({ type: String, default: "" })
  readonly actionRoute!: string;

  mounted() {
    autosize(this.$refs.inputTextArea);
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_mixins.scss";
::placeholder {
  color: #4b5563;
}

.textarea {
  background: var(--color-surface-lightest);
  font-size: $font-size-body;
  line-height: 1.5;
  color: $color-primary-text;
  border: 1.5px solid var(--color-border);
  padding: 0.5rem 0.75rem;
  border-radius: $border-radius;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  transition: all 0.2s;

  &-label {
    font-size: 0.7rem;
    color: #6b7280;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: -0.15px;
  }

  &:hover {
    background: $grey-100;
  }

  &:focus {
    box-shadow: inset 0 0 0px 0.5px $blue;
    background-color: $white;
    border-color: $blue;
  }
}
</style>
