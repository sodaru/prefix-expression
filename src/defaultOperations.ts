import AddOperation, {
  schema as addSchema,
  operator as addOperator
} from "./operations/arithmatic/add";
import SubtractOperation, {
  schema as subtractSchema,
  operator as subtractOperator
} from "./operations/arithmatic/subtract";
import MultiplyOperation, {
  schema as multiplySchema,
  operator as multiplyOperator
} from "./operations/arithmatic/multiply";
import DivideOperation, {
  schema as divideSchema,
  operator as divideOperator
} from "./operations/arithmatic/divide";
import PowerOperation, {
  schema as powerSchema,
  operator as powerOperator
} from "./operations/arithmatic/power";
import ModulusOperation, {
  schema as modulusSchema,
  operator as modulusOperator
} from "./operations/arithmatic/modulus";
import GreaterThanOperation, {
  schema as greaterThanSchema,
  operator as greaterThanOperator
} from "./operations/arithmatic/greaterThan";
import GreaterThanOrEqualOperation, {
  schema as greaterThanOrEqualSchema,
  operator as greaterThanOrEqualOperator
} from "./operations/arithmatic/greaterThanOrEqual";
import LessThanOperation, {
  schema as lessThanSchema,
  operator as lessThanOperator
} from "./operations/arithmatic/lessThan";
import LessThanOrEqualOperation, {
  schema as lessThanOrEqualSchema,
  operator as lessThanOrEqualOperator
} from "./operations/arithmatic/lessThanOrEqual";

/*
import MaxOperation, {
  operator as maxOperator
} from "./operations/arithmatic/max";
import MinOperation, {
  operator as minOperator
} from "./operations/arithmatic/min";
import EqualOperation, {
  operator as equalOperator
} from "./operations/boolean/equal";
import EqualStrictOperation, {
  operator as equalStrictOperator
} from "./operations/boolean/equalStrict";
import NotEqualOperation, {
  operator as notEqualOperator
} from "./operations/boolean/notEqual";
import NotEqualStrictOperation, {
  operator as notEqualStrictOperator
} from "./operations/boolean/notEqualStrict";
import NotOperation, {
  operator as notOperator
} from "./operations/boolean/not";
import OrOperation, { operator as orOperator } from "./operations/boolean/or";
import AndOperation, {
  operator as andOperator
} from "./operations/boolean/and";
import IfOperation, { operator as ifOperator } from "./operations/boolean/if";
import MapOperation, { operator as mapOperator } from "./operations/array/map";
import FilterOperation, {
  operator as filterOperator
} from "./operations/array/filter";
import ReduceOperation, {
  operator as reduceOperator
} from "./operations/array/reduce";
import IntersectionOperation, {
  operator as intersectionOperator
} from "./operations/array/intersection";
import UnionOperation, {
  operator as unionOperator
} from "./operations/array/union";
import DiffOperation, {
  operator as diffOperator
} from "./operations/array/diff"; */
import { Expression, Operation } from "./types";
import { JSONSchemaType } from "ajv";

const defaultOperators: Record<
  string,
  { schema: JSONSchemaType<Expression[]>; operation: Operation }
> = {
  [addOperator]: {
    schema: addSchema,
    operation: AddOperation
  },
  [subtractOperator]: {
    schema: subtractSchema,
    operation: SubtractOperation
  },
  [multiplyOperator]: {
    schema: multiplySchema,
    operation: MultiplyOperation
  },
  [divideOperator]: {
    schema: divideSchema,
    operation: DivideOperation
  },
  [powerOperator]: {
    schema: powerSchema,
    operation: PowerOperation
  },
  [modulusOperator]: {
    schema: modulusSchema,
    operation: ModulusOperation
  },
  [greaterThanOperator]: {
    schema: greaterThanSchema,
    operation: GreaterThanOperation
  },
  [greaterThanOrEqualOperator]: {
    schema: greaterThanOrEqualSchema,
    operation: GreaterThanOrEqualOperation
  },
  [lessThanOperator]: {
    schema: lessThanSchema,
    operation: LessThanOperation
  },
  [lessThanOrEqualOperator]: {
    schema: lessThanOrEqualSchema,
    operation: LessThanOrEqualOperation
  }
};

export default defaultOperators;
