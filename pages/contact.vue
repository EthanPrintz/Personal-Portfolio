<template>
<div id="containter">
  <nuxt-link to="/">
    <div id="backButton">Back to Home</div>
  </nuxt-link>
  <div id="contactSheet">
    <div id="portrait"  :style="image"></div>
    <div id="textColumn">
      <h1>About</h1>
      <p>I am a Junior at New York University pursuing a double major in Interactive Media Arts and Computer Science. 
        For the past four years I've sought to integrate my passions in design, programming, human-computer interaction, 
        and emerging tech into my schoolwork and artwork. </p>
      <h1>Contact</h1>
      <div class="contactMethod">
        <div class="label">Email</div>
        <a href ="mailto:ethanprintz@nyu.edu" class="text">ethanprintz@nyu.edu</a>
      </div>
      <div class="contactMethod">
        <div class="label">Github</div>
        <a href="https://github.com/EthanPrintz" class="text">@ethanprintz</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import portraitImage from "assets/img/portrait-square.jpeg";
export default {
  data() {
    return {
      image: { backgroundImage: `url(${portraitImage})` },
    };
  }
}
</script>

<style lang="scss">
#containter {
  background-color: #e0e0e0;
  color: $primary-text;
  width: 100vw;
  min-height: 100vh;
  font-family: $sans;
}
#contactSheet{
  background-color: white;
  position: absolute;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  #portrait{
    height: 100%;
    width: 40%;
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  #textColumn{
    height: 100%;
    width: 60%;
    h1{
      color: rgb(44, 44, 44);
      padding: 1.2rem 2rem 0.4rem 2rem;
    }
    p{
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0 2rem 1.2rem 2rem;
    }
    .contactMethod{
      display: block;
      padding: 0 2rem 0.3rem 2rem;
      .label{
        display: inline-block;
        font-weight: 600;
        font-size: 1.2rem;
        padding-right: 0.5rem;
      }
      .text{
        display: inline-block;
        font-size: 1.2rem;
      }
    }
  }
}
#backButton{
    position: absolute;
    z-index: 1;
    top: 1.2rem;
    left: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: grey!important;
}
  #backButton:hover{
    border-bottom: 2px solid grey;
  }
</style>