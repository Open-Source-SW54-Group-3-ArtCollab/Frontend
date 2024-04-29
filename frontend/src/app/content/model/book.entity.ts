export class Book {
  private _title: any;
  private _description: any;
  private _date_publish: any;
  private _type: any;
  private _id: any;
  private _imgUrl:any;

  constructor(title: any, description: any, date_publish: any, type: any, id: any, imgUrl:any) {
    this._title = title;
    this._description = description;
    this._date_publish = date_publish;
    this._type = type;
    this._id = id;
    this._imgUrl = imgUrl;
  }

  get title() {
    return this._title;
  }

  set title(value: any) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value: any) {
    this._description = value;
  }

  get date_publish() {
    return this._date_publish;
  }

  set date_publish(value: any) {
    this._date_publish = value;
  }

  get type() {
    return this._type;
  }

  set type(value: any) {
    this._type = value;
  }

  get id() {
    return this._id;
  }

  set id(value: any) {
    this._id = value;
  }

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(value: any) {
    this._imgUrl = value;
  }
}
