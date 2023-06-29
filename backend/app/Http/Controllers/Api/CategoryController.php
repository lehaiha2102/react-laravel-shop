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

        $parentCategory = $request->parent_category !== '--Select--' ? $request->parent_category : null;

        $data = [
            'name' => $request->name,
            'slug' => uniqid() . '-' . Str::slug($request->name),
            'parent_category' => $parentCategory,
            'image' => $imageName,
            'icon' => $icon_name,
            'description' => $request->description,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];

        DB::table('categories')->insert([$data]);

        return response()->json([
            'status' => 'success',
            'data' => $data,
        ]);
    }

    public function update(Request $request, $id)
    {
        $categories = DB::table('categories')->where('id', $id)->first();
        if ($request->hasFile('image')) {
            if (!empty($categories->image)) {
                $filePath = public_path('images/categories/' . $categories->image);
                if (file_exists($filePath)) {
                    if (!unlink($filePath)) {
                        return response()->json(
                            [
                                'status'  => 'fail',
                                'message' => 'There is a problem replacing old photos with new ones',
                            ]
                        );
                    }
                }
            }
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/categories'), $imageName);
        } else {
            $imageName = $categories->image;
        }
        $parent_category = $request->parent_category !== '--Select--' ? $request->parent_category : null;
        $categories = DB::table('categories')->where('id', $id)->update([
            'name'                        => $request->name,
            'slug'                        => uniqid() . '-' . Str::slug($request->name),
            'parent_category'             => $parent_category,
            'image'                       => $imageName,
            'description'                 => $request->description,
            'status'                      => true,
            'updated_at'                  => DB::raw('NOW()')
        ]);

        return response()->json(
            [
                'status'                  => 'success',
                'data'                    => $categories
            ]
        );
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

    public function changeStatus(Request $request)
    {
        $category = DB::table('categories')->where('id', $request->category_id)->first();

        if ($category) {
            $new_status = $category->status == 1 ? 0 : 1;
            DB::table('categories')->where('id', $request->category_id)->update(['status' => $new_status]);

            return response()->json([
                'status'                  => true,
                'message'                 => 'Changed status successfully.'
            ]);
        } else {
            return response()->json([
                'status'                  => false,
                'message'                 => 'Category not found.'
            ]);
        }
    }
}
