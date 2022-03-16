<template>
    <!-- двоеточие - это bind в vuejs. -->
    <table :style="styleObjects">
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
                    
                    <div class="textBox" contenteditable="true" 
                    @input="input__body[n-1][i-1] = $event.currentTarget.textContent">
                        {{ input__body[n-1][i-1] }}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- <div class="inputs">
        <input id="table_width" type="text" placeholder="ширина таблицы" 
        :value="styleObjects.width" @input="styleObjects.width = $event.target.value">
        <input id="table_height" type="text" placeholder="высота таблицы" 
        :value="styleObjects.height" @input="styleObjects.height = $event.target.value">
    </div> -->
</template>

<script >

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
                ["","","Теория вероятностей и математическая статистика","","",""],
                ["Философия**","Структуры и алгоритмы обработки данных","Физкультура","","","Физкультура"],
                ["","Языки программирования и методы трансляции","","","","Базы данных"],
                ["Объектно-ориентированное программирование","Риторика","","","Философия","Объектно-ориентированное программирование "],
                ["","Структуры и алгоритмы обработки данных","","","Объектно-ориентированное программирование** Языки программирования и методы трансляции*","Базы данных"],
                ["Безопасность жизнедеятельности","","Безопасность жизнедеятельности**","","Объектно-ориентированное программирование** Языки программирования и методы трансляции*",""]
            ]
        }
    },
    methods: {
        coolstyle() {
            this.styleObjects.width = document.getElementById("table_width").value;
            this.styleObjects.height = document.getElementById("table_height").value;
        }
    }   
}
</script>

<style scoped>
.inputs {
    margin: 50px;
    display: flex;
    justify-content: space-around;
}
.th__head {
    background-color: rgb(175, 230, 255);
    padding: 10px;
}
.td__time__body, .td__input__body {
    padding: 10px;
    text-align: left;
}
.td__input__body {
    font-size: 14px;
}
.td__time__body {
    background-color: rgb(175, 230, 255);
}
table {
    table-layout: fixed;
    border-spacing: 0px;
    border-collapse: collapse;
    border: 1px solid rgb(0, 0, 0);
} 
td {
    border: 1px solid rgb(0, 0, 0);
}
#table_width, #table_height {
    background-color: rgb(39, 39, 39);
    outline: none;
    border: none;
    color: rgb(0, 0, 0);
}
.textBox {
    background: transparent;
    padding: 5px;
    color: rgb(0, 0, 0);
    border: none;
    outline: none;
}
</style>