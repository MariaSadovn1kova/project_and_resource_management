<script>
    import Customer from '../components/Customer.vue'
    import Buildings from '../components/Buildings.vue'

    export default {
        name: "Project",
        components:{
            Customer,
            Buildings
        },

        data(){
            return{
                active: "Клиент"
            }
        },

        methods: {
            setActive_item1() {
                this.active = "Клиент"
                console.log(this.active)
            },

            setActive_item2(){
                this.active = "Здания"
                console.log(this.active)
            },

            setActive_item3(){
                this.active = "Смета"
                console.log(this.active)
            }
        }
    }
</script>

<template>
    <div class="create-project__container">
        <div class="navbar_container">
            <div v-if = "this.active == 'Клиент'" class="item__step-active" v-on:click="setActive_item1">
                Клиент
            </div>
            <div v-else  class="item__step" v-on:click="setActive_item1">
                Клиент
            </div>
            <div v-if = "this.active == 'Здания'" class="item__step-active" v-on:click="setActive_item2" >
                Здания
            </div>
            <div v-else  class="item__step" v-on:click="setActive_item2" >
                Здания
            </div>
            <div v-if = "this.active == 'Смета'" class="item__step-active" v-on:click="setActive_item3">
                Смета
            </div>
            <div v-else  class="item__step" v-on:click="setActive_item3">
                Смета
            </div>
        </div>

        <div class="create-project__content">
            <div class="projects__header">
                <div class="projects__tittle">
                    Создать новый проект
                </div>
                <div class = "nav__link new_project__button">
                    Сохранить проект
                </div>
            </div>
            <Customer  v-if = "this.active == 'Клиент'"/>
            <Buildings  v-if = "this.active == 'Здания'"/>
        </div>
    </div>
</template>

<style lang="scss">
    .navbar_container{
        width: 15rem;
        box-shadow: 0px 4px 10px rgb(223, 223, 223);
        height: auto;
        padding: 2rem;
        background-color: #fff;

        .item__step{
            margin-right: 1rem; 
            padding: 0.5rem;
            font-weight: 600;
            color: #3DC7BE;
            display: flex;
        }

        .item__step-active{
            margin-right: 1rem; 
            padding: 0.5rem;
            font-weight: 600;
            color: #3DC7BE;
            background-color: #d6f8e6;
            display: flex;
        }

        .item__step:hover{
            cursor: pointer;
        }

        .item__step-active:hover{
            cursor: pointer;
        }
    }

    .create-project__container{
        display: flex;
        background-color: #F6FAF8;
        min-height: 100vh;

        .create-project__content{
            flex: auto;

            .projects__header{
                padding: 3rem;
                display: flex;
                width: 100%;

                .projects__tittle{
                    font-size: 1.4rem;
                    color: #525252;
                }

                .new_project__button{
                    background-color: #34caa5;
                    color: #fff;
                    cursor: pointer;
                    height: 3rem;
                    padding: 1rem;
                    width: 15rem;
                    text-align: center;
                    border-radius: 15px;
                    margin-left: auto;
                    margin-right: 3rem;
                    font-weight: 600;
                }

                .new_project__button:hover{
                    box-shadow: 0px 4px 10px rgb(230, 230, 230);
                }
            }

        }
       
    }

</style>
