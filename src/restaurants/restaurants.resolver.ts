import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  //   @Query(() => Boolean), () can be replaced with 'returns', for visual.
  @Query(returns => [Restaurant])
  myRestaurant(@Args('veganOnly') veganOnly: Boolean): Restaurant[] {
    return [];
  }
  @Mutation(returns => Boolean)
  // leaving Args() empty and use ArgsType() instead of inputType() in DTO,
  // accepts/returns values directly without being in createRestaurantData :
  // Before: {createRestaurantData: {name: ..., address: ...}}
  // After: {name: ..., address: ...}
  createRestaurant(@Args() createRestaurantData: CreateRestaurantDto): Boolean {
    console.log(createRestaurantData);
    return true;
  }
}
