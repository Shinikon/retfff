<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';
$name = $data['name'] ?? ''; // если вы хотите сохранять имя

// Простая валидация
if (empty($email) || empty($password) || empty($name)) {
    echo json_encode([
        'success' => false,
        'message' => 'All fields are required.'
    ]);
    exit();
}

// Здесь можно добавить логику записи в БД
// Для примера — просто возвращаем успех
echo json_encode([
    'success' => true,
    'message' => 'Registration successful! You can now sign in.'
]);
?>