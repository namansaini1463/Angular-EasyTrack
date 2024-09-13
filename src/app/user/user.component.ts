import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected: boolean | undefined;

  @Output() selectUser = new EventEmitter<string>();

  get userImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }

  // avatar = input.required<string>();
  // name = input.required<string>();
  // selectUser = output<string>();

  // userImagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // onSelectUser() {
  //   this.selectUser.emit(this.id);
  // }
}

// import { Component, computed, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// // const getRandom = () => {
// //   return Math.floor(Math.random() * DUMMY_USERS.length);
// // };

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css',
// })
// // export class UserComponent {
// //   selectedUser = signal(DUMMY_USERS[getRandom()]);
// //   userImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar); // This is used when the concept of signals is used

// //   // get userImagePath() {
// //   //   return 'assets/users/' + this.selectedUser.avatar;
// //   // }

// //   onSelectUser = () => {
// //     this.selectedUser.set(DUMMY_USERS[getRandom()]);
// //   };
// export class UserComponent {}
