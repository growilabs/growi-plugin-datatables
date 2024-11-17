import { adaptDataTable } from './src/DataTable';

declare const growiFacade: any;

const activate = (): void => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  const { optionsGenerators } = growiFacade.markdownRenderer;

  const originalCustomViewOptions = optionsGenerators.customGenerateViewOptions;

  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    const options = originalCustomViewOptions ? originalCustomViewOptions(...args) : optionsGenerators.generateViewOptions(...args);
    options.rehypePlugins.push(adaptDataTable);

    return options;
  };
};

const deactivate = (): void => {};

// register activate
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-datatables'] = {
  activate,
  deactivate,
};

export {};
