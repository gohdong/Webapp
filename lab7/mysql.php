<!DOCTYPE html>
<html lang="en">

<head>
    <title>MYSQL QUERY</title>
</head>

<body>
    <h1>MYSQL</h1>
    <hr />
    <form action="http://localhost:8888/lab7/mysql.php" method="POST">
        <div>
            <p>
                DB name: <input type="text" name="dbname">
            </p>
            SQL query: <input type="text" name="query">

        </div>
        <div>
            <input type="submit" value="RUN!">
        </div>
    </form>
    <?php
        $dbname= $_POST["dbname"];
        $query = $_POST["query"];
        try {
            $db = new PDO("mysql:dbname=$dbname;host=localhost", "root", "root");
            print("DB Connected!");
            $test = $db->query($query);
;
        }

         catch (Exception $e){
            print($e);
        };
    ?>
    <ul>
        <?php
            foreach($test as $tt){
                $result = "";
                foreach (array_unique($tt) as $t) {
                    $result = $result . " " . $t;
                }
        ?>
            <li><?=$result?></li>
        <?php } ?>
    </ul>



</body>

</html>