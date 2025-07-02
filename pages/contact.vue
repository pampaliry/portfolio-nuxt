<template>
  <v-container class="mt-12" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-form>
          <v-text-field label="Meno" required />
          <v-text-field label="Email" required type="email" />
          <v-textarea label="Správa" rows="4" />
          <v-btn color="primary" class="mt-4">Odoslať</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
