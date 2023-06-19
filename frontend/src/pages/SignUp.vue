<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: #ff8400"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square style="width: 600px; height: 80%; background: inherit">
          <q-card-section>
            <h4 class="text-h5 text-white q-my-md">Cadastrar</h4>
            <div
              class="absolute-bottom-right q-pr-md"
              style="transform: translateY(50%)"
            >
              <q-btn fab icon="close" color="secondary" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input
                outlined
                clearable
                v-model="username"
                type="username"
                label="Nome"
              >
              </q-input>
              <q-input
                outlined
                clearable
                v-model="cpf"
                type="text"
                label="CPF"
                mask="###.###.###-##"
                unmasked-value
              >
              </q-input>
              <q-input
                outlined
                clearable
                v-model="email"
                type="email"
                label="Email"
              >
              </q-input>
              <q-input
                outlined
                clearable
                v-model="password"
                type="password"
                label="Senha"
              >
              </q-input>
              <q-input
                outlined
                clearable
                v-model="phone"
                type="tel"
                label="Telefone"
                mask="(##)#####-####"
                unmasked-value
              >
              </q-input>
              <q-input
                outlined
                clearable
                v-model="address"
                type="text"
                label="Endereço"
              >
              </q-input>
              <q-select
                outlined
                v-model="activities"
                label="Atividades"
              ></q-select>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="secondary"
              class="full-width text-white"
              label="Cadastrar"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Já possuo conta</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script></script>

<style></style>
