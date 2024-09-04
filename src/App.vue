<script setup>
import { computed, ref } from 'vue';

import Quote from './components/Quote.vue';
import Spinner from './components/Spinner.vue';
import useCripto from './composable/useCripto';

const { coins, criptoCoins, getQuote, loading, quoteRes, quote } = useCripto()

import Alert from './components/Alert.vue';


const error = ref('')
const quoteCripto = () => {

  if (Object.values(quote).includes('')) {

    error.value = 'Complete All Fields'
    return
  }

  error.value = ''

  getQuote()

}

const isquote = computed(() => {


  return Object.values(quoteRes.value).length > 0


})

</script>

<template>

  <div class="contenedor">

    <h1 class="titulo ">
      consulter <span> criptocoins</span>
    </h1>

    <div class="contenido">

      <Alert v-if="error">
        <h2>
          {{ error }}
        </h2>
      </Alert>
      <form class="formulario" @submit.prevent="quoteCripto">
        <div class="campo">

          <label for="moneda">
            Coin:
          </label>
          <select v-model="quote.coin" id="moneda">

            <option value="">
              --Select Coin--
            </option>

            <option v-for="coin in coins" :value="coin.code">

              {{ coin.text }}
            </option>

          </select>
        </div>

        <div class="campo">

          <label for="cripto">
            CriptoCoin:
          </label>
          <select v-model="quote.criptocoin" id="cripto">

            <option value="">
              --Select Coin--
            </option>

            <option v-for="criptocoin in criptoCoins" :value="criptocoin.CoinInfo.Name">

              {{ criptocoin.CoinInfo.FullName }}
            </option>

          </select>
        </div>
        <input type="submit" value="quote">
      </form>
      <Spinner v-if="loading"></Spinner>
      <Quote :quoteRes="quoteRes" v-if="isquote">

      </Quote>

    </div>
  </div>
</template>
