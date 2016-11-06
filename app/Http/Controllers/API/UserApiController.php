<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UserApiController extends Controller
{
	private $user;

    public function __construct(User $user)
    {
    	$this->user = $user;
    }

    public function index()
    {
    	$users = $this->user->paginate(5);

    	return response()->json($users);
    }
}
