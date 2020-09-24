<template>
   
    <div>
         <div v-for="item in show" :key="item.data" >
            {{ item.data }}

        </div>
        <div>Jumlah swap: {{show.length}}</div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            ar:[4,9,7,5,8,9,3],
            show:[]
        }
    },
    methods:{
        sort(){
            for(let i = 0; i < this.ar.length; i++){
                if(this.ar[i+1] < this.ar[i]){
                    let temp = this.ar[i];
                    this.ar[i] = this.ar[i+1];
                    this.ar[i+1] = temp;

                    this.show.push({data:`[${this.ar[i]}, ${temp}] -> ${this.ar.toString()}`})
                    this.sort();

                }

            }
        }
    },
    mounted() { 
        this.sort();

                    console.log(this.ar);
                    console.log(this.show);
                    // console.log(this.ar);
    }
}
</script>