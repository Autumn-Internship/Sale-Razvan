<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="Alt.css">
<title> Indicatori economici state </title>
<meta charset="utf-8"/>
</head>

<body>
<div class="imgFundal">
<h2> Sale Razvan </h2>
<img style="float: left; border: 0.6vh solid black; margin-left: 1vw; margin-right: 2vw;height: 65vh; width:25vw;" src="https://i.gyazo.com/9632f575450e7b5fbc9234218e58ff7d.jpg">
<h2 style="font-size: 1.5vw;"> Numele meu este Sale Razvan, sunt student in anul III la Facultatea de Stiinte Economice si Gestiunea Afacerilor, specializarea Informatica Economica. <br><br> Dupa absolvirea scolii gimnaziale din Aghiresu-Fabrici, am optat pentru Liceul de Informatica 
"Tiberiu Popoviciu" unde mi-am dezvoltat pasiunea pentru informatica ce m-a determinat sa continui studiile pe aceasta ramura. <br><br> In cadrul lucrarii de licenta am decis sa realizez o aplicatie web pentru toti tertii interesati. In  aceasta categorie intra 
atat profesorii, cat si studentii facultatii, precum si altor indivizi cu un interes in domeniu. <br><br> Pentru realizarea site-ului am folosit urmatoarele limbaje: HTML, CSS, JS, PHP si multiple surse de date. <br><br></h2>
<h1 style="margin-bottom: 7.5vh;"> Scrie-mi un mesaj ! </h1>
<form method="GET">
<h3 style="margin-left: 3vw;">Nume</h3> 
<h3 style="margin-left: 12.5vw;">Email</h3>
<h3 style="margin-left: 16.5vw;">Mesaj</h3>
<h3 style="margin-left: 17.5vw;">Submit</h3>
<textarea name="Nume" style="border: 0.25vh solid black; margin-left: 0vw; height: 7.5vh; width: 10vw; font-weight: bold; resize:none;" required></textarea>
<textarea name="Email" style="border: 0.25vh solid black; margin-left: 5.5vw; height: 7.5vh; width: 10vw; font-weight: bold; resize:none" required></textarea>
<textarea name="Mesaj" style="border: 0.25vh solid black; margin-left: 5vw; height: 7.5vh; width: 20vw; font-weight: bold; resize: none;" required></textarea>
<input class="buhton" type="submit" name="Submit" value="APASA" style="margin-left: 5vw; font-weight: bold; position: relative; bottom: 3.5vh; margin-bottom: 7.5vh;">
</form>
<?php	
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/vendor/autoload.php';

if(isset($_GET['Submit']))
{
$mail = new PHPMailer(true);
$nume = $_GET['Nume'];
$email = $_GET['Email'];
$mesaj = $_GET['Mesaj'];

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'salerazvan@gmail.com';                     // SMTP username
    $mail->Password   = 'tdga zafl zocp glxh';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //tdgazaflzocpglxh

    //Recipients
    $mail->setFrom($email, $nume);
    $mail->addAddress('salerazvan@gmail.com');     // Add a recipient
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Content
    $mail->isHTML(false);                                  // Set email format to HTML
    $mail->Subject = 'Response site Licenta';
    $mail->Body    = "$mesaj DE LA $email";
    $mail->AltBody = $mesaj;

    $mail->send();
    echo "<h1 style='position: relative; bottom: 8vh;'> Mesajul a fost trimis cu succes! </h1>";
} catch (Exception $e) {
    echo "<h1> Mesajul nu a putut fi trimis. ErrorInfo: {$mail->ErrorInfo}";
}
}
?>
</div>
</body>
</html>