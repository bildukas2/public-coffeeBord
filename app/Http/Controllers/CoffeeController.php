<?php

namespace App\Http\Controllers;

use App\Coffee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoffeeController extends Controller
{
    public function index()
    {
        $coffeeList = Coffee::where('is_disabled', false)
            ->orderBy('created_at', 'desc')
            ->get();

        return $coffeeList->toJson();
    }

    public function addCoffe(Request $request)
    {

        //todo we can move all validation logic to helpers but for demo we put here
        $validator = Validator::make($request->all(), [
            'title' => 'required | unique:coffees,title',
            'image' => 'required',
            'price' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->all());
        }

        $data = $validator->attributes();

        //todo in future  we need to make sure that action was successful
        $coffee = Coffee::create([
            'title' => $data['title'],
            'image' => $data['image'],
            'price' => $data['price'],
        ]);

        if (!isset($coffee->id)) {
            return response()->json('Something bad happen');
        };

        return response()->json('Project created!');
    }

    public function markAsDeleted($id)
    {

        try {
            $coffee = Coffee::find($id);

            //$coffee->delete();

            /** if you want to disable instead of  delete  not always delete is good practise  **/
            $coffee->is_disabled = true;
            $coffee->update();
            return response()->json('Coffee removed from list!');

        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json('Remove coffee FAILED!');
        }

    }

}
