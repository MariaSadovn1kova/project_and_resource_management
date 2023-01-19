<script>
    export default {
        name: "Buildings",

        data(){
            return{
                active: "Общая информация",
                foundation__active: "1"
            }
        },
        
        methods: {
            // Переключение между элементами здания
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
            },

            // Переключение между видами фундамента
            setFoundationActive_item1(){
                this.foundation__active = "1"
                console.log(this.foundation__active)
            },

            setFoundationActive_item2(){
                this.foundation__active = "2"
                console.log(this.foundation__active)
            },

            setFoundationActive_item3(){
                this.foundation__active = "3"
                console.log(this.foundation__active)
            },

            setFoundationActive_item4(){
                this.foundation__active = "4"
                console.log(this.foundation__active)
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
            <form action="" class="base-information__form bulding__form"  v-if = "this.active == 'Общая информация'">
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

            <!-- Фундаменты -->
            <form action="" class="base-information__form bulding__form"  v-if = "this.active == 'Фундамент'">
                <div class="left__forms">
                    <div class="foundation__types-navbar">
                        <div  v-if = "this.foundation__active == '1'" class="foundation__types-active" v-on:click="setFoundationActive_item1">
                            <img src="../assets/foundation__types/foundation__type1.svg">
                        </div>
                        <div v-else class="foundation__types">
                            <img src="../assets/foundation__types/foundation__type1_0.svg" v-on:click="setFoundationActive_item1">
                        </div>
                        <div v-if = "this.foundation__active == '2'" class="foundation__types-active" v-on:click="setFoundationActive_item2">
                            <img src="../assets/foundation__types/foundation__type2.svg">
                        </div>
                        <div v-else class="foundation__types" v-on:click="setFoundationActive_item2">
                            <img src="../assets/foundation__types/foundation__type2_0.svg">
                        </div>
                        <div v-if = "this.foundation__active == '3'" class="foundation__types-active" v-on:click="setFoundationActive_item3">
                            <img src="../assets/foundation__types/foundation__type3.svg">
                        </div>
                        <div v-else class="foundation__types" v-on:click="setFoundationActive_item3">
                            <img src="../assets/foundation__types/foundation__type3_0.svg">
                        </div>
                        <div v-if = "this.foundation__active == '4'" class="foundation__types-active" v-on:click="setFoundationActive_item4">
                            <img src="../assets/foundation__types/foundation__type4.svg">
                        </div>
                        <div v-else class="foundation__types" v-on:click="setFoundationActive_item4">
                            <img src="../assets/foundation__types/foundation__type4_0.svg">
                        </div>
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Тип бетона</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>  
                    <div class = "input__container">
                        <div class="input__tittle">Ширина</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div> 
                    <div class = "input__container">
                        <div class="input__tittle">Длина</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div> 
                    <div class = "input__container">
                        <div class="input__tittle">Высота</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div> 
                    <div class = "input__container">
                        <div class="input__tittle">Толщина</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div> 
                    <div v-if = "this.foundation__active == '3' || this.foundation__active == '4'" class = "input__container">
                        <div class="input__tittle">Длина первой ленты</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div> 
                    <div v-if = "this.foundation__active == '4'" class = "input__container">
                        <div class="input__tittle">Длина второй ленты</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div> 
                </div>
                <div class="right__forms">ff</div>
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

        .bulding__form{
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
            margin-top: 2.5rem;

            .base-information__input{
            box-shadow: none;
            border: 1px solid #B4D4CA;
            border-radius: 5px;
            background-color: #EFF2FB;
            height: 2.5rem;
            width: 30rem;
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

        .foundation__types-navbar{
            padding: 2rem 0;
            display: flex;

            .foundation__types{
                width: 6rem;
                height: 6rem;
                background-color: #EFF2FB;
                border-radius: 10px;
                border: 1px solid #B4D4CA;
                padding: 1.2rem;
                margin-right: 2rem;
            }

            .foundation__types-active{
                width: 6rem;
                height: 6rem;
                background-color: #31B8E8;
                border-radius: 10px;
                border: 1px solid #B4D4CA;
                padding: 1.2rem;
                margin-right: 2rem;
            }

            .foundation__types:hover{
                cursor: pointer;
            }
        }
    }
</style>