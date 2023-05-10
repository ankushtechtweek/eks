import { KeyValue } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaticService {
  public getAddressTypes() {
    return [
      {
        name: 'Address',
        description: 'Discover who owns a property accurately',
        icon: 'address-search.png',
      },
      {
        name: 'APN',
        description: 'Discover who owns a property using Parcel Number',
        icon: 'apn-search.png',
      },
      {
        name: 'People',
        description: 'Find the person or business behind the property',
        icon: 'owner-search.png',
      },
      // {
      //   name: 'Map',
      //   description:
      //     'No address? No Problem! Place a pin on a map and discover a property visually',
      //   icon: 'search-location.png',
      // },
    ];
  }

  public get searchNavs() {
    return [
      {
        tab: 'Property Records',
        route: 'property-records',
        icon: 'assets/icons/pr.png',
        lock: false,
        isPremium: false,
      },
      {
        tab: 'Parcel Map & Photos',
        route: 'maps-photos',
        icon: 'assets/icons/maps-photos.png',
        lock: false,
        isPremium: false,
      },
      {
        tab: 'Structure Details',
        route: 'structure-details',
        icon: 'assets/icons/sd.png',
        lock: false,
        isPremium: false,
      },
      {
        tab: 'Deed Info',
        route: 'deed-info',
        icon: 'assets/icons/deed-info.png',
        lock: true,
        isPremium: false,
      },
      {
        tab: 'Mortgage History',
        route: 'mortgage-history',
        icon: 'assets/icons/mortgage.png',
        lock: true,
        isPremium: false,
      },
      {
        tab: 'Residents',
        route: 'residents',
        icon: 'assets/icons/house.png',
        lock: true,
        isPremium: false,
      },
      {
        tab: 'ENHANCEMENT DOCS, REPORTS & IMAGES',
        route: 'enhancement-docs',
        icon: 'assets/icons/notepad.png',
        lock: true,
        isPremium: true,
      },
    ];
  }

  public get reportnavs() {
    return [
      {
        tab: 'Rapid Insights Report',
        route: 'standard-report',
        icon: 'assets/icons/reporting.png',
        desc: "This Report contains: Owner's Name, Last Sale, Tax Info, Assessed & Est. Market Value, Map Satellite and Street View.",
        lock: false,
        credits: '0 Credits',
        isPremium: false,
        selected: false,
        name: 'Standard',
      },
      {
        tab: 'Preliminary Title Report (Includes liens)',
        route: 'open-liens',
        icon: 'assets/icons/lien.png',
        desc: 'Find out if there are any open involuntary liens against  the property. Including date, type, lien description and parties involved.',
        lock: true,
        credits: '1 Credit',
        isPremium: false,
        selected: false,
        name: 'Lien',
      },
      {
        tab: 'Deed Image',
        route: 'deed-abstract',
        icon: 'assets/icons/property.png',
        desc: 'Download the most recent Deed image document recorded. Including type of Deed,  Grantor, Grantee, legal description, signature.',
        lock: true,
        credits: '1 Credit',
        isPremium: false,
        selected: false,
        name: 'Deed',
      },
      {
        tab: 'Mortgage Image',
        route: 'mortgage-abstract',
        icon: 'assets/icons/mortgage-image.png',
        desc: "Dowload the most recent written Mortgage image document recorded. Including The loan amount, date,  interest rate, buyer's and lender's names.",
        lock: true,
        credits: '1 Credit',
        isPremium: false,
        selected: false,
        name: 'Mortgage',
      },
    ];
  }

  public get userNavs() {
    return [
      {
        tab: 'Customer Info',
        route: 'customer-info',
        icon: 'assets/icons/icon_menu-propertyrec.svg',
        isPremium: false,
      },
      {
        tab: 'Company Info',
        route: 'company-info',
        icon: 'assets/icons/icon_menu-maps-photos.svg',
        isPremium: false,
      },
      {
        tab: 'Transactions',
        route: 'transactions',
        icon: 'assets/icons/icon_menu-maps-photos.svg',
        isPremium: false,
      },
      {
        tab: 'Activity Log',
        route: 'activity-log',
        icon: 'assets/icons/icon_menu-maps-photos.svg',
        isPremium: false,
      },
      {
        tab: 'Search Log',
        route: 'search-log',
        icon: 'assets/icons/icon_menu-structure.svg',
        isPremium: false,
      },
      {
        tab: 'Download Log',
        route: 'download-log',
        icon: 'assets/icons/icon_menu-resident.svg',
        isPremium: false,
      },
    ];
  }

  public get profileNavs() {
    return [
      {
        tab: 'Account Details',
        route: 'account-details',
        icon: 'assets/icons/resume.png',
        isPremium: false,
      },
      {
        tab: 'Subscription Management',
        route: 'subscription-management',
        icon: 'assets/icons/subscription.png',
        isPremium: false,
      },
      {
        tab: 'Payment Details',
        route: 'payment-details',
        icon: 'assets/icons/cashless-payment.png',
        isPremium: false,
      },
      {
        tab: 'Purchase History',
        route: 'purchase-history',
        icon: 'assets/icons/smartphone.png',
        isPremium: false,
      },
    ];
  }

  public get navItems() {
    return [
      {
        nav: 'Address',
        route: 'address',
      },
      {
        nav: 'APN',
        route: 'apn',
      },
      {
        nav: 'People',
        route: 'people',
      },
      // {
      //   nav:'Map',
      //   route:'map'
      // }
    ];
  }

  public get getSearchRoutes() {
    return [
      {
        route: 'property-records',
        nextRoute: 'maps-photos',
        prevRoute: 'property-records',
        bottom: 0,
      },
      {
        route: 'maps-photos',
        nextRoute: 'structure-details',
        prevRoute: 'property-records',
        bottom: 0,
      },
      {
        route: 'structure-details',
        nextRoute: 'deed-info',
        prevRoute: 'maps-photos',
        bottom: 0,
      },
      {
        route: 'deed-info',
        nextRoute: 'mortgage-history',
        prevRoute: 'structure-details',
        bottom: 0,
      },
      {
        route: 'mortgage-history',
        nextRoute: 'residents',
        prevRoute: 'deed-info',
        bottom: 0,
      },
      {
        route: 'residents',
        nextRoute: 'enhancement-docs',
        prevRoute: 'mortgage-history',
        bottom: 1,
      },
      {
        route: 'enhancement-docs',
        nextRoute: 'standard-report',
        prevRoute: 'residents',
        bottom: 2,
      },
      {
        route: 'standard-report',
        nextRoute: 'open-liens',
        prevRoute: 'enhancement-docs',
        bottom: 3,
      },
      {
        route: 'open-liens',
        nextRoute: 'deed-abstract',
        prevRoute: 'standard-report',
        bottom: 4,
      },
      {
        route: 'deed-abstract',
        nextRoute: 'mortgage-abstract',
        prevRoute: 'open-liens',
        bottom: 5,
      },
      {
        route: 'mortgage-abstract',
        nextRoute: 'property-records',
        prevRoute: 'deed-abstract',
        bottom: 6,
      },
    ];
  }

  public planMode(planType: string) {
    switch (planType) {
      case 'Premium-plan':
      case 'Pro250-plan':
        return 'month';
      case 'Pro-Annual-Plan':
      case 'Premium-Annual-Plan':
        return 'year';
      default:
        return 'N/A';
    }
  }

  public indexOrderAsc = (
    c: KeyValue<string, any>,
    d: KeyValue<string, any>
  ): number => {
    const a = c.value.index;
    const b = d.value.index;
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  };

  public get skipSpecificURL() {
    return ['AutoFillSearch'];
  }

  public get cancelReasons() {
    return [
      'Inaccurate property data',
      'Could not find property data',
      'Other',
    ];
  }

  public getParkingGarage(value: string) {
    switch (value) {
      case '0':
        return 'No Garage';
      case '1':
        return 'Not Stated';
      case '4':
        return 'Pole Building Garage';
      case '11':
        return 'Garage, Attached';
      case '12':
        return 'Garage, Detached';
      case '13':
        return 'Garage, Unfinished';
      case '14':
        return 'Garage, Finished';
      case '15':
        return 'Garage, Enclosed';
      case '16':
        return 'Garage, Open';
      case '17':
        return 'Detached (Unspecified)';
      case '18':
        return 'Attached (Unspecified)';
      case '19':
        return 'Detached, Finished';
      case '20':
        return 'Detached, Unfinished';
      case '21':
        return 'Attached, Finished';
      case '22':
        return 'Attached, Unfinished';
      case '23':
        return 'Detached, 1-Car';
      case '24':
        return 'Detached, 2-Car';
      case '25':
        return 'Detached, 3+ Car';
      case '26':
        return 'Attached, 1-Car';
      case '27':
        return 'Attached, 2-Car';
      case '28':
        return 'Attached, 3+ Car';
      case '30':
        return 'Carport (Unspecified)';
      case '31':
        return 'Carport, Attached';
      case '32':
        return 'Carport, Detached';
      case '33':
        return 'Carport, Enclosed';
      case '34':
        return 'Carport, Open';
      case '35':
        return 'Carport, 1-Car';
      case '36':
        return 'Carport, 2-Car';
      case '37':
        return 'Carport, 3+ Car';
      case '38':
        return 'Carport, Finished';
      case '39':
        return 'Carport, Unfinished';
      case '40':
        return 'Garage, Basement';
      case '41':
        return 'Garage, Basement, 1-Car';
      case '42':
        return 'Garage, Basement, 2-Car';
      case '43':
        return 'Garage, Basement, 3+ Car';
      case '44':
        return 'Garage, Basement, Finished';
      case '45':
        return 'Garage, Basement, Finished, 1-Car';
      case '46':
        return 'Garage, Basement, Finished, 2-Car';
      case '47':
        return 'Garage, Basement, Finished, 3+ Car';
      case '48':
        return 'Garage, Basement, Unfinished';
      case '49':
        return 'Garage, Basement, Unfinished, 1-Car';
      case '50':
        return 'Garage, Basement, Unfinished, 2-Car';
      case '51':
        return 'Garage, Basement, Unfinished, 3+ Car';
      case '52':
        return 'Garage, Tuckunder';
      case '53':
        return 'Garage, Built-in';
      case '54':
        return 'Garage, Built-in, 1-Car';
      case '55':
        return 'Garage, Built-in, 2-Car';
      case '57':
        return 'Garage, Built-in, Unfinished';
      case '58':
        return 'Garage, Built-in, Finished';
      case '59':
        return 'Garage, 1-Car';
      case '60':
        return 'Garage, 2-Car';
      case '61':
        return 'Garage, 3+ Car';
      case '62':
        return 'Garage, Unfinished, 1-Car';
      case '63':
        return 'Garage, Unfinished, 2-Car';
      case '64':
        return 'Garage, Unfinished, 3+ Car';
      case '65':
        return 'Carport, Detached, Finished';
      case '67':
        return 'Carport, Detached, Unfinished';
      case '999':
        return 'Type Not Specified';
      default:
        return 'N/A';
    }
  }

  public getParkingCarport(value: string) {
    switch (value) {
      case '0':
        return 'No';
      case '1':
        return 'Yes';
      default:
        return 'N/A';
    }
  }

  public getPool(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Public/Municipal/Commercial';
      case '110':
        return 'Above-ground Pool';
      case '121':
        return 'In-ground Vinyl Pool';
      case '130':
        return 'Indoor Pool';
      case '210':
        return 'Pool, Gunite';
      case '220':
        return 'Pool, Fiberglass';
      case '230':
        return 'Pool, Concrete';
      case '241':
        return 'Pool, Plastic/Vinyl Lined';
      case '401':
        return 'Pool (Unspecified), Heated';
      case '402':
        return 'Pool, Solar Heated';
      case '502':
        return 'Pool w/Hot Tub/Spa';
      case '610':
        return 'Pool (Unspecified), Enclosed';
      case '904':
        return 'Spa/Hot Tub (only)';
      case '999':
        return 'Type Unspecified';
      default:
        return 'N/A';
    }
  }

  public getSauna(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Sauna Room';
      default:
        return 'N/A';
    }
  }

  public getFoundation(value: string) {
    switch (value) {
      case '0':
        return 'Not Stated';
      case '1':
        return 'No Foundation';
      case '100':
        return 'Mat/Raft Foundation (Slab)';
      case '101':
        return 'Concrete Beam & Slab';
      case '200':
        return 'FOOTING';
      case '201':
        return 'Footing - Continuous/Strip';
      case '202':
        return 'Footing - Spread';
      case '300':
        return 'Pile';
      case '301':
        return 'Pile - Concrete';
      case '302':
        return 'Pile - Wood/Timber';
      case '303':
        return 'Pile - Friction';
      case '304':
        return 'Pile - End Bearing';
      case '400':
        return 'Pier/Post & Beam';
      case '401':
        return 'Pier/Post - Wood';
      case '402':
        return 'Pier/Post - Concrete';
      case '501':
        return 'Raised (Unspecified)';
      case '510':
        return 'Stem Wall/Crawlspace';
      case '920':
        return 'Wood (Unspecified)';
      case '921':
        return 'Stone (Unspecified)';
      case '922':
        return 'Masonry (Unspecified)';
      case '923':
        return 'Block (Unspecified)';
      case '924':
        return 'Brick (Unspecified)';
      case '930':
        return 'Retaining Wall';
      case '999':
        return 'Type Not Specified';
      default:
        return 'N/A';
    }
  }

  public getConstruction(value: string) {
    switch (value) {
      case '0':
        return 'Not Stated';
      case '1':
        return 'Type Not Specified';
      case '2':
        return 'Frame';
      case '7':
        return 'Light Frame';
      case '8':
        return 'Heavy Frame';
      case '9':
        return 'Pole Frame';
      case '10':
        return 'Wood';
      case '15':
        return 'Wood Frame';
      case '19':
        return 'Metal Frame';
      case '20':
        return 'Steel Frame';
      case '23':
        return 'Concrete';
      case '24':
        return 'Steel & Concrete';
      case '25':
        return 'Masonry/Concrete Masonry Units (CMUs)';
      case '28':
        return 'Concrete Blocks';
      case '31':
        return 'Brick';
      case '38':
        return 'Stone';
      case '41':
        return 'Adobe';
      case '42':
        return 'Log';
      case '43':
        return 'Manufactured';
      case '46':
        return 'Tilt-Up Concrete';
      case '50':
        return 'Arched/Dome';
      case '99':
        return 'Mixed';
      default:
        return 'N/A';
    }
  }

  public getInteriorStructure(value: string) {
    switch (value) {
      case '0':
        return 'No Interior Walls';
      case '101':
        return 'Finished/Painted';
      case '102':
        return 'Custom/Decorative';
      case '103':
        return 'Combination';
      case '104':
        return 'Composition';
      case '110':
        return 'Paneling (Unspecified)';
      case '180':
        return 'Firewall';
      case '190':
        return 'Unfinished';
      case '199':
        return 'Other';
      case '201':
        return 'Wallboard/Drywal';
      case '202':
        return 'Drywall & Plaster';
      case '203':
        return 'Wood & Drywall';
      case '210':
        return 'Cement Board';
      case '301':
        return 'Wood (Unspecified)';
      case '302':
        return 'Wood, Cedar';
      case '303':
        return 'Wood, Hardwood';
      case '304':
        return 'Wood, Pine';
      case '305':
        return 'Wood, Redwood';
      case '310':
        return 'Wood Paneling';
      case '320':
        return 'Plywood';
      case '321':
        return 'Plywood Paneling';
      case '330':
        return 'Fiber/Woodboard';
      case '350':
        return 'Log';
      case '360':
        return 'Wood Shingle';
      case '401':
        return 'Masonry (Unspecified)';
      case '402':
        return 'Block (Unspecified)';
      case '410':
        return 'Brick';
      case '411':
        return 'Brick & Block';
      case '412':
        return 'Brick & Stone';
      case '420':
        return 'Stone';
      case '421':
        return 'Stone, Marble';
      case '430':
        return 'Concrete';
      case '431':
        return 'Concrete Tilt-Up';
      case '432':
        return 'Concrete Block';
      case '501':
        return 'Tile';
      case '590':
        return 'Acoustic Tile/Panels';
      case '601':
        return 'Metal';
      case '602':
        return 'Tin';
      case '603':
        return 'Copper';
      case '610':
        return 'Enameled Metal';
      case '701':
        return 'Plaster';
      case '702':
        return 'Plaster & Masonry';
      case '703':
        return 'Plaster & Paneling';
      case '710':
        return 'Stucco';
      case '720':
        return 'Terrazzo';
      case '730':
        return 'Wallpaper';
      case '740':
        return 'Formica';
      case '750':
        return 'Glass';
      case '760':
        return 'Vinyl Panel/Coating';
      case '770':
        return 'Adobe';
      case '790':
        return 'Fiberglass';
      case '999':
        return 'Type Unspecified';
      default:
        return 'N/A';
    }
  }

  public getConstructionFireResistanceClass(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Buildings having fireproofed structural steel frames carrying all wall, floor and roof loads. Wall, floor and roof structures are built of non-combustible materials.';
      case '102':
        return 'Buildings having fireproofed reinforced concrete frames carrying all wall, floor and roof loads which are all non-combustible.';
      case '103':
        return 'Buildings having exterior walls built of a non-combustible material such as brick, concrete, block or poured concrete. Interior partitions and roof structure are built of combustible materials. Floor may be concrete or wood frame.';
      case '104':
        return 'Buildings having wood or wood and steel frames.';
      case '105':
        return 'Specialized buildings that do not fit in any of the above categories.';
      default:
        return 'N/A';
    }
  }

  public getSafetyFireSprinklersFlag(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'The property is equipped with a fire-suppression sprinkler system';
      default:
        return 'N/A';
    }
  }

  public getFlooringMaterialPrimary(value: string) {
    switch (value) {
      case '0':
        return 'Not Stated';
      case '1':
        return 'Type Unspecified';
      case '2':
        return 'Carpet';
      case '3':
        return 'Vinyl/Resilient';
      case '4':
        return 'Vinyl Tile (VCT)';
      case '6':
        return 'Vinyl Sheet/Linoleum';
      case '8':
        return 'Laminate Plank';
      case '13':
        return 'Wood (Unspecified)';
      case '14':
        return 'Hardwood';
      case '15':
        return 'Softwood';
      case '16':
        return 'Parquet';
      case '17':
        return 'Plywood';
      case '19':
        return 'Wood, Pine';
      case '24':
        return 'Cork';
      case '28':
        return 'Slate';
      case '29':
        return 'Marble';
      case '30':
        return 'Granite';
      case '31':
        return 'Stone';
      case '32':
        return 'Ceramic Tile';
      case '36':
        return 'Terrazzo';
      case '37':
        return 'Concrete/Cement';
      case '40':
        return 'Tile (Unspecified)';
      case '42':
        return 'Brick';
      case '45':
        return 'Asbestos (Tiles, Sheet)';
      case '47':
        return 'Earth/Dirt';
      case '60':
        return 'Combination, Other';
      case '61':
        return 'Other';
      case '62':
        return 'Steel Beam';
      case '63':
        return 'Subfloor';
      case '64':
        return 'Covered';
      default:
        return 'N/A';
    }
  }

  public getBonusRoom(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Bonus Room';
      default:
        return 'N/A';
    }
  }

  public getBreakfastNook(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Breakfast Nook';
      default:
        return 'N/A';
    }
  }

  public getCellar(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Cellar';
      default:
        return 'N/A';
    }
  }

  public getCellarWine(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Wine Cellar';
      default:
        return 'N/A';
    }
  }

  public getExercise(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Exercise Room';
      default:
        return 'N/A';
    }
  }

  public getFamily(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Family Room';
      default:
        return 'N/A';
    }
  }

  public getGame(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Game Room';
      default:
        return 'N/A';
    }
  }

  public getGreat(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Geat Room';
      default:
        return 'N/A';
    }
  }

  public getHobby(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Hobby Room';
      default:
        return 'N/A';
    }
  }

  public getLaundry(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Laundry Room';
      default:
        return 'N/A';
    }
  }

  public getMedia(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Media Room';
      default:
        return 'N/A';
    }
  }

  public getMud(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Mud Room';
      default:
        return 'N/A';
    }
  }

  public getOffice(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Office';
      default:
        return 'N/A';
    }
  }

  public getSafeRoom(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Safe Room';
      default:
        return 'N/A';
    }
  }

  public getSitting(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Sitting Room';
      default:
        return 'N/A';
    }
  }

  public getStorm(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Storm Shelter';
      default:
        return 'N/A';
    }
  }

  public getStudy(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Study';
      default:
        return 'N/A';
    }
  }

  public getSunroom(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Sun Room';
      default:
        return 'N/A';
    }
  }

  public getUtility(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Utility Room';
      default:
        return 'N/A';
    }
  }

  public getFireplace(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Yes';
      case '2':
        return 'Single';
      case '3':
        return 'Backed';
      case '4':
        return 'Stacked';
      case '5':
        return 'Custom';
      case '6':
        return 'Glass Log';
      case '7':
        return 'Prefab';
      case '8':
        return 'Flue Only';
      case '9':
        return 'See Thru';
      case '10':
        return 'Wood Stove';
      case '11':
        return 'Electric';
      case '12':
        return 'Raised Hearth';
      case '13':
        return 'Masonry';
      case '14':
        return 'Heatltr/Circle';
      case '15':
        return 'Ceiling Hi Brick';
      case '16':
        return '1 Story Brick';
      case '17':
        return '2 Story Brick';
      case '18':
        return '2 Story';
      case '19':
        return 'Double';
      default:
        return 'N/A';
    }
  }

  public getAccessabilityElevator(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Elevator';
      default:
        return 'N/A';
    }
  }

  public getAccessabilityHandicap(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of Hanjdicapped Accessability Features Such As Ramps, Wide Doorways, etc.';
      default:
        return 'N/A';
    }
  }

  public getEscalator(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Escalator';
      default:
        return 'N/A';
    }
  }

  public getCentralVacuum(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Central Vaccuum System';
      default:
        return 'N/A';
    }
  }

  public getIntercom(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Central Intercom System';
      default:
        return 'N/A';
    }
  }

  public getSoundSystem(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Installed Sound System';
      default:
        return 'N/A';
    }
  }

  public getWetBarm(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Wet Bar';
      default:
        return 'N/A';
    }
  }

  public getSecurityAlarm(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Security Alarm';
      default:
        return 'N/A';
    }
  }

  public getExterior1Code(value: string) {
    switch (value) {
      case '0A':
        return 'Unknown';
      case '10A':
        return 'Asbestos';
      case '11A':
        return 'Plywood';
      case '12C':
        return 'Brick Veneer';
      case '13A':
        return 'Stone Veneer';
      case '14A':
        return 'Shake';
      case '15I':
        return 'Logs';
      case '16A':
        return 'Protective (Treatment)';
      case '17A':
        return 'Vinyl';
      case '18V':
        return 'Shingles';
      case '19A':
        return 'Marblecrete';
      case '1L':
        return 'Stucco';
      case '20H':
        return 'Glass';
      case '21A':
        return 'None';
      case '22A':
        return 'Channel';
      case '23A':
        return 'Tong & Groove';
      case '24E':
        return 'Composition';
      case '25A':
        return 'Rustic';
      case '26A':
        return 'Bat & Board';
      case '27A':
        return 'Masonite';
      case '28A':
        return 'Ribbed';
      case '29A':
        return 'Other (Not Classified)';
      case '2R':
        return 'Siding';
      case '30A':
        return 'Ribbed Aluminum';
      case '31A':
        return 'Aluminum Lap';
      case '32A':
        return 'Frame Brick';
      case '33A':
        return '8 Inch Paint';
      case '34K':
        return 'Stone';
      case '35T':
        return 'Adobe';
      case '36A':
        return 'Steel Panel';
      case '37A':
        return 'Pre-cast';
      case '38A':
        return 'Strut Frame';
      case '39A':
        return 'Comb';
      case '3B':
        return 'Brick';
      case '40A':
        return 'Curtain';
      case '41A':
        return 'Wood/Steel Stud';
      case '42A':
        return 'Single Wall';
      case '43A':
        return 'Farm Single';
      case '44A':
        return 'Buttressed';
      case '45A':
        return 'Aspht Shingle';
      case '46A':
        return 'Hardwood Siding';
      case '47P':
        return 'Wood Shingle';
      case '48D':
        return 'Block';
      case '49A':
        return '2x2 Frame';
      case '4Y':
        return 'Brick/Stone (Brick And/Or Stone)';
      case '50A':
        return '2x3 Frame';
      case '51A':
        return '2x4 Frame';
      case '52A':
        return '2x6 Frame';
      case '53A':
        return 'Modular';
      case '54A':
        return 'Pole';
      case '55A':
        return 'Baked Enamel';
      case '56A':
        return 'Cedar';
      case '57A':
        return 'Paper';
      case '58A':
        return 'Cinder Block';
      case '59A':
        return 'Diagonal';
      case '5G':
        return 'Concrete Block';
      case '60A':
        return 'Horizontal';
      case '61A':
        return 'Vertical';
      case '62A':
        return 'Drop';
      case '63A':
        return 'Log 1/2 Round';
      case '64A':
        return 'Lap';
      case '65A':
        return 'Panel';
      case '66A':
        return 'T111';
      case '67A':
        return 'Frame/Stucco';
      case '68A':
        return 'Masonry/Stucco';
      case '69A':
        return 'Aluminum Siding';
      case '6A':
        return 'Slump Block';
      case '70A':
        return 'Board & Batten';
      case '71A':
        return 'Frame Siding';
      case '72A':
        return 'Frame/Shingle Siding';
      case '73A':
        return 'Wood Frame/Siding';
      case '74A':
        return 'Brick/Wood';
      case '75A':
        return 'Brick Frame/Stone';
      case '76A':
        return 'Frame/Masonry';
      case '77A':
        return 'Frame/Stone';
      case '78A':
        return 'Stone/Wood Frame';
      case '79A':
        return 'Block/Masonry';
      case '7Q':
        return 'Wood';
      case '80A':
        return 'Concrete Block/Stucco';
      case '81F':
        return 'Concrete';
      case '82A':
        return 'Concrete/Cinder Block';
      case '83N':
        return 'Precast Concrete Panel';
      case '84A':
        return 'Frame/Wood';
      case '85A':
        return 'Prefab Wood';
      case '86A':
        return 'Wood Frame';
      case '87A':
        return 'Frame/Aluminum';
      case '88A':
        return 'Metal Siding';
      case '89A':
        return 'Asbestos Frame';
      case '8A':
        return 'Bevel (Finishing Style)';
      case '90A':
        return 'Frame/Masonry/Veneer';
      case '91A':
        return 'Aluminum/Vinyl';
      case '92A':
        return 'Frame/Vinyl';
      case '98X':
        return 'Combination';
      case '99A':
        return 'Wood Siding';
      case '9J':
        return 'Metal';
      default:
        return 'N/A';
    }
  }

  public getRoofMaterial(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Unknown Or Not Provided';
      case '102':
        return 'Wood Shingle';
      case '103':
        return 'Shake';
      case '104':
        return 'Tile';
      case '105':
        return 'Composition Shingle';
      case '106':
        return 'Roll Composition (Rolled Mineral Roof)';
      case '107':
        return 'Gravel';
      case '108':
        return 'Builtup (Layered Asphalt)';
      case '109':
        return 'Asphalt';
      case '110':
        return 'Slate';
      case '111':
        return 'Aluminum';
      case '112':
        return 'Metal';
      case '113':
        return 'Enamel';
      case '114':
        return 'Other (Not Classified)';
      case '115':
        return 'Asbestos';
      case '116':
        return 'Roll Paper (Rolled Smooth Roof)';
      case '117':
        return 'Bi Metal (Two-Ply)';
      case '118':
        return 'Heavy Composition Shingle';
      case '119':
        return 'Light Composition Shingle';
      case '120':
        return 'Average Composition Shingle';
      case '121':
        return 'Fiberglass';
      case '122':
        return 'Galvanized';
      case '123':
        return 'Medium Shake';
      case '124':
        return 'Bar Tile (Spanish Style)';
      case '125':
        return 'Clay Tile';
      case '126':
        return 'Synthetic Tile';
      case '127':
        return 'Wood Shake/Shingle';
      case '128':
        return 'Concrete Tile';
      case '129':
        return 'Rubber/Elastometric';
      case '130':
        return 'Slate Tile';
      case '131':
      case '134':
        return 'Wood';
      case '132':
        return 'Hardwood';
      case '133':
        return 'Wood On Steel';
      case '135':
        return 'Flat Wood Shake/Shingle';
      case '136':
        return 'Gable Wood Shake/Shingle';
      case '137':
        return 'Hip Wood Shake';
      case '138':
        return 'Hip Wood Shake/Shingle';
      case '139':
        return 'Gambrel Wood Shake/Shingle';
      case '140':
        return 'Wood Shake';
      case '141':
        return 'Cedar Shake';
      case '142':
        return 'Wood Shake/Shingle - Wood Joist';
      case '143':
        return 'Flat Tile';
      case '144':
        return 'Gable Tile';
      case '145':
        return 'Hip Tile';
      case '146':
        return 'Mansard Tile';
      case '147':
        return 'Shed Tile';
      case '148':
        return 'Gambrel Tile';
      case '149':
        return 'Cement Tile';
      case '150':
        return 'Ceramic/Glazed Tile';
      case '151':
        return 'Glazed Tile';
      case '152':
        return 'A-Frame Composition Shingle';
      case '153':
        return 'Flat Composition Shingle';
      case '154':
        return 'Gable Composition Shingle';
      case '155':
        return 'Hip Composition Shingle';
      case '156':
        return 'Mansard Composition Shingle';
      case '157':
        return 'Composition';
      case '158':
        return 'Shingle';
      case '159':
        return 'Composition Shingle/Metal';
      case '160':
        return 'Compostion Shingle';
      case '161':
        return 'Flat Composition Roll';
      case '162':
        return 'Gable Composition Roll';
      case '163':
        return 'Hip Composition Roll';
      case '164':
        return 'Mansard Composition Roll';
      case '165':
        return 'Gambrel Composition Roll';
      case '166':
        return 'Composition';
      case '167':
        return 'Flat Tar & Gravel';
      case '168':
        return 'Gable Tar & Gravel';
      case '169':
        return 'Hip Tar & Gravel';
      case '170':
        return 'Shed Tar & Gravel';
      case '171':
        return 'Gambrel Tar & Gravel';
      case '172':
        return 'Tar & Gravel';
      case '173':
        return 'Crushed Rock';
      case '174':
        return 'Gravel & Rock';
      case '175':
        return 'Rock';
      case '176':
        return 'Rock & Gravel';
      case '177':
        return 'Stone/Rock';
      case '178':
        return 'Stone/Pebble';
      case '179':
        return 'Stone';
      case '180':
        return 'Roll Tar & Gravel';
      case '181':
        return 'Flat Built-Up Wood';
      case '182':
        return 'Built-Up Wood Joist';
      case '183':
        return 'Built-Up Composition';
      case '184':
        return 'Built-Up Gypsum';
      case '185':
        return 'Built-Up Metal';
      case '186':
        return 'Built-Up Rock';
      case '187':
        return 'Built-Up Tar & Gravel';
      case '188':
        return 'Built-Up Wood';
      case '189':
        return 'Built-Up Metal/Gypsum';
      case '190':
        return 'Built-Up Composition/Tar & Gravel';
      case '191':
        return 'Asphalt Shingle';
      case '192':
        return 'Asphalt Shingle - Wood Joist';
      case '193':
        return 'Asphalt Roll';
      case '194':
        return 'Asphalt Tile';
      case '195':
        return 'Asphalt/Composition';
      case '196':
        return 'Asphalt/Composition Shingle';
      case '197':
        return 'Flat';
      case '198':
        return 'Flat Slate/Slag';
      case '199':
        return 'Gable Slate/Slag';
      case '200':
        return 'Hip Slate/Slag';
      case '201':
        return 'Mansard Slate/Slag';
      case '202':
        return 'Gambrel Slate/Slag';
      case '203':
        return 'Aluminum/Shingle';
      case '204':
        return 'Flat Metal';
      case '205':
        return 'Flat Copper';
      case '206':
        return 'Gable Metal';
      case '207':
        return 'Gable Steel';
      case '208':
        return 'Gable Copper';
      case '209':
        return 'Hip Metal';
      case '210':
        return 'Hip Copper';
      case '211':
        return 'Mansard Metal';
      case '212':
        return 'Shed Metal';
      case '213':
        return 'Gambrel Metal';
      case '214':
        return 'Gambrel Copper/Shingle';
      case '215':
        return 'Copper';
      case '216':
        return 'Copper/Shingle';
      case '217':
        return 'Metal Sheeting';
      case '218':
        return 'Aluminum Steel';
      case '219':
        return 'Copper/Metal';
      case '220':
        return 'Corrugated Iron';
      case '221':
        return 'Corrugated Metal';
      case '222':
        return 'Corrugated Steel';
      case '223':
        return 'Metal';
      case '224':
        return 'Metal Tile';
      case '225':
        return 'Metal/Shingle';
      case '226':
        return 'Metal/Tar Paper';
      case '227':
        return 'Metal/Tin';
      case '228':
        return 'Modular Metal';
      case '229':
        return 'Prefinished Metal';
      case '230':
        return 'Tin';
      case '231':
        return 'Corrugated Metal/Roll Roofing';
      case '232':
        return 'Corrugated Metal/Tarpaper';
      case '233':
        return 'Galvanized Sheet Metal';
      case '234':
        return 'Metal Sheeting';
      case '235':
        return 'Metal Pipe';
      case '236':
        return 'Copper/Enamel Metal Sheeting';
      case '237':
        return 'A-Frame';
      case '238':
        return 'Barn';
      case '239':
        return 'Canopy';
      case '240':
        return 'Dormer';
      case '241':
        return 'Frame';
      case '242':
        return 'Flat Concrete';
      case '243':
        return 'Flat Wood Beam';
      case '244':
        return 'Flat Wood Truss';
      case '245':
        return 'Flat Concrete';
      case '246':
        return 'Flat Shingle';
      case '247':
        return 'Gable Concrete';
      case '248':
        return 'Gable Wood Beam';
      case '250':
        return 'Gable Wood Truss';
      case '251':
        return 'Gable';
      case '252':
        return 'Gable Shingle';
      case '253':
        return '253';
      case '254':
        return 'Hip Concrete';
      case '255':
        return 'Hip Wood Beam';
      case '256':
        return 'Hip Wood Joist';
      case '257':
        return 'Hip Wood Truss';
      case '258':
        return 'Hip';
      case '259':
        return 'Hip Shingle';
      case '260':
        return 'Geodesic';
      case '261':
        return 'Mansard Concrete';
      case '262':
        return 'Mansard Wood Beam';
      case '263':
        return 'Mansard Wood Joist';
      case '264':
        return 'Mansard Wood Truss';
      case '265':
        return 'Mansard';
      case '266':
        return 'Mansard Shingle';
      case '267':
        return 'Barrel';
      case '268':
        return 'Monitor';
      case '269':
        return 'Contemporary';
      case '270':
        return 'Shed Concrete';
      case '271':
        return 'Shed Wood Beam';
      case '272':
        return 'Shed Wood Joist';
      case '273':
        return 'Shed Wood Truss';
      case '274':
        return 'Shed';
      case '275':
        return 'Shed Concrete';
      case '276':
        return 'Shed Shingle';
      case '277':
        return 'Pitched Concrete';
      case '278':
        return 'Pitched';
      case '279':
        return 'Pitched Composition';
      case '280':
        return 'Pyramid';
      case '281':
        return 'Arched';
      case '282':
        return 'Sawtooth';
      case '283':
        return 'Cathedral/Clerestory';
      case '284':
        return 'Bubble';
      case '285':
        return 'Gambrel Concrete';
      case '286':
        return 'Gambrel Wood Beam';
      case '287':
        return 'Gambrel Wood Joist';
      case '288':
        return 'Gambrel Wood Truss';
      case '289':
        return 'Gambrel';
      case '290':
        return 'Gambrel/Shingle';
      case '291':
        return 'Swiss Chalet/Alpine';
      case '292':
        return 'Complex/Custom';
      case '293':
        return 'Butterfly';
      case '294':
        return 'Gambrel/Mansard';
      case '295':
        return 'Steel Joist/Metal Deck/Slab';
      case '296':
        return 'Bar Joist/Wood Joist/Sheath';
      case '297':
        return 'Bar Joist';
      case '298':
        return 'Concrete';
      case '299':
        return 'Bar Joist & Wood Deck';
      case '300':
        return 'Wood Frame';
      case '301':
        return 'Bowstring';
      case '302':
        return 'Bar Joist/Gypsum/Wood Joist/Sheath';
      case '303':
        return 'Concrete Joist/Slab/Bar/Joist/Cored Ply';
      case '304':
        return 'Bar Joist & Concrete Deck';
      case '305':
        return 'Bar Joist/Gypsum';
      case '306':
        return 'Flexible/Flexicore';
      case '307':
        return 'Concrete Joist/Slab';
      case '308':
        return 'Reinforced Concrete';
      case '309':
        return 'Longspan Truss';
      case '310':
        return 'Prestress Concrete';
      case '311':
        return 'Bar Joist & Rigid Frame';
      case '312':
        return 'Steel';
      case '313':
        return 'Truss/Joist';
      case '314':
        return 'Steel Joist/Metal Deck/Slab/Concrete Joist';
      case '315':
        return 'Concrete Joist/Slab/Steel Joist';
      case '316':
        return 'Wood Joist';
      case '317':
        return 'Wood On Steel';
      case '318':
        return 'Wood Truss';
      case '319':
        return 'Custom';
      case '320':
        return 'Concrete';
      case '321':
        return 'Gypsum';
      case '322':
        return 'Cement/Composition';
      case '323':
        return 'Concrete Deck';
      case '324':
        return 'Corrugated Composition';
      case '325':
        return 'Concrete Concrete';
      case '326':
        return 'Concrete Steel';
      case '327':
        return 'Plastic/Urethane';
      case '328':
        return 'Precast Concrete';
      case '329':
        return 'Reinforced Concrete';
      case '330':
        return 'Bermuda/Clay Tile/Wood Shingle';
      case '331':
        return 'Synthetic';
      case '332':
        return 'Bahama/Ceramic Tile/Built-Up Tar & Gravel';
      case '333':
        return 'Shingle/Tar/Gravel/Roll Slate';
      case '334':
        return 'Bermuda/Concrete Ply/Built-up Tar & Gravel';
      case '335':
        return 'Gable/Shaped Wood Truss';
      case '336':
        return 'Prestressed Concrete';
      case '337':
        return 'Gable/Shaped Steel Truss';
      case '338':
        return 'Wood Hip/Gable/Wood Truss';
      case '339':
        return 'Gypsum Steel';
      case '340':
        return 'Shingle Concrete';
      case '341':
        return 'Irregular Wood Truss';
      case '342':
        return 'Irregular';
      case '343':
        return 'Lean-To';
      case '344':
        return 'Salt Box';
      case '345':
        return 'Dome';
      case '346':
        return 'Flat Asbestos';
      case '347':
        return 'Gable Asbestos Shingle';
      case '348':
        return 'Hip Asbestos Shingle';
      case '349':
        return 'Mansard Asbestos Shingle';
      case '350':
        return 'Gambrel Asbestos Shingle';
      case '351':
        return 'Asbestos Shingle';
      case '352':
        return 'Asbestos/Wood';
      case '353':
        return 'Asbestos/Wood/Shingle';
      case '354':
        return 'Corrugated Asbestos';
      case '355':
        return 'Flat Roll';
      case '356':
        return 'Gable Roll';
      case '357':
        return 'Hip Roll';
      case '358':
        return 'Mansard Roll';
      case '359':
        return 'Shed Roll';
      case '360':
        return 'Gambrel/Roll';
      case '361':
        return 'Roll';
      case '362':
        return 'Tar Paper';
      case '363':
        return 'Roll Metal';
      case '364':
        return 'Roll Wood Joist';
      case '365':
        return 'Tar Paper/Metal';
      case '366':
        return 'Fiberglass/Plastic';
      case '367':
        return 'Clay Tile/Glazed Tile';
      case '368':
        return 'Clay Tile/Slate';
      case '369':
        return 'Clay/Concrete Tile';
      case '370':
        return 'Concrete Truss/Joist';
      default:
        return 'N/A';
    }
  }

  public getRoofConstruction(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Dormer';
      case '103':
        return 'Monitor';
      case '107':
        return 'Barn';
      case '108':
        return 'Canopy';
      case '109':
        return 'Frame';
      case '113':
        return 'Gambrel/Mansard';
      case '115':
        return 'Butterfly';
      case '116':
        return 'Complex/Custom';
      case '117':
        return 'Contemporary';
      case '118':
        return 'Pitched';
      case '119':
        return 'Arched';
      case '120':
        return 'A-Frame';
      case '121':
        return 'Bubble';
      case '124':
        return 'Barrel';
      case '125':
        return 'Pyramid';
      case '126':
        return 'Swiss Chalet/Alpine';
      case '127':
        return 'Other';
      case '197':
        return 'Flat';
      case '251':
        return 'Gable';
      case '253':
        return 'Gable/Hip';
      case '258':
        return 'Hip';
      case '265':
        return 'Mansard';
      case '274':
        return 'Shed';
      case '282':
        return 'Sawtooth';
      case '283':
        return 'Cathedral/Clerestory';
      case '289':
        return 'Gambrel';
      case '311':
        return 'Rigid Frm Bar Jt';
      case '312':
        return 'Steel Frm/truss';
      case '313':
        return 'Bowstring Truss';
      case '318':
        return 'Wood Truss';
      case '320':
        return 'Prestress Concrete';
      case '329':
        return 'Reinforced Concrete';
      case '345':
        return 'Geodesic/Dome';
      default:
        return 'N/A';
    }
  }

  public getStormShutter(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of Storm Shutters on the Main Structure';
      default:
        return 'N/A';
    }
  }

  public getOverheadDoor(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Overhead Door';
      default:
        return 'N/A';
    }
  }

  public getViewDescription(value: string) {
    switch (value) {
      case '0':
        return 'None';
      case '1':
        return 'Type Unknown';
      case '999':
        return 'Bypass';
      case 'A':
        return 'Freeway Proximity';
      case 'AAA':
        return 'Bluff';
      case 'B':
        return 'Waterfront-Beach (Ocean, River, or Lake)';
      case 'BBB':
        return 'Territory';
      case 'C':
        return 'Contamination Site';
      case 'D':
        return 'Cul-de-sa';
      case 'E':
        return 'Corner';
      case 'H':
        return 'Historical';
      case 'I':
        return 'School Proximity';
      case 'P':
        return 'Proximity To Airport';
      case 'R':
        return 'Proximity To Railroad';
      case 'S':
        return 'Major Street/Thoroughfare';
      case 'T':
        return 'High Traffic Area';
      case 'V01':
        return 'Type Unknown';
      case 'VAI':
        return 'Airport';
      case 'VAV':
        return 'Average';
      case 'VBA':
        return 'Bay';
      case 'VBE':
        return 'Best';
      case 'VBR':
        return 'Better';
      case 'VCA':
        return 'Canal';
      case 'VCI':
        return 'City';
      case 'VCL':
        return 'Creek/lake';
      case 'VCN':
        return 'Canyon';
      case 'VCP':
        return 'Conservation/Protected Area';
      case 'VCV':
        return 'Canyon/valley';
      case 'VEX':
        return 'Excellent';
      case 'VFA':
        return 'Fair';
      case 'VGC':
        return 'Golf Course';
      case 'VGO':
        return 'Good';
      case 'VGP':
        return 'Greenbelt/Park';
      case 'VGU':
        return 'Gulf';
      case 'VHM':
        return 'Hills/Mountains';
      case 'VHV':
        return 'Hill/Valley';
      case 'VIN':
        return 'Inferior';
      case 'VIT':
        return 'Inland Waterway';
      case 'VIW':
        return 'Intercoastal Waterway';
      case 'VLA':
        return 'Lake';
      case 'VLG':
        return 'Lagoon';
      case 'VLP':
        return 'Lake/Pond';
      case 'VMN':
        return 'Mountain';
      case 'VMO':
        return 'Mountain/Ocean';
      case 'VOB':
        return 'Obstructed';
      case 'VOC':
        return 'Ocean';
      case 'VPA':
        return 'Park';
      case 'VPD':
        return 'Pond';
      case 'VPG':
        return 'Parking';
      case 'VPI':
        return 'Prime';
      case 'VPL':
        return 'Pool';
      case 'VPM':
        return 'Premium';
      case 'VPR':
        return 'Poor';
      case 'VRC':
        return 'Recreational';
      case 'VRD':
        return 'Road';
      case 'VRR':
        return 'River';
      case 'VSD':
        return 'Standard';
      case 'VSN':
        return 'Suburban';
      case 'VSR':
        return 'Superior';
      case 'VST':
        return 'Shed';
      case 'VTY':
        return 'Typical';
      case 'VWD':
        return 'Woodland';
      case 'VWR':
        return 'Water';
      case 'Z':
        return 'Flood Plain/Flood Zone';
      default:
        return 'N/A';
    }
  }

  public getPorchCode(value: string) {
    switch (value) {
      case 'P00':
        return 'Porch';
      case 'P0Y':
        return 'Glass Porch';
      case 'P10':
        return 'Finished/Screened Porch';
      case 'PC0':
        return 'Covered Porch';
      case 'PE0':
        return 'Enclosed Porch';
      case 'PO0':
        return 'Open Porch';
      case 'PX0':
        return 'Enclosed/Chattahoochee Porch';
      default:
        return 'N/A';
    }
  }

  public getDeck(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Deck';
      default:
        return 'N/A';
    }
  }

  public getFeatureBalcony(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Balcony';
      default:
        return 'N/A';
    }
  }

  public getBreezeway(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Breezeway';
      default:
        return 'N/A';
    }
  }

  public getBathHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Bath House';
      default:
        return 'N/A';
    }
  }

  public getBoatAccess(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Boat Access/Ramp';
      default:
        return 'N/A';
    }
  }

  public getBoatHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Boat house';
      default:
        return 'N/A';
    }
  }

  public getCabin(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Cabin/Rustic Dwelling';
      default:
        return 'N/A';
    }
  }

  public getCanopy(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Canopy Area';
      default:
        return 'N/A';
    }
  }

  public getGazebo(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Gazebo';
      default:
        return 'N/A';
    }
  }

  public getGranary(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Grainery';
      default:
        return 'N/A';
    }
  }

  public getGreenHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Greenhouse';
      default:
        return 'N/A';
    }
  }

  public getGuestHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Guest House';
      default:
        return 'N/A';
    }
  }

  public getKennel(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Kennel/Animal Shelter';
      default:
        return 'N/A';
    }
  }

  public getLeanTo(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Lean-To';
      default:
        return 'N/A';
    }
  }

  public getLoadingPlatform(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Loading Platform/Dock';
      default:
        return 'N/A';
    }
  }

  public getMilkHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Milk House';
      default:
        return 'N/A';
    }
  }

  public getOutdoorKitchenFireplace(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Outdoor Kitchen/Brick Bar-B-Que';
      default:
        return 'N/A';
    }
  }

  public getPoolHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Pool House';
      default:
        return 'N/A';
    }
  }

  public getPoultryHouse(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Poultry House';
      default:
        return 'N/A';
    }
  }

  public getQuonset(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Quonset Structure/Hut';
      default:
        return 'N/A';
    }
  }

  public getSilo(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Silo';
      default:
        return 'N/A';
    }
  }

  public getStable(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Stables';
      default:
        return 'N/A';
    }
  }

  public getStorageBuilding(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Storage Building';
      default:
        return 'N/A';
    }
  }

  public getPoleStructure(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Pole Building';
      default:
        return 'N/A';
    }
  }

  public getShedCode(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case 'Y':
        return 'There is a shed on the property';
      case 'Numeric Value (Not 0)':
        return 'The number of sheds on the property.';
      default:
        return 'N/A';
    }
  }

  public getUtilityBuilding(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'The property has a utility (multi-purpose working building) building on it';
      default:
        return 'N/A';
    }
  }

  public getHVACCoolingDetail(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Refrigerator';
      case '102':
        return 'Evaporative';
      case '103':
        return 'Central';
      case '104':
        return 'Solar';
      case '105':
        return 'Refrigerator/evaporative';
      case '106':
        return 'Wall Unit';
      case '107':
        return 'Refrigeration Wall Unit';
      case '108':
        return 'Evaporative Wall Unit';
      case '109':
        return 'None';
      case '110':
        return 'Window A/C';
      case '111':
        return 'Window Evaporative';
      case '112':
        return 'Yes';
      case '113':
        return 'Central AC';
      case '114':
        return 'Chilled Water AC';
      case '115':
        return 'Central Partial AC';
      case '116':
        return 'Central AC & Unit';
      case '117':
        return 'Dual Unit AC';
      case '118':
        return 'Evaporative AC';
      case '119':
        return 'Fan Cooling AC';
      case '120':
        return 'Heat Pump AC';
      case '121':
        return 'Office Only AC';
      case '122':
        return 'Refrigeration AC';
      case '123':
        return 'Package AC';
      case '124':
        return 'Package Roof AC';
      case '125':
        return 'Partial AC';
      case '126':
        return 'Refrigeration/Evaporation AC';
      case '127':
        return 'Separate System AC';
      case '128':
        return 'Solar AC';
      case '129':
        return 'Split System AC';
      case '130':
        return 'Wall Unit AC';
      case '131':
        return 'Window Unit AC';
      case '132':
        return 'Wall/Window Unit AC';
      case '133':
        return 'No AC';
      case '134':
        return 'Bypass';
      case '135':
        return 'Type Unknown';
      case '136':
        return 'Evaporative Cooler';
      case '137':
        return 'Other';
      case '138':
        return 'Partial';
      case '139':
        return 'Chilled Water';
      case '140':
        return 'Yes';
      case '141':
        return 'Commercial AC';
      default:
        return 'N/A';
    }
  }

  public getHVACHeatingDetail(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Other';
      case '102':
        return 'Forced Air';
      case '103':
        return 'Baseboard';
      case '104':
        return 'Gravity';
      case '105':
        return 'Heat Pump';
      case '106':
        return 'Solar';
      case '107':
        return 'Ceiling Cable';
      case '108':
        return 'Central';
      case '109':
        return 'Floor/Wall Furnace';
      case '110':
        return 'Steam';
      case '111':
        return 'Hot Water';
      case '112':
        return 'Radiant';
      case '113':
        return 'Electric';
      case '114':
        return 'Fireplace';
      case '115':
        return 'Ceiling Furnace';
      case '116':
        return 'Stove';
      case '117':
        return 'Forced Air With Air Conditioning';
      case '118':
        return 'Floor Furnace';
      case '119':
        return 'Wall Gas';
      case '120':
        return 'Space';
      case '121':
        return 'Package';
      case '122':
        return 'Wood Furnace';
      case '219':
        return 'None';
      case '222':
        return 'Convection';
      case '226':
        return 'Partial';
      case '229':
        return 'Coal';
      case '231':
        return 'Gas';
      case '232':
        return 'Oil';
      case '236':
        return 'Yes';
      case '238':
        return 'Zone';
      case '239':
        return 'Forced Air';
      case '243':
        return 'Geo-Thermal';
      case '244':
        return 'Propane';
      default:
        return 'N/A';
    }
  }

  public getHVACHeatingFuel(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '30':
        return 'Coal';
      case '80':
        return 'Electric';
      case '90':
        return 'Gas';
      case '120':
        return 'Geo-Thermal';
      case '130':
        return 'Heat Pump';
      case '160':
        return 'Heat - Electric/Hot Water';
      case '300':
        return 'Liquefied Petroleum Gas';
      case '320':
        return 'Oil';
      case '340':
        return 'Other';
      case '350':
        return 'Propane';
      case '360':
        return 'Solar';
      case '370':
        return 'Solid';
      case '380':
        return 'Type Unknown';
      case '400':
        return 'Wood';
      default:
        return 'N/A';
    }
  }

  public getSewageUsage(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'None';
      case '102':
        return 'Type Unknown';
      case '103':
        return 'Bypass';
      case '104':
        return 'Cesspool';
      case '105':
        return 'Commercial';
      case '106':
        return 'Private';
      case '107':
        return 'Public';
      case '108':
        return 'Septic';
      case '109':
        return 'Storm';
      case '110':
        return 'Developed';
      case '111':
        return 'Sanitary';
      case '112':
        return 'Public/Septic';
      case '113':
        return 'Municipal';
      default:
        return 'N/A';
    }
  }

  public getWaterSource(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'None';
      case '102':
        return 'Type Unknown';
      case '103':
        return 'Bypass';
      case '104':
        return 'Cistern';
      case '105':
        return 'Commercial';
      case '106':
        return 'Private';
      case '107':
        return 'Public';
      case '108':
        return 'Public Well';
      case '109':
        return 'Spring/Creek';
      case '110':
        return 'Well';
      default:
        return 'N/A';
    }
  }

  public getMobileHomeHookup(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Property has a utility hookup (electtric and/or water) for a mobilere home or RV';
      default:
        return 'N/A';
    }
  }

  public getRVParking(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a RV Parking Space/Surface';
      default:
        return 'N/A';
    }
  }

  public getDrivewayMaterial(value: string) {
    switch (value) {
      case 'D':
        return 'Driveway';
      case 'DA':
        return 'Driveway Asphalt';
      case 'DB':
        return 'Driveway Bomanite';
      case 'DC':
        return 'Driveway Chat';
      case 'DK':
        return 'Driveway Brick';
      case 'DO':
        return 'Driveway Concrete';
      case 'DP':
        return 'Driveway Paver';
      case 'DR':
        return 'Driveway Gravel';
      case 'DT':
        return 'Driveway Tile';
      default:
        return 'N/A';
    }
  }

  public getTopographyCode(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '101':
        return 'Gentle Slope';
      case '102':
        return 'Level';
      case '103':
        return 'Rolling';
      case '104':
        return 'Steep Side';
      case '105':
        return 'Low/Wet';
      case '106':
        return 'Combo';
      case '107':
        return 'Broken';
      case '108':
        return 'Low';
      case '109':
        return 'High';
      case '110':
        return 'Wet';
      case '111':
        return 'Steep';
      case '112':
        return 'Steep/Low';
      case '113':
        return 'Steep/Wet';
      case '114':
        return 'Underwater';
      case '115':
        return 'Other';
      case '116':
        return 'Below Road/Slope';
      case '117':
        return 'Above Road/Slope';
      case '118':
        return 'Above Road/Steep';
      case '119':
        return 'Below Road/Steep';
      case '120':
        return 'Partially Developed';
      case '121':
        return 'Needs Development';
      case '122':
        return 'Rocky';
      case '123':
        return 'Marsh';
      case '124':
        return 'Mountain';
      case '125':
        return 'Wooded';
      case '126':
        return 'Brushy';
      case '127':
        return 'Separate System AC';
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'F':
        return 'Unknown';
      default:
        return 'N/A';
    }
  }

  public getFenceCode(value: string) {
    switch (value) {
      case 'F':
        return 'Fence';
      case 'FB':
        return 'Barbed Wire Fence';
      case 'FC':
        return 'Chain Link Fence';
      case 'FH':
        return 'Hurricane Fence';
      case 'FI':
        return 'Wrought Iron Or Iron Fence';
      case 'FK':
        return 'Brick Fence/Wall';
      case 'FL':
        return 'Concrete Block Fence/Wall';
      case 'FM':
        return 'Metal Fence';
      case 'FP':
        return 'Picket Fence';
      case 'FR':
        return 'Rail Fence';
      case 'FS':
        return 'Stockade Fence';
      case 'FT':
        return 'Stone Fence/Wall';
      case 'FV':
        return 'Vinyl Fence';
      case 'FW':
        return 'Wood Fence';
      case 'FX':
        return 'Combo';
      case 'FY':
        return 'GRAPESTAKE';
      case 'FZ':
        return 'SOLID BOARD';
      case 'XX':
        return 'OTHER';
      default:
        return 'N/A';
    }
  }

  public getCourtyard(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Courtyard';
      default:
        return 'N/A';
    }
  }

  public getArborPergola(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Pergola';
      default:
        return 'N/A';
    }
  }

  public getSprinklers(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Installed Lawn/Plantings Watering System';
      default:
        return 'N/A';
    }
  }

  public getGolfCourseGreen(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Practice Green';
      default:
        return 'N/A';
    }
  }

  public getTennisCourt(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Tennis Court';
      default:
        return 'N/A';
    }
  }

  public getSportsCourt(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Sport/Basketball Court';
      default:
        return 'N/A';
    }
  }

  public getArena(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of an Equestrian Arena';
      default:
        return 'N/A';
    }
  }

  public getWaterFeature(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Water Feature Such as a Fountain';
      default:
        return 'N/A';
    }
  }

  public getPond(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Pond, Including a Koi Pond';
      default:
        return 'N/A';
    }
  }

  public getBoatLift(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '1':
        return 'Indicates the Presence of a Boat Lift';
      default:
        return 'N/A';
    }
  }

  public get getEmptyResponse() {
    return {
      Results: 'YS02,YS07,YC01,GS05',
      Parcel: {
        FIPSCode: '',
        County: '',
        UnformattedAPN: '',
        FormattedAPN: '',
        AlternateAPN: '',
        APNYearChange: '',
        PreviousAPN: '',
        AccountNumber: '',
        YearAdded: '',
        MapBook: '',
        MapPage: '',
        TaxJurisdiction: '',
        CBSAName: '',
        CBSACode: '',
        MSAName: '',
        MSACode: '',
        MetropolitanDivision: '',
        MinorCivilDivisionCode: '',
        NeighborhoodCode: '',
        CensusTract: '',
        CensusBlockGrp: '',
        CensusBlock: '',
      },
      Legal: {
        LegalDescription: '',
        Range: '',
        Township: '',
        Section: '',
        Quarter: '',
        QuarterQuarter: '',
        Subdivision: '',
        Phase: '',
        TractNumber: '',
        Block1: '',
        Block2: '',
        LotNumber1: '',
        LotNumber2: '',
        LotNumber3: '',
        Unit: '',
      },
      PropertyAddress: {
        Address: '',
        City: '',
        State: '',
        Zip: '',
        CarrierRoute: '',
        AddressKey: '',
        MAK: '',
        BaseMAK: '',
        Latitude: '',
        Longitude: '',
        PrivacyInfo: '',
      },
      ParsedPropertyAddress: {
        Range: '',
        PreDirectional: '',
        StreetName: '',
        Suffix: '',
        PostDirectional: '',
        SuiteName: '',
        SuiteRange: '',
      },
      PrimaryOwner: {
        Name1Full: '',
        Name1First: '',
        Name1Middle: '',
        Name1Last: '',
        Name1Suffix: '',
        TrustFlag: '',
        CompanyFlag: '',
        Name2Full: '',
        Name2First: '',
        Name2Middle: '',
        Name2Last: '',
        Name2Suffix: '',
        Type: '',
        VestingType: '',
      },
      SecondaryOwner: {
        Name3Full: '',
        Name3First: '',
        Name3Middle: '',
        Name3Last: '',
        Name3Suffix: '',
        Name4Full: '',
        Name4First: '',
        Name4Middle: '',
        Name4Last: '',
        Name4Suffix: '',
        Type: '',
      },
      OwnerAddress: {
        Address: '',
        City: '',
        State: '',
        Zip: '',
        CarrierRoute: '',
        MAK: '',
        BaseMAK: '',
        FormatInfo: '',
        PrivacyInfo: '',
        OwnerOccupied: '',
      },
      LastDeedOwnerInfo: {
        Name1Full: '',
        Name1First: '',
        Name1Middle: '',
        Name1Last: '',
        Name1Suffix: '',
        Name2Full: '',
        Name2First: '',
        Name2Middle: '',
        Name2Last: '',
        Name2Suffix: '',
        Name3Full: '',
        Name3First: '',
        Name3Middle: '',
        Name3Last: '',
        Name3Suffix: '',
        Name4Full: '',
        Name4First: '',
        Name4Middle: '',
        Name4Last: '',
        Name4Suffix: '',
      },
      CurrentDeed: {
        MortgageAmount: '',
        MortgageDate: '',
        MortgageLoanTypeCode: '',
        MortgageTermCode: '',
        MortgageTerm: '',
        MortgageDueDate: '',
        LenderCode: '',
        LenderName: '',
        SecondMortgageAmount: '',
        SecondMortgageLoanTypeCode: '',
      },
      Tax: {
        YearAssessed: '',
        AssessedValueTotal: '',
        AssessedValueImprovements: '',
        AssessedValueLand: '',
        AssessedImprovementsPerc: '',
        PreviousAssessedValue: '',
        MarketValueYear: '',
        MarketValueTotal: '',
        MarketValueImprovements: '',
        MarketValueLand: '',
        MarketImprovementsPerc: '',
        TaxFiscalYear: '',
        TaxRateArea: '',
        TaxBilledAmount: '',
        TaxDelinquentYear: '',
        LastTaxRollUpdate: '',
        AssrLastUpdated: '',
        TaxExemptionHomeowner: '',
        TaxExemptionDisabled: '',
        TaxExemptionSenior: '',
        TaxExemptionVeteran: '',
        TaxExemptionWidow: '',
        TaxExemptionAdditional: '1',
      },
      PropertyUseInfo: {
        YearBuilt: '',
        YearBuiltEffective: '',
        ZonedCodeLocal: '',
        PropertyUseMuni: '',
        PropertyUseGroup: '',
        PropertyUseStandardized: '',
      },
      SaleInfo: {
        AssessorLastSaleDate: '',
        AssessorLastSaleAmount: '',
        AssessorPriorSaleDate: '',
        AssessorPriorSaleAmount: '',
        LastOwnershipTransferDate: '',
        LastOwnershipTransferDocumentNumber: '',
        LastOwnershipTransferTxID: '',
        DeedLastSaleDocumentBook: '',
        DeedLastSaleDocumentPage: '',
        DeedLastDocumentNumber: '',
        DeedLastSaleDate: '',
        DeedLastSalePrice: '',
        DeedLastSaleTxID: '',
      },
      PropertySize: {
        AreaBuilding: '',
        AreaBuildingDefinitionCode: '',
        AreaGross: '',
        Area1stFloor: '',
        Area2ndFloor: '',
        AreaUpperFloors: '',
        AreaLotAcres: '',
        AreaLotSF: '',
        LotDepth: '',
        LotWidth: '',
        AtticArea: '',
        AtticFlag: '',
        BasementArea: '',
        BasementAreaFinished: '',
        BasementAreaUnfinished: '',
        ParkingGarage: '',
        ParkingGarageArea: '',
        ParkingCarport: '',
        ParkingCarportArea: '',
      },
      Pool: {
        Pool: '',
        PoolArea: '',
        SaunaFlag: '',
      },
      IntStructInfo: {
        Foundation: '',
        Construction: '',
        InteriorStructure: '',
        PlumbingFixturesCount: '',
        ConstructionFireResistanceClass: '',
        SafetyFireSprinklersFlag: '',
        FlooringMaterialPrimary: '',
      },
      IntRoomInfo: {
        BathCount: '',
        BathPartialCount: '',
        BedroomsCount: '',
        RoomsCount: '',
        StoriesCount: '',
        UnitsCount: '',
        BonusRoomFlag: '',
        BreakfastNookFlag: '',
        CellarFlag: '',
        CellarWineFlag: '',
        ExcerciseFlag: '',
        FamilyCode: '',
        GameFlag: '',
        GreatFlag: '',
        HobbyFlag: '',
        LaundryFlag: '',
        MediaFlag: '',
        MudFlag: '',
        OfficeArea: '',
        OfficeFlag: '',
        SafeRoomFlag: '',
        SittingFlag: '',
        StormShelter: '',
        StudyFlag: '',
        SunroomFlag: '',
        UtilityArea: '',
        UtilityCode: '',
      },
      IntAmenities: {
        Fireplace: '',
        FireplaceCount: '',
        AccessabilityElevatorFlag: '',
        AccessabilityHandicapFlag: '',
        EscalatorFlag: '',
        CentralVacuumFlag: '',
        IntercomFlag: '',
        SoundSystemFlag: '',
        WetBarFlag: '',
        SecurityAlarmFlag: '',
      },
      ExtStructInfo: {
        StructureStyle: '',
        Exterior1Code: '',
        RoofMaterial: '',
        RoofConstruction: '',
        StormShutterFlag: '',
        OverheadDoorFlag: '',
      },
      ExtAmenities: {
        ViewDescription: '',
        PorchCode: '',
        PorchArea: '',
        PatioArea: '',
        DeckFlag: '',
        DeckArea: '',
        FeatureBalconyFlag: '',
        BalconyArea: '',
        BreezewayFlag: '',
      },
      ExtBuildings: {
        BuildingsCount: '',
        BathHouseArea: '',
        BathHouseFlag: '',
        BoatAccessFlag: '',
        BoatHouseArea: '',
        BoatHouseFlag: '',
        CabinArea: '',
        CabinFlag: '',
        CanopyArea: '',
        CanopyFlag: '',
        GazeboArea: '',
        GazeboFlag: '',
        GranaryArea: '',
        GranaryFlag: '',
        GreenHouseArea: '',
        GreenHouseFlag: '',
        GuestHouseArea: '',
        GuestHouseFlag: '',
        KennelArea: '',
        KennelFlag: '',
        LeanToArea: '',
        LeanToFlag: '',
        LoadingPlatformArea: '',
        LoadingPlatformFlag: '',
        MilkHouseArea: '',
        MilkHouseFlag: '',
        OutdoorKitchenFireplaceFlag: '',
        PoolHouseArea: '',
        PoolHouseFlag: '',
        PoultryHouseArea: '',
        PoultryHouseFlag: '',
        QuonsetArea: '',
        QuonsetFlag: '',
        ShedArea: '',
        ShedCode: '',
        SiloArea: '',
        SiloFlag: '',
        StableArea: '',
        StableFlag: '',
        StorageBuildingArea: '',
        StorageBuildingFlag: '',
        UtilityBuildingArea: '',
        UtilityBuildingFlag: '',
        PoleStructureArea: '',
        PoleStructureFlag: '',
      },
      Utilities: {
        HVACCoolingDetail: '',
        HVACHeatingDetail: '',
        HVACHeatingFuel: '',
        SewageUsage: '',
        WaterSource: '',
        MobileHomeHookupFlag: '',
      },
      Parking: {
        RVParkingFlag: '',
        ParkingSpaceCount: '',
        DrivewayArea: '',
        DrivewayMaterial: '',
      },
      YardGardenInfo: {
        TopographyCode: '',
        FenceCode: '',
        FenceArea: '',
        CourtyardFlag: '',
        CourtyardArea: '',
        ArborPergolaFlag: '',
        SprinklersFlag: '',
        GolfCourseGreenFlag: '',
        TennisCourtFlag: '',
        SportsCourtFlag: '',
        ArenaFlag: '',
        WaterFeatureFlag: '',
        PondFlag: '',
        BoatLiftFlag: '',
      },
      EstimatedValue: {
        EstimatedValue: '',
        EstimatedMinValue: '',
        EstimatedMaxValue: '',
        ConfidenceScore: '',
        ValuationDate: '',
      },
      Shape: {},
      AssociatedParcels: [],
    };
  }

  public get getHistoricalEmptyRes() {
    return {
      Version: '',
      Results: '',
      TotalRecords: 0,
      Records: [
        {
          DocInfo: {
            TypeCode: '',
            NumberFormatted: '',
            NumberLegacy: '',
            InstrumentNumber: '',
            Book: '',
            Page: '',
            InstrumentDate: '',
            RecordingDate: '',
          },
          TxDefInfo: {
            TransactionType: '',
            TransferInfoPurchaseTypeCode: '',
            ForclosureAuctionSale: '',
            TransferInfoDistressCircumstanceCode: '',
            QuitclaimFlag: '',
            TransferInfoMultiParcelFlag: '',
            ArmsLengthFlag: '',
            PartialInterest: '',
          },
          TxAmtInfo: {
            TransferAmount: '',
            TransferAmountInfoAccuracy: '',
            TransferTaxTotal: '',
            TransferTaxCounty: '',
          },
          PropertyAddress: {
            Address: '',
            City: '',
            State: '',
            Zip: '',
            MAK: '',
            BaseMAK: '',
          },
          PrimaryGrantor: {
            Name1Full: '',
            Name1First: '',
            Name1Middle: '',
            Name1Last: '',
            Name1Suffix: '',
            Name1ClassType: '',
            Name1LegalType: '',
            Name2Full: '',
            Name2First: '',
            Name2Middle: '',
            Name2Last: '',
            Name2Suffix: '',
            Name2ClassType: '',
            Name2LegalType: '',
          },
          SecondaryGrantor: {
            Name3Full: '',
            Name3First: '',
            Name3Middle: '',
            Name3Last: '',
            Name3Suffix: '',
            Name3ClassType: '',
            Name4Full: '',
            Name4First: '',
            Name4Middle: '',
            Name4Last: '',
            Name4Suffix: '',
            Name4ClassType: '',
          },
          PrimaryGrantee: {
            Name1Full: '',
            Name1First: '',
            Name1Middle: '',
            Name1Last: '',
            Name1Suffix: '',
            Name1ClassType: '',
            Name1LegalType: '',
            Name2Full: '',
            Name2First: '',
            Name2Middle: '',
            Name2Last: '',
            Name2Suffix: '',
            Name2ClassType: '',
          },
          SecondaryGrantee: {
            Name3Full: '',
            Name3First: '',
            Name3Middle: '',
            Name3Last: '',
            Name3Suffix: '',
            Name3ClassType: '',
            Name4Full: '',
            Name4First: '',
            Name4Middle: '',
            Name4Last: '',
            Name4Suffix: '',
            Name4ClassType: '',
          },
          TitleCompInfo: {
            StandardizedCode: '',
            StandardizedName: '',
            TaxCompanyRaw: '',
          },
          Mortgage1: {
            DocNumberFormatted: '',
            DocNumberLegacy: '',
            InstrumentNumber: '',
            Book: '',
            Page: '',
            RecordingDate: '',
            Type: '',
            Amount: '',
            LenderCode: '',
            LenderFullName: '',
            LenderFirstName: '',
            LenderLastName: '',
            LenderAddress: '',
            LenderCity: '',
            LenderState: '',
            LenderZip: '',
            LenderType: 'C',
            IsLenderSeller: '',
            Term: '',
            TermType: '',
            TermDate: '',
            PrepaymentPenaltyFlag: '',
            PrepaymentTerm: '',
            InterestRateType: '',
            InterestRate: '',
            InterestTypeInitial: '',
            FixedStepConvRate: '',
            AdjustableRateRiderFlag: '',
            InterestTypeChangeDate: '',
            MinInterestRateFirstChange: '',
            MaxInterestRateFirstChange: '',
            InterestChangeFreq: '',
            InterestMargin: '',
            InterestIndex: '',
            InterestRateMax: '',
            AdjustableRateIndex: '',
            InterestOnlyFlag: '',
            InterestOnlyPeriod: '',
          },
          Mortgage2: {
            DocNumberFormatted: '',
            DocNumberLegacy: '',
            InstrumentNumber: '',
            Book: '',
            Page: '',
            RecordingDate: '',
            Type: '',
            Amount: '',
            LenderCode: '',
            LenderFullName: '',
            LenderFirstName: '',
            LenderLastName: '',
            LenderAddress: '',
            LenderCity: '',
            LenderState: '',
            LenderZip: '',
            LenderType: '',
            IsLenderSeller: '',
            Term: '',
            TermType: '',
            TermDate: '',
            PrepaymentPenaltyFlag: '',
            PrepaymentTerm: '',
            InterestRateType: '',
            InterestRate: '',
            InterestTypeInitial: '',
            FixedStepConvRate: '',
            AdjustableRateRiderFlag: '',
            InterestTypeChangeDate: '',
            MinInterestRateFirstChange: '',
            MaxInterestRateFirstChange: '',
            InterestChangeFreq: '',
            InterestMargin: '',
            InterestIndex: '',
            InterestRateMax: '',
            AdjustableRateIndex: '',
            InterestOnlyFlag: '',
            InterestOnlyPeriod: '',
          },
          Valuation: {
            EstDownPayment: '',
            EstLTV: '',
          },
        },
      ],
    };
  }

  public getDeedType(value: string) {
    switch (value) {
      case 'DEAD':
        return 'Affidavit of Death';
      case 'DTAA':
        return 'Assignment of Sub Agreement of Sale';
      case 'DTAB':
        return 'Assignment of Sub Lease';
      case 'DTAC':
        return 'Assignment of Commercial Lease';
      case 'DTAD':
        return 'Administrators Deed';
      case 'DTAF':
        return 'Affidavit';
      case 'DTAG':
        return 'Agreement of Sale';
      case 'DTAH':
        return 'Assessor Sales History';
      case 'DTAR':
        return 'Assignment of Agreement of Sale';
      case 'DTAS':
        return 'Assignment of Deed';
      case 'DTAT':
        return 'Affidavit of Trust or Trust Aggrement';
      case 'DTAU':
        return 'Assignment of Sub Commercial Lease';
      case 'DTBD':
        return 'Beneficiary Deed';
      case 'DTBS':
        return 'Bargain and Sale Deed';
      case 'DTCA':
        return 'Commissioners Assignment of Lease';
      case 'DTCD':
        return 'Condominium Deed';
      case 'DTCH':
        return 'Cash Sale Deed';
      case 'DTCL':
        return 'Commercial Lease';
      case 'DTCM':
        return 'Commissioners Deed';
      case 'DTCN':
        return 'Cancellation of Agreement of Sale';
      case 'DTCO':
        return 'Conservators Deed';
      case 'DTCP':
        return 'Corporation Deed';
      case 'DTCR':
        return 'Correction Deed';
      case 'DTCS':
        return 'Contract Sale';
      case 'DTCT':
        return 'Certificate of Transfer';
      case 'DTDB':
        return 'Deed Of Distribution';
      case 'DTDC':
        return 'Declaration';
      case 'DTDD':
        return 'Transfer on Death Deed';
      case 'DTDE':
        return 'Deed';
      case 'DTDG':
        return 'Deed of Guardian';
      case 'DTDL':
        return 'Deed in Lieu of Foreclosure';
      case 'DTDS':
        return 'Distress Sale';
      case 'DTDT':
        return 'Affidavit of Death';
      case 'DTEC':
        return 'Exchange';
      case 'DTEX':
        return 'Executors Deed';
      case 'DTFC':
        return 'Foreclosure';
      case 'DTFD':
        return 'Fiduciary Deed';
      case 'DTGD':
        return 'Grant Deed';
      case 'DTGF':
        return 'Gift Deed';
      case 'DTGR':
        return 'Ground Lease';
      case 'DTID':
        return 'Individual Deed';
      case 'DTIT':
        return 'Intrafamily Transfer and Dissolution';
      case 'DTJT':
        return 'Joint Tenancy Deed';
      case 'DTLA':
        return 'Legal Action/Court Order';
      case 'DTLC':
        return 'Leasehold Conv. With Agreem. Of Sale (Fee Purchase)';
      case 'DTLD':
        return 'Land Contract';
      case 'DTLE':
        return 'Lease';
      case 'DTLH':
        return 'Assignment of Lease (Leasehold Sale)';
      case 'DTLS':
        return 'Leasehold Conv. w/An Agreement Of Sale';
      case 'DTLT':
        return 'Land Court';
      case 'DTLW':
        return 'Limited Warranty Deed';
      case 'DTMD':
        return 'Special Master Deed';
      case 'DTOT':
        return 'Other';
      case 'DTPA':
        return 'Public Action';
      case 'DTPD':
        return 'Partnership Deed';
      case 'DTPR':
        return 'Personal Representative Deed';
      case 'DTQC':
        return 'Quit Claim Deed';
      case 'DTRA':
        return 'Release/Satis. Of Agrem. Of Sale (Fee Property)';
      case 'DTRC':
        return 'Receivers Deed';
      case 'DTRD':
        return 'Redemption Deed';
      case 'DTRF':
        return "Referee's Deed - Used To Transfer Property Pursuant To A Foreclosure Sale In New York Counties";
      case 'DTRL':
        return 'Release/Satis. Of Agrem. Of Sale (Leasehold)';
      case 'DTRR':
        return 'Re-recorded Document';
      case 'DTRS':
        return 'REO Sale (REO Out)';
      case 'DTSA':
        return 'Sub Agreement of Sale';
      case 'DTSC':
        return 'Sub Commercial Lease';
      case 'DTSD':
        return 'Sheriffs Deed';
      case 'DTSL':
        return 'Sub Lease';
      case 'DTST':
        return 'Affidavit Death of Trustee/Successor Trustee';
      case 'DTSV':
        return 'Survivorship Deed';
      case 'DTSW':
        return 'Special Warranty Deed';
      case 'DTTD':
        return 'Trustees Deed';
      case 'DTVL':
        return 'Venders Lien';
      case 'DTWD':
        return 'Warranty Deed';
      default:
        return 'Unknown or Not Provided';
    }
  }

  public getTransactionType(value: string) {
    switch (value) {
      case '0':
        return 'Unknown';
      case '21':
        return 'Resale';
      case '43':
        return 'New Construction';
      case '109':
        return 'Nominal - Non/Arms-Length Sale';
      default:
        return 'Unknown or Not Provided';
    }
  }

  public getLegalType(value: string) {
    switch (value) {
      case 'AB':
        return 'Alternate Beneficiary';
      case 'AC':
        return 'Guardian/Custodian';
      case 'AD':
        return 'Administrator';
      case 'AE':
        return 'Assignee (Buyer/Borrower only)';
      case 'AF':
        return 'Name Derived from Affidavit';
      case 'AG':
        return 'Agent';
      case 'AK':
        return 'Also known as (A/K/A)';
      case 'AL':
        return 'All as/Undefined';
      case 'AO':
        return 'Alter Ego';
      case 'AR':
        return 'Assignor (Seller only)';
      case 'BE':
        return 'Beneficiary / Creditor - When Doc Type BD, this buyer ID code identifies the person designated to acquire title upon death of Grantor.';
      case 'BU':
        return 'Builder/Developer';
      case 'CE':
        return 'Conservatee';
      case 'CN':
        return 'Corporation';
      case 'CO':
        return 'Company or Corporation';
      case 'CR':
        return 'Conservator';
      case 'DB':
        return 'Doing business as (DBA)';
      case 'DC':
        return 'Deceased';
      case 'DF':
        return 'Defendant';
      case 'DP':
        return 'Domestic Partner';
      case 'DR':
        return 'Divorced not Remarried';
      case 'DS':
        return 'Disabled';
      case 'DV':
        return 'Divorced';
      case 'DW':
        return 'Dower Clause';
      case 'EA':
        return 'Et al (and others)';
      case 'ES':
        return 'Estate';
      case 'EX':
        return 'Executor';
      case 'FK':
        return 'Formerly known as (F/K/A)';
      case 'FL':
        return 'Family Living Trust';
      case 'FM':
        return 'Family Trust';
      case 'FR':
        return 'Family Revocable Trust';
      case 'GN':
        return 'General Partnership';
      case 'GP':
        return 'General Partner';
      case 'GV':
        return 'Government';
      case 'HH':
        return 'Her Husband';
      case 'HU':
        return 'Husband and Husband';
      case 'HW':
        return 'Husband and Wife';
      case 'ID':
        return 'Individual(s)';
      case 'IL':
        return 'Irrevocable Living Trust';
      case 'IN':
        return 'Incompetent';
      case 'IR':
        return 'Irrevocable Trust';
      case 'L2':
        return 'Seller Is Owner On Current Assessment File';
      case 'LC':
        return 'Limited Liability Company';
      case 'LL':
        return 'Limited Liability Partnership';
      case 'LP':
        return 'Limited Partner';
      case 'LS':
        return 'Limited Partnership';
      case 'LT':
        return 'Life Tenant (Holds A Life Estate Interest Only)';
      case 'LV':
        return 'Living Trust';
      case 'LW':
        return 'Last Will and Testament';
      case 'MC':
        return 'Married Couple';
      case 'ME':
        return 'Member';
      case 'MI':
        return 'Minor, Ward or Client (Represented by Trustee)';
      case 'MM':
        return 'Married Man As His Sole And Separate Property';
      case 'MN':
        return 'Managing Member';
      case 'MP':
        return 'Married Person';
      case 'MW':
        return 'Married Women As Her Sole And Separate Property';
      case 'NK':
        return 'Now Known as';
      case 'NM':
        return 'Never Married Person';
      case 'NP':
        return 'Not Provided (Name Blurred Or Missing From Document)';
      case 'NV':
        return 'Non-Vested Spouse';
      case 'PA':
        return 'Partnership';
      case 'PF':
        return 'Plaintiff';
      case 'PR':
        return 'Personal Representative (Attorney in Fact/Power of Attorney)';
      case 'PT':
        return 'Partner';
      case 'RC':
        return 'Receiver';
      case 'RL':
        return 'Revocable Living Trust';
      case 'RT':
        return 'Revocable Trust';
      case 'SE':
        return 'surviving Tenant by the Entirety';
      case 'SI':
        return 'Successor in Interest';
      case 'SJ':
        return 'Surviving Joint Tenant';
      case 'SL':
        return 'Sole Proprietorship';
      case 'SM':
        return 'Single Man';
      case 'SO':
        return 'Sole Member';
      case 'SP':
        return 'Single Person or Individual';
      case 'SS':
        return 'Surviving Spouse';
      case 'ST':
        return 'Successor Trustee (LA County only)';
      case 'SW':
        return 'Single Woman';
      case 'SX':
        return 'Separated';
      case 'TR':
        return 'Trustee';
      case 'TS':
        return "Trustor/Debtor (Borrower in Default/Foreclosure on Trustee's Deed)";
      case 'TT':
        return 'Trust';
      case 'UI':
        return 'Unknown';
      case 'UM':
        return 'Unmarried Man';
      case 'UN':
        return 'Unmarried';
      case 'US':
        return 'United States';
      case 'UW':
        return 'Unmarried Woman';
      case 'WA':
        return 'Who Acquired Title As';
      case 'WD':
        return 'Widow or Widower';
      case 'WH':
        return 'His Wife';
      case 'WW':
        return 'Wife and Wife';
      default:
        return 'Unknown or Not Provided';
    }
  }

  public getArmsLengthFlag(value: string) {
    switch (value) {
      case '0':
        return 'Non Purchase or Unknown';
      case '1':
        return 'Arms Length Transaction';
      case '2':
        return 'Not at Arms-Length';
      case '3':
        return 'Not at Arms - Length - Conveyance to Grantors Trust';
      case '4':
        return 'Not at Arms-Length - Interfamily Transfer';
      case '5':
        return 'Not at Arms-Length - Dissolution';
      default:
        return 'Unknown or Not Provided';
    }
  }
}
