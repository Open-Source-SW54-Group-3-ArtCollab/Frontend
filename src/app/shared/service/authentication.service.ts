import {Injectable} from "@angular/core";
import {environment} from "../../../environtments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";
import { StorageService } from "./storage.service";

/**
 * Service for authentication.
 * @summary
 * This service provides methods for signing up, signing in, and signing out.
 * It also provides observables for the signed in status, the signed-in user ID, and the signed-in username.
 */
@Injectable({providedIn: 'root'})
export class AuthenticationService {
  basePath: string = `${environment.baseUrl}`;
  httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})};

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient, private storageService: StorageService) {
  }

  initializeToken() {
    const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJndWVzdCIsImlhdCI6MTcxOTUwNTczNiwiZXhwIjoxNzIwMTEwNTM2fQ._wGefY1AwUHdFmgvez-EzYetuq5DncEYcx7_2wGQM60cmH-XiHXRmtTaTbe5xh0I"
    this.storageService.setItem('token', token);
  }

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  /**
   * Sign up a new user.
   * @param signUpRequest The sign up request.
   * @returns The sign up response.
   */
  signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.username} with id: ${response.id}`);
          this.router.navigate(['/sign-in']).then();
        },
        error: (error) => {
          console.error(`Error while signing up: ${error}`);
          this.router.navigate(['/sign-up']).then();
        }
      });
  }

  /**
   * Sign in a user.
   * @param signInRequest The sign in request.
   * @returns The sign in response.
   */
  signIn(signInRequest: SignInRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedInUsername.next(response.username);
          this.storageService.setItem('token', response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.router.navigate(['/']).then();
        },
        error: (error) => {
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          console.error(`Error while signing in: ${error}`);
          this.router.navigate(['/home']).then();
        }
      });
  }

  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    this.storageService.removeItem('token');
    this.router.navigate(['/home']).then();
  }
}
