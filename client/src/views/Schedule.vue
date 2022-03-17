<template>
    <!-- двоеточие - это bind в vuejs. -->

    <div>
        <div class="">
            <div class="odd_even">
                <p v-if="take_res">нечётная неделя</p>
                <p v-else>чётная неделя</p>
            </div>
        </div>
        {{ input__body[0][0] }}
        
        <table class="table is-bordered is-hoverable" :style="styleObjects">
            <thead>
                <tr class="tr__head">
                    <th scope="col" class="th__head" v-for="n in 7" :key="n">
                        {{ week[n-1] }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="n in 6" :key="n" >
                    <td scope="row" class="td__time__body">
                        {{ time[n-1] }}
                    </td>
                    <td v-for="i in 6" :key="i" class="td__input__body">
                        
                        <div>
                            {{ input__body[n-1][i-1] }}
                        </div>
                        <!-- <div class="textBox" contenteditable="true"
                            @input="input__body[n-1][i-1] = $event.currentTarget.textContent">
                            {{ input__body[n-1][i-1] }}
                        </div> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    

    <!-- <div class="inputs">
        <input id="table_width" type="text" placeholder="ширина таблицы" 
        :value="styleObjects.width" @input="styleObjects.width = $event.target.value">
        <input id="table_height" type="text" placeholder="высота таблицы" 
        :value="styleObjects.height" @input="styleObjects.height = $event.target.value">
    </div> -->
</template>

<script >
import axios from "axios";
export default {
    
    name: 'schedule-main',
    data() {
        return {
            week: [
                '4 семестр',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
            ],
            time: [
                '08:00 - 09:35',
                '09:50 - 11:25',
                '11:40 - 13:15',
                '14:00 - 15:35',
                '15:50 - 17:25',
                '17:40 - 19:15'
            ],
            styleObjects: {
                width: "100%",
                height: "500px"
            },
            input__body: [
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""],
                ["","","","","",""]
            ],
            date: 0,
            items: []
        }
    },
    computed: {
        take_res() {
            return this.take_today()
        }
    },
    methods: {
        coolstyle() {
            this.styleObjects.width = document.getElementById("table_width").value;
            this.styleObjects.height = document.getElementById("table_height").value;
        },
        take_today() {
            const birthday = new Date(2022, 0, 24);
            this.date = Math.round(((Date.now() - birthday.getTime())-(1000*60*60*12))/(1000*60*60*24))/14;
            if (this.date - Math.floor(this.date) >= 0.5 ) return true;
            return false;
        }
    },
    async mounted() {
        const response = await axios.get('api/someItems/')
        this.items = response.data;
        let size = response.data.length
        for(let i = 0; i < size; i++) {
            if (this.take_res) {
                if (this.items[i].oe < 2) 
                this.input__body[this.items[i].ij[0]][this.items[i].ij[1]] = this.items[i].description;
            } else {
                if (this.items[i].oe != 1)
                this.input__body[this.items[i].ij[0]][this.items[i].ij[1]] = this.items[i].description;
            }
            
        }
    }   
}
</script>

<style scoped>
.odd_even {
    margin-left: 50px;
    margin-top: 13px;
    margin-bottom: 13px;
}
.table th:not([align]){
    text-align: center;
}
.th__head {
    padding: 10px;
    
}
.td__time__body, .td__input__body {
    padding: 10px;
    text-align: center;
}
.td__input__body {
    font-size: 14px;
    text-align: left;
    outline: none;
}
table {
    table-layout: fixed;
    border-spacing: 0px;
    border-collapse: collapse;
} 
#table_width, #table_height {
    background-color: rgb(39, 39, 39);
    outline: none;
    border: none;
    color: rgb(0, 0, 0);
}
.textBox {
    background: transparent;
    color: rgb(0, 0, 0);
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
}
</style>