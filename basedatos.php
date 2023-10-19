<?php

include ("con_db.php");

if (isset($_POST['register'])) {
   
    if (strlen($_POST['name']) >= 1 &&
        strlen($_POST['email']) >= 1 &&
        strlen($_POST['date']) >= 1 &&
        strlen($_POST['hora']) >= 1) {

            $name = trim($_POST['name']);
            $email = trim($_POST['email']);
            $date = trim($_POST['date']);
            $hora = trim($_POST['hora']);

            $consulta = "INSERT INTO `lexsolutio`(NOMBRE, EMAIL, FECHA, HORA) VALUES ('$name', '$email', '$date', '$hora');";
            $resultado = mysqli_query($conex, $consulta);

            if ($resultado) {
                ?>
                <h3 class="ok">¡Tu cita ha sido agendada!</h3>
                <?php
            } else {
                ?>
                <h3 class="bad">¡UPS HA OCURRIDO UN ERROR!</h3>
                <?php
            }
    }
}
?>