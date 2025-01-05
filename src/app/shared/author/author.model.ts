export class AuthorModel {

    private _id: string;
    private _url: string;
    private _fullname: string;
    private _image: string;

    constructor(id: string) {
        this._id = id;
        this._url = `/profile/${id}`;
        this._fullname = 'Elvis';
        this._image = 'images/google-icon.png';
    }   

    get id(): string {
        return this._id;
    }   

    get url(): string {
        return this._url;
    }   

    get fullName(): string {
        return this._fullname;
    }

    get image(): string {     
        return this._image;
    }

   set id(id: string) {
        this._id = id;
    }

    set url(url: string) {      
        this._url = url;
    }

    set fullName(fullname: string) {
        this._fullname = fullname;
    }

    set image(image: string) {    
        this._image = image;
    }

}
