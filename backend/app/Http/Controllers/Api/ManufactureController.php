<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManufactureController extends Controller
{
    public function index(){
        $manufacturers = DB::table('manufacturers')->paginate(25);

        return response()->json([
            'message' => 'success',
            'data'    => $manufacturers,
        ]);
    }

    public function store(Request $request){
        try {
            $data = [
                'logo' => $request->input('logo'),
                'convert_image' => $request->input('convert_image'),
                'name' => $request->input('name'),
                'website' => $request->input('website'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'phone' => $request->input('phone'),
                'description' => $request->input('description'),
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('manufacturers')->insert([$data]);

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
        $manufacturers = DB::table('manufacturers')->get();
        $left = 0;
        $right = count($manufacturers) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            $currentId = $manufacturers[$mid]->id;

            if ($currentId == $id) {
                return response()->json([
                    'status' => "success",
                    "data" => $manufacturers[$mid],
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
                'convert_image' => $request->input('convert_image'),
                'name' => $request->input('name'),
                'website' => $request->input('website'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'phone' => $request->input('phone'),
                'description' => $request->input('description'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('manufacturers')->where('id', $id)->update([$data]);

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
        $affectedRows = DB::table('manufacturers')->where('id', $id)->delete();

        if ($affectedRows > 0) {
            return response()->json(["message" => "success"]);
        }

        return response()->json(["message" => "not found"], 404);
    }
}
