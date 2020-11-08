import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

// inputType() one object to pass to graphQL as an argument.
// argsType() several values can be passed to graphQL without being an object
@InputType()
// instead of extending partialTypes(), we can add InputType() in the entity and make it an abstract type => @InputType({ isAbstract: true})
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
