<script setup>
  import { useData, withBase } from 'vitepress'
  const { page, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.thumbnailUrl" class="mb-8 min-[1280px]:max-w-[76%]">

    <img 
      :src="withBase(frontmatter.thumbnailUrl)" 
      :alt="frontmatter.title" 
      class="w-full h-72 object-cover rounded-[12px]" 
    />

  </div>
</template>