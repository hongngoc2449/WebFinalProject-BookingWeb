<template>
  <div id="MainLayout" class="w-full fixed z-50">
    <div id="TopMenu" class="w-full bg-[#FAFAFA] border-b md:block hidden">
      <ul class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#FAFAFA] max-w-[1200px]">
        <!-- explain tailwind in details of li below:
          - border-r: border-right
          - border-r-gray-400: border-right color gray-400
          - px-3: padding left and right 3 pixels
          - hover:text-[#FF4646]: hover color red
          - cursor-pointer: cursor pointer
          
        -->
        <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">Sell on AliExpress</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
