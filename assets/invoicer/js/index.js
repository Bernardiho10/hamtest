import { ButtonMagicElement, InputMagicElement, BaseViewModel, ViewModel, MagicElement, TextMagicElement } from "/assets/magicui/lib/esm/index.js";
console.log('Form page');
const user = {
    "email": "bernadarsikuoko@gmail.com",
    "password": "password123"
};
new class FormModel extends BaseViewModel {
    constructor(id) {
        super(id);
        this.Id = new MagicElement("id");
        this.Username = new InputMagicElement("email");
        this.Password = new InputMagicElement("password");
        this.Button = new ButtonMagicElement("submit-btn").OnClick(this.save);
        this.FeedBack = new TextMagicElement("feedback", "");
        this.FormTitle = new TextMagicElement("form-title", "");
        this.Username.hydrate(this, user.email);
        this.Password.hydrate(this, user.password);
        this.FormTitle.hydrate(this, "Sign in to your account for");
        this.hydrate(user);
        console.log(`Form Binding: ${id}`);
    }
    save(vm) {
        console.log("Saving...", vm.payload);
        if (this.Username.value === user.email && this.Password.value === user.password) {
            this.FeedBack.hydrate(this, "Login Successful");
        }
        else {
            this.FeedBack.hydrate(this, "Invalid Username or Password");
        }
    }
}('form-page');
