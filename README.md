## growi-plugin-datatables

This [GROWI](https://github.com/weseek/growi)'s plugin adapt [DataTable](https://datatables.net/) to table.

DataTable is extended by following features.

- Changing order: "None (descriptive order)" -> "Ascending" -> "Descending" -> ... (loop)
  - You can change the order by clicking the sort button on the right side of the column header
- Numerical values are in natural order
  - ex. "2.4m", "4.5m", "10.9m", ... (Ascending)
- Toolbar

  Controls are collapsed into a compact icon row above the table, so a table that is only being
  read stays close to a plain table. Nothing is revealed on hover, so the icons never compete with
  GROWI's own "edit this table" icon.

  - "Search" button: Expand a search box inline. Closing it also clears the search, so rows are
    never hidden by a filter you cannot see.
  - "Columns" button: Toggle column visibility
  - "Filters" button: Filter rows for each column (by search value, by select value)
  - "Export" button: Copy / download as CSV / print

- Row count in the footer

  Shown only while a filter is actually hiding rows (`Showing 1 to 8 of 8 entries (filtered from 42
  total entries)`). While every row is visible it says nothing useful, so it stays hidden.

### After filtering by "carnivore" and sorting by "Name"

![image](https://github.com/weseek/growi-plugin-datatables/assets/32702772/5491e0af-0150-4189-947e-e3c2acf85293)

![image](https://github.com/weseek/growi-plugin-datatables/assets/32702772/7e6512b0-9fcd-4c08-94fb-072d35a2f492)

### Performance measurement

Rendering performance is measured with Playwright. See [tests/README.md](tests/README.md) for
prerequisites (Node.js >= 20.6, and a Playwright version constraint imposed by the devcontainer's
Debian 11 base image).

```bash
yarn test:perf
```
