export interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export interface HomeProps {
  data: ServerDataTypes;
}

export interface ServerDataTypes {
  address: string;
  hostname: string;
  gamemode: string;
  mapname: string;
  passworded: boolean;
  maxplayers: number;
  online: number;
  rules: {
    lagcomp: boolean;
    mapname: string;
    version: string;
    weather: number;
    weburl: string;
    worldtime: string;
  };
  players: Array<{
    id: number;
    name: string;
    score: number;
    ping: number;
  }>;
}

export interface ErrorProps {
  statusCode: number;
}

export interface ErrorPageProps {
  res: any;
  err: any;
}

export type ApiResponseData = {
  success: boolean;
  error: any;
  data: any;
};

export interface UserTypes {
  id: number;
  username: string;
  email: string;
  admin: number;
}

export interface JWTPayloadTypes {
  user: UserTypes;
  iat: number;
  exp: number;
}

export interface DashboardIndexProps {
  account: any;
  players: any;
  stats: any;
}

export interface DisplayPlayersProps {
  data: PlayersProperty;
}

export interface PlayersProperty {
  success: boolean;
  online: number;
  maxplayers: number;
  players: Array<any>;
}

export interface PlayerTypes {
  id: number;
  name: string;
  score: number;
  ping: number;
}

export interface CharactersProps {
  ucp: CharacterProperty;
  account: any;
}

export interface CharacterProperty {
  success: boolean;
  data: Array<any>;
}

export interface CharTypes {
  ID: number;
  Character: string;
  Gender: number;
  pScore: number;
}

export interface SettingsProps {
  account: any;
}

export interface ServerStatisticProps {
  stats: ServerStatsTypes;
}

export interface ServerStatsTypes {
  userRegistered: number;
  totalCharacters: number;
  totalHouse: number;
  totalBusiness: number;
  totalWorkshop: number;
  totalFarms: number;
}

export interface CharProps {
  account: any;
  character: any;
  veh: any;
}

export interface DisplayCharProps {
  char: CharProperty;
  vehicle: VehicleProperty;
  // inventory: InventoryProperty;
}

export interface CharProperty {
  Character: string;
  ID: number;
  Skin: number;
  pScore: number;
  Gender: number;
  Origin: string;
  Birthdate: string;
  Money: number;
  BankMoney: number;
  LoginDate: number;
  Played: string;
  Phone: number;
  Rekening: number;
  Warnings: number;
  Gold: number;
  Vip: number;
  VipTime: number;
  Story: number;
  Married: number;
  CoupleName: string;
  Health: number;
  MaxHealth: number;
  ArmourStatus: number;
}

export interface VehicleProperty {
  success: boolean;
  data: Array<any>;
  error: any;
}

export interface VehicleDataLess {
  Model: number;
  ID: number;
}

export interface DisplayVehicleProps {
  vehicle: VehicleDataProperty;
}

export interface VehicleDataProperty {
  data: Array<any>;
  success: boolean;
  error: any;
}

export interface VehicleDataTypes {
  ID: number;
  Model: number;
  Garage: number;
  GarageApart: number;
  GarageFlat: number;
  Impound: number;
  InsideInsurance: number;
  Insurance: number;
  BodyUpgrade: number;
  EngineUpgrade: number;
  Plate: string;
  Health: number;
  Fuel: number;
}

export interface NavbarProps {
  account: any;
}

export interface VehicleProps {
  account: any;
  id: VehicleDataProperty;
}

export interface ProfileProps {
  account: any;
  profile: {
    ID: number;
    Username: string;
    Email: string;
    Admin: number;
    RegisterDate: number;
    IP: string;
  };
}

export interface DonationProps {
  donation: object;
}

// export interface InventoryProperty {
//   invID: number;
//   invItem: string;
//   invModel: number;
//   invQuantity: number;
// }
