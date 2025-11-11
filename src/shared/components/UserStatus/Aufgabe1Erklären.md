In dieser Komponente verwende ich zwei React-Hooks:

1. **useState**

- `userStatus` speichert den aktuell angezeigten Status des Benutzers. Immer wenn ich `setUserStatus(result)` aufrufe, wird die Komponente neu gerendert und der neue Status im UI angezeigt.

- `error` speichert eine Fehlermeldung als String oder `null`, wenn kein Fehler vorliegt. Wenn im `catch`-Block ein Fehler auftritt, wird die Fehlermeldung über `setError(message)` im State gespeichert und anschließend unter dem Status im UI angezeigt.

2. **useEffect**

- `useEffect` nutze ich, um einen Seiteneffekt beim Mounten der Komponente auszuführen. Im Effekt definiere ich die asynchrone Funktion fetchUserStatus, die den Benutzerstatus lädt.

- Direkt nach dem Mounten rufe ich `fetchUserStatus()` einmal auf, damit sofort ein initialer Status angezeigt wird.

- Anschließend lege ich mit `setInterval(fetchUserStatus, 5000)` ein Intervall an, das alle 5 Sekunden den Status neu abruft. Auf diese Weise wird der Benutzerstatus automatisch in regelmäßigen Abständen aktualisiert.

- Im Cleanup `(return () => clearInterval(intervalId))` räume ich das Intervall wieder auf, wenn die Komponente unmounted wird. Das verhindert Speicherlecks und stellt sicher, dass der Status nicht mehr aktualisiert wird, wenn die Komponente nicht mehr auf der Seite ist.

**Hilfsfunktionen / Methoden:**

- `delay(ms)` ist eine kleine Hilfsfunktion, die ein Promise zurückgibt, das nach der angegebenen Zeit aufgelöst wird. Damit simuliere ich eine Netzwerkverzögerung bzw. einen Server-Request.

- In `fetchUserStatus` nutze ich `try/catch`, um Fehler beim Laden des Status abzufangen:

    - Im Erfolgsfall wird userStatus aktualisiert.

    - Im Fehlerfall wird eine lesbare Fehlermeldung in error gespeichert.

- `new Date().toLocaleTimeString()` verwende ich, um im Status die aktuelle Uhrzeit anzuzeigen. So ist gut sichtbar, dass der Status wirklich alle 5 Sekunden aktualisiert wird.