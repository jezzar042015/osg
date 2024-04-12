import SongViewer from '@/pages/SongViewer.vue'
import SongsMenu from '@/pages/SongsMenu.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SongsMenu
    },
    {
      path: '/osg/:id',
      name: 'song',
      component: SongViewer
    }
  ]
})

export default router
