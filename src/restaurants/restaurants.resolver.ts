import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  //   @Query(() => Boolean), () can be replaced with 'returns', for visual.
  @Query(returns => Restaurant)
  myRestaurant() {
    return true;
  }
}
