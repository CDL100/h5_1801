<?php
    // 引入其他文件
    require('conent.php');
    // 查询Sql语句
    // 获取查询结果集（对象）
    $result = $conn->query('select * from shanping');
    
    // var_dump($result->num_rows);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);//得到所有结果
    // $row = $result->fetch_assoc();//得到第一个结果
    // $row = $result->fetch_row();//得到第一个结果的值

    // var_dump($row)

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>