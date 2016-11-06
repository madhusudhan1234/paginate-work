<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;

/**
 * Class UserApiController
 * @package App\Http\Controllers\API
 */
class UserApiController extends Controller
{
    /**
     * @var User
     */
    private $user;

    /**
     * UserApiController constructor.
     * @param User $user
     */
    public function __construct(User $user)
    {
    	$this->user = $user;
    }

    /**
     * return paginated records of users
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
    	$users = $this->user->paginate(5);
    	return response()->json($users);
    }
}
