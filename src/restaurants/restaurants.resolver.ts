import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  //   @Query(() => Boolean), () can be replaced with 'returns', for visual.
  @Query(returns => [Restaurant])
  myRestaurant(@Args('veganOnly') veganOnly: Boolean): Restaurant[] {
    return [];
  }
  @Mutation(returns => Boolean)
  createRestaurant(): Boolean {
    return true;
  }
}
