## growi-plugin-datatables

This [GROWI](https://github.com/weseek/growi)'s plugin add button whose adapt [DataTable](https://datatables.net/) to table.

DataTable is extended by following features.

* Changing order: "None (descriptive order)" -> "Ascending" -> "Descending" -> ... (loop)
    * You can change the order by clicking the sort button on the right side of the column header
* Numerical values are in natural order
    * ex. "2.4m", "4.5m", "10.9m", ... (Ascending)
* Scrolling vertically (Max table height: 500px)

### before adapt

![image](https://private-user-images.githubusercontent.com/32702772/294738777-1d045990-11e2-4d32-af79-9bb09b1775e3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MDQ2OTksIm5iZiI6MTcwNDYwNDM5OSwicGF0aCI6Ii8zMjcwMjc3Mi8yOTQ3Mzg3NzctMWQwNDU5OTAtMTFlMi00ZDMyLWFmNzktOWJiMDliMTc3NWUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA1MTMxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRlMjA0YjY1NGNiNDcyMjFmNzQ1MWZjMzRlOGM0NGY1ZWI2NzE5NjhhYTg0N2Y5MTczNmQ1ZGJlYjZmM2E4NTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ILH_nWN0--S87dnSuY7Of1Jqpdiqx6EWZLneTK3bm74)

### after adapt and search with "carnivore" and sort by "Name"

![image](https://private-user-images.githubusercontent.com/32702772/294738780-b6e43820-66f8-41b9-8f68-21e86c3262e7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MDQ2OTksIm5iZiI6MTcwNDYwNDM5OSwicGF0aCI6Ii8zMjcwMjc3Mi8yOTQ3Mzg3ODAtYjZlNDM4MjAtNjZmOC00MWI5LThmNjgtMjFlODZjMzI2MmU3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTA3VDA1MTMxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNmNDUzNTZlOGY0OWQ0ZDhjNTBiZmE3MmRkNDM4Y2JmZmNkNzdmNzA4MWZlODY5M2FhZDA5YTg4NTcwOGIyZWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.MAkiBCUNg67xZLNaEcxzykeEdqufKGqJzaSdvSFPusc)

