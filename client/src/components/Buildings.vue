<script>
    export default {
        name: "Buildings",

        data(){
            return{
                active: "Общая информация"
            }
        },
        
        methods: {
            setActive_item1() {
                this.active = "Общая информация"
                console.log(this.active)
            },

            setActive_item2(){
                this.active = "Фундамент"
                console.log(this.active)
            },

            setActive_item3(){
                this.active = "Стены"
                console.log(this.active)
            },

            setActive_item4(){
                this.active = "Перекрытие"
                console.log(this.active)
            },

            setActive_item5(){
                this.active = "Крыша"
                console.log(this.active)
            }
        }
    }
</script>

<template>
   <div class = "buldings__container">
        <div class = "sub__tittle">
            <div class="step__one">
                2
            </div>
            <div class="step__one-tittle">
                Заполните данные о зданиях
            </div>
        </div>

        <div class="buldings__form">
            <div class="project__sub_menu">
                <div v-if = "this.active == 'Общая информация'" class="sub_menu__item active" v-on:click="setActive_item1">
                    Общая информация
                </div>
                <div v-else class="sub_menu__item" v-on:click="setActive_item1">
                    Общая информация
                </div>
                <div v-if = "this.active == 'Фундамент'" class="sub_menu__item active" v-on:click="setActive_item2">
                    Фундамент
                </div>
                <div v-else class="sub_menu__item" v-on:click="setActive_item2">
                    Фундамент
                </div>
                <div v-if = "this.active == 'Стены'" class="sub_menu__item active" v-on:click="setActive_item3">
                    Стены
                </div>
                <div v-else class="sub_menu__item" v-on:click="setActive_item3">
                    Стены
                </div>
                <div v-if = "this.active == 'Перекрытие'" class="sub_menu__item active" v-on:click="setActive_item4">
                    Перекрытие
                </div>
                <div v-else class="sub_menu__item" v-on:click="setActive_item4">
                    Перекрытие
                </div>
                <div v-if = "this.active == 'Крыша'" class="sub_menu__item active" v-on:click="setActive_item5">
                    Крыша
                </div>
                <div v-else class="sub_menu__item" v-on:click="setActive_item5">
                    Крыша
                </div>
            </div>

            <!-- Общая информация -->
            <form action="" class="base-information__form"  v-if = "this.active == 'Общая информация'">
                <div class="left__forms">
                    <div class = "input__container">
                        <div class="input__tittle">Тип здания</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Количество этажей</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Материал</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Наличие крыльца</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                </div>
                <div class="right__forms">
                    <div class = "input__container">
                        <div class="input__tittle">Комментарий</div>
                        <input type="text" class="comment_input base-information__input">
                    </div>
                    <div class="save__button">Сохранить здание</div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss"> 
    .buldings__container{
        margin: 0 6rem 0 3rem;

        .sub__tittle{
        padding-top: 3rem; 
        border-top: 1px solid #D8D8D8;

            .step__one{
                text-align: center;
                color: #fff;
                font-weight: 600;
                width: 4rem;
                height: 4rem;   
                padding-top: 1.2rem;
                border-radius: 100%;
                background: #34caa5;
                font-size: 1.2rem;
            }

            .step__one-tittle{
                font-size: 1.2rem;
                color: #34caa5;
                padding-top: 1.2rem;
                margin-left: 2rem;
            }
        }

        .base-information__form{
            display: flex;
            justify-content: space-between;
        }

        .sub__tittle{
            display: flex;
        }

        .save__button{
            background-color: #31B8E8;
            color: #fff;
            cursor: pointer;
            height: 3rem;
            padding: 1rem;
            width: 15rem;
            text-align: center;
            border-radius: 15px;
            margin-left: auto;
            margin-top: 12rem;
            font-weight: 600;
        }

        .buldings__form{
            margin-top: 2rem;
            box-shadow: 0px 4px 10px rgb(230, 230, 230);
            background-color: #fff;
            border-radius: 5px;
            padding: 3rem 5rem 3rem 5rem;
        }

        .input__container{
            margin-top: 2rem;

            .base-information__input{
            box-shadow: none;
            border: 1px solid #B4D4CA;
            border-radius: 5px;
            background-color: #EFF2FB;
            height: 2rem;
            width: 25rem;
            outline:none;
        }

            .input__tittle{
                color: #828282;
                width: 25rem;
            }

            .comment_input{
                width: 50rem;
                height: 10rem;
            }

        }

        .project__sub_menu{
            display: flex;
            border-bottom: 1px solid #D8D8D8;

            .sub_menu__item{
                margin-right: 2rem;
                height: 100%;
                padding-bottom: 1rem;
                cursor: pointer;
            }

            .sub_menu__item{

                &.active{
                    border-bottom: 5px solid #31B8E8;                    
                }
            }
            
            .sub_menu__item:hover{
                border-bottom: 5px solid #31B8E8;
            }
        }
    }
</style>