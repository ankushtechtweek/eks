import { CurrentDeed } from './current-deep.model';
import { DocInfo } from './doc-info.model';
import { EstimatedValue } from './estimated-value.model';
import { ExtAmenities } from './ext-amenities.model';
import { ExtBuildings } from './ext-buildings.model';
import { ExtStructInfo } from './ext-struct-info.model';
import { IntAmenities } from './init-amenities.model';
import { IntRoomInfo } from './init-room-info.model';
import { IntStructInfo } from './int-struct-info.model';
import { LastDeedOwnerInfo } from './last-deed-owner-info.model';
import { Legal } from './legal.model';
import { Mortgage1 } from './mortgage-one-model';
import { OwnerAddress } from './owner-address.model';
import { Parcel } from './parcel.model';
import { Parking } from './parking.model';
import { ParsedPropertyAddress } from './parsed-propert-address.model';
import { Pool } from './Pool.model';
import { PrimaryGrantee } from './primary-grantee.model';
import { PrimaryGrantor } from './primary-grantor.model';
import { PrimaryOwner } from './primary-owner.model';
import { PropertyAddress } from './property-address.model';
import { PropertySize } from './property-size.model';
import { PropertyUseInfo } from './property-use-info.model';
import { SaleInfo } from './sale-info.model';
import { SecondaryGrantee } from './secondary-grantee.model';
import { SecondaryGrantor } from './secondary-grantor.model';
import { SecondaryOwner } from './secondary-owner.model';
import { TxAmtInfo } from './tax-amount-info.model';
import { TxDefInfo } from './tax-def-info.model';
import { Tax } from './tax.model';
import { TitleCompInfo } from './title-comp-info.model';
import { Utilities } from './utilities.model';
import { Valuation } from './valuation.model';
import { YardGardenInfo } from './yard-garden-info.model';

export class PropertyRecords {
  Records!: Array<PorpertyRecord>;
}

export class HistoricalTransactions {
  Records!: Array<HistoricalTransaction>;
}
export class PorpertyRecord {
  CurrentDeed!: CurrentDeed;
  EstimatedValue!: EstimatedValue;
  ExtAmenities!: ExtAmenities;
  ExtBuildings!: ExtBuildings;
  ExtStructInfo!: ExtStructInfo;
  IntRoomInfo!: IntRoomInfo;
  IntAmenities!: IntAmenities;
  IntStructInfo!: IntStructInfo;
  LastDeedOwnerInfo!: LastDeedOwnerInfo;
  Legal!: Legal;
  OwnerAddress!: OwnerAddress;
  Parcel!: Parcel;
  PrimaryOwner!: PrimaryOwner;
  Parking!: Parking;
  ParsedPropertyAddress!: ParsedPropertyAddress;
  Pool!: Pool;
  PropertyAddress!: PropertyAddress;
  PropertySize!: PropertySize;
  PropertyUseInfo!: PropertyUseInfo;
  SaleInfo!: SaleInfo;
  SecondaryOwner!: SecondaryOwner;
  Tax!: Tax;
  Utilities!: Utilities;
  YardGardenInfo!: YardGardenInfo;
}

export class HistoricalTransaction {
  DocInfo!: DocInfo;
  Mortgage1!: Mortgage1;
  Mortgage2!: Mortgage1;
  PrimaryGrantee!: PrimaryGrantee;
  PrimaryGrantor!: PrimaryGrantor;
  SecondaryGrantee!: SecondaryGrantee;
  SecondaryGrantor!: SecondaryGrantor;
  TitleCompInfo!: TitleCompInfo;
  TxAmtInfo!:TxAmtInfo;
  TxDefInfo!:TxDefInfo;
  Valuation!:Valuation
}
