<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
      // TopMenu component: TopMenu.vue // explain tailwind classes:
      <!-- 
        flex: display flex
        items-center: align items center
        justify-between: justify content between
        text-xs: font size 12px
        text-[#333333]: text color #333333
        font-light: font weight light
        px-2: padding left and right 8px
        h-10: height 40px
        bg-[#FAFAFA]: background color #FAFAFA
        max-w-[1200px]: max width 1200px
        border-r: border right
        border-r-gray-400: border right color gray-400
        hover:text-[#FF4646]: hover text color #FF4646
        cursor-pointer: cursor pointer
       -->
      <ul class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]">
        <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">Sell on AliExpress</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
