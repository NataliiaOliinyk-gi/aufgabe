import type { FC } from "react";
import { useState, useEffect } from "react";

// Hilfsfunktion: liefert ein Promise zurück, das nach ms Millisekunden aufgelöst wird
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const UserStatus: FC = () => {
    // useState: speichert den aktuellen Benutzerstatus als String
  const [userStatus, setUserStatus] = useState<string>("");
  // useState: speichert eine Fehlermeldung oder null, falls kein Fehler vorliegt
  const [error, setError] = useState<string | null>(null);

  // useEffect: führt einen Seiteneffekt beim Mounten der Komponente aus
  useEffect(() => {
    // Asynchrone Funktion, die den Benutzerstatus "vom Server" lädt
    const fetchUserStatus = async () => {
      try {
        // Vor jedem neuen Request vorherige Fehlermeldung zurücksetzen
        setError(null);

        // künstliche Wartezeit, um einen Server-Request zu simulieren
        await delay(1000);

        // hier könnte ein echter Server-Status kommen
        const result = `Benutzerstatus ${new Date().toLocaleTimeString()}`;

        // Status im State speichern, damit die UI neu gerendert wird
        setUserStatus(result);
      } catch (error) {
        // Fehlerbehandlung: Fehlermeldung in einen lesbaren String umwandeln
        const message =
          error instanceof Error ? error.message : "Unbekannter Fehler";
        setError(message);
      }
    };

    // ersten Status sofort beim Mounten laden
    fetchUserStatus();

    // Intervall einrichten: Status alle 5 Sekunden neu laden
    const intervalId = setInterval(fetchUserStatus, 5000);

    // Cleanup-Funktion: Intervall beim Unmount der Komponente wieder aufräumen
    return () => clearInterval(intervalId);
  }, []); // leeres Dependency-Array: Effekt wird nur einmal beim Mounten registriert

  return (
    <div>
      <div>
        <p>UserStatus: </p>
        {/* Anzeige des aktuellen Benutzerstatus */}
        <span>{userStatus}</span>
      </div>
      {/* Anzeige einer Fehlermeldung, falls ein Fehler aufgetreten ist */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserStatus;
