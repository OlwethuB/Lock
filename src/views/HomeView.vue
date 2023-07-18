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
        <span class="logo"><img src="../assets/White_Noback.png" alt="logo"> Lock Save </span>
        <!-- center stuff -->
        <ul class="nav m-auto justify-content-center">
          <li class="nav-item" :title="home">
            <router-link id="links" class="nav-link" to="/">
              <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" colors="primary:#fff" state="hover-3" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item" :title="vault">
            <router-link id="links" class="nav-link" to="/vault">
              <lord-icon src="https://cdn.lordicon.com/rzsdhkun.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item" :title="calc">
            <router-link id="links" class="nav-link" to="/calc"
              ><lord-icon src="https://cdn.lordicon.com/qtldxoay.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item" :title="budget">
            <router-link id="links" class="nav-link" to="/budget">
              <lord-icon src="https://cdn.lordicon.com/usxfmtjg.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item" :title="vids">
            <router-link id="links" class="nav-link" to="/vid">
              <lord-icon src="https://cdn.lordicon.com/ensnyqet.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item" :title="profile">
            <router-link id="links" class="nav-link" to="/profile">
              <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item" :title="info">
            <router-link id="links" class="nav-link" to="/load">
              <lord-icon src="https://cdn.lordicon.com/dnmvmpfk.json" trigger="hover" colors="primary:#fff" style="width: 30px; height: 30px">
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
                  <p>Stay strong and track your progress.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ2keQP_A759-s48g3oovMjG0D2hPlxt0p3WGsrvMfTt6ro0TKxhn4Rx5X_vr_asCo7Q&usqp=CAU" class="d-block w-100" alt="...">
                <div class="centered">
                  <p> ‘Start Small. Think Big,’ with a short- term goal. The truth is, people save more successfully when they set a short-term goal. </p>
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
        <div class="col Reports">
          <!-- Reports on your budget and savings... -->
          <h1>Today</h1>
          <table> 
            <tr>
              <th> Great work on saving !</th>
            </tr>
            <tr>
              <td>Logo</td>
              <td>
                <h6>Expense Payments</h6>
                <p>Deposits</p>
              </td>
              <td>+ R576.00</td>
            </tr>
            <tr>
              <td>Logo</td>
              <td>Utility Bills</td>
              <td>- R359.00</td>
            </tr>
            <tr>
              <td>Logo</td>
              <td>Interest rate </td>
              <td>+ 12%</td>
            </tr>
          </table>
          <!-- Progress bar -->
          <div class="container">
            <div class="row">
              <p class="col m-5" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style="--value: 67"> Savings</p>
              <p class="col m-5" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="--value: 30"> Goals </p>
              <p class="col m-5" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="--value: 85"> Bills On Time</p>
            </div>
          </div>
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
  data(){
    return{
      home:"Home",
      vault:"Vault",
      calc:"Calculator",
      budget:"Budget",
      vids:"Videos",
      profile:"Profile",
      info:""
    }
  }
};

</script>

<style>
/* intro */
.Hero {
  min-height: 80vh;
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

.logo{
color: #fff;
font-size: 30px;
font-family: 'Times New Roman', Times, serif;
}
.logo img{
  width: 30px;
  height: 30px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.Reports{
  color: #fff;
}

/*INFO SECTION - CIRCLE GRAPH*/
@keyframes progress {
  0% { --percentage: 0; }
  100% { --percentage: var(--value); }
}

@property --percentage {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

[role="progressbar"] {
  --percentage: var(--value);
  --primary:  #26c485;
  --secondary: #1c1f22;
  --size: 30px;
  animation: progress 2s 0.5s forwards;
  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
}

[role="progressbar"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(var(--primary) calc(var(--percentage) * 1%), var(--secondary) 0);
  mask: radial-gradient(white 55%, transparent 0);
  mask-mode: alpha;
  -webkit-mask: radial-gradient(#0000 55%, #000 0);
  -webkit-mask-mode: alpha;
}

[role="progressbar"]::after {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
  font-family: Helvetica, Arial, sans-serif;
  /* font-size: calc(var(--size) / 5); */
  color: var(--primary);
}


</style>
