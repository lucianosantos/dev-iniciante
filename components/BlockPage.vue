<template>
  <div class="block-page">
    <!-- Header Section -->
    <div class="header-section">
      <div class="container">
        <div class="hero-content">
          <div class="block-badge">Bloco {{ node.number }}</div>
          <h1 class="hero-title">{{ node.title }}</h1>
          <div class="duration-badge">{{ node.duration }}</div>
        </div>

        <p class="hero-description">{{ node.overview }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <div class="content-grid">
          <!-- Main Content Column -->
          <div class="content-column">
            <div class="sections">
              <div v-for="(section, key) in node.sections" :key="key" class="section">
                <h2 class="section-title">{{ getSectionNumber(key) }}. {{ section.title }}</h2>
                
                <div class="subsection">
                  <div class="subsection-text">{{ section.overview }}</div>
                </div>

                <!-- Videos -->
                <div v-if="section.videos?.length" class="subsection">
                  <h3 class="subsection-title">Vídeos</h3>
                  <ul class="resource-list">
                    <li v-for="video in section.videos" :key="video.url" class="resource-item">
                      <span class="resource-bullet">›</span>
                      <a :href="video.url" target="_blank" rel="noopener" class="resource-link">
                        {{ video.title }}
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Articles -->
                <div v-if="section.articles?.length" class="subsection">
                  <h3 class="subsection-title">Artigos</h3>
                  <ul class="resource-list">
                    <li v-for="article in section.articles" :key="article.url" class="resource-item">
                      <span class="resource-bullet">›</span>
                      <a :href="article.url" target="_blank" rel="noopener" class="resource-link">
                        {{ article.title }}
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Readings -->
                <div v-if="section.readings?.length" class="subsection">
                  <h3 class="subsection-title">Leituras</h3>
                  <ul class="resource-list">
                    <li v-for="reading in section.readings" :key="reading.url" class="resource-item">
                      <span class="resource-bullet">›</span>
                      <a :href="reading.url" target="_blank" rel="noopener" class="resource-link">
                        {{ reading.title }}
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Cheatsheets -->
                <div v-if="section.cheatsheets?.length" class="subsection">
                  <h3 class="subsection-title">Cheat sheet</h3>
                  <ul class="resource-list">
                    <li v-for="sheet in section.cheatsheets" :key="sheet.url" class="resource-item">
                      <span class="resource-bullet">›</span>
                      <a :href="sheet.url" target="_blank" rel="noopener" class="resource-link">
                        {{ sheet.title }}
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Cheat sheet prompts -->
                <div v-if="section.cheatsheet_prompts?.length" class="subsection">
                  <h3 class="subsection-title">Cheat sheet — prompts úteis</h3>
                  <div class="prompts-container">
                    <div v-for="prompt in section.cheatsheet_prompts" :key="prompt.label" class="prompt-item">
                      <div class="prompt-header">
                        <strong>{{ prompt.label }}:</strong>
                        <button @click="copyToClipboard(prompt.prompt)" class="copy-btn">
                          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copiar
                        </button>
                      </div>
                      <div class="prompt-code">
                        <code>{{ prompt.prompt }}</code>
                      </div>
                    </div>
                    <p class="prompt-note">Dica: salve esses prompts em docs/prompts-ia.md no seu repositório.</p>
                  </div>
                </div>

                <!-- Exercises -->
                <div v-if="section.exercises?.length" class="subsection">
                  <h3 class="subsection-title">Exercícios</h3>
                  <ul class="exercise-list">
                    <li v-for="exercise in section.exercises" :key="exercise" class="exercise-item">
                      <span class="exercise-bullet">•</span>
                      {{ exercise }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar -->
          <aside class="sidebar-column">
            <!-- Summary -->
            <div class="sidebar-card">
              <h3 class="sidebar-title">Resumo rápido</h3>
              <ul class="summary-list">
                <li v-for="item in node.summary" :key="item">{{ item }}</li>
              </ul>
            </div>

            <!-- Time -->
            <div v-if="node.time_suggested" class="sidebar-card">
              <h3 class="sidebar-title">Tempo sugerido (~40h)</h3>
              <div class="time-list">
                <div 
                  v-for="(time, section) in node.time_suggested" 
                  :key="section" 
                  class="time-item"
                >
                  <span class="time-label">{{ section }}:</span>
                  <span class="time-value">{{ time }}</span>
                </div>
              </div>
            </div>

            <!-- References -->
            <div class="sidebar-card">
              <h3 class="sidebar-title">Referências (adicionar links)</h3>
              <ul class="reference-list">
                <li v-for="ref in node.references" :key="ref" class="reference-item">
                  {{ ref }}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RoadmapNode } from '../data/roadmap'

interface Props {
  node: RoadmapNode
}

defineProps<Props>()

const getSectionNumber = (key: string | number): string => {
  const keyStr = String(key)
  const numbers: { [key: string]: string } = {
    'ia': '1',
    'git': '2', 
    'project': '3'
  }
  return numbers[keyStr] || '1'
}

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style scoped>
.block-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0b0b0c, #0c0d12 40%, #0b0f18);
  color: #e7e9ee;
}

