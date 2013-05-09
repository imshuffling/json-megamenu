<?php include('connect.php'); ?>

<?php 
	$query = "SELECT * FROM data LIMIT 0, 2";
	$results = mysql_query($query) or die(mysql_error());
	while($row = mysql_fetch_array($results)){
?>
	<p><?php echo $row['fname'] ." ". $row['lname']; ?><span><?php echo " the ". $row['title']; ?></span></p>
<?php } ?>
