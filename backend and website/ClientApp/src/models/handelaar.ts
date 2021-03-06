import { Locatie } from './locatie';
import { Lunch } from "./lunch";
import { Login } from './login';

export class Handelaar {
    private _handelaarId: Number;
    private _handelsnaam:string;
    private _voornaam : string;
    private _achternaam : string;
    private _email : string; 
    private _telefoonnummer : string;
    private _naam : string;
    private _website : string;
    private _lunches : Lunch[]; //lijst van lunches
    private _promotierange : Number;
    private _locatie : Locatie;
    private _login: Login;

    static fromJSON(json: any): Handelaar {
        
        if (json != null) {
           let handelaar = new Handelaar();
            handelaar.handelaarId = json.gebruikerId;
            handelaar.handelsnaam = json.handelsNaam;
            handelaar.naam = json.handelsNaam;
            handelaar.voornaam = json.voornaam;
            handelaar.achternaam = json.achternaam;
            handelaar.email = json.email;
            handelaar.telefoonnummer = json.telefoonnummer;
            handelaar.website = json.website;
            handelaar.lunches = json.lunches;
            handelaar.promotierange = json.promotierange;
            handelaar.locatie = json.locatie;
            handelaar.login = Login.fromJSON(json.login);
            return handelaar;
         }
     }


    /**
     * Getter handelaarId
     * @return {Number}
     */
	public get handelaarId(): Number {
		return this._handelaarId;
    }
    
    public get handelsnaam():string{
        return this._handelsnaam;
    }

    public set handelsnaam(handelsnaam:string){
        this._handelsnaam = handelsnaam;
    }

    /**
     * Getter voornaam
     * @return {string}
     */
	public get voornaam(): string {
		return this._voornaam;
	}

    /**
     * Getter achternaam
     * @return {string}
     */
	public get achternaam(): string {
		return this._achternaam;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter telefoonnummer
     * @return {string}
     */
	public get telefoonnummer(): string {
		return this._telefoonnummer;
    }
    
    public get login(): Login {
        return this._login;
    }
    public set login(value: Login) {
        this._login = value;
    }

    /**
     * Getter naam
     * @return {string}
     */
	public get naam(): string {
		return this._naam;
	}

    /**
     * Getter website
     * @return {string}
     */
	public get website(): string {
		return this._website;
	}

    /**
     * Getter lunches
     * @return {Lunch[]}
     */
	public get lunches(): Lunch[] {
		return this._lunches;
	}

    /**
     * Getter promotierange
     * @return {Number}
     */
	public get promotierange(): Number {
		return this._promotierange;
	}

    /**
     * Getter locatie
     * @return {Locatie}
     */
	public get locatie(): Locatie {
		return this._locatie;
	}

    /**
     * Setter handelaarId
     * @param {Number} value
     */
	public set handelaarId(value: Number) {
		this._handelaarId = value;
	}

    /**
     * Setter voornaam
     * @param {string} value
     */
	public set voornaam(value: string) {
		this._voornaam = value;
	}

    /**
     * Setter achternaam
     * @param {string} value
     */
	public set achternaam(value: string) {
		this._achternaam = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter telefoonnummer
     * @param {string} value
     */
	public set telefoonnummer(value: string) {
		this._telefoonnummer = value;
	}

    /**
     * Setter naam
     * @param {string} value
     */
	public set naam(value: string) {
		this._naam = value;
	}

    /**
     * Setter website
     * @param {string} value
     */
	public set website(value: string) {
		this._website = value;
	}

    /**
     * Setter lunches
     * @param {Lunch[]} value
     */
	public set lunches(value: Lunch[]) {
		this._lunches = value;
	}

    /**
     * Setter promotierange
     * @param {Number} value
     */
	public set promotierange(value: Number) {
		this._promotierange = value;
	}

    /**
     * Setter locatie
     * @param {Locatie} value
     */
	public set locatie(value: Locatie) {
		this._locatie = value;
	}
     
}
