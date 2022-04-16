<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
//Makes sure the lesson_id is set... if not... it gets the heck out...
//check if lesson needs auth... if not... let it slide...
ini_set("include_path", ini_get("include_path") . ":..:.:./Utilities:./functions:./classes");
include_once('Database.class.php');
include_once('Quiz.class.php');

 


if (isset($_REQUEST['quiz'])  ){
$quiz = new Quiz();
$quizInfo = $quiz->getByGuid($_REQUEST['quiz']);

if (isset($quizInfo['quiz_id'])) {

    $quizDetails = $quiz->getQuizDataJoined($quizInfo['quiz_id']);

//    var_dump($quizDetails);
//echo '{	"q":[';
$jsonOutput = [];

foreach ($quizDetails as $q){

//echo '{"imagesrc":"'.$q["image_guid"].'.jpg" ,"hoh":"'.$q['hoh'].'", "answered":"'.$q['answered'].'"},';
$deets['imagesrc'] = $q["image_guid"].'.jpg';
$deets['hoh'] = $q['hoh'];
$deets['answered'] = $q['answered'];
$jsonOutput[] = $deets;
}

echo json_encode($jsonOutput);

//echo ']}';

} else {
    die("no matching quiz");
}
}



  $method = 'POST';
  $content_type = 'application/xml';
  if(isset($_REQUEST['action'])) {
      $action = $_REQUEST['action'];
    if($action == 'read') {
      $grade = 'not set';
      $operation = 'readResultRequest';
      $postBody = str_replace(
        array('SOURCEDID', 'OPERATION', 'MESSAGE'),
        array($sourcedid, $operation, uniqid()),
        getPOXRequest());
      $response = parseResponse(sendOAuthBodyPOST($method, $endpoint, $oauth_consumer_key, $oauth_consumer_secret, $content_type, $postBody));
      if($response['imsx_codeMajor'] == 'success' && $response['textString'] != '') {
        $grade = $response['textString'];
        
      }
      echo json_encode($grade);
    } else if($action == 'write') {
      $grade = $_REQUEST['newgrade'];
      $operation = 'replaceResultRequest';
      $postBody = str_replace(
        array('SOURCEDID', 'GRADE', 'OPERATION', 'MESSAGE'),
        array($sourcedid, $grade, $operation, uniqid()),
        getPOXGradeRequest());
      $response = parseResponse(sendOAuthBodyPOST($method, $endpoint, $oauth_consumer_key, $oauth_consumer_secret, $content_type, $postBody));
      if($response['imsx_codeMajor'] == 'success') {
        $grade = 'success';
      } else {
        $grade = 'failure';
      }
      echo json_encode($grade);
    } 
  }
//  session_destroy();
?>
