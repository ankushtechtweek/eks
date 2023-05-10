export class UserResponseModel {
    data!: Data
}

export class Data {
    result!: Result
}

export class Result {
    client!: Client
    role!: Role
    clientId!: number
    createdDate!: string
    email!: string
    firstName!: string
    lastName!: string
    middleName!: string
    password!: string
    phone!: string
    isActive!: boolean
    isDemo!: boolean
    roleId!: number
    userId!: number
    userName!: string
}

export class Client {
    address!: string
    addressId!: number
    clientId!: number
    clientType!: string
    clientTypeId!: number
    contactPerson!: string
    contactPersonId!: number
    createdDate!: string
    isActive!: boolean
    name!: string
}

export class Role {
    isActive!: boolean
    name!: string
    roleCode!: number
    roleId!: number
}

