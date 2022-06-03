<template>
<div id="containter">
  <nuxt-link to="/">
    <div id="backButton">Back to Home</div>
  </nuxt-link>
  <div id="contactSheet">
    <div id="portrait"  :style="image"></div>
    <div id="textColumn">
      <h1>About</h1>
      <p>
        I work at the intersection of design, development,
        and experimental technologies, on everything from an
        AR walking tour platform, to a gestural interface for
        theatrical lights, to a web-based teaching tool for
        air quality data, to a Broadway AR performance.<br><br>
        I have a depth of experience, both academic and professional, in UX design,
        mobile app development (Swift and React Native), and web development (React and Vue).<br><br>
        I am currently undertaking my post-grad job search (graduated mid-May 2022), and would love to find
        a place where I can apply the variety of skills I've learned on new and exciting projects.
      </p>
      <h1>Contact</h1>
      <div class="contactMethod">
        <div class="label">Email</div>
        <a href ="mailto:contact@ethanprintz.com" class="text link" target="_blank">
          <span data-content="contact@ethanprintz.com">
            contact@ethanprintz.com
          </span>
        </a>
      </div>
      <div class="contactMethod">
        <div class="label">Github</div>
        <a href ="https://github.com/EthanPrintz" class="text link" target="_blank">
          <span data-content="@ethanprintz">
            @ethanprintz
          </span>
        </a>
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
  /* Mobile */
  @media only screen and (max-aspect-ratio: 4/5){
    flex-direction: column;
    #portrait{
      width: 100%;
      height: 50%;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
    }
    #textColumn{
      width: 100%;
      height: 50%;
      p{
        font-size: 1rem;
      }
      h1{
        font-size: 1.6rem;
      }
    }
  }
  /* Mid */
  @media only screen and (min-aspect-ratio: 4/5) and (max-aspect-ratio: 3/2){
    flex-direction: row;
    #portrait{
      width: 40%;
      height: 100%;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 1rem;
    }
    #textColumn{
      width: 60%;
      height: 100%;
      p{
        font-size: 1.05rem;
      }
      h1{
        font-size: 1.8rem;
      }
    }
  }
  /* Desktop */
  @media only screen and (min-aspect-ratio: 3/2){
    flex-direction: row;
    #portrait{
      width: 40%;
      height: 100%;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 1rem;
    }
    #textColumn{
      width: 60%;
      height: 100%;
      p{
        font-size: 1.1rem;
      }
      h1{
        font-size: 2rem;
      }
    }
  }
  #portrait{
    background-size: cover;
    background-position: center;
  }
  #textColumn{
    h1{
      color: rgb(44, 44, 44);
      padding: 1.2rem 2rem 0.4rem 2rem;
    }
    p{
      font-weight: 600;
      padding: 0 2rem 1.2rem 2rem;
    }
    /* Adapted from https://codepen.io/kathykato/pen/zYYRGRQ */
    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-style: italic;
    }
    .link {
      position: relative;
      transition: clip-path 300ms ease;
      &:hover span::before, &:focus span::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
      span {
        position: relative;
        display: inline-block;
        color: #6161b9;
        &::before {
          position: absolute;
          content: attr(data-content);
          color: #5858a1;
          text-decoration: underline;
          text-decoration-color: #5858a1;
          clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
          transition: clip-path 300ms ease;
        }
      }
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
