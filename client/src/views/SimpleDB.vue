<template>

    <div>
        <div class="columns">
            <div class="column">
                <label class="label">Время</label>
                <div class="select">
                    <select v-model="selected[0]">
                        <option v-for="item in time" :key="item" :value="item.index">{{ item.text }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <label class="label">День недели</label>
                <div class="select">
                    <select v-model="selected[1]">
                        <option v-for="item in week" :key="item" :value="item.index">{{ item.text }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <label class="label">Чётность недели</label>
                <div class="select">
                    <select v-model="oe">
                        <option :value="0">Чётная/Нечётная</option>
                        <option :value="1">Нечётная</option>
                        <option :value="2">Чётная</option>
                    </select>
                </div>
            </div>
            <div class="column is-7">
                <label class="label">Название предмета</label>
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input v-model="description" class="input is-rounded" type="text" placeholder="Объектно-ориентированное программирование">
                    </div>
                    <div class="control">
                        <a class="button is-info" @click="addItem">Добавить</a>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="(item, i) in items" :key="item._id">
            <div class="notification" :class="{'is-success': item.oe == 2, 'is-danger': item.oe == 1}">
                <div class="columns is-centered">
                    <div class="column is-narrow">
                        <div class="tags has-addons">
                            <span class="tag is-dark is-medium tag-week">{{ week[item.ij[1]].text }}</span>
                            <span class="tag is-medium">{{ time[item.ij[0]].text }}</span>
                        </div>      
                    </div>
                    <div class="column"> <span class="tag is-medium">{{ item.description }}</span></div>
                    <div class="column is-narrow">
                        <span class="icon has-text-info" @click="removeItem(item, i)">
                            <i class="material-icons" >delete</i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isEven: false,
            isOdd: false,
            items: [],
            description: "",
            week: [
                { text: 'Понедельник', index: 0 },
                { text: 'Вторник', index: 1 },
                { text: 'Среда', index: 2 },
                { text: 'Четверг', index: 3 },
                { text: 'Пятница', index: 4 },
                { text: 'Суббота', index: 5 }
            ],
            time: [
                { text: '08:00 - 09:35', index: 0 },
                { text: '09:50 - 11:25', index: 1 },
                { text: '11:40 - 13:15', index: 2 },
                { text: '14:00 - 15:35', index: 3 },
                { text: '15:50 - 17:25', index: 4 },
                { text: '17:40 - 19:15', index: 5 }
            ], 
            selected: [0,0],
            oe: 0
        };
    },
    async mounted() {
        const response = await axios.get('api/someItems/')
        this.items = response.data;
    },
    methods: {
        async addItem() {
            const response = await axios.post("api/someItems/", {
                description: this.description,
                ij: this.selected,
                oe: this.oe
            });
            this.items.push(response.data);
            this.description = "";
        },
        async removeItem(item, i) {
            await axios.delete("api/someItems/" + item._id);
            this.items.splice(i, 1);
        }
    }
}
</script>
<style scoped>
.tag-week {
    width: 130px;
}
</style>