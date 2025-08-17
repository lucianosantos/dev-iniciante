<template>
  <div class="min-h-screen bg-[color:var(--background)]">
    <AppHeader />
    
    <main class="max-w-4xl mx-auto p-6 pt-24">
      <div class="bg-[color:var(--surface)]/50 border border-[color:var(--border)] rounded-2xl p-6 shadow-lg shadow-black/5">
        <!-- Back Button -->
        <div class="mb-6">
          <UButton
            icon="i-lucide-arrow-left"
            variant="ghost" 
            color="neutral"
            to="/"
          >
            Voltar ao Roadmap
          </UButton>
        </div>
        
        <!-- Block Page Content -->
        <BlockPage v-if="blockData" :node="blockData" />
        <div v-else class="text-center py-8">
          <p class="text-[color:var(--muted)]">Bloco não encontrado</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../../../components/AppHeader.vue'
import BlockPage from '../../../components/BlockPage.vue'
import { roadmapData, type RoadmapNode } from '../../../data/roadmap'

// Get route parameter
const route = useRoute()
const blockId = route.params.id as string

// Find the block data
const blockData = computed(() => {
  return roadmapData.find(node => node.id === blockId) || null
})

// SEO
useHead({
  title: computed(() => 
    blockData.value 
      ? `${blockData.value.title} - Roadmap BR` 
      : 'Bloco não encontrado - Roadmap BR'
  ),
  meta: [
    { 
      name: 'description', 
      content: computed(() => 
        blockData.value?.overview || 'Bloco do roadmap não encontrado.'
      )
    }
  ]
})
</script>
