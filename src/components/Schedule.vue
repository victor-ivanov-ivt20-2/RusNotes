// Это расписание занятий
<script >

export default {
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
            ]
        }
    }
    
}

</script>

<template>

    <table>
        <thead>
            <tr class="tr__head">
                <th v-for="n in 7" :key="n">
                    {{ week[n-1] }}
                </th>
            </tr>
        </thead>
        <tbody>
            <td>
                <div>
                    <tr v-for="n in 6" :key="n" class="tr__time__body">
                        {{ time[n-1] }}
                    </tr>
                </div>
                
            </td>
            <td v-for="n in 6" :key="n" >
                <tr v-for="i in 6" :key="i" class="tr__input__body">

                    <div class="textBox">
                        <input type="text" />
                    </div>
                </tr>
            </td>
        </tbody>
    </table>
    

</template>

<style scoped>
.tr__head {
    height: 70px;
}
.tr__time__body, .tr__input__body {
    height: 70px;
    text-align: left;
}
.textBox {
    background: transparent; 
    border: 1px solid;
    border-color: #666 #aaa #aaa #666;
    margin: auto;
    height: 50px;
}
.textBox input {
    background: transparent;
    border: none;
    height: 100%;
}
table {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  border: 1px solid white;
} 
td {
    border: 1px solid white;
    padding: 0;
}
input[type="text"] {
    padding: 5px;
    background-color: rgb(39, 39, 39);
    color: white;
    border: none;
}
</style>