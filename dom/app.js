new Vue({
    el:'#desafio',
    data:{
        nome:'Alberto Paulino Rodrigues',
        idade:'36',
        img_src:'https://s2.glbimg.com/ZDDndq8LmOFj-EdtHkzpYreTfmQ=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/G/wABY95TAaU8DXGOua3EA/whatsapp-image-2020-03-29-at-16.03.56-1-.jpeg'
        
    },
    methods:{
        triplicaIdade:function(){
            return this.idade * 3
        },
        randomico:function(){
            return Math.random()
        }
    }
})