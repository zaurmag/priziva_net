<?php
$formData = $_POST;
$formGo = $formData["go"]; ?>

<?php if(isset($formData)) {

    // 1
    $quizTitle1 = $formData["quiz-1"]["title"];
    $quizAnswer1 = $formData["quiz-1"]["answers"];

    // 2
    $quizTitle2 = $formData["quiz-2"]["title"];
    $quizAnswer2 = $formData["quiz-2"]["answers"];

    // 3
    $quizTitle3 = $formData["quiz-3"]["title"];
    $quizAnswer3 = $formData["quiz-3"]["answers"];

    // 4
    $quizTitle4 = $formData["quiz-4"]["title"];
    $quizAnswer4 = $formData["quiz-4"]["answers"];

    // 5
    $quizTitle5 = $formData["quiz-5"]["title"];
    $quizAnswer5 = $formData["quiz-5"]["answers"];

    // 6
    $quizTitle6 = $formData["quiz-6"]["title"];
    $quizAnswer6 = $formData["quiz-6"]["answers"];

    $result = $formData["getResult"];
    $phone = $formData["phone"];

    // ===== Reference ============================
    $recaptchaOn = false;

    if ($recaptchaOn) {
        $recaptcha = $_POST['g-recaptcha-response'];
    }

    /**
     * Vars
     */
    $to = "demo@zaurmag.ru, quiz24-job@yandex.ru"; // E-mail на который присылать письмо
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

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>$quizTitle1</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
    $message .= "$quizAnswer1";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>$quizTitle2</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
    $message .= "$quizAnswer2";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>$quizTitle3</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
    $message .= "$quizAnswer3";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>$quizTitle4</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
    $message .= "$quizAnswer4";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>$quizTitle5</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
    $message .= "$quizAnswer5";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>$quizTitle6</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px' valign='top'>";
    $message .= "$quizAnswer6";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>Как удобнее получить результат:</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px'>";
    $message .= "$result";
    $message .= "</td>";
    $message .= "</tr>";

    $message .= "<tr>";
    $message .= "<td style='width: 350px;padding-top: 15px'>";
    $message .= "<strong>Телефон:</strong>";
    $message .= "</td>";
    $message .= "<td style='padding-left:15px;padding-top: 15px'>";
    $message .= "$phone";
    $message .= "</td>";
    $message .= "</tr>";

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
