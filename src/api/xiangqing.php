<?php
    // 引入其他文件
    require('conent.php');
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    
    $result = $conn->query("select * from liebiao where id='$id'");

    $row = $result->fetch_all(MYSQLI_ASSOC);
    // $res = $conn->query($sql);

    // $row = $res->fetch_assoc();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>