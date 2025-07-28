<script setup lang="ts">
import { reactive, ref } from 'vue'

// 💬 Typ pre náš formulár
interface ContactForm {
  name: string
  email: string
  message: string
}

// 💡 Reactive formulár s typom
const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
})

// UI stav
const loading = ref(false)
const success = ref(false)

// 📨 Odoslanie formulára
const submitForm = async () => {
  loading.value = true
  success.value = false
  try {
    const res = await $fetch('/api/send-contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        message: form.message
      }
    })

    if ((res as { success: boolean }).success) {
      success.value = true
    }
  } catch (err) {
    console.error('Chyba pri odosielaní:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="mt-12" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="form.name" label="Meno" required />
          <v-text-field v-model="form.email" label="Email" required type="email" />
          <v-textarea v-model="form.message" label="Správa" rows="4" />
          <v-btn :loading="loading" color="secondary" class="mt-4" type="submit">
            Odoslať
          </v-btn>

          <v-alert v-if="success" type="success" class="mt-4">
            Správa bola úspešne odoslaná!
          </v-alert>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