.header-section {
  border-bottom: 1px solid #1f2530;
  background: rgba(11, 15, 24, 0.8);
}

.container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 24px 0 16px;
  color: #22d3ee;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: #67e8f9;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.block-badge {
  padding: 4px 12px;
  background: #0f766e;
  color: #eafffb;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
}

.hero-title {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.duration-badge {
  padding: 4px 12px;
  background: rgba(154, 163, 178, 0.1);
  color: #9aa3b2;
  border-radius: 12px;
  font-size: 14px;
}

.hero-description {
  font-size: 16px;
  line-height: 1.58;
  color: #9aa3b2;
  margin: 0;
  padding-bottom: 32px;
  max-width: 800px;
}

.main-content {
  padding: 32px 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.section-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px 0;
}

.subsection {
  margin-bottom: 32px;
}

.subsection-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.subsection-text {
  font-size: 16px;
  line-height: 1.58;
  color: #9aa3b2;
  margin: 0;
}

.resource-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.resource-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
}

.resource-bullet {
  color: #22d3ee;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.resource-link {
  color: #22d3ee;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.resource-link:hover {
  color: #67e8f9;
}

.prompts-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.prompt-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.prompt-header strong {
  color: #e7e9ee;
  font-size: 16px;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: transparent;
  border: 1px solid #1f2530;
  border-radius: 6px;
  color: #9aa3b2;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: rgba(34, 211, 238, 0.1);
  border-color: #22d3ee;
  color: #22d3ee;
}

.prompt-code {
  background: rgba(15, 17, 21, 0.6);
  border: 1px solid #1f2530;
  border-radius: 8px;
  padding: 16px;
}

.prompt-code code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.4;
  color: #9aa3b2;
}

.prompt-note {
  font-size: 14px;
  color: #9aa3b2;
  font-style: italic;
  margin-top: 16px;
}

.exercise-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.exercise-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.4;
}

.exercise-bullet {
  color: #9aa3b2;
  flex-shrink: 0;
  margin-top: 2px;
}

.sidebar-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-card {
  background: rgba(15, 17, 21, 0.4);
  border: 1px solid #1f2530;
  border-radius: 16px;
  padding: 24px;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.summary-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.summary-list li {
  font-size: 14px;
  line-height: 1.4;
  color: #9aa3b2;
  margin-bottom: 8px;
}

.time-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.time-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-label {
  font-size: 14px;
  color: #9aa3b2;
}

.time-value {
  font-size: 14px;
  font-weight: 600;
  color: #0f766e;
}

.reference-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.reference-item {
  font-size: 14px;
  line-height: 1.4;
  color: #9aa3b2;
  margin-bottom: 8px;
}
</style>
