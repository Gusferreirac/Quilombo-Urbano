<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <router-link
          to="/"
          flat
          class="jaldi-bold text-white"
          style="font-size: 25px; padding: 20px; text-decoration: none"
        >
          QUILOMBO URBANO
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
