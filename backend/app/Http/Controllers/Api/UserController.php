<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function SignUp (Request $request){
        try {
            $data = [
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' =>Hash::make($request->input('password')),
                'role_id' => 1,
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('users')->insert([$data]);

        } catch (\Exception $e) {
            //handle error here, and return error message to user, etc...
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during data saving.',
                'error' => $e,
            ]);
        }
    }
}
