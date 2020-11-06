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
  createRestaurant(@Args() createRestaurantData: CreateRestaurantDto): Boolean {
    console.log(createRestaurantData);
    return true;
  }
}
