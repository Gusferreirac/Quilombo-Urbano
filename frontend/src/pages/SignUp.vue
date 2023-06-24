<template>
  <div>
    <q-page style="background: #ff8400; overflow: hidden; position: relative">
      <div class="row" style="height: 100%; width: 100%">
        <q-card
          square
          class="shadow-0"
          style="
            min-width: 800px;
            max-width: 100%;
            background: inherit;
            margin-left: auto;
            margin-top: 100px;
            margin-bottom: 100px;
          "
        >
          <q-card-section>
            <h4 class="jaldi-bold text-center text-bold text-white">
              CADASTRE-SE
            </h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pb-lg">
              <q-input
                outlined
                clearable
                standout="bg-white text-black"
                v-model="username"
                type="text"
                label="Nome"
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
              </q-input>
              <q-input
                outlined
                clearable
                standout="bg-white text-black"
                v-model="cpf"
                type="text"
                label="CPF"
                mask="###.###.###-##"
                unmasked-value
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
              </q-input>
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
              <q-input
                outlined
                clearable
                standout="bg-white text-black"
                v-model="phone"
                type="tel"
                label="Telefone"
                mask="(##)#####-####"
                unmasked-value
                :rules="[(val) => !!val || 'Campo obrigatório']"
                bg-color="white"
              >
              </q-input>
              <div class="row">
                <q-input
                  style="width: 75%; margin-right: auto"
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="address"
                  type="text"
                  label="Endereço"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-input>
                <q-input
                  style="width: 20%; float: right"
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="addressNumber"
                  type="text"
                  label="Número"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-input>
              </div>
              <div class="row">
                <q-select
                  style="width: 20%; margin-right: auto"
                  outlined
                  standout="bg-white text-black"
                  v-model="addressState"
                  type="text"
                  label="Estado"
                  :options="estados"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-select>
                <q-input
                  style="width: 75%; float: right"
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="addressCity"
                  type="text"
                  label="Cidade"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-input>
              </div>
              <q-select
                outlined
                standout="bg-white text-black"
                v-model="activities"
                label="Atividades"
                bg-color="white"
              ></q-select>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="quilombo_brown"
              class="full-width text-white"
              label="Cadastrar"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <router-link to="/inicio/entrar"
              ><p class="text-white">Já possuo conta</p></router-link
            >
          </q-card-section>
        </q-card>
        <div style="margin-left: auto">
          <img
            src="../assets/quilombo.png"
            alt=""
            style="height: 100%; width: 100%; object-fit: cover"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignInPage',
  data() {
    return {
      username: null,
      cpf: null,
      email: null,
      password: null,
      phone: null,
      address: null,
      addressNumber: null,
      addressState: null,
      addressCity: null,
      activities: null,
      estados: [
        'Acre',
        'Alagoas',
        'Amapá',
        'Amazonas',
        'Bahia',
        'Ceará',
        'Distrito Federal ',
        'Espírito Santo',
        'Goiás',
        'Maranhão',
        'Mato Grosso',
        'Mato Grosso do Sul',
        'Minas Gerais',
        'Pará',
        'Paraíba',
        'Paraná',
        'Pernambuco',
        'Piauí',
        'Rio de Janeiro',
        'Rio Grande do Norte',
        'Rio Grande do Sul ',
        'Rondônia',
        'Roraima',
        'Santa Catarina ',
        'São Paulo',
        'Sergipe',
        'Tocantins',
      ],
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
