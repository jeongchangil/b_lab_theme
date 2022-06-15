import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @begas/jupyterlab-test-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@begas/jupyterlab-test-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @begas/jupyterlab-test-theme is activated!');
    const style = '@begas/jupyterlab-test-theme/index.css';

    manager.register({
      name: '@begas/jupyterlab-test-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
