## growi-plugin-datatables

This [GROWI](https://github.com/weseek/growi)'s plugin add button whose adapt [DataTable](https://datatables.net/) to table.

DataTable is extended by following features.

- Changing order: "None (descriptive order)" -> "Ascending" -> "Descending" -> ... (loop)
  - You can change the order by clicking the sort button on the right side of the column header
- Numerical values are in natural order
  - ex. "2.4m", "4.5m", "10.9m", ... (Ascending)
- Scrolling vertically (Max table height: 500px)
- Extension buttons
  - "Column visibility" button: Toggle column visibility
  - "SearchPanels" button: Filter rows for each column (by search value, by select value)
  - "Copy" button: Copy the table
  - "CSV" button: Download the table in CSV format
  - "Print" button: Print the table

### before adapt

![image](https://github.com/weseek/growi-plugin-datatables/assets/32702772/fed3b66b-6b1b-4dd3-9d2b-43693255eb49)

### after adapt and filter with "carnivore" and sort by "Name"

![image](https://github.com/weseek/growi-plugin-datatables/assets/32702772/5491e0af-0150-4189-947e-e3c2acf85293)

![image](https://github.com/weseek/growi-plugin-datatables/assets/32702772/7e6512b0-9fcd-4c08-94fb-072d35a2f492)
