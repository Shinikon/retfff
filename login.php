<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000'); // Разрешаем запросы с React (разработка)
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Если это preflight-запрос (OPTIONS), просто завершаем
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Получаем данные из тела запроса
$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Простая проверка (в реальном проекте — подключение к БД, хэширование пароля и т.д.)
if ($email === 'test@example.com' && $password === 'password123') {
    echo json_encode([
        'success' => true,
        'message' => 'Login successful!'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email or password.'
    ]);
}
?>