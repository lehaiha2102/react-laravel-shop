<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index()
    {
        $products = DB::table('products')
            ->select('products.*', DB::raw('GROUP_CONCAT(DISTINCT categories.name SEPARATOR ", ") as category_names'), 'manufacturers.name as manufacturer_name')
            ->join('product_categories', 'product_categories.product_id', '=', 'products.id')
            ->join('categories', 'categories.id', '=', 'product_categories.category_id')
            ->join('manufacturers', 'manufacturers.id', '=', 'products.manufacturer_id')
            ->groupBy('products.id', 'products.name', 'products.slug', 'manufacturers.name')
            ->paginate(25);

            return response()->json(
                [
                    'status'                  => 'success',
                    'data'                    => $products,
                ]
            );
    }


    public function store(Request $request)
    {
        $uploadimages = array();
        if ($images = $request->file('images')) {
            foreach ($images as $image) {
                $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/products'), $imageName);
                $uploadimages[] = $imageName;
            }
        }
        $imagesJson = json_encode($uploadimages);

        $product_id = DB::table('products')->insertGetId([
            'name' => $request->name,
            'slug' => uniqid() . '-' . Str::slug($request->name),
            'manufacturer_id' => $request->manufacturer_id,
            'import_price' => $request->import_price,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'description' => $request->description,
            'images' => $imagesJson,
            'status' => true,
            'created_at' => DB::raw('NOW()'),
            'updated_at' => DB::raw('NOW()')
        ]);
        $categoryIds = $request->input('category_id', []);
        foreach ($categoryIds as $categoryId) {
            DB::table('product_categories')->insert([
                'product_id' => $product_id,
                'category_id' => $categoryId,
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ]);
        }
        return response()->json(
            [
                'status'                  => 'success',
            ]
        );
    }

    public function edit($id)
    {
        $products = DB::table('products')
            ->where('products.id', $id)
            ->select(
                'products.*',
                DB::raw('GROUP_CONCAT(DISTINCT categories.name SEPARATOR ", ") as category_names'),
                DB::raw('GROUP_CONCAT(DISTINCT categories.id SEPARATOR ", ") as category_ids'),
                'manufacturers.name as manufacturer_name'
            )
            ->join('product_categories', 'product_categories.product_id', '=', 'products.id')
            ->join('categories', 'categories.id', '=', 'product_categories.category_id')
            ->join('manufacturers', 'manufacturers.id', '=', 'products.manufacturer_id')
            ->groupBy('products.id')
            ->get();
        $categories = DB::table('categories')->get();
        $manufacturers = DB::table('manufacturers')->get();

        $data = array($products, $categories, $manufacturers);
        return response()->json(
            [
                'status'                  => 'success',
                'data'                    => $data,
            ]
        );
    }

    public function update(Request $request, $id)
{
    $uploadImages = array();
    if ($images = $request->file('images')) {
        foreach ($images as $image) {
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/products'), $imageName);
            $uploadImages[] = $imageName;
        }
    }
    $imagesJson = json_encode($uploadImages);

    $product = DB::table('products')->where('id', $id)->first();

    if ($product) {
        // Xóa hình ảnh cũ nếu có
        if (!empty($product->images)) {
            $oldImages = json_decode($product->images);
            foreach ($oldImages as $oldImage) {
                $imagePath = public_path('images/products/' . $oldImage);
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }
        }

        // Cập nhật thông tin sản phẩm
        DB::table('products')->where('id', $id)->update([
            'name' => $request->name,
            'slug' => uniqid() . '-' . Str::slug($request->name),
            'manufacturer_id' => $request->manufacturer_id,
            'import_price' => $request->import_price,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'description' => $request->description,
            'images' => $imagesJson,
            'status' => true,
            'updated_at' => DB::raw('NOW()')
        ]);

        $categoryIds = $request->input('category_id', []);
        DB::table('product_categories')->where('product_id', $id)->delete();
        foreach ($categoryIds as $categoryId) {
            DB::table('product_categories')->insert([
                'product_id' => $id,
                'category_id' => $categoryId,
                'created_at' => DB::raw('NOW()'),
                'updated_at' => DB::raw('NOW()')
            ]);
        }

        return response()->json([
            'status' => 'success',
        ]);
    } else {
        return response()->json([
            'status' => 'fail',
            'message' => 'Product not found',
        ]);
    }
}

    public function destroy($id)
    {
        $products = DB::table('products')->where('id', $id)->delete();
        return response()->json(
            [
                'status'                  => 'success',
                'data'                    => $products,
            ]
        );
    }

    public function changeStatus(Request $request)
    {
        $product = DB::table('products')->where('id', $request->product_id)->first();

        if ($product) {
            $new_status = $product->status == 1 ? 0 : 1;
            DB::table('products')->where('id', $request->product_id)->update(['status' => $new_status]);

            return response()->json([
                'status' => 'success',
                'message' => 'Changed status successfully.'
            ]);
        } else {
            return response()->json([
                'status' => 'fail',
                'message' => 'Product not found.'
            ]);
        }
    }
}
