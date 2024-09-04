
import { onMounted, reactive, ref } from "vue"

  
export default function useCripto(){
    const loading = ref(false)
    const quoteRes = ref({})
    const coins = ref([
        { code: 'USD', text: 'USD DOLLAR' },
        { code: 'COP', text: 'COLOMBIAN PESO' },
        { code: 'MXN', text: 'MEXICAN PESO' },
        { code: 'EUR', text: 'EURO' },
        { code: 'GBP', text: 'POUND STERLING' },
      
      ])
      const quote = reactive({
        coin: '',
        criptocoin: ''
      })
      const getQuote = async () => {
        loading.value = true
        quoteRes.value={}
        const { coin, criptocoin } = quote
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`
        const res = await fetch(url)
        const data = await res.json()
        quoteRes.value = data.DISPLAY[criptocoin][coin]
        loading.value = false
      }
    const criptoCoins = ref([])
    onMounted(() => {
        const url = ('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD')
        fetch(url)
          .then(res => res.json())
          .then(data => criptoCoins.value = data.Data)
      })

    return{
        coins,
        criptoCoins,
        loading,
        quoteRes,
        getQuote,
        quote
    }
}