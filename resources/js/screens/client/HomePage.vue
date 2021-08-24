<template>
<div>
  <v-container fluid class="promo">
      <v-content>
          <div class="text-center" style="margin-top:13%">
              <h1 class="display-2">Model X</h1>
              <h1 class="display-1">Plaid</h1>
          </div>
      </v-content>
  </v-container>

    <v-container style="background-color:black;margin-top:-10px;" fill-width fluid>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 white--text font-weight-black ma-10">
                Specifications
            </v-flex>
        </v-layout>
        <v-row style="margin-top:60px">
            <v-col cols="6">
                <v-row>
                    <v-col cols="2">

                    </v-col>
                    <v-col cols="10">
                        <v-img width="100%" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9865e92b-731c-4f1a-9430-e984ee0001ca/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6" class="white--text" style="align-self:center">
                <div class="ml-4" style="width:36%">
                    <span syle="font-size:23px" class="mb-2">
                        Game from Anywhere
                    </span>
                    <br>
                    <span>
                        Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.
                    </span>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" class="white--text" style="align-self:center">
                <v-row justify="end">
                    <div class="mb-2 mr-4" style="width:36%">
                        <span style="font-size:23px">
                            Stay Connected
                        </span>
                        <br>
                        <span>
                           Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.
                        </span>
                    </div>
                </v-row>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col cols="10">
                        <v-img width="100%" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop"></v-img>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-row>
                    <v-col cols="2">
                    </v-col>
                    <v-col cols="10">
                        <v-img width="100%" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop"></v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6" class="white--text" style="align-self:center">
                <div class="ml-4" style="width:36%">
                    <span syle="font-size:23px" class="mb-2">
                        Your Best Audio System
                    </span>
                    <br>
                    <span>
                        A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.
                    </span>
                </div>
            </v-col>
        </v-row>
    </v-container>

     <v-img style="width:100%;" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"></v-img>

      <div style="background-color:black;margin-top:-10px">
      <div fluid class="background" style="display:table">
          <div style="display:table-cell;vertical-align:bottom;padding-bottom:50px">
              <v-row>
                  <v-col>
                      <h1 class="white--text font-weight-light text-center">1020hp</h1>
                      <p class="white--text font-weight-light text-center">Peak Power</p>
                  </v-col>

                  <v-col>
                      <h1 class="white--text font-weight-light text-center">9.9s</h1>
                      <p class="white--text font-weight-light text-center">1/4 mile</p>
                  </v-col>

                  <v-col>
                      <h1 class="white--text font-weight-light text-center">2.5s</h1>
                      <p class="white--text font-weight-light text-center">0-60 mph</p>
                  </v-col>
              </v-row>
          </div>
      </div>
  </div>

  <div style="background-color:black;margin-top:-10px">
        <div class="text-left pt-3">
            <v-row>
                <img style="height:600px" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop" />
                <v-layout align-center>
                    <h1 class="white--text">Tesla Model X</h1>
                    <v-btn style="border-radius:10px;" class="ml-3">Order Now</v-btn>
                </v-layout>
            </v-row>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
    .promo {
        background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop');
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    .background {
        background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/e13368c8-5657-468e-aa16-a28d9dc763c6/bvlatuR/std/2880x1800/MX-Performance-Hero-Desktop');
        background-size: cover;
        width: 100%;
        height: 100vh;
    }
</style>
