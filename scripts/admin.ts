import { BaseViewModel, ViewModel, TextMagicElement, Fetch, GetRequest, TableMagicElement } from "@boudev/magicui/lib/esm/index.js";

const data =
        {  
            "id": 1,
            "num_properties": 10,
            "num_tenants": 2,
            "num_units": 30,
            "empty_units": 10,
            "empty_units_value": 20000000,
            "late_rent" : 200000,
            "created_at": "2022-01-01 12:00:00",
            "updated_at": "2022-01-02 14:00:00",
            "tenants": [
                {
                    "tenant_id": 1,
                    "name": "John Doe",
                    "email": "john.doe@example.com",
                    "phone": "123-456-7890",
                    "address": "123 Main St",
                    "created_at": "2022-01-01 12:00:00",
                    "updated_at": "2022-01-02 14:00:00"
                },
                {
                    "tenant_id": 2,
                    "name": "Jane Doe",
                    "email": "jane.doe@example.com",
                    "phone": "987-654-3210",
                    "address": "456 Elm St",
                    "created_at": "2022-01-02 12:00:00",
                    "updated_at": "2022-01-03 14:00:00"
                },
    
            ],
            "outsanding_rent": [
                {
                    "id": 1,
                    "unit_id": 1,
                    "due_date": "2022-01-15",
                    "amount": 100,
                    "created_at": "2022-01-01 12:00:00",
                    "updated_at": "2022-01-02 14:00:00"
                },
                {
                    "id": 2,
                    "unit_id": 2,
                    "due_date": "2022-01-10",
                    "amount": 200,
                    "created_at": "2022-01-02 12:00:00",
                    "updated_at": "2022-01-03 14:00:00"
                },
                {
                    "id": 3,
                    "unit_id": 3,
                    "due_date": "2022-01-20",
                    "amount": 300,
                    "created_at": "2022-01-03 12:00:00",
                    "updated_at": "2022-01-04 14:00:00"
                },
                {
                    "id": 4,
                    "unit_id": 4,
                    "due_date": "2022-01-25",
                    "amount": 400,
                    "created_at": "2022-01-04 12:00:00",
                    "updated_at": "2022-01-05 14:00:00"
                }
            ],
            "incoming_rent": [
                {
                    "id": 1,
                    "unit_id": 1,
                    "due_date": "2022-01-10",
                    "amount": 100,
                    "created_at": "2022-01-01 12:00:00",
                    "updated_at": "2022-01-02 14:00:00"
                },
                {
                    "id": 2,
                    "unit_id": 2,
                    "due_date": "2022-01-15",
                    "amount": 200,
                    "created_at": "2022-01-02 12:00:00",
                    "updated_at": "2022-01-03 14:00:00"
                },
                {
                    "id": 3,
                    "unit_id": 3,
                    "due_date": "2022-01-25",
                    "amount": 300,
                    "created_at": "2022-01-03 12:00:00",
                    "updated_at": "2022-01-04 14:00:00"
                }
            ],
            "rent_paid": [
                {
                    "id": 1,
                    "unit_id": 1,
                    "amount": 100,
                    "created_at": "2022-01-01 12:00:00",
                    "updated_at": "2022-01-02 14:00:00"
                },
                {
                    "id": 2,
                    "unit_id": 2,
                    "amount": 200,
                    "created_at": "2022-01-02 12:00:00",
                    "updated_at": "2022-01-03 14:00:00"
                }
            ],
            "units":[
                {
                    "id": 1,
                    "address": "123 Main St",
                    "type": "Residential",
                    "status": "Active",
                    "rent_amount": 1000,
                    "created_at": "2022-01-01 12:00:00",
                    "updated_at": "2022-01-02 14:00:00",
                    "feedback": "Good",
                    "tenants": [
                        {
                            "id": 1,
                            "name": "John Doe",
                            "email": "john.doe@example.com",
                            "phone": "123-456-7890",
                            "address": "123 Main St",
                            "created_at": "2022-01-01 12:00:00",
                            "updated_at": "2022-01-0"
                        }
                    ]
                },
                {
                    "id": 2,
                    "address": "456 Elm St",
                    "type": "Commercial",
                    "status": "Active",
                    "rent_amount": 1500,
                    "created_at": "2022-01-02 12:00:00",
                    "updated_at": "2022-01-03 14:00:00",
                    "feedback": "Excellent",
                    "tenants": [
                        {
                            "id": 2,
                            "name": "Jane Doe",
                            "email": "jane.doe@example.com",
                            "phone": "987-654-3210",
                            "address": "456 Elm St",
                            "created_at": "2022-01-02 12:00:0",
                        }
                    ]
                }
            ]
        }


