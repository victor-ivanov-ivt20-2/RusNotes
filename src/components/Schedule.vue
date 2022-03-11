// Это расписание занятий
<script >

export default {
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) {
                [this.firstName, this.lastName] = newValue.split(' ')
            }
        }
    }
    
}

</script>

<template>

    <table>
        <tr class="schedule__row">
            <td>
                Семестр
            </td>
            <td>
                Понедельник
            </td>
            <td>
                Вторник
            </td>
            <td>
                Среда
            </td>
            <td>
                Четверг
            </td>
            <td>
                Пятница
            </td>
            <td>
                Суббота
            </td>
        </tr>
        <tr class="schedule__row">
            <td>
                8:00
            </td>
            <td>
                Понедельник
            </td>
            <td>
                Вторник
            </td>
            <td>
                Среда
            </td>
            <td>
                Четверг
            </td>
            <td>
                Пятница
            </td>
            <td>
                Суббота
            </td>
        </tr>
    </table>


    <div>
        
        <input v-model="firstName">
        <input v-model="lastName">
        <p>this is {{ fullName }}</p>
        
    </div>

</template>

<style scoped>

</style>