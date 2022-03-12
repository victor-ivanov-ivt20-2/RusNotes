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
            <tr>
                <th v-for="n in 7" :key="n">
                    {{ week[n-1] }}
                </th>
            </tr>
        </thead>
        <tbody>
            <td>
                <tr v-for="n in 6" :key="n">
                    {{ time[n-1] }}
                </tr>
            </td>
            <td v-for="n in 6" :key="n">
                <tr v-for="i in 6" :key="i">
                    <input type="text">
                </tr>
            </td>
        </tbody>
    </table>
    

</template>

<style scoped>

</style>