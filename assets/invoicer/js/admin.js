import { BaseViewModel, ViewModel, TextMagicElement, Fetch, GetRequest, TableMagicElement } from "/assets/magicui/lib/esm/index.js";
const data = {
    "id": 1,
    "name": "John Doe",
    "type": "john.doe@example.com",
    "status": "123-456-7890",
    "address_xyz": "123 Main St",
    "feedback": "Great customer!",
    "created_at": "2022-01-01 12:00:00",
    "updated_at": "2022-01-02 14:00:00",
    "users": [
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
    ]
};
new class ViewModel extends BaseViewModel {
    constructor(id) {
        super(id);
        this.ID = new TextMagicElement("id", "id");
        this.Address = new TextMagicElement("address", "address_xyz");
        this.Name = new TextMagicElement("name");
        this.Type = new TextMagicElement("type");
        this.Status = new TextMagicElement("status");
        this.CreatedAt = new TextMagicElement("created_at");
        this.UpdatedAt = new TextMagicElement("updated_at");
        this.Feedback = new TextMagicElement("feedback");
        this.UserTableElement = new TableMagicElement("table-units", "users");
        this.handleAction();
    }
    handleAction() {
        // console.log(this.id)
        this.loadData();
    }
    loadData() {
        this.hydrate(data);
    }
}('page-admin');
