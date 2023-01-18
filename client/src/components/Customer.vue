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
            tfvguuiu
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
            height: 20rem;
            box-shadow: 0px 4px 10px rgb(230, 230, 230);
            background-color: #fff;
            border-radius: 5px;
        }

    }
</style>