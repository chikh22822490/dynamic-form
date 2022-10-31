<template>
    <div :key="label">
      <FormKit
        
        :type="type"
        :label="label"
        :value="value"
        :help="help"
        input-class="rounded-md p-2"
        label-class="block mb-1 font-bold text-xl"
        help-class="text-white"
      />
    </div>
</template>

<script>
export default {
  props: ["type", "label", "value", "help"]
};
</script>
