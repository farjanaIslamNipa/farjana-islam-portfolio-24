<template>
  <div class="bg-white dark:bg-dark-blue">
    <div class="app-container">
      <div class="grid grid-cols-12 gap-x-0 sm:gap-x-5 lg:gap-x-10 pt-10 sm:pt-4 lg:pt-16 pb-20 items-center">
        <div class="col-span-full sm:col-span-6 flex w-full justify-center sm:justify-end">
          <div class="">
            <div>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl mb-1 lg:mb-2"><span class="font-bold text-mint-green">Farjana</span> <span class="text-app-orange">Islam</span></h1>
              <p class="text-lg sm:text-xl lg:text-2xl">Merging Creativity with Code</p>
              <div class="flex items-center h-[45px] rounded-md overflow-hidden mt-5">
                <div class="w-[60%] flex justify-center items-center bg-white/10 h-full overflow-hidden text-mint-green">Resume</div>
                <div class="w-[20%] h-full flex justify-center items-center  bg-apple-green/25">
                  <button class="h-full w-full flex justify-center items-center" title="Download Resume">
                    <DownloadIcon />
                  </button>
                </div>
                <div class="w-[20%] flex bg-apple-green/35 h-full justify-center items-center">
                  <button class="h-full w-full flex justify-center items-center" title="View Resume">
                    <ViewIcon />
                  </button>
                </div>
              </div>
            </div>
            <!-- <div class="flex justify-center mt-3 sm:hidden">
              <img src="/images/layer.gif" alt="Web" class="h-[95px]" />
            </div> -->
          </div>
        </div>
        <div class="sm:col-span-6 relative">
          <div class="hidden sm:flex bg-dark-blue/50 h-[100px] sm:h-[300px] lg:h-[400px] w-auto sm:w-[300px] lg:w-[400px] shadow-none sm:shadow-[rgba(0,0,0,0.35)_0px_5px_15px] justify-center items-center rounded-none sm:rounded-full p-8 -bottom-10 -left-44">
            <img src="/images/banner-2.png" alt="Banner" class="h-[250px]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ViewIcon from '../icons/ViewIcon.vue';
import DownloadIcon from '../icons/DownloadIcon.vue'


</script>

<style lang="scss" scoped>

</style>