import { calcTable } from './src/CalcTable';
import { wrapDataTable } from './src/DataTable';

declare const growiFacade: any;

const activate = (): void => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  const { optionsGenerators } = growiFacade.markdownRenderer;

  // For page view
  const originalCustomViewOptions = optionsGenerators.customGenerateViewOptions;
  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    const viewOptions = originalCustomViewOptions ? originalCustomViewOptions(...args) : optionsGenerators.generateViewOptions(...args);
    viewOptions.rehypePlugins.push(calcTable);

    // replace table with DataTable
    const Table = viewOptions.components.table;
    viewOptions.components.table = wrapDataTable(Table);

    return viewOptions;
  };

  // For preview
  const originalCustomPreViewOptions = optionsGenerators.customGeneratePreViewOptions;
  optionsGenerators.customGeneratePreviewOptions = (...args: any[]) => {
    const previewOptions = originalCustomPreViewOptions ? originalCustomPreViewOptions(...args) : optionsGenerators.generatePreviewOptions(...args);
    previewOptions.rehypePlugins.push(calcTable);

    return previewOptions;
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
