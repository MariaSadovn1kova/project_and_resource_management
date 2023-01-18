<script>
    import { is } from '@babel/types';
    import { ref } from 'vue';

    export default {
        name: "ProjectCard",
        props: ["project"]
    }

</script>

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
            {{project.date.slice(0,10)}}
        </div>
        <div class="download__client_name">
            Иванов Иван Иванович
        </div>
        <div class="download__address">
            ул. Некрасова 30
        </div>
        <div class="interaction__buttons">
            <div class="edit__buttons" @click="ToggleCard">
                
            </div>
            <div class="delete__buttons">
            
            </div>
        </div>
    </div>
    <div class="dropdawn__inquiry">
        <div class="inquiry__element">
            Емеаемпуицщ
        </div>
        <div class="inquiry__element">
            Емеаемпуицщ
        </div>
        <div class="open__button">
            <router-link class = "nav__link open__button" to="/project">Открыть проект</router-link>
        </div>
    </div>
</template>

<style lang="scss">
    .nav__link{
        color: #fff;
        font-weight: 400;
        text-decoration: none;
        font-weight: 600;
    }
    .project__card{
        background-color: #fff;
        height: 5rem;
        border-radius: 5px;
        box-shadow: 0px 4px 10px rgb(235, 235, 235);
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
    }

    .dropdawn__inquiry{
        margin-left: 3rem;
        background-color: #EFFBF8;
        margin-bottom: 1rem;
        box-shadow: 0px 4px 10px rgb(230, 230, 230);
        padding: 3rem;

        .inquiry__element{
            background-color: #fff;
            height: 5rem;
            border-radius: 5px;
            box-shadow: 0px 4px 10px rgb(238, 238, 238);
            margin-bottom: 2rem;
        }

        .open__button{
            background-color: #34caa5;
            color: #fff;
            cursor: pointer;
            height: 2.5rem;
            padding: 0.6rem;
            width: 11rem;
            text-align: center;
            border-radius: 15px;
            margin-left: auto;
            font-weight: 600;
        }
    }
</style>
