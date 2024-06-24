import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private subscriptionSource = new BehaviorSubject<{type_subscription: string, amount: string, benefits:string[]}[]>([]);
  currentSubscriptions = this.subscriptionSource.asObservable();

  private currentSubscriptionSource = new BehaviorSubject<{type_subscription: string, amount: string, benefits:string[]} | null>(null);
  currentSubscription = this.currentSubscriptionSource.asObservable();

  transactionId: string | null = null;

  constructor() { }

  changeSubscriptions(subscriptions: {type_subscription: string, amount: string, benefits:string[]}[]) {
    this.subscriptionSource.next(subscriptions);
  }

  changeCurrentSubscription(subscription: {type_subscription: string, amount: string, benefits:string[]}) {
    this.currentSubscriptionSource.next(subscription);
  }
}
