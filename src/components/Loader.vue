<template>
  <v-overlay
    :model-value="loading"
    :persistent="true"
    class="align-center justify-center"
  >
    <v-progress-circular
      color="primary"
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
export default {
  name: "Loader",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.v-progress-circular__underlay {
  color: var(--vbm-grey-2) !important;
}

.v-overlay__scrim {
  pointer-events: none !important;
}
</style>
