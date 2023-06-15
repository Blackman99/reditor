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
      }"
      @click="handleShow"
    >{{ modelValue || placeholder }}</pre>
    <q-popup-proxy @show="focusTextarea">
      <div
        ref="editorDom"
        z-3
        bg-black
        p-4 rounded-2 shadow-md
        class="editor"
        :class="{
          show: showEditor,
        }"
        role="tooltip"
      >
        <textarea :placeholder="placeholder" bg-transparent text-white w-full rows="5" :value="modelValue" @input="e => emit('update:modelValue', (e.target as HTMLTextAreaElement).value)" />
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
