<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = DB::table('categories')->paginate(25);

        return response()->json(
            [
                'status'                  => 'success',
                'data'                    => $categories,
            ]
        );
    }

    public function store(Request $request)
    {
        try {
            $imageName = null;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/categories'), $imageName);
            }

            $icon_name = null;

            if ($request->hasFile('icon')) {
                $icon = $request->file('icon');
                $icon_name = time() . '.' . $icon->getClientOriginalExtension();
                $icon->move(public_path('images/categories'), $icon_name);
            }

            $parentCategory = ($request->input('parent_category') !== '--Select--') ? $request->input('parent_category') : null;

            $data = [
                'name' => $request->input('name'),
                'slug' => uniqid() . '-' . Str::slug($request->input('name')),
                'parent_category' => $parentCategory,
                'image' => $imageName,
                'icon' => $icon_name,
                'description' => $request->input('description'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];

            DB::table('categories')->insert([$data]);

            return response()->json([
                'status' => 'success',
                'data' => $data,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public  function  edit($id){
        $categories = DB::table('categories')->get();
        $left = 0;
        $right = count($categories) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            $currentId = $categories[$mid]->id;

            if ($currentId == $id) {
                return response()->json([
                    'status' => "success",
                    "data" => $categories[$mid],
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
            $categories = DB::table('categories')->where('id', $id)->first();
            if ($request->hasFile('image')) {
                if (!empty($categories->image)) {
                    $filePath = public_path('images/categories/' . $categories->image);
                    if (file_exists($filePath)) {
                        if (!unlink($filePath)) {
                            throw new \Exception('There is a problem replacing old photos with new ones');
                        }
                    }
                }
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/categories'), $imageName);
            } else {
                $imageName = $categories->image;
            }
            $parentCategory = ($request->input('parent_category') !== '--Select--') ? $request->input('parent_category') : null;
            $categories = DB::table('categories')->where('id', $id)->update([
                'name'        => $request->input('name'),
                'slug'        => uniqid() . '-' . Str::slug($request->input('name')),
                'parent_category' => $parentCategory,
                'image'       => $imageName,
                'description' => $request->input('description'),
                'status'      => true,
                'updated_at'  => DB::raw('NOW()')
            ]);

            return response()->json([
                'status' => 'success',
                'data'   => $categories
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status'  => 'fail',
                'message' => $e->getMessage()
            ]);
        }
    }


    public function destroy($id)
    {
        $category = DB::table('categories')->where('id', $id)->first();
        if ($category && $category->image) {
            $imagePath = public_path('images/categories/' . $category->image);
            if (File::exists($imagePath)) {
                File::delete($imagePath);
            }
        }
        $categories = DB::table('categories')->where('id', $id)->delete();
        return response()->json(
            [
                'status'                  => 'success',
                'data'                    => $categories,
            ]
        );
    }
}
