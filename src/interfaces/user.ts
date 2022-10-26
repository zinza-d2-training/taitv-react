export interface IFUserInfo {
  identityCardNumber: string;
  email: string;
  password: string;
  name: string;
  birthday: Date;
  provinceId: number;
  gender: number;
  districtId: number;
  wardId: number;
}
export interface IFRegistrationVaccine {
  priorityId: number | undefined;
  healthyCardNumber: string;
  job: string;
  workingUnit: string;
  currentAddress: string;
  expectDay: Date | undefined;
  expectDateTimeId: number | undefined;
  isAccept: boolean;
}
