import { ButtonMagicElement, InputMagicElement, BaseViewModel, ViewModel, MagicElement,TextMagicElement } from "@boudev/magicui/lib/esm/index.js";
console.log('Form page')
const user = {
    "email": "bernadarsikuoko@gmail.com",
    "password": "password123" 
}

new class FormModel extends BaseViewModel {
    Id = new MagicElement("id")
    Username = new InputMagicElement("email")
    Password = new InputMagicElement("password")
    Button = new ButtonMagicElement("submit-btn").OnClick(this.save)
    FeedBack = new TextMagicElement("feedback", "")
    FormTitle = new TextMagicElement("form-title", "")
        constructor(id: string){
            super(id)
            this.Username.hydrate(this, user.email)
            this.Password.hydrate(this, user.password)
            this.FormTitle.hydrate(this, "Sign in to your account for")
            this.hydrate(user)
            console.log(`Form Binding: ${id}`)
        }

        save(vm: ViewModel): void{
            console.log("Saving...", vm.payload)
            if(this.Username.value === user.email && this.Password.value === user.password){
                this.FeedBack.hydrate(this, "Login Successful")
            } else {
                this.FeedBack.hydrate(this, "Invalid Username or Password")
            }
        }

}('form-page')