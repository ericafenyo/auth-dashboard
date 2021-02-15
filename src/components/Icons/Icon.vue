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
import camelCase from "lodash/camelCase";

import IconBase from "@/components/Icons/IconBase.vue";

import IconEye from "./IconEye.vue";
import IconEyeOff from "./IconEyeOff.vue";
import IconInfo from "./IconInfo.vue";
import IconCritical from "./IconCritical.vue";
import IconConfirm from "./IconConfirm.vue";
import IconWarning from "./IconWarning.vue";
import IconAdd from "./IconAdd.vue";
import IconClose from "./IconClose.vue";

export type IconOption =
  | "add"
  | "eye"
  | "eye-off"
  | "info"
  | "critical"
  | "confirm"
  | "warning"
  | "add"
  | "close";

@Component({
  components: {
    IconBase,
    IconEye,
    IconEyeOff,
    IconInfo,
    IconCritical,
    IconConfirm,
    IconWarning,
    IconAdd,
    IconClose
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
