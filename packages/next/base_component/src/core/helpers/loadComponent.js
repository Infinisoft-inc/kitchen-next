/**
 * Dynamic Runtime Loading
 * @param {*} scope 
 * @param {*} module 
 * @returns 
 */
export function loadComponent(scope, module) {
    return async () => {
      // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
      await __webpack_init_sharing__("default");
      const container = window[scope]; // or get the container somewhere else
      // Initialize the container, it may provide shared modules
      await container.init(__webpack_share_scopes__.default);
      const factory = await window[scope].get(module);
      const Module = factory();
      return Module;
    };
  }
  