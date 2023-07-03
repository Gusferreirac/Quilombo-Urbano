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
              margin: auto;
            "
          >
            <q-card-section>
              <h4 class="jaldi-bold text-center text-bold text-white">
                CADASTRAMENTO DE ATIVIDADES
              </h4>
            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pb-lg">
                <q-input
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="projectName"
                  type="text"
                  label="Nome do projeto"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-input>
                <q-input
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="ownerName"
                  type="text"
                  label="Nome do responsável"
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
                  label="Email do responsável"
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
                <q-input
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="projectDescription"
                  type="textarea"
                  label="Faça uma pequena apresentação sobre o projeto"
                  mask="(##)#####-####"
                  unmasked-value
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-input>
                <q-input
                  outlined
                  clearable
                  standout="bg-white text-black"
                  v-model="numMembers"
                  type="number"
                  label="Número de membros do projeto"
                  :rules="[(val) => !!val || 'Campo obrigatório']"
                  bg-color="white"
                >
                </q-input>
                <p class="jaldi-bold text-white" style="font-size: 30px;">Seu projeto é</p>
                <div class="q-pa-lg jaldi text-white" style="font-size: 17px;">
                    <q-option-group
                    v-model="selectedProject"
                    :options="projectType"
                    />
                </div>
                <p class="jaldi-bold text-white" style="font-size: 30px;">A constância do seu projeto de atuação é</p>
                <div class="q-pa-lg jaldi text-white" style="font-size: 17px;">
                    <q-option-group
                    v-model="selectedDate"
                    :options="dateType"
                    />
                </div>
                <p class="jaldi-bold text-white" style="font-size: 30px;">O público alvo do projeto é</p>
                <div class="q-pa-lg jaldi text-white" style="font-size: 17px;">
                    <q-option-group
                    v-model="selectedPublic"
                    :options="publicType"
                    />
                </div>
                <p class="jaldi-bold text-white" style="font-size: 30px;">Selecione os horários</p>
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
          </q-card>
        </div>
      </q-page>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ActivityForm',
    data() {
      return {
        projectName: null,
        ownerName: null,
        numMembers: 0,
        email: null,
        phone: null,
        projectDescription: null,
        selectedProject: ref('independente'),
        selectedDate: ref('2_7'),
        selectedPublic: ref('todos'),
        projectType: [
        {
          label: 'Independente',
          value: 'independente'
        },
        {
          label: 'De extensão',
          value: 'extensão'
        },
        {
          label: 'Voluntário',
          value: 'voluntário'
        },
        {
          label: 'Financiado',
          value: 'financiado'
        }
        ],
        dateType: [
        {
          label: 'Duas vezes na semana',
          value: '2_7'
        },
        {
          label: 'Uma vez na semana',
          value: '1_7'
        },
        {
          label: 'De 15 em 15 dias',
          value: '15_15'
        },
        {
          label: 'Uma vez por mês',
          value: '1_30'
        },
        {
          label: 'Pontual',
          value: '1x'
        }
      ],
      publicType: [
        {
          label: 'Livre para todos',
          value: 'todos'
        },
        {
          label: 'Crianças',
          value: 'criancas'
        },
        {
          label: 'Adolescentes',
          value: 'adolescentes'
        },
        {
          label: 'Mulheres',
          value: 'mulheres'
        },
        {
          label: '3ª idade',
          value: 'idosos'
        },
        
      ]
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
  