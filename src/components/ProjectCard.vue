<template>
    <div class="project__card">
        <div class="project__status">
            
        </div>
        <div class="download__button-container">
            <div class="download__button">
                XLSX
            </div>
        </div>
        <div class="project__data">
            12.01.2023
        </div>
        <div class="download__client_name">
            Иванов Иван Иванович
        </div>
        <div class="download__address">
            ул. Некрасова 30
        </div>
        <div class="interaction__buttons">
            <div class="edit__buttons">
                
            </div>
            <div class="delete__buttons">
            
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .project__card{
        background-color: #fff;
        height: 5rem;
        border-radius: 5px;
        box-shadow: 0px 4px 10px rgb(235, 235, 235);
        margin-bottom: 1rem;
        display: flex;

        .project__status{
            border-radius: 5px 0 0 5px;
            width: 3rem;
            background-color: #D0EBF4;
        }

        .download__button-container{
            padding: 1rem 5rem 1rem 5rem;

            .download__button{
                text-align: center;
                padding-top: 0.9rem;
                border-radius: 20px;
                background-color: #D9F9F1;
                height: 3rem;
                width: 8rem;
            }
        }

        .project__data{
            padding: 1.9rem 4rem 0 4rem;
        }

        .download__client_name{
            padding: 1.9rem 4rem 0 4rem;
        }

        .download__address{
            padding: 1.9rem 4rem 0 4rem;
        }

        .interaction__buttons{
            margin-left: auto;
            display: flex;
            padding: 1.3rem 2rem 0 4rem;

            .edit__buttons{
                width: 2rem;
                height: 2rem;
                border-radius: 20px;
                text-align: center;
                background-color: #D9F9F1;
                margin-right: 1rem;
            }

            .delete__buttons{
                width: 2rem;
                height: 2rem;
                border-radius: 20px;
                text-align: center;
                background-color: #F9DDD9;
            }
        }
    }
    
    .project__card:hover{
        box-shadow: 0px 4px 10px rgb(230, 230, 230);
        cursor: pointer;
    }
</style>

<script>
    export default {
        name: "ProjectCard"
    }
</script>

