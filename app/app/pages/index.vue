<template>
  <div class="min-h-screen bg-[color:var(--background)]">
    <AppHeader />
    
    <main class="max-w-4xl mx-auto p-6 pt-24">
      <!-- Timeline View -->
      <div class="bg-[color:var(--surface)]/50 border border-[color:var(--border)] rounded-2xl p-6 shadow-lg shadow-black/5">
        <h1 class="text-3xl font-bold mb-2">Trilha Fullstack</h1>
        <p class="text-sm text-[color:var(--muted)] mb-6">
          8 blocos • ~40h por bloco • IA como tutor • entregáveis verificáveis
        </p>
        
        <Timeline 
          :nodes="roadmapData" 
          @open-drawer="openDrawer"
          @view-block="viewBlock"
        />
      </div>
    </main>
    
    <!-- Drawer -->
    <BlockDrawer ref="drawerRef" />
  </div>
</template>

<script setup lang="ts">
// Explicit imports to debug component loading  
import AppHeader from '../../components/AppHeader.vue'
import Timeline from '../../components/Timeline.vue'
import BlockDrawer from '../../components/BlockDrawer.vue'
import BlockPage from '../../components/BlockPage.vue'
import { roadmapData, type RoadmapNode } from '../../data/roadmap'

// State management
const drawerRef = ref()

// Event handlers  
const openDrawer = (node: RoadmapNode) => {
  drawerRef.value?.open(node)
}

const viewBlock = (node: RoadmapNode) => {
  navigateTo(`/block/${node.id}`)
}

const navigateToBlock = (node: RoadmapNode) => {
  navigateTo(`/block/${node.id}`)
}

// SEO
useHead({
  title: 'Roadmap BR - Trilha Fullstack',
  meta: [
    { name: 'description', content: 'Trilha completa de desenvolvimento fullstack com 8 blocos práticos e entregáveis verificáveis.' }
  ]
})
</script>
