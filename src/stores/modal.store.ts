import type { ModalAlertVariant } from '@/components/modal/ModalAlert.vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ModalAlert = {
  open: boolean
  title: string
  body?: string
  variant: ModalAlertVariant
}

export const useModalStore = defineStore('modal', () => {
  const modal = ref<ModalAlert>({
    open: false,
    title: 'This is an alert modal',
    variant: 'success',
  })

  const showModal = (title: string, variant: ModalAlertVariant, body?: string) => {
    if (!modal.value) {
      return
    }

    modal.value.title = title
    modal.value.body = body
    modal.value.variant = variant
    modal.value.open = true
  }

  const success = (title: string, body?: string) => {
    showModal(title, 'success', body)
  }

  const error = (title: string, body?: string) => {
    showModal(title, 'error', body)
  }

  const close = () => {
    if (!modal.value) {
      return
    }

    modal.value.title = ''
    modal.value.body = ''
    modal.value.variant = 'success'
    modal.value.open = false
  }

  return { modal, success, error, close }
})
