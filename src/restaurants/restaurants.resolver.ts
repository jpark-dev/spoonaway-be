import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  //   @Query(() => Boolean), () can be replaced with 'returns', for visual.
  @Query(returns => Boolean)
  isFoodOkay(): Boolean {
    return true;
  }
}
