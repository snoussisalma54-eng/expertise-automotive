<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Nouvelle réservation</title>
</head>

<body style="font-family: Arial, sans-serif;">

    <h2>🚗 Nouvelle réservation - Diagnostic Automobile</h2>

    <p>Une nouvelle réservation a été effectuée.</p>

    <hr>

    <p><strong>Nom :</strong> {{ $reservation->nom }}</p>

    <p><strong>Téléphone :</strong> {{ $reservation->telephone }}</p>

    <p><strong>Marque :</strong> {{ $reservation->marque }}</p>

    <p><strong>Modèle :</strong> {{ $reservation->modele }}</p>

    <p><strong>Type automobile :</strong> {{ $reservation->type }}</p>

    <p><strong>Service :</strong> {{ $reservation->service }}</p>

    <p><strong>Date :</strong> {{ $reservation->date }}</p>

    <p><strong>Heure :</strong> {{ $reservation->heure }}</p>

    <hr>

    <p>Merci.</p>

</body>
</html>