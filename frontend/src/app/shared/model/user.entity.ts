export class User {
   _id: any;
   _firstName: any;
  _lastName: any;
   _email: any;
   _type: any;
   _subscription: any;
   _imgUrl: any;
   _password: any;

  constructor(id: any, firstName: any, lastName: any, email: any, type: any, subscription: any, imgUrl: any, password: any) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._type = type;
    this._subscription = subscription;
    this._imgUrl = imgUrl;
    this._password = password;
  }

  get getId() {
    return this._id;
  }

  set id(value: any) {
    this._id = value;
  }

  get getFirstName() {
    return this._firstName;
  }

  set firstName(value: any) {
    this._firstName = value;
  }

  get getLastName() {
    return this._lastName;
  }

  set lastName(value: any) {
    this._lastName = value;
  }

  get getEmail() {
    return this._email;
  }

  set email(value: any) {
    this._email = value;
  }

  get getType() {
    return this._type;
  }

  set type(value: any) {
    this._type = value;
  }

  get getSubscription() {
    return this._subscription;
  }

  set subscription(value: any) {
    this._subscription = value;
  }

  get getImgUrl() {
    return this._imgUrl;
  }

  set imgUrl(value: any) {
    this._imgUrl = value;
  }

  get getPassword() {
    return this._password;
  }

  set password(value: any) {
    this._password = value;
  }
}
