new Vue({
    el:'#pedido',
    data:{prod:[
        {cant:0,nombre:'Frappe',pUnitario:80,sTotal:0},
        {cant:0,nombre:'Smoothie',pUnitario:89,sTotal:0},
        {cant:0,nombre:'Malteada de chocolate',pUnitario:79,sTotal:0}],},
    methods:{subTotal(a){a.sTotal=a.cant*a.pUnitario;return a.sTotal;},},
    computed:{totalP(){this.total=0;
            for(objeto of this.prod){this.total+=objeto.sTotal;}return this.total}}   
        });
new Vue({
    el:'#bebidas',
    data:{
        menu:[
            {bebida:"Frappe",ing:"Cafe con leche y molida en hielos",tam:"Grande",precio:"$80",vig:"Disponible"}, 
            {bebida:"Cafe",ing:"cafe de la casa",tam:"Chico",precio:"$49",vig:"No Disponible"}, 
            {bebida:"Smoothie",ing:"leche con fruta y molida en hielos",tam:"chico",precio:"$89",vig:"Disponible"}, 
            {bebida:"Malteada de chocolate",ing:"Leche con chocolate y con helado molido",tam:"Grande",precio:"$79",vig:"Disponible"}, 
    ],
        bNombre:'',bPrecio:'',mostrar: false,mostrar2: false},

    computed:{
        bBebidas(){return this.menu.filter((a)=> a.bebida.includes(this.bNombre));}, 
        bPrecios(){return this.menu.filter((a)=>a.precio.includes(this.bPrecio));}}   
     });
