<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
}>(), {
  placeholder: 'Enter something',
})
const emit = defineEmits(['update:modelValue'])

const editorDom = ref<HTMLTextAreaElement | null>(null)

const showEditor = ref(false)

function handleShow() {
  showEditor.value = true
}

function focusTextarea() {
  if (!editorDom.value)
    return
  editorDom.value.querySelector('textarea')?.focus()
}
</script>

<template>
  <div class="relative inline-block min-w-5">
    <pre
      font-serif m-0
      :class="{
        'text-gray-4': !modelValue,
        'text-blue-5': showEditor && modelValue,
      }"
      @click="handleShow"
    >{{ modelValue || placeholder }}</pre>
    <q-popup-proxy anchor="bottom left" @show="focusTextarea" @before-hide="showEditor = false">
      <div
        ref="editorDom"
        z-3
        p-4 rounded-2 shadow-lg
        bg-black
        class="editor"
        :class="{
          show: showEditor,
        }"
        role="tooltip"
      >
        <textarea :placeholder="placeholder" text-gray-2 bg-transparent w-full rows="5" :value="modelValue" @input="e => emit('update:modelValue', (e.target as HTMLTextAreaElement).value)" />
      </div>
    </q-popup-proxy>
  </div>
</template>

<style>
.editor {
  display: none;
  position: fixed;
  width: 320px;
}
.show {
  display: block;
}
pre {
  white-space: pre-line;
}
</style>
