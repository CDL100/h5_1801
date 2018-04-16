
<?php
    /*
        引入其他php文件
            * include 关键字
            * require() 方法
     */

    // include 'connect.php';
    require('conent.php');

    // 获取商品id
    // $id = isset($_GET['id']) ? $_GET['id'] : null;

    $sql = "select * from you";

    // 查询结果集
    $result = $conn->query($sql);

    // 获取集合中的数据
    $res = $result->fetch_all(MYSQLI_ASSOC);

    // var_dump($res);

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>