import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {authenticationInterceptor} from "./shared/service/authentication.interceptor";
import {UsersService} from "./shared/service/users.service";
import {BookService} from "./content/service/book.service";
import {ChatService} from "./collaboration/service/chat.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
  provideHttpClient(withFetch(), withInterceptors([authenticationInterceptor])),
  ]
};
