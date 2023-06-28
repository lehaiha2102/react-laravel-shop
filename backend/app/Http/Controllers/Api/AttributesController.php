<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AttributesController extends Controller
{
    public function index()
    {
        $attributes = DB::table('attributes')->orderBy('name', 'asc')->paginate(25);
        return response()->json([
            'status' => "success",
            "data"  => $attributes,
        ]);
    }

    public function store(Request $request)
    {
        $data = [
            'name' => $request->name,
            'value' => $request->value,
            'created_at' => DB::raw('NOW()'),
            'updated_at' => DB::raw('NOW()')
        ];

        DB::table('attributes')->insert([$data]);

        return response()->json(["message" => "success"]);
    }

    public function edit($id)
    {
        $attribute = DB::table('attributes')->get();
        $left = 0;
        $right = count($attribute) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            $currentId = $attribute[$mid]->id;

            if ($currentId == $id) {
                return response()->json([
                    'status' => "success",
                    "data" => $attribute[$mid],
                ]);
            } elseif ($currentId < $id) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return response()->json([
            'status' => "error",
            "message" => "Attribute not found.",
        ]);
    }

    public function update(Request $request, $id)
    {
        $data = [
            'name' => $request->name,
            'value' => $request->value,
            'created_at' => DB::raw('NOW()'),
            'updated_at' => DB::raw('NOW()')
        ];

        DB::table('attributes')->where('id', $id)->update($data);

        return response()->json(["message" => "success"]);
    }

    public function destroy($id)
    {
        $affectedRows = DB::table('attributes')->where('id', $id)->delete();

        if ($affectedRows > 0) {
            return response()->json(["message" => "success"]);
        }

        return response()->json(["message" => "not found"], 404);
    }
}
