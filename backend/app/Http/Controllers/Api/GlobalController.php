<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GlobalController extends Controller
{
    public function index()
    {
        $global = DB::table('globals')->get();
        return response()->json([
            'status' => 'success',
            'data' => $global
        ]);
    }

    public function store(Request $request)
    {
        try {
            $data = [
                'logo' => $request->input('logo'),
                'slider' => $request->input('slider'),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'facebook' => $request->input('facebook'),
                'instagram' => $request->input('instagram'),
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('globals')->insert([$data]);

            return response()->json([
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            //handle error here, and return error message to user, etc...
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during data saving.',
                'error' => $e,
            ]);
        }
    }

    public function edit($id)
    {
        $global = DB::table('globals')->get();
        $left = 0;
        $right = count($global) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            $currentId = $global[$mid]->id;

            if ($currentId == $id) {
                return response()->json([
                    'status' => "success",
                    "data" => $global[$mid],
                ]);
            } elseif ($currentId < $id) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return response()->json([
            'status' => "error",
            "message" => "Variable not found.",
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $data = [
                'logo' => $request->input('logo'),
                'slider' => json_encode($request->input('slider')),
                'address' => $request->input('address'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'facebook' => $request->input('facebook'),
                'instagram' => $request->input('instagram'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('globals')->where('id', $id)->update([$data]);

            return response()->json([
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            // handle error here, and return error message to user, etc .
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during data saving.',
                'error' => $e,
            ]);
        }
    }

    public function destroy($id)
    {
        $affectedRows = DB::table('globals')->where('id', $id)->delete();

        if ($affectedRows > 0) {
            return response()->json(["message" => "success"]);
        }

        return response()->json(["message" => "not found"], 404);
    }
}
