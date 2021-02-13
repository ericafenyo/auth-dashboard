<template>
  <input @input="$emit('input', $event.target.value)" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class InputText extends Vue {}
</script>
