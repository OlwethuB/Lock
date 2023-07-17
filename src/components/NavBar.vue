<template>
     <header  class="sticky-top">
    <nav id="header" class="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="https://i.postimg.cc/Z5JfwqLW/logo.jpg" alt="logo" class="logo"  loading="eager"/>
        </router-link>
        <!-- center stuff -->
        <ul class="nav m-auto justify-content-center">
          <li class="nav-item">
            <router-link to="/" id="links" class="nav-link active" aria-current="page"><lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="click" colors="primary:#fff" style="width:25px;height:25px"></lord-icon>
</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/about">About Me</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/project">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/testi">Testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>