<template>
  <v-layout row wrap>
    <v-flex>
      <!-- <v-carousel hide-delimiter-background class="px-1">
        <v-carousel-item v-for="slide in slides" :key="slide" :src="slide.src">
          
          <v-row class="fill-height px-5" align="center" justify="center">
            <div class="display-3 montserratbold px-5 white-text">{{ slide.text }}</div>
          </v-row>
      
        </v-carousel-item>
      </v-carousel>-->
      <div class="imagetop"></div>
      <div class="texttop">
        <p
          class="font-weight-bold display-1"
        >We have tailored the best solutions for your project needs.</p>
        <v-btn dark color="#f1b74b">Work With Us</v-btn>
      </div>
      <div class="my-10"></div>
      <v-container>
        <v-layout row wrap>
          <v-card
            class="mx-auto my-auto"
            max-width="300"
            v-for="slide in slides"
            :key="slide.title"
          >
            <v-img class="white--text align-end" height="300px" :src="slide.src"></v-img>
            <v-card-title>{{slide.title}}</v-card-title>
            <v-card-subtitle class="pb-0"></v-card-subtitle>

            <v-card-text class="text--primary">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta facilis earum deserunt ad id tempora, molestiae alias officiis vero qui repellendus quibusdam esse minima consequuntur sequi minus dolor eveniet!</p>
            </v-card-text>

            <v-card-actions>
              <v-btn dark color="orange">
                {{slide.button}}
                <v-icon right>arrow_forward</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data: () => ({
    slides: [
      {
        src:
          "https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        text: "We See What You can Not See",
        title: "Quick Payments",
        button: "Payments"
      },
      {
        src:
          "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "We Have Tailored Solutions For You",
        title: "Easier Job Requests",
        button: "Jobs"
      },
      {
        src:
          "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "We Deliver Great Solutions",
        title: "Rapid Response",
        button: "Contact Us"
      }
    ],
    Jobs: [
      {
        description: "Bank Audit Project",
        client: "Kuukua Hackman-Afful",
        id: "234"
      },
      { description: "Ama Project", client: "Mercy Nelson", id: "235" },
      { description: "Ernest Project", client: "Ama Bainson", id: "236" },
      { description: "Quick Fixes", client: "Kwamena Hammond", id: "237" }
    ]
  }),
  components: {
    //HelloWorld
  }
};
</script>

<style>
.white-text {
  color: white;
}

.imagetop {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url("https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");

  /* Add the blur effect */
  filter: blur(5px);
  -webkit-filter: blur(5px);

  height: 500px;
}

.texttop {
  /*background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); */
  color: white;
  font-weight: bold;
  /*border: 3px solid #f1f1f1;*/
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 70%;
  padding: 20px;
  text-align: center;
}
</style>
