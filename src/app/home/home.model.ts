export interface IByCountry {
  place_country: string;
  place_country_code: string;
  total:number;
}
export class ByCountryModel implements IByCountry{
  constructor(public place_country: string, public place_country_code: string, public total: number){

  }
}

export interface IByHashTag {
  hashtag: string;
  total:number;
}
export class ByHashTagModel implements IByHashTag{
  constructor(public hashtag: string, public total: number){

  }
}