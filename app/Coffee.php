<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Coffee
 *
 * @property int $id
 * @property string $title
 * @property string $image
 * @property string $price
 * @property int $is_disabled
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee query()
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee whereIsDisabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coffee whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Coffee extends Model
{
    //
    protected $fillable = ['title', 'image', 'price', 'is_disabled'];
}
