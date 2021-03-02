<template>
  <input :class="classes" @input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class InputText extends Vue {
  @Prop({ type: Object, default: null })
  readonly classes!: any;
}
</script>
