import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  //   @Query(() => Boolean), () can be replaced with 'returns', for visual.
  @Query(returns => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }
  @Mutation(returns => Boolean)
  // leaving Args() empty and use ArgsType() instead of inputType() in DTO,
  // accepts/returns values directly without being in createRestaurantData :
  // Before: {createRestaurantData: {name: ..., address: ...}}
  // After: {name: ..., address: ...}
  createRestaurant(@Args() createRestaurantData: CreateRestaurantDto): Boolean {
    return true;
  }
}
