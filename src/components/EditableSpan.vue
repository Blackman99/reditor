<script setup>
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom'

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const container = ref(null)
const triggerDom = ref(null)
const arrowDom = ref(null)
const editorDom = ref(null)

const top = ref('0')
const left = ref('0')
const showEditor = ref(false)

onClickOutside(container, () => {
  showEditor.value = false
})

async function recomputePos() {
  if (!triggerDom.value || !editorDom.value || !arrowDom.value)
    return
  const { x, y, placement, middlewareData } = await computePosition(triggerDom.value, editorDom.value, {
    strategy: 'fixed',
    placement: 'top',
    middleware: [
      offset(6),
      flip(),
      shift({ padding: 5 }),
      arrow({ element: arrowDom.value }),
    ],
  })
  left.value = `${x}px`
  top.value = `${y}px`
  const { x: arrowX, y: arrowY } = middlewareData.arrow

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]]

  const arrowStyle = {
    left: arrowX != null ? `${arrowX}px` : '',
    top: arrowY != null ? `${arrowY}px` : '',
    right: '',
    bottom: '',
    [staticSide]: '-4px',
  }
  Object.assign(arrowDom.value.style, arrowStyle)
}

async function handleShow() {
  showEditor.value = true
  await recomputePos()
  editorDom.value.querySelector('textarea')?.focus()
}

onMounted(recomputePos)
</script>

<template>
  <div ref="container" class="relative inline-block min-w-5">
    <pre
      ref="triggerDom"
      font-serif m-0
      :class="{
        'text-gray-4': !modelValue,
      }"
      @click="handleShow"
    >{{ modelValue || 'Enter something' }}</pre>
    <div
      ref="editorDom"
      z-3
      bg-black
      p-4 rounded-2 shadow-md
      class="editor"
      :class="{
        show: showEditor,
      }"
      :style="{
        left,
        top,
      }"
      role="tooltip"
    >
      <textarea placeholder="Enter something" bg-transparent text-white w-full rows="5" :value="modelValue" @input="e => emit('update:modelValue', e.target.value)" />
      <span ref="arrowDom" bg-inherit absolute class="rotate-45 w-[8px] h-[8px]" />
    </div>
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
</style>
