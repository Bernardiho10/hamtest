import { BaseViewModel, ViewModel, TextMagicElement, Fetch, GetRequest, TableMagicElement } from "/assets/magicui/lib/esm/index.js";
const data = {
    "id": 1,
    "num_properties": 10,
    "num_tenants": 2,
    "num_units": 30,
    "empty_units": 10,
    "empty_units_value": 20000000,
    "late_rent": 200000,
    "created_at": "2022-01-01 12:00:00",
    "updated_at": "2022-01-02 14:00:00",
    "tenants": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "123-456-7890",
            "address": "123 Main St",
            "created_at": "2022-01-01 12:00:00",
            "updated_at": "2022-01-02 14:00:00"
        },
        {
            "id": 2,
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
    "units": [
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
};
new class ViewModel extends BaseViewModel {
    constructor(id) {
        super(id);
        this.ID = new TextMagicElement("id");
        this.NumProperties = new TextMagicElement("num_properties");
        this.NumTenants = new TextMagicElement("num_tenants");
        this.NumUnits = new TextMagicElement("num_units");
        this.EmptyUnits = new TextMagicElement("empty_units");
        this.EmptyUnitsValue = new TextMagicElement("empty_units_value");
        this.LateRent = new TextMagicElement("late_rent");
        this.CreatedAt = new TextMagicElement("created_at");
        this.UpdatedAt = new TextMagicElement("updated_at");
        this.TenantsTable = new TableMagicElement("tenants")
            .ShowColumns("label:id,name,email,phone,address,created_at:tenant_rent_start, updated_at:tenant_rent_due")
            .AddClass("border-collapse border border-slate-400");
        this.OutstandingRentTable = new TableMagicElement("outsanding_rent");
        this.IncomingRentTable = new TableMagicElement("incoming_rent");
        this.RentPaidTable = new TableMagicElement("rent_paid");
        this.UnitsTable = new TableMagicElement("units");
        this.TenantID = new TextMagicElement("id");
        this.TenantName = new TextMagicElement("name");
        this.TenantEmail = new TextMagicElement("email");
        this.TenantPhone = new TextMagicElement("phone");
        this.TenantAddress = new TextMagicElement("address");
        this.TenantCreatedAt = new TextMagicElement("created_at");
        this.TenantUpdatedAt = new TextMagicElement("updated_at");
        this.OutstandingRentID = new TextMagicElement("id");
        this.OutstandingRentUnitID = new TextMagicElement("unit_id");
        this.OutstandingRentDueDate = new TextMagicElement("due_date");
        this.OutstandingRentAmount = new TextMagicElement("amount");
        this.OutstandingRentCreatedAt = new TextMagicElement("created_at");
        this.OutstandingRentUpdatedAt = new TextMagicElement("updated_at");
        this.IncomingRentID = new TextMagicElement("id");
        this.IncomingRentUnitID = new TextMagicElement("unit_id");
        this.IncomingRentDueDate = new TextMagicElement("due_date");
        this.IncomingRentAmount = new TextMagicElement("amount");
        this.IncomingRentCreatedAt = new TextMagicElement("created_at");
        this.IncomingRentUpdatedAt = new TextMagicElement("updated_at");
        this.RentPaidID = new TextMagicElement("id");
        this.RentPaidUnitID = new TextMagicElement("unit_id");
        this.RentPaidAmount = new TextMagicElement("amount");
        this.RentPaidCreatedAt = new TextMagicElement("created_at");
        this.RentPaidUpdatedAt = new TextMagicElement("updated_at");
        this.UnitID = new TextMagicElement("id");
        this.UnitAddress = new TextMagicElement("address");
        this.UnitType = new TextMagicElement("type");
        this.UnitStatus = new TextMagicElement("status");
        this.UnitRentAmount = new TextMagicElement("rent_amount");
        this.UnitCreatedAt = new TextMagicElement("created_at");
        this.UnitUpdatedAt = new TextMagicElement("updated_at");
        this.UnitFeedback = new TextMagicElement("feedback");
        this.UnitTenantsTable = new TableMagicElement("tenants");
        this.hydrate(data);
    }
}('page-admin');
