@extends('layouts.app')
@section('content')
  <div class="container">
    <table class="table table-bordered">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
      </tr>
      <tr v-for="user in users.data">
        <td>@{{ user.name }}</td>
        <td>@{{ user.email }}</td>
        <td>@{{ user.created_at }}</td>
      </tr>
    </table>
    <vue-pagination  :pagination="users"
                     @paginate="getUsers()"
                     :offset="4">
    </vue-pagination>
    </div>
@endsection