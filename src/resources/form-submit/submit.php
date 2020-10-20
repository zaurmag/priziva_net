<?php
$formData = $_POST;
$formGo = $formData["go"]; ?>

<?php if(isset($formData)) {

    // ===== Reference ============================
    $recaptchaOn = false;

    if ($recaptchaOn) {
        $recaptcha = $_POST['g-recaptcha-response'];
    }

    /**
     * Vars
     */
    $to = "demo@zaurmag.ru"; // E-mail на который присылать письмо
    $fromName = 'Коуч';
    $fromEmail = "no-reply@zaurmag.ru"; // E-mail от имени которого приходит письмо. Почта на домене сайта.
    $subject = "Коуч - Заявка с сайта...";


    function adopt($text) {
        return '=?UTF-8?B?'.base64_encode($text).'?=';
    }

    /**
     * Message body
     */
    $message  = '<html><body>';
    $message .= "<table>";
    $title = array(
        "phone" => "Телефон:",
        "getResult" => "Как вам удобнее получить результат:",
    );

    foreach($formData as $key => $value) {
        if (is_array($value)) {
            foreach ($value as $k => $val) {
                $message .= "<tr>";
                $message .= "<td style='width: 350px;padding-top: 15px'>";
                $message .= "<strong>". $value[0]. "</strong>";
                $message .= "</td>";
                $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
                $message .= "$value[answers]";
                $message .= "</td>";
                $message .= "</tr>";
            }
        } else {
            $message .= "<tr>";
            $message .= "<td style='padding-top: 20px'>";
            $message .= "<strong>" . $title[$key] . "</strong>";
            $message .= "</td>";
            $message .= "<td style='padding-left:12px;padding-top: 20px'>";
            $message .= "$value";
            $message .= "</td>";
            $message .= "</tr>";
        }
    }

    $message .= "</table><br><br>";
    $message .= '</body></html>';
    $headers = "MIME-Version: 1.0" . PHP_EOL .
               "Content-Type: text/html; charset=utf-8" . PHP_EOL .
               'From: '.adopt($fromName).' <'.$fromEmail.'>' . PHP_EOL .
               'Reply-To: '.adopt($fromName).' <'.$fromEmail.'> ' . PHP_EOL;

    if ($recaptchaOn) {
        if (!empty($recaptcha)) {
            $secret = '6LfMJSgTAAAAABw4lECZsLP5krXztMRZC0_Fgt3O';
            $url = "//www.google.com/recaptcha/api/siteverify?secret=".$secret ."&response=".$recaptcha."&remoteip=".$_SERVER['REMOTE_ADDR'];

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
                CURLOPT_POST => 1,
                CURLOPT_POSTFIELDS => array(
                    'secret' => $secret,
                    'response' => $recaptcha
                )
            ));
            $response = curl_exec($curl);
            curl_close($curl);

            $response = json_decode($response, true);

            if ( $response["success"] === false ) {
                $answer = '2';
            } else {
                if (mail($to, adopt($subject), $message, $headers)) {
                    $answer = '1';
                } else {
                    $answer = '0';
                }
            }

        } else {
            $answer = '3';
        }
    } else {
        if (mail($to, adopt($subject), $message, $headers)) {
            $answer = '1';
        } else {
            $answer = '0';
        }
    }

    die($answer);

} ?>
