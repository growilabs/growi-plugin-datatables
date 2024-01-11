## growi-plugin-datatables

This [GROWI](https://github.com/weseek/growi)'s plugin add button whose adapt [DataTable](https://datatables.net/) to table.

DataTable is extended by following features.

- Changing order: "None (descriptive order)" -> "Ascending" -> "Descending" -> ... (loop)
  - You can change the order by clicking the sort button on the right side of the column header
- Numerical values are in natural order
  - ex. "2.4m", "4.5m", "10.9m", ... (Ascending)
- Scrolling vertically (Max table height: 500px)

### before adapt

![image](https://private-user-images.githubusercontent.com/32702772/294738777-1d045990-11e2-4d32-af79-9bb09b1775e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ5OTI5NDEsIm5iZiI6MTcwNDk5MjY0MSwicGF0aCI6Ii8zMjcwMjc3Mi8yOTQ3Mzg3NzctMWQwNDU5OTAtMTFlMi00ZDMyLWFmNzktOWJiMDliMTc3NWUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTExVDE3MDQwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVhZDc5YWRlZWUzOTM4ZjY2YmI2YWNhMzYwZTk1MjUzYjA4MjMwMmQ5ZGRmYzBkNGIxNmE2ZjRmNGNjYjliYzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.IKEXgAiAJpWvpSddLUasz_s5VNIcB33Xhq9cX1Vf8qQ)

### after adapt and search with "carnivore" and sort by "Name"

![image](https://private-user-images.githubusercontent.com/32702772/294738780-b6e43820-66f8-41b9-8f68-21e86c3262e7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ5OTI5NDEsIm5iZiI6MTcwNDk5MjY0MSwicGF0aCI6Ii8zMjcwMjc3Mi8yOTQ3Mzg3ODAtYjZlNDM4MjAtNjZmOC00MWI5LThmNjgtMjFlODZjMzI2MmU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTExVDE3MDQwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ4ZDZlZjZlNmY3NGZkYzRkMTBjNTdmOTM2ZjkzZWIxOWJjZDMwMWMxYjUyZWY3NzY2M2VlNTJjNDg5NjZiZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Wuy41zplkN_e6G9cHCUSLyvzU2fbJuwy-P3tYXSIvTc)
