<template>
  <div>
    <div 
      v-for="(node, index) in nodes" 
      :key="node.id"
      class="flex"
    >
      <!-- Line + dot section -->
      <div class="flex items-center justify-center" style="width: 28px;">
        <div class="line h-full"></div>
        <span 
            class="absolute node-dot"
            :class="getDotClasses(node.status)"
        ></span>
      </div>
      
      <!-- Timeline card -->
      <div class="card flex-1 mb-4">
        <!-- Card Header -->
        <div class="card-head">
          <span class="num">
            {{ node.number }}
          </span>
          <h3 class="card-title">
            {{ node.title }}
          </h3>
          <span 
            class="status"
            :class="getStatusClasses(node.status)"
          >
            {{ getStatusLabel(node.status) }}
          </span>
        </div>
        
        <!-- Summary List -->
        <ul class="bullets">
          <li v-for="summaryItem in node.summary" :key="summaryItem">
            {{ summaryItem }}
          </li>
        </ul>
        
        <!-- Action Buttons -->
        <div class="card-actions">
          <UButton 
            color="primary" 
            @click="$emit('viewBlock', node)"
            size="sm"
          >
            Ver bloco
          </UButton>
          <UButton 
            variant="outline" 
            color="neutral" 
            @click="handleDrawerClick(node)"
            size="sm"
          >
            Resumo
          </UButton>
        </div>
      </div>
    </div>
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
  nodes: RoadmapNode[]
}

defineProps<Props>()

const emit = defineEmits<{
  openDrawer: [node: RoadmapNode]
  viewBlock: [node: RoadmapNode]
}>()

// Debug function
const handleDrawerClick = (node: RoadmapNode) => {
  emit('openDrawer', node)
}

// Helper functions
const getStatusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Concluído'
    case 'in-progress': return 'Em progresso'
    default: return 'A fazer'
  }
}

const getStatusClasses = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700'
  }
}

const getDotClasses = (status: string) => {
  switch (status) {
    case 'completed':
      return 'node-dot-completed'
    case 'in-progress':
      return 'node-dot-progress'
    default:
      return 'node-dot-todo'
  }
}
</script>

<style lang="postcss" scoped>
/* Timeline Structure - Following mock.html exactly */
.line {
    background: #203045;
    width: 2px;
}

.node-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid var(--primary);
    box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.2);
}

.node-dot-completed {
  background: #22c55e;
  border-color: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
}

.node-dot-progress {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.2);
}

.node-dot-todo {
  background: #0d0f12;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.2);
}

.card {
  background: rgba(18, 20, 28, 0.75);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05),
    0 16px 28px -18px rgba(0, 0, 0, 0.35);
  transition: box-shadow 0.2s ease;
  @apply flex-1;
}

.card:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06),
    0 18px 34px -16px rgba(0, 0, 0, 0.45);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.num {
  font-weight: 800;
  color: var(--primary);
  font-size: 18px;
}

.card-title {
  font-weight: 700;
  color: var(--text);
  font-size: 18px;
  flex: 1;
  margin: 0;
}

.status {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 8px;
  margin-left: auto;
}

.bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 10px;
}

.bullets li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 4px;
}

.bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--chev);
}

.card-actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}
</style>
