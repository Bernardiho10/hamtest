import { ViewModel } from "@boudev/magicui";
import { BaseViewModel } from "@boudev/magicui";
import { TextMagicElement } from "../hamout/assets/magicui/lib/cjs/index.js";
import {TableMagicElement} from "@boudev/magicui/lib/esm/elements/table.js";
import {Fetch, GetRequest} from "@boudev/magicui/lib/esm/fetch/index.js";

new class ViewModel extends BaseViewModel {
    ID = new TextMagicElement("id")
    Address = new TextMagicElement("address")
    Name = new TextMagicElement("name")
    Type = new TextMagicElement("type")
    Status = new TextMagicElement("status")
    CreatedAt = new TextMagicElement("created_at")
    UpdatedAt = new TextMagicElement("updated_at")
    Feedback = new TextMagicElement("feedback", "")



    constructor(id:string) {
        super(id)
        this.handleAction()
    }

    handleAction() {

    console.log('this')
    this.loadData()
    }

    loadData() {
        Fetch(`https://parallelum.com.br/fipe/api/v1`, GetRequest)
        .then(data => {
            console.log(data);
            //this.hydrate(data)
            //document.querySelector(".loading")?.classList.remove("loading")
         }).catch(e => {
            this.Feedback.hydrate(this, "Error saving unit - "+e.message)
        });;
    }

}('page-admin')