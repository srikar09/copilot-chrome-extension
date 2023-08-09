/* The Address class is a TypeScript class that has a constructor function that takes in a data object
and assigns the data to the class */
class Address {
  address?: string = '';
  city?: string = '';
  state?: string = '';
  unit?: string = '';
  zipcode?: string = '';
  lattitude?: string = '';
  longitude?: string = '';
  id?: string = '';

  /**
   * The constructor function is a special function that is called when an instance of a class is created
   * @param [data] - The data that will be used to populate the class.
   */
  constructor(data?: Partial<Address>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * @description Returns the full address
   * @author Yoan Yomba
   * @returns {*}  {string}
   * @memberof Address
   */
  getFullAddress(): string {
    return `${this.address}, ${this.city}, ${this.state} ${this.zipcode}`;
  }
}

export { Address };
