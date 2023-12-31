<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function login(Request $request)
    {
        try {
            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                // Authentication passed
                $user = Auth::user();

                // Generate a new API token
                $token = $user->create('api_token')->plainTextToken;

                return response()->json([
                    'status' => 'success',
                    'message' => 'Login successful',
                    'data' => [
                        'user' => $user,
                        'token' => $token,
                    ],
                ]);
            } else {
                // Authentication failed
                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid credentials',
                ], 401);
            }
        } catch (\Exception $e) {
            // Handle error here and return error message to user, etc...
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during login.',
                'error' => $e,
            ]);
        }
    }

    public function forgot_password(Request $request, $email){
        $users = DB::table('users')->get();
    }
}
