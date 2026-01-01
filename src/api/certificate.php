<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: image/svg+xml");

$id = $_GET['id'] ?? '';

$id = preg_replace('/[^a-zA-Z0-9-]/', '', $id);

if (empty($id)) {
    http_response_code(400);
    echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100"><text x="10" y="50" fill="red">Error: No ID provided</text></svg>';
    exit;
}
$dbPath = '/home/ndmcbdor/bounded_limits/database/certificates.db';

if (!file_exists($dbPath)) {
    http_response_code(500);
    exit; 
}

try {
    $pdo = new PDO("sqlite:" . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT * FROM certificates WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $id]);
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$data) {
        http_response_code(404);
        echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200"><rect width="100%" height="100%" fill="#ffebee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#c62828" font-size="24">Certificate Not Found</text></svg>';
        exit;
    }

    $templateName = preg_replace('/[^a-zA-Z0-9_-]/', '', $data['event']); 
    $svgPath = "/home/ndmcbdor/bounded_limits/templates/{$templateName}.svg";

    if (!file_exists($svgPath)) {
        http_response_code(500);
        echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60"><text x="10" y="40" fill="red">Template Error</text></svg>';
        exit;
    }

    $svgContent = file_get_contents($svgPath);
    
    $placeholders = [
        '{{ID}}'       => htmlspecialchars($data['id']),
        '{{NAME}}'     => htmlspecialchars($data['name']),
        '{{EVENT}}'    => htmlspecialchars($data['event']),
        '{{CATEGORY}}' => htmlspecialchars($data['category']),
        '{{POSITION}}' => htmlspecialchars($data['position'])
    ];

    foreach ($placeholders as $key => $val) {
        $svgContent = str_replace($key, $val, $svgContent);
    }

    echo $svgContent;

} catch (PDOException $e) {
    http_response_code(500);
    exit;
}
?>