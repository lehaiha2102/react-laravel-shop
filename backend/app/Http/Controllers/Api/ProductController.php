<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public  function  index(){
        $products = DB::table('products')->paginate(25);
        return response()->json([
            'status' => 'success',
            'data'   => $products
        ]);
    }

    public function store(Request $request) {
        try{
            $imageName = null;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/categories'), $imageName);
            }

            $galleryName = null;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $galleryName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/categories'), $galleryName);
            }
            $data = [
                'name' => $request->input('name'),
                'slug' => Str::slug($request->input('name')),
                'image' => $imageName,
                'gallery' => json_encode($galleryName),
                'price' => $request->input('price'),
                'sale_price' => $request->input('sale_price'),
                'quantity' => $request->input('quantity'),
                'descriptions' => $request->input('description'),
                'categories' => json_encode($request->input('categories')),
                'manufacturer' => $request->input('manufacturer'),
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('products')->insert([$data]);

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
        $products = DB::table('products')->get();
        $left = 0;
        $right = count($products) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            $currentId = $products[$mid]->id;

            if ($currentId == $id) {
                return response()->json([
                    'status' => "success",
                    "data" => $products[$mid],
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
            $imageName = null;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/categories'), $imageName);
            }

            $galleryName = null;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $galleryName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/categories'), $galleryName);
            }
            $data = [
                'name' => $request->input('name'),
                'slug' => Str::slug($request->input('name')),
                'image' => $imageName,
                'gallery' => json_encode($galleryName),
                'price' => $request->input('price'),
                'sale_price' => $request->input('sale_price'),
                'quantity' => $request->input('quantity'),
                'descriptions' => $request->input('description'),
                'categories' => json_encode($request->input('categories')),
                'manufacturer' => $request->input('manufacturer'),
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ];

            DB::table('products')->where('id', $id)->update([$data]);

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
        $affectedRows = DB::table('products')->where('id', $id)->delete();

        if ($affectedRows > 0) {
            return response()->json(["message" => "success"]);
        }

        return response()->json(["message" => "not found"], 404);
    }
}
