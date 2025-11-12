**Frage**

*Welche CSS-Eigenschaft hast Du verwendet, um die Spaltenanzahl ohne Media Queries für die kleinen Bildschirme automatisch zu steuern?*

`grid-template-columns` in Kombination mit `repeat(auto-fit, minmax(200px, 1fr))`

Dadurch passt sich die Spaltenanzahl auf kleineren Bildschirmen automatisch an, ohne zusätzliche Media Queries.