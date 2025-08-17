<template>
    <UDrawer v-model:open="isOpen" direction="right" :handle="false">
        <template #content>
        <div v-if="node" style="padding: 18px;">
            <!-- Header - exact match to mock -->
            <header style="display: flex; align-items: center; gap: 10px;">
                <div 
                    class="logo-dot"
                    style="width: 10px; height: 10px; background: var(--primary); border-radius: 50%;"
                ></div>
                <h2 style="font-size: 18px; margin: 0; flex: 1; color: var(--text);">
                    Bloco {{ node.number }} — {{ node.title }}
                </h2>
                <span 
                    class="tag"
                    style="margin-left: auto; font-size: 12px; padding: 4px 8px; border-radius: 999px; border: 1px solid #2a2f3a; background: #111421; color: #cbd5e1;"
                >
                    Resumo
                </span>
            </header>
            
            <!-- Content - exact match to mock -->
            <article class="prose small" style="color: var(--text);">
                <h3 style="margin-top: 14px; margin-bottom: 6px; font-size: 14px; letter-spacing: 0.2px; color: #dbeafe;">
                    Você vai aprender
                </h3>
                <p style="margin: 0; color: var(--muted); line-height: 1.5;">
                    {{ node.overview }}
                </p>
                
                <h3 style="margin-top: 14px; margin-bottom: 6px; font-size: 14px; letter-spacing: 0.2px; color: #dbeafe;">
                    Essenciais (Core)
                </h3>
                <ul style="margin: 0; padding-left: 18px; color: var(--muted); line-height: 1.5;">
                    <li v-for="item in node.essentials" :key="item">
                        {{ item }}
                    </li>
                </ul>
                
                <h3 style="margin-top: 14px; margin-bottom: 6px; font-size: 14px; letter-spacing: 0.2px; color: #dbeafe;">
                    Projeto/Entregável
                </h3>
                <ul style="margin: 0; padding-left: 18px; color: var(--muted); line-height: 1.5;">
                    <li v-for="item in node.project" :key="item">
                        {{ item }}
                    </li>
                </ul>
                
                <div v-if="node.optional?.length">
                    <h3 style="margin-top: 14px; margin-bottom: 6px; font-size: 14px; letter-spacing: 0.2px; color: #dbeafe;">
                        Opcional
                    </h3>
                    <ul style="margin: 0; padding-left: 18px; color: var(--muted); line-height: 1.5;">
                        <li v-for="item in node.optional" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                
                <!-- Buttons - exact match to mock -->
                <div style="margin-top: 12px; display: flex; gap: 8px;">
                    <button 
                        class="btn btn-primary"
                        @click="navigateTo(`/block/${node.id}`)"
                    >
                        Ver página do bloco
                    </button>
                    <button 
                        class="btn btn-ghost"
                        @click="closeDrawer"
                    >
                        Fechar
                    </button>
                </div>
            </article>
        </div>
        </template>
    </UDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

// Internal state management
const isOpen = ref(false)
const node = ref<RoadmapNode | null>(null)

// Expose open function to parent components
const open = (nodeData: RoadmapNode) => {
  node.value = nodeData
  isOpen.value = true
}

const closeDrawer = () => {
  isOpen.value = false
}

// Expose functions to parent
defineExpose({
  open
})
</script>
