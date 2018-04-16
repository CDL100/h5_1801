<?php
    /*
        登录验证用户有效性
     */
    require('conent.php');
    
    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    
 $getPassword = md5($password);
    // 获取username ，password
    $sql = "select * from user where username='$username' and password='$getPassword'";
    //得到查询结果集
    $result = $conn->query($sql);

    if($result->num_rows>0){
            echo "success";
            $getPassword = md5($password);
        }else{
            echo "fail";
        }
?>
