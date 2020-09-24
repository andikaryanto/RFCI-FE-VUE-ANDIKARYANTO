<template>
    <div>
        <input v-on:keyup="keyup" v-model="text" />
        <div>Output : {{reversed}}</div>
        <button  v-on:click="reverse">Reverse</button>
        <button v-on:click="click" v-on:dblclick="dbClick" >Undo/Redo</button>
    </div>
</template>

<script>

export default {
    data(){
        return{
            temptext:[],
            reversed:"",
            text:"",
            poppedString:"",
            clicks:1,
            type:1
        }
    },
    methods:{
        blur(){
            
        },
        keyup(){
            this.temptext.push(this.text);

            console.log( this.temptext);
        },
        dbClick(){
            if(this.type ==2){
                this.text = this.text + this.poppedString;
                this.poppedString="";
                this.temptext.push(this.text);
                this.type = 1; 
            }
           
        },
        click(){
            if(this.type == 1){
                
                this.poppedString = this.text.split("")[this.text.length - 1];
                this.temptext.pop();
                this.text = this.temptext[ this.temptext.length - 1];
                this.type = 2;

            } 
            
        },
        reverse(){
            var splitted = this.text.split("");
            var reversed = splitted.reverse();
            var join = reversed.join("");
            this.reversed = join;
        }
    }
}
</script>