new class viewModel extends BaseViewModel {

    
ID = new TextMagicElement("id", "tenant_id")
NumProperties = new TextMagicElement("num_properties")
NumTenants = new TextMagicElement("num_tenants")
NumUnits = new TextMagicElement("num_units")
EmptyUnits = new TextMagicElement("empty_units")
EmptyUnitsValue =new  TextMagicElement("empty_units_value")
LateRent = new TextMagicElement("late_rent")
CreatedAt = new TextMagicElement("created_at")
UpdatedAt = new TextMagicElement("updated_at")

TenantsTable = new TableMagicElement("tenants")
        .ShowColumns("label:id,name,email,phone,address,created_at, updated_at")
        .AddClass("table table-hover table-bordered table-striped mt-3 min-w-full divide-y divide-gray-200 dark:divide-neutral-700")
        .SetCellLink("address", "/properties/property.html?id=[id]")
        // .SetTransformer(this.listTransformer)
        // .SetRowEvent("dblclick", this.showPropertyDetails)
        // .AddRowAction("delete", "id", this.deleteProperty);

OutstandingRentTable = new TableMagicElement("outsanding_rent")
IncomingRentTable = new TableMagicElement("incoming_rent")
RentPaidTable = new TableMagicElement("rent_paid")
UnitsTable = new TableMagicElement("units")


TenantID =  new TextMagicElement("id")
TenantName = new  TextMagicElement("name")
TenantEmail =  new TextMagicElement("email")
TenantPhone =  new TextMagicElement("phone")
TenantAddress =  new TextMagicElement("address")
TenantCreatedAt =  new TextMagicElement("created_at")
TenantUpdatedAt = new  TextMagicElement("updated_at")


OutstandingRentID = new  TextMagicElement("id")
OutstandingRentUnitID = new  TextMagicElement("unit_id")
OutstandingRentDueDate =  new TextMagicElement("due_date")
OutstandingRentAmount =  new TextMagicElement("amount")
OutstandingRentCreatedAt =  new TextMagicElement("created_at")
OutstandingRentUpdatedAt =  new TextMagicElement("updated_at")


IncomingRentID = new  TextMagicElement("id")
IncomingRentUnitID =  new TextMagicElement("unit_id")
IncomingRentDueDate =  new TextMagicElement("due_date")
IncomingRentAmount =  new TextMagicElement("amount")
IncomingRentCreatedAt =  new TextMagicElement("created_at")
IncomingRentUpdatedAt =  new TextMagicElement("updated_at")


RentPaidID =  new TextMagicElement("id")
RentPaidUnitID =  new TextMagicElement("unit_id")
RentPaidAmount =  new TextMagicElement("amount")
RentPaidCreatedAt =  new TextMagicElement("created_at")
RentPaidUpdatedAt =  new TextMagicElement("updated_at")


UnitID = new  TextMagicElement("id")
UnitAddress =  new TextMagicElement("address")
UnitType =  new TextMagicElement("type")
UnitStatus =  new TextMagicElement("status")
UnitRentAmount =  new TextMagicElement("rent_amount")
UnitCreatedAt =  new TextMagicElement("created_at")
UnitUpdatedAt =  new TextMagicElement("updated_at")
UnitFeedback =  new TextMagicElement("feedback")

UnitTenantsTable =  new TableMagicElement("tenants")
    


    constructor(id:string) {
        super(id)
        this.hydrate(data)
    }

    

}('page-admin')