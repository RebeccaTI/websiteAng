import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  serviceDetails = [
    {
      id:1,
      serviceName:"Desenvolvimento com Angular 13",
      serviceDetails:"Desenvolvimento de sistemas, com o Angular 13 para sua empresa",
      servicePrice: 4000,
      serviceImg: "https://appswise.com/wp-content/uploads/2020/06/kisspng-angularjs-typescript-node-js-javascript-letter-a-5abd8d1116f291.545252181522371857094.png"
    },
    {
      id:2,
      serviceName:"Teste ponta a ponta Camunda",
      serviceDetails:"Testes de ponta a ponta com camunda e cockpit com visão geral do seu projeto. Automatização dos processos e start de functions com C#",
      servicePrice: 2000,
      serviceImg: "https://camunda.com/wp-content/uploads/2013/07/cockpit-layout.png"
    }
  ]
}
