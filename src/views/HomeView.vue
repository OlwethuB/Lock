<template>
  <section class="Hero" id="Hero">
    <div class="">
      <img src="../assets/Blue_NoBack.png" alt="Logo">
      <h1>Lock Save</h1>
    </div>
    <br>
    <div>
      <h1>Welcome Back, *User*</h1>
    </div>
  </section>

  <header class="sticky-top">
    <nav id="header" class="navbar">
      <div class="container">
        <!-- center stuff -->
        <ul class="nav m-auto justify-content-center">
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/">
              <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="click" colors="primary:#fff" state="hover-3" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/V">
              <lord-icon src="https://cdn.lordicon.com/rzsdhkun.json" trigger="click" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/C"
              ><lord-icon src="https://cdn.lordicon.com/qtldxoay.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/B">
              <lord-icon src="https://cdn.lordicon.com/usxfmtjg.json" trigger="click" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/EV">
              <lord-icon src="https://cdn.lordicon.com/ensnyqet.json" trigger="click" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/">
              <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="click" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/">
              <lord-icon src="https://cdn.lordicon.com/dnmvmpfk.json" trigger="click" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- Intro  -->
  <!-- Reports -->
  <section class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- info about saving... -->
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ2keQP_A759-s48g3oovMjG0D2hPlxt0p3WGsrvMfTt6ro0TKxhn4Rx5X_vr_asCo7Q&usqp=CAU" class="d-block w-100" alt="...">
                <div class="centered">
                  <h2>Stay strong and track your progress.</h2>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ2keQP_A759-s48g3oovMjG0D2hPlxt0p3WGsrvMfTt6ro0TKxhn4Rx5X_vr_asCo7Q&usqp=CAU" class="d-block w-100" alt="...">
                <div class="centered">
                  <h3> ‘Start Small. Think Big,’ with a short- term goal. The truth is, people save more successfully when they set a short-term goal. </h3>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ2keQP_A759-s48g3oovMjG0D2hPlxt0p3WGsrvMfTt6ro0TKxhn4Rx5X_vr_asCo7Q&usqp=CAU" class="d-block w-100" alt="...">
                <div class="centered">
                  <p>Treat yourself, but use it as an opportunity to save. Match the cost of your nonessential indulgences in savings. So, for example, if you splurge on a smoothie while out running errands, put the same amount into your savings account.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col">
          <!-- Reports on your budget and savings... -->
        </div>
      </div>
    </div>
  </section>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.Hero {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #26c485, #2caa8a, #32908f, #2e5d81, #2a2a72);
  background-size: 500%; 
  animation: background-img-animation 10s alternate infinite;
}

@keyframes background-img-animation {
  0% {
    background-position: left
  }
  100% {
    background-position: right
  }
}

body {
  background-color: #23292f !important;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
