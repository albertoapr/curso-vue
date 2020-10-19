new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado(){
            console.log('método computed resultado chamado ...')
            return this.valor == 37 ? 'Valor igual a  37' : 'Valor diferente de 37'
        }
    },
    watch: {
        resultado(novo,antigo)
        {
            setTimeout(
                ()=> {this.valor = 0}, 5000
                )
        }

    },
    methods:{

    }
});