<?php
use App\Product;  // not sure why this the one below was here this is from tut
//https://code.tutsplus.com/tutorials/build-a-react-app-with-laravel-restful-backend-part-1-laravel-5-api--cms-29442
use Illuminate\Database\Seeder;
class ProductsTableSeeder extends Seeder
{
    public function run()
    {
 
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 50; $i++) {
            Product::create([
                'title' => $faker->title,
                'description' => $faker->paragraph,
                'price' => $faker->randomNumber(2),
                'availability' => $faker->boolean(50)
            ]);
        }
    }
}



///////////

 

