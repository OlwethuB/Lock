<template>
    <!-- <router-link :to="{ name: 'project', params: { id: project.id } }"> -->
      <div class="box ml-2 mb-5 m-lg-3 p-lg-5 col-11 col-lg-3 col-sm-6">
            <img :src="project.image" :alt="project.name" class="image" />
            <div class="middle">
            <div class="textbox p-5 m-5">
                <h1 class="text">{{ project.name }}</h1>
                <h2 class="text">{{ project.desc }}</h2>
                <h2 class="text"> ~ {{ project.type }} ~ </h2>
                <a :href="project.github" target="_blank"><button class="But">GitHub</button></a>
                <a :href="project.live" target="_blank"><button class="But">View Site</button></a>
            </div>
            </div>    
        </div>
    <!-- </router-link> -->
  </template>
  
  <script>
  export default {
    data:{
        project:[
            {}
        ]
    }
    };
  </script>
  
  <style>
  .box {
    position: relative;
  width: 400px;
  height: 200px;
  background-color: transparent;
  }

  @media (max-width: 800px) {
    .box{
      width: 300px;
      height: 150px;
    }
  }


  
  .image {
    opacity: 1;
    width: 300px;
    height: 200px;
    background-size: cover;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  @media (max-width: 800px){
    .image{
      width: 250px;
      height: 200px;
    }
  }
  
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 70%;
    left: 45%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    width: 290px;
  }
  @media (max-width: 750px){
    .middle{
      left: 20%;
      top:60%;
    }
  }
  
  .box:hover .image {
    opacity: 0.3;
  }
  
  .box:hover .middle {
    opacity: 1;
  }
  
  .textbox {
    color: #000;
    padding: 20px ;
    margin: 30px;
    width: 300px;
    height: auto;
  }

  @media (max-width: 750px){
    .textbox{
      height: 200px;
    }
  }
  
  .textbox h1{
      font-size: 20px;
  }
  .textbox h2{
      font-size: 16px;
  }
  
  
  .But{
    background-color: #123f92;
    font-size: 14px;
    border: 2px solid ;
    border-radius: 10px;
    margin: 5px;
  }
  
  
  
  </style>
  