import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ChatRoom from '../views/chat-room/Main.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ChatRoom',
    component: ChatRoom,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
