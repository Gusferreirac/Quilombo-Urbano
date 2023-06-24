<template>
  <q-page style="background: #ff8400; overflow: hidden; position: relative">
    <div class="row" style="height: 100%; width: 100%; position: absolute">
      <q-card
        class="shadow-0"
        square
        style="
          width: 800px;
          height: fit-content;
          background: inherit;
          margin-left: auto;
          margin-right: auto;
          top: 20%;
        "
      >
        <q-card-section>
          <h4 class="jaldi-bold text-center text-bold text-white">LOGIN</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pb-sm">
            <q-input
              outlined
              clearable
              standout="bg-white text-black"
              v-model="email"
              type="email"
              label="Email"
              :rules="[(val) => !!val || 'Campo obrigatório']"
              bg-color="white"
            >
            </q-input>
            <q-input
              outlined
              clearable
              standout="bg-white text-black"
              v-model="password"
              type="password"
              label="Senha"
              :rules="[(val) => !!val || 'Campo obrigatório']"
              bg-color="white"
            >
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="quilombo_brown"
            class="full-width text-white"
            label="Entrar"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <router-link to="/inicio/cadastro"
            ><p class="text-white">Não possuo conta</p></router-link
          >
        </q-card-section>
      </q-card>
      <div style="float: right">
        <img
          src="../assets/quilombo.png"
          alt=""
          style="height: 100%; width: 100%; object-fit: cover"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignInPage',
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    submitForm() {
      print(A);
    },
  },
});
</script>

<style src="../css/spacing.scss"></style>
