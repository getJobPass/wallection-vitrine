<template>
  <div>
    <button @click="openModal" class="inline-block">
      <slot />
    </button>
    
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="closeModal">
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4" @click.stop>
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h3>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input v-model="form.name" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="form.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Entreprise</label>
            <input v-model="form.company" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea v-model="form.message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          </div>
          <div class="flex gap-3">
            <button type="submit" class="flex-1 bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-md font-medium">
              Envoyer
            </button>
            <button type="button" @click="closeModal" class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const submitForm = () => {
  // Generate email content
  const subject = `Contact Wallection - ${form.value.name}`
  const body = `
Nom: ${form.value.name}
Email: ${form.value.email}
Entreprise: ${form.value.company}

Message:
${form.value.message}
  `
  
  // Create mailto link
  const mailtoLink = `mailto:paul.bugeon@jobpass.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  
  // Open email client
  window.location.href = mailtoLink
  
  // Close modal
  closeModal()
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    company: '',
    message: ''
  }
}
</script>
