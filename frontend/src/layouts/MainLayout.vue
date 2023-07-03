<template>
  <q-layout>
    <!-- <q-header reveal elevated>
      <q-toolbar>
        <a
          href="/"
          flat
          class="jaldi-bold text-white"
          style="font-size: 25px; padding: 20px; text-decoration: none"
        >
          QUILOMBO URBANO
        </a>
        <q-space />
        <q-tabs
          shrink
          v-if="isMainPage"
          style="font-size: 17px"
          class="jaldi-bold"
        >
          <q-tab name="about">Sobre</q-tab>
          <q-tab name="history">História</q-tab>
          <q-tab name="space">Espaço</q-tab>
          <q-tab name="join">Participe</q-tab>
          <q-tab name="gallery">Galeria</q-tab>
          <q-tab name="contact">Contato</q-tab>
        </q-tabs>
        <q-space />
        <a
          href="/inicio/entrar"
          class="jaldi-bold text-white"
          style="padding: 20px; text-decoration: none; font-size: 20px"
        >
          Entrar
        </a>
        <q-separator
          dark
          vertical
          inset
          style="margin-top: 20px; margin-bottom: 20px"
        />
        <a
          href="/inicio/cadastro"
          class="jaldi-bold text-white"
          style="padding: 20px; text-decoration: none; font-size: 20px"
        >
          Cadastrar
        </a>
      </q-toolbar>
    </q-header> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
// import { defineComponent } from 'vue';

// export default defineComponent({
//   name: 'MainLayout',
//   data() {
//     return {
//       isMainPage: false,
//     };
//   },
//   mounted() {
//     var currentUrl = window.location.pathname;
//     if (currentUrl == '/inicio' || currentUrl == '/inicio/') {
//       this.isMainPage = true;
//     }
//   },
//   methods: {},
// });
</script>
