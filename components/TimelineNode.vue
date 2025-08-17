<template>
  <div class="relative flex gap-4">
    <span 
      class="node-dot flex-shrink-0 w-7 h-7 rounded-full border-2 border-[color:var(--border)] bg-[color:var(--surface)] flex items-center justify-center relative z-10" 
      :class="{ 
        'border-blue-500 bg-blue-500': node.status === 'in-progress',
        'border-green-500 bg-green-500': node.status === 'completed' 
      }"
    >
      <span class="w-2 h-2 rounded-full bg-[color:var(--background)]"></span>
    </span>
    
    <UCard class="flex-1 cursor-pointer hover:ring-2 hover:ring-blue-500/20 transition-all duration-200">
      <div class="flex items-start justify-between gap-3 mb-2">
        <span class="text-xs font-mono text-[color:var(--muted)] bg-[color:var(--surface-2)] px-2 py-1 rounded">{{ node.number }}</span>
        <h3 class="font-semibold text-lg flex-1">{{ node.title }}</h3>
        <span 
          class="text-xs px-2 py-1 rounded-full font-medium"
          :class="{
            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300': node.status === 'todo',
            'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300': node.status === 'in-progress',
            'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300': node.status === 'completed'
          }"
        >
          {{ getStatusLabel(node.status) }}
        </span>
      </div>
      
      <ul class="text-sm text-[color:var(--muted)] mt-2 space-y-1">
        <li v-for="item in node.summary" :key="item" class="flex items-start gap-2">
          <span class="chevron-bullet flex-shrink-0 mt-1.5"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
      
      <div class="flex gap-2 mt-3">
        <UButton
          color="primary"
          size="sm"
          @click="$emit('viewBlock', node)"
        >
          Ver bloco
        </UButton>
        <UButton
          variant="outline"
          color="neutral"
          size="sm"
          @click="$emit('openDrawer', node)"
        >
          Resumo
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
interface RoadmapNode {
  id: string
  number: string
  title: string
  status: 'todo' | 'in-progress' | 'completed'
  duration: string
  summary: string[]
  overview: string
  essentials: string[]
  project: string[]
  checklist: string[]
  references: string[]
  optional?: string[]
}

interface Props {
  node: RoadmapNode
}

defineProps<Props>()

defineEmits<{
  openDrawer: [node: RoadmapNode]
  viewBlock: [node: RoadmapNode]
}>()

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'in-progress':
      return 'Em progresso'
    case 'completed':
      return 'Concluído'
    default:
      return 'A fazer'
  }
}
</script>
