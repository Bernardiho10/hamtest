import {BaseViewModel, ViewModel} from "@boudev/magicui/lib/esm/viewmodel.js"
import {config} from "../config.js";
import {MoneyFormatter} from "@boudev/magicui/lib/esm/formatters/money.js";
import {ButtonMagicElement, MagicElement, TextMagicElement} from "@boudev/magicui/lib/esm/elements/index.js";
import {TableMagicElement} from "@boudev/magicui/lib/esm/elements/table.js";
import {Fetch, GetRequest} from "@boudev/magicui/lib/esm/fetch/index.js";
import {propertyViewModel} from "./property-view-model.js";

new class viewModel extends adminViewModel {
    ID = new TextMagicElement("id", "id")
    Address = new TextMagicElement("address")
    Name = new TextMagicElement("name")
    Type = new TextMagicElement("type")
    Status = new TextMagicElement("status")
    RentalValue = new TextMagicElement("rental_value")
    EstimatedValue = new TextMagicElement("estimated_value")
    CreatedAt = new TextMagicElement("created_at")
    UpdatedAt = new TextMagicElement("updated_at")
    UnitsTable = new TableMagicElement("table-units", "units")
        .ShowColumns("label:unit,features,bedrooms,toilets,rent_amount,status")
        .AddClass("table table-hover table-bordered table-striped mt-3")
        .SetTransformer(this.unitsTableTransformer)

    constructor(id:string) {
        super(id)
        this.handleAction()
    }

    handleAction() {
        switch (this.PARAMS.get("action")) {
            case "delete-unit":
                Fetch(`${config.baseUrl}/unit/${this.PARAMS.get("unit_id")}?access_token=test`, {method: "DELETE"})
                    .then(data => {
                        window.location.href = `/properties/property.html?id=${this.PARAMS.get("id")}`
                    });
                break;
            default:
                this.loadData()
        }
    }

    loadData() {
        Fetch(`${config.baseUrl}/property/${this.PARAMS.get("id")}?embed=units&access_token=test`, GetRequest)
        .then(data => {
            data["address"] = `${data["address"]}, ${data["address_city"]}, ${data["address_state"]}`
            let rentalValue = 0
            data["units"].map((unit: any) => {
                rentalValue += unit.rent_amount
            })
            data["rental_value"] = rentalValue
            this.hydrate(data)
            document.querySelector(".loading")?.classList.remove("loading")
         });
    }

    unitsTableTransformer(data: Array<Record<string, any>>) : Array<Record<string, any>> {
        data.map((item) => {
            item["rent_amount"] = new MoneyFormatter().format(item["rent_amount"], "NGN")
        })
        return data
    }
}("page-property")

