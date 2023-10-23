<?php
// // Проверка пример
// // if ($username === 'user' && $password === 'password') {
// //     $response = array('success' => true);
// // } else {
// //     $response = array('success' => false);
// // }

// Получаем данные из POST-запроса
$inputData = json_decode(file_get_contents("php://input"), true);
$username = $inputData['username'];
$password = $inputData['password'];

// Загружаем данные из файла JSON
$data = file_get_contents('data.json');
$users = json_decode($data, true)['users'];

// Проверяем введенные данные с данными в файле JSON
$authenticated = false;
foreach ($users as $user) {
    if ($user['username'] === $username && $user['password'] === $password) {
        $authenticated = true;
        break;
    }
}

// Отправляем ответ в формате JSON
header('Content-Type: application/json');
echo json_encode(['success' => $authenticated]);
?>