import Vue from 'vue';
import Router from 'vue-router';

import PersonalBlog from './views/PersonalBlog.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import DetailLingkungan from './views/DetailLingkungan.vue';
import DaftarLingkungan from './views/DaftarLingkungan.vue';
import DaftarMisa from './views/DaftarMisa.vue';
import DaftarTiket from './views/DaftarTiket.vue';
import FormMisa from './views/FormMisa.vue';
import FormLingkungan from './views/FormLingkungan.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/blog-overview',
    },
    {
      path: '/blog-overview',
      name: 'blog-overview',
      component: PersonalBlog,
    },
    {
      path: '/detail-lingkungan',
      name: 'detail-lingkungan',
      component: DetailLingkungan,
    },
    {
      path: '/daftarlingkungan',
      name: 'daftarlingkungan',
      component: DaftarLingkungan,
    },
    {
      path: '/daftarmisa',
      name: 'daftarmisa',
      component: DaftarMisa,
    },
    {
      path: '/datartiket',
      name: 'daftartiket',
      component: DaftarTiket,
    },
    {
      path: '/formlingkungan',
      name: 'formlingkungan',
      component: FormLingkungan,
    },
    {
      path: '/formmisa',
      name: 'formmisa',
      component: FormMisa,
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/components-overview',
      name: 'components-overview',
      component: ComponentsOverview,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
