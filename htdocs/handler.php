<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $volcano = htmlspecialchars($_POST["volcano"]);
        $volcano_creature = htmlspecialchars($_POST["volcano_creature"]);

    $forest = htmlspecialchars($_POST["forest"]);
        $forest_creature = htmlspecialchars($_POST["forest_creature"]);

    $cave = htmlspecialchars($_POST["cave"]);
        $cave_creature = htmlspecialchars($_POST["cave_creature"]);

    $dungeon = htmlspecialchars($_POST["dungeon"]);
        $dungeon_creature = htmlspecialchars($_POST["dungeon_creature"]);

    $underwater = htmlspecialchars($_POST["underwater"]);
        $underwater_creature = htmlspecialchars($_POST["underwater_creature"]);

    $desert = htmlspecialchars($_POST["desert"]);
        $desert_creature = htmlspecialchars($_POST["desert_creature"]);

    $graveyard = htmlspecialchars($_POST["graveyard"]);
        $graveyard_creature = htmlspecialchars($_POST["graveyard_creature"]);

    $plains = htmlspecialchars($_POST["plains"]);
        $plains_creature = htmlspecialchars($_POST["plains_creature"]);

    $snow = htmlspecialchars($_POST["snow"]);
         $snow_creature = htmlspecialchars($_POST["snow_creature"]);

    $thoughts = htmlspecialchars($_POST["thoughts"]);

    $future_biomes = htmlspecialchars($_POST["future_biomes"]);

    $future_creatures = htmlspecialchars($_POST["future_creatures"]);


    echo "These are your favorite environments: ";
    echo "<br>";
    echo $volcano;
    echo $forest;
    echo $cave;
    echo $dungeon;
    echo $underwater;
    echo $graveyard;
    echo $plains;
    echo $snow;
    echo $desert;
    echo "<br>";
    echo "These are your favorite creatures: ";
    echo "<br>";
    echo $volcano_creature;
    echo $forest_creature;
    echo $cave_creature;
    echo $dungeon_creature;
    echo $underwater_creature;
    echo $graveyard_creature;
    echo $plains_creature;
    echo $snow_creature;
    echo $desert_creature;
    echo "<br>";
    echo "These are your responses: ";
    echo "<br>";
    echo $thoughts;
    echo "<br>";
    echo $future_biomes;
    echo "<br>";
    echo $future_creatures;

    header("location: ../index.html");
    exit();
} else {
    header("location: ../index.html");
    exit();
}

?>