<template>
  <header class="flex items-center justify-between p-6 border-b border-[color:var(--border)] sticky top-0 z-[100]" style="background-color: var(--surface);">
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-[color:var(--primary)]"></div>
        <span class="font-bold text-lg">Roadmap BR</span>
      </div>
      <nav class="text-sm text-[color:var(--muted)]">
        Trilha Fullstack
      </nav>
    </div>
    
    <div class="ml-auto flex items-center gap-3">
      <UButton
        icon="i-lucide-github"
        color="primary"
      >
        Entrar com GitHub
      </UButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true) // Start with dark mode

// Simple dark mode toggle 
const toggleDark = () => {
  isDark.value = !isDark.value
  
  // Update the document class directly for immediate visual feedback
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
}

// Initialize dark mode on mount
onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})
</script>
