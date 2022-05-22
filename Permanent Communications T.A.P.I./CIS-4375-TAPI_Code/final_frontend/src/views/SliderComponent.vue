<template>
  <!-- <h1>Heading</h1> -->
  <div class = "Slider">
    <transition-group  tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" >
      </div>
    </transition-group>
    <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a> -->
  </div>

</template>
<script>
export default {
  name: "SliderComponent",
  data() {
    return {
      images: [
        "https://lh3.googleusercontent.com/xoGiLgeXzTEuIZnIJkubt1x5ignaCc-FVHZ0oTAqifrRMCMNMI5sw6pKbvboKltYNwfgBHXc4lfcXwaYNXzDFWTQWAww9EWeFyqohALqW4nSKo7HY9vJHn8Nb0ZtRMCML-IMpGZrUysjgDN0DW6yIvg5xmcMeLLorALZmE7tUYdr5CplCp95XGrMkjkBqpNUYFpWZl_aHI3nx2L3k30OA2mUeJ65wlwWeBWAvBJJRjyxViZGCI2OfAnKYkC0PE2XsdHrJjQn_gmxZEuNQ1Rd_1n-k6i0T5kdghplmPgd2VhJG6klGmSrrOcAuyq-sGqRkLrc4IO1j_nMg5W9vu7tnSXopYZ4TsdWe1x7W8hmMCYjY15pdpkYbePl5WSbAbjcXLKLjR3sf_VD-eFpvvMFRtgV7rkG3oiI4r7cbSx2fZctMabZvS1OZVRoKy8kudkNt0XxDvPD6tMzYQA9bwcGrP8thToJ2ibiWmvDXtCY1AJGuR5_CRXAw6z2QO3tbAclQZ569xXc0_lBVQ9y0CBbBmVJYCWoX_zN8wSrlO_uKNM9Em0-roV7opqa0-S9lRM5EfxgwTsewmpZvS7rGRTsN6yoUG5k8F6PrQbutWUtK-jx7WFyPz5ghiJCJ6QMPWkJSV8L9CvHzvWFVd6KyvZl3M_UHizZa-J2N8X9cxMfz4EoJbYrQMq_FUGDyT31dpMH66UtTH24rML2WHdrbTAp2EioYZGN4vmZxadm1Ndj6FCaSYNaQ5QJFX07LNQ=w1541-h866-no?authuser=0",
        "https://lh3.googleusercontent.com/n9nn-wtfjMIsYZQhEggKshVYxoOx1XEX1w4-vTVnH5oRWtBRCSAKVwjZsu1PLLVoczMkFKNCfPtAvRBIATg76jokAehjgtuyTKi0cUqVIdFmZv5Dul5U4ysm2nadgu3IZZ6ZTjaZuSE4kKmai65ERKGx0LQRWPBieQyNYreHAriJFV47ticNKYtpCfO7nn5iBout8RfTifyFYKjOpRuNxxWkLNs-CVBMv_nwK8j_W6QBKMwvnJjAP1vOI57teucWaw0XfLynTnt6nFzPvhQ-HYfE4pFO7W-hSoO7gP-QxXba-jBDF_7tork4mFoAiDo_40DjZ8Z9wQVSw3Ps3MxwnE_Cee_Z2zvPrINhUBlXxSJYma9iq_xW71kIVLnO6BoWEoVLh2mQ4P9S0CjFrlWvxWfqGcWWxlBIY30FMoIvbQdTqEUW5c9AzeexxX74CZZ8A5zYBGoBcey5kF6FE0Bue2d7PQx0ZV9thvubyvPJzGk4tq20gU_qtg4Wt7dz6yR1eBGDumT2-Te9kIMKW6H-7bukQnANRiYGkSokhC-LHJfH1b0L5sqSm4ozIkApXijP5l4XGQ3VVRFwp0pWmmXPLXxrLLsnlivsznMsY66Eq-KEVK5Qa3OcgA3aYIVAy1maOqYOca8X7WshiNUBE3Tcn3zfFuJ0UKjfZIYB4G86XKlH7DCBJk3uPCE31Z8mr86X63ap1zC3EOeDAO9qdfmt-W1ijIgMmY-2xLWI-qJ78mVuNcGhJQiWG8iWC1k=w700-h933-no?authuser=0",
        "https://lh3.googleusercontent.com/HdvjhIKrI_x7-rrBGUwj-ofg8gh2o5UBF__3hMblvRsmYCo8CDSme0llj0i4UOVgPSZSQQP-jsOyLYefQtDgWCVjzaNVkrN0758vNX49go76t5pOswXGRAWlRzhYluvowxh7zJ9pL-FNG3L3F3bkODRzHt_LhJ2feq35ZILmfPYlN8eVCC1OcnuaExkwcWT3mTieIWXqAUDt9-U-2QSAPDUnOb6SNBosVwHX0Ut3Fryhp6MnlsN3e9YaJ8lP-rRi__FB-NyJLKe-LvFddS6YQSJ-JaMXRZF5XQzcRbxXsTKtFZs5th9_NkcVdJ2bcZVK_-hCMnYCfuzjDKtu9nss6RqP-Mh_NpkVVDDTqeEFNBt21UVqtiPizuHq2ZaXJSFg4snxzoiXDy4onqtMseyWaLLDzb5F732oP2iysDn1JeNqV766Jf1aUCWHmYdokBPgjY6hIdyUsvOo_jf4eikK8AgsrImR7_0fCvE1_TgDzQlAjVgJP-BkmVqNKeS0O-i5x-X7s1yihKS-tm8Nek5OMIZDDRKrtqwO5vXlVMQQ2thep8bH5mRq4ZxevnDAKp9s8_dkaCn13d3j0aQ7GfLAvDk-7AT3w0-mCpkduFLUB6-C3Q43BJxAxTjPBlIiIWtidYGq02Oh335W5z1uGjmJc-MjMVOuQRlZGemQKIfHGS7E8VFPRejBEn6D_mGY-JQbBrtg21hAEUMB-Tjqr7D_I8PJ6NuLquFDkW4PBWpijC26UpQFbblyuAseehg=w845-h933-no?authuser=0",
        "https://lh3.googleusercontent.com/UZwzXsXitN9IkeHGdr7gQ6Nl3NZLaqolpeJ6mPDTliGAZNaP-G2ATlhF6XEReSKzWk768WHgoacDMApwnT778XnBj6KEx3z6dr26M02SCDB0xC-8tMHSopWWvDpVqaiMRgWcfV5T1mZf2YzsOJW5TpSSlT6vX0b34g2djUm3pj6gHkd6sY2N1lnwxqar6CBrDIQRnRWtBNL0cTtduUvPnhZARenKtFMc8luR9ZJbNYigi_DaKkXvkuomrQJxfoDkZqmESYzK-VIDtbn6FlN2OIu2iy4MBlOXFjY4jQareq3tBq30rmqsZ7nm4vfFsxb4Xj0HGviLleTRIu_J38ZBhzdNDqBis1foDiVxovKQoODLlJN3pT9AbidPPNpr8ODpkigdF--TuDHL1j_KAor73rbYA5K52j7uY64Z0A3lWmDEFt7xUAsXOazAZKsmsuEcji_kNoDA33y_2F5QPXKmrxxL5k2zSyJ5yTwHqadRIakeLmLrVvjv6auaWBU9xbPTffy8NgeEQ8yAiFUyVMw8TY_XYro0dnk4ifvFJyblMpglu5RseWy79sYwKneRnNRJ_QnRusF9oajC_R_uJt3WIAYIfY_iSMmhconf1ifPghf3nHryBjokwsQFsbePTxMAglZgAw7ObrtLpFXFpBjhT3PWpvxXQgmJIpkbC8SUNVe9xRDmDkVyX9hWFgXDynKZ76baU2lr27Pu3FpwAxbFl94tMPXMmUNxkR9rRd0Iy3gRTFDfCtDg6v9NfVw=w525-h933-no?authuser=0",
        "https://lh3.googleusercontent.com/oGzoUlPv3K33fE-kc5O7KgEypoIVg8bI1-2Bu_QRoqCgghRsQ-_d_wcZm4JBE4PQ6R6C-z1zzkJQKMu-KqnTh3SxrIxO6P19fTL2lowPsewCfHroBqRHPMXlRfne5gslObsm5HhSzT8ORRHCxMwVFyPNLYj7aBs1I_TxQthdGlOlC9WM9t5y-zUgNseAfi5NEv7AMby22G4STgtrR08tFBzpspIpxe5cz6DWkYHNpYfyw5EFYOnStYXcQuCrdVCir-XiWahUDzuuuaVZ7Un56N7-YhheDXf4LQCqd0cqJnhF3N6d6bOXphn6JPfQrFJra6b6mwJLvCJbf1277hVCv21nBkX_NWcB8t35gV-NPz_IuA7vkcsJJxgAoSErzxopF-MgCvnYs8kTM10TlH8SQLdaB6X-r-2dwvYZmoMRmpE8uvZvBpD73iHYrbbwB-LxRKFI6WQ238IKoJJ82mnua0OpY7PmQ_EHhZg5SEAvRqbRwSIS156Gl1kMwLpc7UtLjXEX8l03TOtkw9UQNFLgEfeRH1Dr01wXxPt019s3XqLwN-doYiPCIpIgVFPmhoQtvSdzw_RKG7XRy578OwKjlSZJYSC9EY4G7R7igNq2E-0GRv_b5badf9OEHLPnjRnC4_zPcLrul5G5Ovw2KZfYZorOPv_HW5eFd-J-ZCOkkVKGPm7KVoceL2PzBjO2V-wf7QE_kFYXGOfOK-9NryZVhvuGpeBT5fFIEJx6xNKtaJ7gdZ_WJ5Lip19QuTY=w1000-h818-no?authuser=0",
        
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 10s ease;
  
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:70%;
  opacity: 1;
} */
 

.fade-enter-active,.fade-leave-active {
  transition: all 5s ease;
}

.fade-enter-from,.fade-leave-to {
/* transition-delay: 2s; */
opacity: 0;
}

/* .fade-enter{
  transition: 2s ease;
  visibility: hidden;
  width:70%;
  opacity: 0;
} */

img {
  height:600px;
  width:70%
}

/* .prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s linear;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
} */
</style>