<script>
    export default {
        name: "Customer"
    }
</script>

<template>
    <div class = "client__container">
        <div class = "sub__tittle">
            <div class="step__one">
                1
            </div>
            <div class="step__one-tittle">
                Заполните данные о клиенте
            </div>
        </div>
        <div class="client__form">
            <form action="" class="base-information__form bulding__form">
                <div class="left__forms">
                    <div class = "input__container">
                        <div class="input__tittle">ФИО</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Телефонный номер</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Почта</div>
                        <input type="text" class="buldings__type base-information__input">
                    </div>
                    <div class = "input__container">
                        <div class="input__tittle">Адрес</div>
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
    .client__container{
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

        .sub__tittle{
            display: flex;
        }

        .client__form{
            margin-top: 2rem;
            box-shadow: 0px 4px 10px rgb(230, 230, 230);
            background-color: #fff;
            border-radius: 5px;
            padding: 3rem;

            .bulding__form{
                display: flex;
                justify-content: space-between;

                .sub__tittle{
                    display: flex;
                }

                .save__button{
                    background-color: #31B8E8;
                    color: #fff;
                    cursor: pointer;
                    height: 3rem;
                    padding: 0.9rem;
                    width: 15rem;
                    text-align: center;
                    border-radius: 15px;
                    margin-left: auto;
                    margin-top: 6rem;
                    font-weight: 600;
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
            }
        }

    }
</style>