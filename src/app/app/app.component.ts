import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../../dummy-users';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected title = 'angular-course';
  protected users = DUMMY_USERS;
  selectedUser = signal(this.users[0])

  onSelectUser(user: User){
    this.selectedUser.set(user);
  }
}
