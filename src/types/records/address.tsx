/**
 * Class representing an account's address.
 */
class Address {
  /** Address id */
  public id: number = 0;

  /** The address field */
  public address: string = "";

  /** The unit if the address is an apartment */
  public unit: string = "";

  /** The address zipcode */
  public zipcode: string = "";

  /** The city */
  public city: string = "";

  /** The state/municipality */
  public state: string = "";

  /** Longitude */
  public longitude: string = "";

  /** Latitude */
  public lattitude: string = "";

  /**
   * @description Returns the full address
   * @author Yoan Yomba
   * @returns {*}  {string}
   * @memberof Address
   */
  getFullAddress(): string {
    return `${this.address}, ${this.city}, ${this.state} ${this.zipcode}`;
  }

  constructor(data?: Partial<Address>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export { Address };
