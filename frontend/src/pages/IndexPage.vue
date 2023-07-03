<template>
  <q-layout>
    <q-header reveal elevated>
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
        <q-tabs shrink style="font-size: 17px" class="jaldi-bold">
          <q-tab
            name="about"
            onclick="document.getElementById('about').scrollIntoView();"
            >Sobre</q-tab
          >
          <q-tab
            name="history"
            onclick="document.getElementById('history').scrollIntoView();"
            >História
          </q-tab>
          <q-tab
            name="space"
            onclick="document.getElementById('space').scrollIntoView();"
            >Espaço</q-tab
          >
          <q-tab
            v-if="!isLogged"
            name="join"
            onclick="document.getElementById('join').scrollIntoView();"
            >Participe</q-tab
          >
          <q-tab
            name="gallery"
            onclick="document.getElementById('gallery').scrollIntoView();"
            >Galeria</q-tab
          >
          <q-tab
            name="contact"
            onclick="document.getElementById('contact').scrollIntoView();"
            >Contato</q-tab
          >
        </q-tabs>
        <q-space />
        <div v-if="!isLogged" class="row">
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
      </div>
      <div v-else class="row">
        <p
          class="jaldi-bold text-white"
          style="margin: auto; padding: 20px; text-decoration: none; font-size: 20px"
        >
          Gustavo
      </p>
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
          <span class="material-icons">
            account_circle
          </span>
        </a>
      </div>
      </q-toolbar>
    </q-header>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title
          class="jaldi-bold"
          style="font-size: 25px; padding: 20px; text-decoration: none"
          >QUILOMBO URBANO</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>
    <q-page style="background: #ff8400; position: relative; margin-top:40px">
      <div class="row" style="height: 100%; width: 100%; position: absolute;">
        <div style="margin: auto; width: 40%; margin-bottom: 300px;">
          <h1 class="jaldi-bold text-white">TÍTULO</h1>
          <h4 class="jaldi-bold text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
            mattis nunc. Vestibulum lacinia enim.
          </h4>
        </div>
        <div style="margin-left: auto; width: 50%">
          <img
            src="../assets/quilombo.png"
            alt=""
            style="height: 100%; width: 100%; object-fit: cover"
          />
        </div>
      </div>
    </q-page>
    <q-page v-if="isLogged" style="background-color: #f6f1e9; overflow: hidden; ">
      <img src="../assets/Backgrounds/background1.png" alt="" style="width: fit-content;">
      <div class="absolute-center" style="text-align: center;">
      <h4 class="jaldi-bold" style="color: white; width: 400px;">
        Acesse a área do estudante
          para obter informações do cursos
          em andamento.
          </h4>
          <q-btn
            unelevated
            size="lg"
            color="quilombo_brown"
            class="text-white"
            label="Área do estudante"
            href="/inicio/cadastro"
          />
        </div>
    </q-page>
    <q-page id="about" style="background-color: #f6f1e9; overflow: auto">
      <div style="width: 40%; float: left">
        <img
          src="../assets/membros1.png"
          alt="Membros Quilombo Urbano"
          style="width: 100%"
        />
      </div>
      <div style="width: 50%; float: right; margin-right: 10%">
        <h1 class="jaldi-bold" style="color: #ff8400">SOBRE</h1>
        <h5 class="jaldi-bold" style="color: #4f200d">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
          lectus a nibh ultrices sodales ac id tortor. Aliquam vel arcu tempor,
          posuere mi sed, tempus augue. Etiam tempus orci vel sapien dictum,
          vitae venenatis ex auctor. Ut placerat quam at dapibus facilisis.
          Etiam ullamcorper nunc maximus est vulputate posuere. Donec quis
          gravida augue. Fusce venenatis eget tellus eu maximus. Donec egestas
          lectus id dui gravida euismod. Suspendisse feugiat est mi, vel
          sagittis magna consectetur tempus. Sed tempor metus sit amet quam
          bibendum dignissim. Etiam a odio vel odio pellentesque iaculis.
        </h5>
      </div>
    </q-page>
    <q-page id="history" style="background-color: #f6f1e9; overflow: auto">
      <div style="width: 50%; float: left; margin-left: 10%">
        <h1 class="jaldi-bold" style="color: #ff8400">HISTÓRIA</h1>
        <h5 class="jaldi-bold" style="color: #4f200d">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
          lectus a nibh ultrices sodales ac id tortor. Aliquam vel arcu tempor,
          posuere mi sed, tempus augue. Etiam tempus orci vel sapien dictum,
          vitae venenatis ex auctor. Ut placerat quam at dapibus facilisis.
          Etiam ullamcorper nunc maximus est vulputate posuere. Donec quis
          gravida augue. Fusce venenatis eget tellus eu maximus. Donec egestas
          lectus id dui gravida euismod. Suspendisse feugiat est mi, vel
          sagittis magna consectetur tempus. Sed tempor metus sit amet quam
          bibendum dignissim. Etiam a odio vel odio pellentesque iaculis.
        </h5>
      </div>
      <div style="width: 40%; float: right">
        <img
          src="../assets/membros2.png"
          alt="Membros Quilombo Urbano"
          style="width: 100%"
        />
      </div>
    </q-page>
    <q-page id="space" style="background-color: #f6f1e9; overflow: auto">
      <h1 class="jaldi-bold" style="color: #ff8400; text-align: center">
        ESPAÇO
      </h1>
      <div class="row" style="margin-left: 30px">
        <img
          src="../assets/Space/principal.png"
          alt="Salão Principal"
          style="width: 350px; object-fit: contain"
        />
        <div class="space-info" id="left">
          <h4 class="jaldi-bold" style="color: #ff8400">Salão Principal</h4>
          <h6 style="color: #4f200d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            lectus a nibh ultrices sodales ac id tortor. Aliquam vel arcu
            tempor, posuere mi sed, tempus augue. Etiam tempus orci vel sapien
            dictum, vitae venenatis ex auctor. Ut placerat quam at dapibus
            facilisis. Etiam ullamcorper nunc maximus est vulputate posuere.
            Donec quis gravida augue. Fusce venenatis eget tellus eu maximus.
          </h6>
        </div>
      </div>
      <div class="row" style="margin-left: 30px">
        <div class="space-info" id="right">
          <h4 class="jaldi-bold" style="color: #ff8400">Biblioteca</h4>
          <h6 style="color: #4f200d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            lectus a nibh ultrices sodales ac id tortor. Aliquam vel arcu
            tempor, posuere mi sed, tempus augue. Etiam tempus orci vel sapien
            dictum, vitae venenatis ex auctor. Ut placerat quam at dapibus
            facilisis. Etiam ullamcorper nunc maximus est vulputate posuere.
            Donec quis gravida augue. Fusce venenatis eget tellus eu maximus.
          </h6>
        </div>
        <img
          src="../assets/Space/biblioteca.png"
          alt="Biblioteca"
          style="width: 350px; object-fit: contain"
        />
      </div>
      <div class="row" style="margin-left: 30px">
        <img
          src="../assets/Space/cozinha.png"
          alt="Cozinha"
          style="width: 350px; object-fit: contain"
        />
        <div class="space-info" id="left">
          <h4 class="jaldi-bold" style="color: #ff8400">Cozinha</h4>
          <h6 style="color: #4f200d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            lectus a nibh ultrices sodales ac id tortor. Aliquam vel arcu
            tempor, posuere mi sed, tempus augue. Etiam tempus orci vel sapien
            dictum, vitae venenatis ex auctor. Ut placerat quam at dapibus
            facilisis. Etiam ullamcorper nunc maximus est vulputate posuere.
            Donec quis gravida augue. Fusce venenatis eget tellus eu maximus.
          </h6>
        </div>
      </div>
      <div class="row" style="margin-left: 30px">
        <div class="space-info" id="right">
          <h4 class="jaldi-bold" style="color: #ff8400">Quadra</h4>
          <h6 style="color: #4f200d">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            lectus a nibh ultrices sodales ac id tortor. Aliquam vel arcu
            tempor, posuere mi sed, tempus augue. Etiam tempus orci vel sapien
            dictum, vitae venenatis ex auctor. Ut placerat quam at dapibus
            facilisis. Etiam ullamcorper nunc maximus est vulputate posuere.
            Donec quis gravida augue. Fusce venenatis eget tellus eu maximus.
          </h6>
        </div>
        <img
          src="../assets/Space/quadra.png"
          alt="Quadra"
          style="width: 350px; object-fit: contain"
        />
      </div>
    </q-page>
    <q-page v-if="!isLogged" id="join" style="background-color: #f6f1e9; overflow: auto">
      <div class="row">
        <div style="width: 40%">
          <img
            src="../assets/Backgrounds/background-student.png"
            alt="Membros Quilombo Urbano"
            style="width: 100%"
          />
        </div>
        <div style="width: 40%; margin: auto">
          <h4 class="jaldi-bold" style="color: #4f200d; text-align: justify">
            Se inscreva no projeto e participe de diversas atividades, dinâmicas
            e oficinas semanais!
          </h4>
          <q-btn
            unelevated
            size="lg"
            color="quilombo_brown"
            class="text-white full-width"
            label="Inscreva-se"
            href="/inicio/cadastro"
          />
        </div>
      </div>
    </q-page>
    <q-page v-if="!isLogged" style="background-color: #f6f1e9; overflow: auto">
      <div class="row">
        <div style="width: 40%; margin: auto">
          <h4 class="jaldi-bold" style="color: #4f200d; text-align: justify">
            Cadastre seu curso e tenha a oportunidadede ensinar diversas
            pessoas!
          </h4>
          <q-btn
            unelevated
            size="lg"
            color="quilombo_brown"
            class="text-white full-width"
            label="Cadastrar Atividade"
            href="inicio/cadastro_atividade"
          />
        </div>
        <div style="width: 40%">
          <img
            src="../assets/Backgrounds/background-teacher.png"
            alt="Membros Quilombo Urbano"
            style="width: 100%"
          />
        </div>
      </div>
    </q-page>
    <q-page id="gallery" style="background-color: #f6f1e9; overflow: auto">
      <h1 class="jaldi-bold" style="color: #ff8400; text-align: center">
        GALERIA
      </h1>
      <div style="width: 350px; margin: auto">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="../assets/Gallery/gallery1.png"
          />
          <q-carousel-slide
            :name="2"
            img-src="../assets/Gallery/gallery2.png"
          />
          <q-carousel-slide
            :name="3"
            img-src="../assets/Gallery/gallery3.png"
          />
          <q-carousel-slide
            :name="4"
            img-src="../assets/Gallery/gallery4.png"
          />
          <q-carousel-slide
            :name="5"
            img-src="../assets/Gallery/gallery5.png"
          />
          <q-carousel-slide
            :name="6"
            img-src="../assets/Gallery/gallery6.png"
          />
          <q-carousel-slide
            :name="7"
            img-src="../assets/Gallery/gallery7.png"
          />
          <q-carousel-slide
            :name="8"
            img-src="../assets/Gallery/gallery8.png"
          />
        </q-carousel>
      </div>
      <div style="text-align: center">
        <img src="../assets/asset-gallery.png" alt="" />
      </div>
    </q-page>
    <q-page id="contact" style="background-color: #f6f1e9; overflow: auto">
      <div class="row q-pt-xl" style="margin-bottom: 200px;">
        <div style="width: 40%; margin-left: 40px">
          <h2 class="jaldi-bold" style="color: #ff8400">Fale Conosco</h2>
          <p class="jaldi" style="font-size: 17px; color: #4f200d">
            Gostaria de entrar em contato conosco? Só preencher o formulario ao
            lado que entraremos em contato!
          </p>
          <p class="jaldi" style="font-size: 17px; color: #4f200d">
            Caso queira pode entrar em contato pelo nosso email ou pelas nossas
            redes sociais.
          </p>
          <div class="logo-wrapper">
            <a href="" style="margin-right: 40px"
              ><img src="../assets/Logos/instagram.png" alt="Instagram"
            /></a>
            <a href="" style="margin-right: 40px"
              ><img src="../assets/Logos/youtube.png" alt="Youtube"
            /></a>
            <a href="" style="margin-right: 40px"
              ><img src="../assets/Logos/facebook.png" alt="Facebook"
            /></a>
            <a href=""
              ><img src="../assets/Logos/twitter.png" alt="Twitter"
            /></a>
          </div>
        </div>
        <div
          style="
            width: 50%;
            margin-top: 30px;
            margin-left: auto;
            margin-right: 40px;
          "
        >
          <q-form>
            <q-input
              outlined
              standout="bg-white text-black"
              v-model="name"
              type="text"
              label="Nome"
              bg-color="white"
              style="margin-bottom: 15px"
            >
            </q-input>
            <q-input
              outlined
              standout="bg-white text-black"
              v-model="email"
              type="email"
              label="E-mail"
              bg-color="white"
              style="margin-bottom: 15px"
            >
            </q-input>
            <q-input
              outlined
              standout="bg-white text-black"
              v-model="phone"
              type="tel"
              label="Telefone"
              mask="(##)#####-####"
              unmasked-value
              bg-color="white"
              style="margin-bottom: 15px"
            >
            </q-input>
            <q-input
              outlined
              standout="bg-white text-black"
              v-model="email"
              type="textarea"
              label="Mensagem"
              bg-color="white"
              style="margin-bottom: 15px"
            >
            </q-input>
          </q-form>
          <q-btn
            unelevated
            size="lg"
            color="quilombo_orange"
            class="full-width text-white"
            label="Enviar"
          />
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      email: null,
      name: null,
      phone: null,
      isLogged: false,
    };
  },
  methods: {},
});
</script>
<style>
.space-info {
  width: -webkit-calc(100% - 400px);
  width: -moz-calc(100% - 400px);
  width: calc(100% - 400px);
  text-align: justify;
}

#left.space-info {
  margin-left: 20px;
}

#right.space-info {
  margin-right: 20px;
}

.logo-wrapper {
  text-align: center;
}

.logo-wrapper a {
  width: 100%;
}
</style>
