<!DOCTYPE html>
<html>
<head>
	<title>Users List</title>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css">
</head>
<body>

	<div class="container" id="users">


		<!-- Item Listing -->
		<table class="table table-bordered">
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Created At</th>
			</tr>
			<tr v-for="user in users">
				<td>@{{ user.name }}</td>
				<td>@{{ user.email }}</td>
				<td>@{{ user.created_at }}</td>
			</tr>
		</table>

  		<vue-pagination  :pagination="pagination"   v-on:click="getUsers(pagination.current_page)" :offset="4"></vue-pagination>

	</div>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.26/vue.min.js"></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/vue.resource/0.9.3/vue-resource.min.js"></script>
	<script type="text/javascript" src="/js/users.js"></script>
</body>
</html>