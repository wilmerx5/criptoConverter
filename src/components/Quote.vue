<script setup>

const props= defineProps({

    quoteRes:{
        type:Object,
        required:true
    }
})
</script>
<template>
        <div class="contenedor-resultado">
        <h2>
          Quote
        </h2>
        <div class="resultado">

          <img :src="'https://cryptocompare.com/' + quoteRes.IMAGEURL" alt="imagen cripto">
          <p> The price is : <span> {{ quoteRes.PRICE }}</span></p>
          <p> HIGHEST price of the day : <span> {{ quoteRes.HIGHDAY }}</span></p>
          <p> LOWEST price of the day :<span> {{ quoteRes.LOWDAY }}</span></p>
          <p> Variation last 24 hours <span> {{ quoteRes.CHANGEPCT24HOUR }}</span></p>
          <p> Last update <span> {{ quoteRes.LASTUPDATE }}</span></p>


        </div>
      </div>
</template>