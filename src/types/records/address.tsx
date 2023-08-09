import { DeepPartial, Exact, isSet } from "../request-response/utils";

/** Address: represents an account's address */
export interface Address {
  /** address id */
  id: number;
  /**
   * the address field
   * Validations:
   * - must be at least 5 character long (meaning cannot be empty)
   */
  address: string;
  /**
   * the unit if the address is an apartment
   * Validations:
   * - must be at least 1 character long (meaning cannot be empty)
   */
  unit: string;
  /**
   * the address zipcode
   * Validations:
   * - must be exactly 5 characters
   */
  zipcode: string;
  /**
   * the city
   * Validations:
   * - must be at least 3 characters long (meaning cannot be empty)
   */
  city: string;
  /**
   * the state/municipality
   * Validations
   * - must be at least 2 characters long
   */
  state: string;
  /**
   * longitude
   * Validations: None - can be empty
   */
  longitude: string;
  /**
   * latittude
   * Validations: None - can be empty
   */
  lattitude: string;
}

function createBaseAddress(): Address {
  return {
    id: 0,
    address: '',
    unit: '',
    zipcode: '',
    city: '',
    state: '',
    longitude: '',
    lattitude: '',
  };
}

export const Address = {
  fromJSON(object: any): Address {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      address: isSet(object.address) ? String(object.address) : '',
      unit: isSet(object.unit) ? String(object.unit) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      city: isSet(object.city) ? String(object.city) : '',
      state: isSet(object.state) ? String(object.state) : '',
      longitude: isSet(object.longitude) ? String(object.longitude) : '',
      lattitude: isSet(object.lattitude) ? String(object.lattitude) : '',
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.address !== undefined && (obj.address = message.address);
    message.unit !== undefined && (obj.unit = message.unit);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.city !== undefined && (obj.city = message.city);
    message.state !== undefined && (obj.state = message.state);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.lattitude !== undefined && (obj.lattitude = message.lattitude);
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.id = object.id ?? 0;
    message.address = object.address ?? '';
    message.unit = object.unit ?? '';
    message.zipcode = object.zipcode ?? '';
    message.city = object.city ?? '';
    message.state = object.state ?? '';
    message.longitude = object.longitude ?? '';
    message.lattitude = object.lattitude ?? '';
    return message;
  },
};

