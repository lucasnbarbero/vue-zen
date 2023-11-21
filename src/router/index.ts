import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [{ path: '/', component: HomeView }];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
