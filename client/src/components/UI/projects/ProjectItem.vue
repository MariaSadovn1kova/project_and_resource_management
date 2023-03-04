<template>
  <div class="project-item__container">
    <div class="project__status" :class = "{'finished' :project.status == 'finished', 'unfinished':project.status == 'unfinished'}">
      <img v-if="project.status === 'unfinished'" src="@/assets/unfinished__picture.svg" class="unfinished__picture">
      <img v-else src="@/assets/finished__picture.svg" class="unfinished__picture">
    </div>
    <div class="project-info__container">
      <download-button/>
      <div class="project__date info">{{ project.date }}</div>
      <div class="project__client-name info">{{ project.client_name}}</div>
      <div class="project__address info">{{ project.address }}</div>
    </div>
    <div class="project__bth-box">
      <button class="btn open__btn">
        <img class = "open__picture" src="@/assets/openProject__picture.svg">
      </button>
      <button class="btn delete__btn">
        <img class = "delete__picture" src="@/assets/delete__picture.svg">
      </button>                    
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-item',
  props: {
    project: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item__container{
  background-color: #fff;
  height: 6rem;
  box-shadow: 0px 0px 4px #c7cac9;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  .project__status{
    width: 3rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 2.2rem 0 0 0.7rem;
    .unfinished__picture{
      width: 1.5rem;
    }
  }
    .unfinished{
      background-color: #D3EFFF;
    }
    .finished{
      background-color: #CCF3E9;
    }
  .project-info__container{
    width: 60rem;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    display: flex;
    justify-content: space-between;
    color: #828282;
  }
  .info{
    padding-top: 1rem;
  }
  .project__bth-box{
    padding-top: 0.4rem;
    margin-left: auto;
    padding: 1.8rem 2.5rem 1.8rem 2.5rem;
    .btn{
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 2rem;
      border: none;
      margin-left: 0.8rem;
    }
    .btn:hover{
      cursor: pointer;
    }
    .delete__picture{
      width: 1rem;
    }

    .open__picture{
      width: 0.8rem;
    }

    .open__btn{
      background-color: #daecf7;
      padding-top: 0.1rem;
    }
    .delete__btn{
      background-color: #F9DDD9;
      padding-top: 0.1rem;
    }

    .open__btn:hover{
      background-color: #cde8fa;
    }
    .delete__btn:hover{
      background-color: #f8cac3;
    }
  }
}
</style>