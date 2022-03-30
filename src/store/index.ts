import { createStore } from 'vuex';

// 动态引入 modules 目录下所有ts/js store
let modules = {};
const modulesFiles = import.meta.globEager('./modules/*.(ts|js)');
const modulesKeys = Object.keys(modulesFiles);

for (let i = 0; i < modulesKeys.length; i += 1) {
  const path = modulesKeys[i];
  const moduleName = path.replace(/.*\/modules\/(.*)\.(ts|js)$/gim, '$1');
  modules = {
    ...modules,
    [moduleName]: modulesFiles[path].default,
  };
}

const store = createStore({
  state: {
    test: 'store test',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules,
});

export default store;
