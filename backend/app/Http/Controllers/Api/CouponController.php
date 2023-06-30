<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CouponController extends Controller
{
    public  function  index(){
        $coupons = DB::table('coupons')->paginate(25);
        return response()->json([
            'status'  => 'success',
            'data'    => $coupons,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $data = [
                'image' => $request->input('image'),
                'code' => json_encode($request->input('code')),
                'description' => $request->input('description'),
                'type' => $request->input('type'),
                'minimum_cart_amount' => $request->input('minimum_cart_amount'),
                'date_start' => $request->input('date_start'),
                'date_end' => $request->input('date_end'),
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('coupons')->insert([$data]);

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
        $coupons = DB::table('coupons')->get();
        $left = 0;
        $right = count($coupons) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            $currentId = $coupons[$mid]->id;

            if ($currentId == $id) {
                return response()->json([
                    'status' => "success",
                    "data" => $coupons[$mid],
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
                'image' => $request->input('image'),
                'code' => json_encode($request->input('code')),
                'description' => $request->input('description'),
                'type' => $request->input('type'),
                'minimum_cart_amount' => $request->input('minimum_cart_amount'),
                'date_start' => $request->input('date_start'),
                'date_end' => $request->input('date_end'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('coupons')->where('id', $id)->update([$data]);

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
        $affectedRows = DB::table('coupons')->where('id', $id)->delete();

        if ($affectedRows > 0) {
            return response()->json(["message" => "success"]);
        }

        return response()->json(["message" => "not found"], 404);
    }
}
