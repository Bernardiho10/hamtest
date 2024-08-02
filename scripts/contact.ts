import { ViewModel } from "@boudev/magicui";
import { BaseViewModel } from "@boudev/magicui";
import { TextMagicElement } from "../hamout/assets/magicui/lib/cjs/index.js";


new class viewModel extends BaseViewModel {
    ID = new TextMagicElement("id", "id")

    constructor(id:string) {
        super(id)
        this.handleAction()
    }
}('admin')