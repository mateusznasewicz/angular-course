import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  imagePath = computed(() => "users/" + this.user().avatar);
  select = output<User>()

  onSelectUser(){
    this.select.emit(this.user());
  }
}
