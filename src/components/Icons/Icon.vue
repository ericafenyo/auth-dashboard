<template>
  <IconBase
    :icon-name="name"
    :size="size"
    @on-click="event => $emit('on-click', event)"
  >
    <component :is="computeIcon" />
  </IconBase>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as camelCase from "lodash.camelcase";

import IconBase from "./IconBase.vue";

import IconEye from "./IconEye.vue";
import IconEyeOff from "./IconEyeOff.vue";

export type IconOption = "add" | "eye" | "eye-off";

@Component({
  components: {
    IconBase,
    IconEye,
    IconEyeOff
  }
})
export default class Icon extends Vue {
  @Prop({ type: String, default: "edit" })
  readonly name!: IconOption;

  @Prop({ type: [String, Number], default: 24 })
  readonly size!: string | number;

  get computeIcon(): string {
    return camelCase(`icon-${this.name}`);
  }
}
</script>
