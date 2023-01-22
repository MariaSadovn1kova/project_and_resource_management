<script>
    export default {
        name: "Estimate",
        data(){
            return{
                active: "Фундамент",
            }
        },
    }
</script>

<template>
    <div class="estimate__container">
        <div class = "sub__tittle">
            <div class="step__one">
                3
            </div>
            <div class="step__one-tittle">
                Смета проекта
            </div>
        </div>
        <div class="extimate__table-container">
            <div class="project__sub_menu">
                <div v-if = "this.active == 'Фундамент'" class="sub_menu__item active" v-on:click="setActive_item1">
                    Фундамент
                </div>
                <div v-else class="sub_menu__item" v-on:click="setActive_item1">
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
            <div class="table__top">
                <div class="table__top-element">
                    П/П
                </div>
                <div class="table__top-element">
                    Наименование
                </div>
                <div class="table__top-element">
                    Ед. Изм.
                </div>
                <div class="table__top-element">
                    Количество
                </div>
                <div class="table__top-element">
                    Стоимость за ед.
                </div>
                <div class="table__top-element">
                    Итого стоимость
                </div>
            </div>
            <div class="table__row">
                <div class="table__row-element">
                    1
                </div>
                <div class="table__row-element">
                    Арматура
                </div>
                <div class="table__row-element">
                    Метры
                </div>
                <div class="table__row-element">
                    151
                </div>
                <div class="table__row-element">
                    41
                </div>
                <div class="table__row-element">
                    6191
                </div>
            </div>
            <div class="table__row even">
                <div class="table__row-element">
                    2
                </div>
                <div class="table__row-element">
                    Доска 200мм
                </div>
                <div class="table__row-element">
                    Метры
                </div>
                <div class="table__row-element">
                    250
                </div>
                <div class="table__row-element">
                    330
                </div>
                <div class="table__row-element">
                    82500
                </div>
            </div>
            <div class="table__row">
                <div class="table__row-element">
                    3
                </div>
                <div class="table__row-element">
                    Бетон
                </div>
                <div class="table__row-element">
                    Куб. метры
                </div>
                <div class="table__row-element">
                    12.5
                </div>
                <div class="table__row-element">
                    3100
                </div>
                <div class="table__row-element">
                    38750
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .estimate__container{
        margin: 0 6rem 0 3rem;

        .sub__tittle{
        padding-top: 3rem; 
        border-top: 1px solid #D8D8D8;
        display: flex;

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

        .extimate__table-container{
            margin-top: 2rem;
            box-shadow: 0px 4px 10px rgb(230, 230, 230);
            background-color: #fff;
            border-radius: 5px;
            padding: 3rem;
        }

        .table__top{
            background-color: #EFF2FB;
            height: 4rem;
            display: flex;
            padding: 1.3rem 3rem;
            justify-content: space-between;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

            .table__top-element{

            }
        }

        .table__row{
            padding: 1.3rem 3rem;
            display: flex;
            justify-content: space-between;

            &.even{
                background-color: #F4F4F4;
            }
        }

        .project__sub_menu{
            display: flex;
            border-bottom: 1px solid #D8D8D8;
            margin-bottom: 2rem;

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