<!-- 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" type="text/css" href="register.css" />
    <link rel="stylesheet" type="text/css" href="style1.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>

    <title>Registraction</title>
    
  </head>
  <body>
    
    <div class="container">
        <div class="login-content">
            <form action="#" method="POST">
                <h2 class="title">Welcome</h2>
                <div class="input-div one">
                   <div class="i">
                        <i class="fas fa-user"></i>
                   </div>
                   <div class="div">
                        <h5>Username</h5>
                        <input type="text" name="user" id="user" class="input"><br> <!-- required><br> -->
                      <span id="userError">user</span>
                   </div>
                </div>
                   <div class="input-div one">
                    <div class="i">
                            <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                            <h5>Email</h5>
                            <input type="text" name="email" class="input" id="email"><br>
                            <span id="emailError">email</span>
                    </div>
                 </div>
                <div class="input-div pass">
                   <div class="i"> 
                        <i class="fas fa-lock"></i>
                   </div>
                   <div class="div">
                        <h5>Password</h5>
                        <input type="password" name="pass" class="input" id="pass">
                  </div>
                </div>
                <div class="input-div pass">
                    <div class="i"> 
                         <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                         <h5> Re Enter Password</h5>
                         <input type="password" name="repassword" class="input" id="repass">
                         <span id="repassError">repass</span>
                 </div>
              </div>                
                <input type="submit" name="sub" class="btn" value="SignUp" id="submit">
              <span class="passError">pass</span>
              <span class="passError">pass</span>
              <span class="passError">pass</span>
              <span class="passError">pass</span>
              <span class="passError">pass</span>
            </form>
        </div>

    </div>
        <script src="js/main.js"></script>
        <!-- <script src="Registraction.js"></script> -->
  </body>
</html>


<?php
include("conection.php");

$user=$_POST['user'];
$email=$_POST['email'];
$pass=$_POST['pass'];
$repassword=$_POST['repassword'];
echo "hello";

if($cnn)
{
    
    $qry="select * from register where user='$user' or email='$email'";
    $qry1=mysqli_query($cnn,$qry);

    if(isset($_POST['sub']))
    {
        if($user==null or $email==null or $pass==null or $repassword==null)
        {
            echo "enter details";
         
        }
        else if(mysqli_num_rows($qry1)>0)
        {
            $row=mysqli_fetch_assoc($qry1);
            if($row['user']==$user)
            {
                echo "user already exist";
         
            }
            if($row['email']==$email)
            {
                echo "email already exist";
            }
        }
        else
            {
                $qry2="INSERT INTO register VALUES('".$user."','".$email."','".$pass."','".$repassword."')";
                $result=mysqli_query($cnn,$qry2);
                if($result)
                {
                    echo "data inserted";
                    header("login1.html");
                }   
                else
                {
                    echo "not inserted";
                }
            }
    }
}

else
{
    echo "connection failed";
}

 -->